import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ASPECTS = [1008 / 1286, 1080 / 1442, 1000 / 1333, 772 / 516];
const FOCAL_Y = [0.2, 0.3, 0.45, 0.55];

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uP0, uP1, uP2, uP3;
  uniform sampler2D uD0, uD1, uD2, uD3;
  uniform float uScroll, uTime;
  uniform vec4 uF0, uF1, uF2, uF3;

  varying vec2 vUv;

  float hash(vec2 p) {
    vec3 q = fract(vec3(p.xyx) * 0.1031);
    q += dot(q, q.yzx + 33.33);
    return fract((q.x + q.y) * q.z);
  }

  vec2 coverUV(vec2 uv, vec4 f) {
    return (uv - 0.5) * f.xy + 0.5 + f.zw;
  }

  vec3 grade(vec3 c) {
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, vec3(l), 0.12);
    return c + vec3(0.012, 0.006, -0.004);
  }

  vec3 cityColor(int ci, vec2 uv, vec4 fit, float ep) {
    vec2 cuv = coverUV(uv, fit);
    vec3 col;

    if (ci == 0) {
      float d = texture2D(uD0, cuv).r;
      cuv.y -= d * ep * 0.02;
      col = texture2D(uP0, cuv).rgb;
    } else if (ci == 1) {
      cuv.y -= ep * 0.10;
      cuv.y = max(cuv.y, 0.05);
      col = texture2D(uP1, cuv).rgb;
      vec2 muv = cuv + vec2(sin(uTime * 0.02) * 0.008, cos(uTime * 0.015) * 0.008);
      float md = 1.0 - texture2D(uD1, muv).r;
      col = mix(col, vec3(0.95, 0.93, 0.90), md * 0.22);
    } else if (ci == 2) {
      float d = texture2D(uD2, cuv).r;
      cuv.y -= d * ep * 0.02;
      col = texture2D(uP2, cuv).rgb;
    } else {
      float d = texture2D(uD3, cuv).r;
      cuv.y -= d * ep * 0.02;
      col = texture2D(uP3, cuv).rgb;
      float bl = col.b - max(col.r, col.g);
      col = mix(col, vec3(0.11, 0.17, 0.37), max(bl, 0.0) * 0.35);
    }

    return grade(col);
  }

  void main() {
    float s = clamp(uScroll, 0.0, 0.9999) * 4.0;
    int ci = int(floor(s));
    float lp = s - float(ci);

    float tz = (ci < 3) ? 0.65 : 1.0;
    float ep = min(lp / tz, 1.0);
    float tp = (lp > tz && ci < 3) ? (lp - tz) / (1.0 - tz) : 0.0;

    vec4 fitA;
    if (ci == 0) fitA = uF0;
    else if (ci == 1) fitA = uF1;
    else if (ci == 2) fitA = uF2;
    else fitA = uF3;

    vec3 colA = cityColor(ci, vUv, fitA, ep);
    vec3 result = colA;

    if (tp > 0.001 && ci < 3) {
      int ni = ci + 1;
      vec4 fitB;
      if (ni == 1) fitB = uF1;
      else if (ni == 2) fitB = uF2;
      else fitB = uF3;

      vec3 colB = cityColor(ni, vUv, fitB, 0.0);

      vec3 mc = vec3(0.98, 0.96, 0.93);
      float fog = sin(tp * 3.14159) * 0.92;
      vec3 blend = mix(colA, colB, smoothstep(0.3, 0.7, tp));
      result = mix(blend, mc, fog);
    }

    float g = (hash(gl_FragCoord.xy + fract(uTime * 7.3)) - 0.5) * 0.05;
    result += g;

    gl_FragColor = vec4(result, 1.0);
  }
`;

function Scene({ scroll }: { scroll: number }) {
  const { viewport } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const paths = [
      '/scenes/trichy.webp', '/scenes/trichy-depth.png',
      '/scenes/salem.webp', '/scenes/salem-depth.png',
      '/scenes/milano.jpg', '/scenes/milano-depth.png',
      '/scenes/chennai.jpg', '/scenes/chennai-depth.png',
    ];
    return paths.map((p) => {
      const t = loader.load(p);
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      return t;
    });
  }, []);

  useEffect(
    () => () => textures.forEach((t) => t.dispose()),
    [textures],
  );

  const uniforms = useMemo(
    () => ({
      uP0: { value: textures[0] }, uD0: { value: textures[1] },
      uP1: { value: textures[2] }, uD1: { value: textures[3] },
      uP2: { value: textures[4] }, uD2: { value: textures[5] },
      uP3: { value: textures[6] }, uD3: { value: textures[7] },
      uScroll: { value: 0 },
      uTime: { value: 0 },
      uF0: { value: new THREE.Vector4(1, 1, 0, 0) },
      uF1: { value: new THREE.Vector4(1, 1, 0, 0) },
      uF2: { value: new THREE.Vector4(1, 1, 0, 0) },
      uF3: { value: new THREE.Vector4(1, 1, 0, 0) },
    }),
    [textures],
  );

  useFrame(({ clock }) => {
    const m = matRef.current;
    if (!m) return;
    m.uniforms.uScroll.value = scroll;
    m.uniforms.uTime.value = clock.elapsedTime;

    const vp = viewport.width / viewport.height;
    for (let i = 0; i < 4; i++) {
      const imgA = ASPECTS[i];
      let sx: number, sy: number;
      if (vp > imgA) { sx = 1; sy = vp / imgA; }
      else { sx = imgA / vp; sy = 1; }
      const fy = -(FOCAL_Y[i] - 0.5) * (sy - 1);
      const key = `uF${i}` as 'uF0' | 'uF1' | 'uF2' | 'uF3';
      m.uniforms[key].value.set(sx, sy, 0, fy);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function JourneyCanvas({
  scroll,
  onContextLost,
}: {
  scroll: number;
  onContextLost: () => void;
}) {
  return (
    <Canvas
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: 'low-power',
        failIfMajorPerformanceCaveat: true,
      }}
      camera={{ position: [0, 0, 1] }}
      style={{ position: 'absolute', inset: 0 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', onContextLost);
      }}
    >
      <Scene scroll={scroll} />
    </Canvas>
  );
}
