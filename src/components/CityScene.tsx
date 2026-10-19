import { Component, useEffect, useRef, useState, lazy, Suspense, type ReactNode } from 'react';

const DepthCanvas = lazy(() => import('../three/DepthParallax'));

class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function supportsWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') ?? c.getContext('webgl'));
  } catch {
    return false;
  }
}

interface CitySceneProps {
  photo: string;
  depth: string;
  focalY?: number;
  height?: string;
  children?: ReactNode;
  preload?: string[];
}

export default function CityScene({
  photo,
  depth,
  focalY = 0.2,
  height = 'min-h-[60vh] md:min-h-[75vh]',
  children,
  preload,
}: CitySceneProps) {
  const [webgl] = useState(supportsWebGL);
  const [lost, setLost] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight;
      const t = 1 - (rect.top + rect.height) / (h + rect.height);
      setScroll(Math.max(0, Math.min(1, t)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className={`relative ${height} w-full overflow-hidden`}>
      <div className="absolute inset-0">
        {webgl && !lost ? (
          <SceneBoundary
            fallback={
              <StaticFallback photo={photo} focalY={focalY} />
            }
          >
            <Suspense fallback={<StaticFallback photo={photo} focalY={focalY} />}>
              <DepthCanvas
                photo={photo}
                depth={depth}
                focalY={focalY}
                scroll={scroll}
                onContextLost={() => setLost(true)}
              />
            </Suspense>
          </SceneBoundary>
        ) : (
          <StaticFallback photo={photo} focalY={focalY} />
        )}
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,246,236,0.7) 0%, rgba(255,246,236,0.25) 35%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.15) 100%)',
        }}
      />
      <div className="relative z-10 pointer-events-auto">{children}</div>
      {preload?.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
    </div>
  );
}

function StaticFallback({ photo, focalY }: { photo: string; focalY: number }) {
  return (
    <img
      src={photo}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{
        objectFit: 'cover',
        objectPosition: `center ${focalY * 100}%`,
        filter: 'saturate(0.88) sepia(0.06)',
      }}
    />
  );
}
