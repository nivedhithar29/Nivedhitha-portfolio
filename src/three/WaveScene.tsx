import { useEffect, useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ------------------------------------------------------------------
   The Lone Wave, a calm, flowing ukiyo-e ocean rendered in GLSL.
   Coral horizon, teal water, soft foam crests. The signature motif.
------------------------------------------------------------------ */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vElevation;
  varying vec2 vUv;

  float waveField(vec2 p, float t) {
    float e = 0.0;
    e += sin(p.x * 1.15 + t * 0.55) * 0.36;
    e += sin(p.y * 0.80 - t * 0.42) * 0.30;
    e += sin((p.x + p.y) * 0.92 + t * 0.50) * 0.18;
    e += sin((p.x * 1.70 - p.y * 1.10) - t * 0.85) * 0.11;
    e += sin((p.x * 2.60 + p.y * 1.90) + t * 1.10) * 0.05;
    return e;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    float t = uTime;
    vec2 coord = pos.xy * 0.62 + uMouse * 0.5;
    float e = waveField(coord, t);

    // calmer toward the horizon (far edge), fuller in the foreground
    float depth = smoothstep(0.0, 1.0, uv.y);
    e *= mix(1.15, 0.28, depth);

    pos.z += e;
    vElevation = e;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uSky;
  uniform vec3 uFoam;
  uniform vec3 uHorizon;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    float h = smoothstep(-0.55, 0.6, vElevation);

    // water body: deep teal troughs -> aqua mids
    vec3 col = mix(uDeep, uMid, smoothstep(0.0, 0.6, h));

    // foam catches the crest tips
    float foam = smoothstep(0.80, 1.0, h);
    col = mix(col, uFoam, foam * 0.85);

    // a thin sparkle band just under the crest
    float glint = smoothstep(0.62, 0.74, h) - smoothstep(0.74, 0.86, h);
    col += glint * 0.10;

    // fade to the coral sky toward the horizon (top of plane)
    float toHorizon = smoothstep(0.42, 0.98, vUv.y);
    vec3 sky = mix(uHorizon, uSky, smoothstep(0.5, 1.0, vUv.y));
    col = mix(col, sky, toHorizon * 0.92);

    // gentle vignette on the foreground edges
    float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
    col = mix(col * 0.96, col, edge);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function hex(c: string) {
  return new THREE.Color(c);
}

function Ocean() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uDeep: { value: hex('#06346F') },
      uMid: { value: hex('#577A9A') },
      uSky: { value: hex('#FFF1DA') },
      uHorizon: { value: hex('#F89128') },
      uFoam: { value: hex('#FFE9CF') },
    }),
    [],
  );

  const reduced = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  // pointer parallax
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2,
      );
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((_, delta) => {
    const m = matRef.current;
    if (!m) return;
    m.uniforms.uTime.value += reduced ? delta * 0.12 : delta * 0.6;
    mouse.current.lerp(target.current, 0.04);
    (m.uniforms.uMouse.value as THREE.Vector2).copy(mouse.current);
  });

  // denser geometry on wider viewports
  const segX = size.width > 900 ? 220 : 130;
  const segY = size.width > 900 ? 150 : 90;

  return (
    <mesh rotation={[-Math.PI / 2.04, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[26, 18, segX, segY]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2(0, 0));
  const cur = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        e.clientX / window.innerWidth - 0.5,
        e.clientY / window.innerHeight - 0.5,
      );
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(() => {
    cur.current.lerp(target.current, 0.03);
    camera.position.x = cur.current.x * 0.5;
    camera.position.y = 0.95 - cur.current.y * 0.18;
    camera.lookAt(0, 1.7 + cur.current.y * 0.2, -5);
  });
  return null;
}

export default function WaveScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.95, 6.0], fov: 44, near: 0.1, far: 60 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <Ocean />
        <Rig />
      </Suspense>
    </Canvas>
  );
}
