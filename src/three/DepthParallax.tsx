import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform sampler2D uPhoto;
  uniform sampler2D uDepth;
  uniform float uParallax;
  uniform vec2 uCover;
  uniform vec2 uFocal;
  uniform float uTime;

  varying vec2 vUv;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec2 uv = (vUv - 0.5) * uCover + 0.5 + uFocal;

    float d = texture2D(uDepth, uv).r;

    // near (white=1) shifts more; keep displacement small
    float shift = d * uParallax * 0.02;
    vec2 displaced = uv + vec2(0.0, -shift);

    vec4 col = texture2D(uPhoto, displaced);

    // desaturate 12%
    float lum = dot(col.rgb, vec3(0.299, 0.587, 0.114));
    col.rgb = mix(col.rgb, vec3(lum), 0.12);

    // warm shift
    col.rgb += vec3(0.012, 0.006, -0.004);

    // film grain
    float g = (hash(gl_FragCoord.xy + fract(uTime * 7.3)) - 0.5) * 0.05;
    col.rgb += g;

    gl_FragColor = col;
  }
`;

function Scene({
  photo,
  depth,
  focalY,
  scroll,
}: {
  photo: string;
  depth: string;
  focalY: number;
  scroll: number;
}) {
  const { viewport } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const [photoTex, depthTex] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const p = loader.load(photo);
    const d = loader.load(depth);
    for (const t of [p, d]) {
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
    }
    return [p, d];
  }, [photo, depth]);

  useEffect(() => () => { photoTex.dispose(); depthTex.dispose(); }, [photoTex, depthTex]);

  const uniforms = useMemo(
    () => ({
      uPhoto: { value: photoTex },
      uDepth: { value: depthTex },
      uParallax: { value: 0 },
      uCover: { value: new THREE.Vector2(1, 1) },
      uFocal: { value: new THREE.Vector2(0, 0) },
      uTime: { value: 0 },
    }),
    [photoTex, depthTex],
  );

  useFrame(({ clock }) => {
    const mat = matRef.current;
    if (!mat) return;
    mat.uniforms.uParallax.value = scroll;
    mat.uniforms.uTime.value = clock.elapsedTime;

    const imgAspect = 1008 / 1286;
    const vpAspect = viewport.width / viewport.height;

    let sx: number, sy: number;
    if (vpAspect > imgAspect) {
      sx = 1;
      sy = vpAspect / imgAspect;
    } else {
      sx = imgAspect / vpAspect;
      sy = 1;
    }
    mat.uniforms.uCover.value.set(sx, sy);

    const fy = -(focalY - 0.5) * (sy - 1);
    mat.uniforms.uFocal.value.set(0, fy);
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

export default function DepthCanvas({
  photo,
  depth,
  focalY,
  scroll,
  onContextLost,
}: {
  photo: string;
  depth: string;
  focalY: number;
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
      <Scene photo={photo} depth={depth} focalY={focalY} scroll={scroll} />
    </Canvas>
  );
}
