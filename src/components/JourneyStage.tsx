import {
  Component,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { heritage } from '../data/content';

const JourneyCanvas = lazy(() => import('../three/JourneyCanvas'));

const places = heritage.places;
const CITY_NAMES = ['Trichy', 'Salem', 'Milano', 'Chennai'] as const;
const PHOTOS = [
  '/scenes/trichy.webp',
  '/scenes/salem.webp',
  '/scenes/milano.jpg',
  '/scenes/chennai.jpg',
];
const FOCAL_Y = [0.2, 0.3, 0.45, 0.55];
const SCROLL_VH = 7;

class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode; onFailed?: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidUpdate(_: unknown, prev: { failed: boolean }) {
    if (this.state.failed && !prev.failed) this.props.onFailed?.();
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

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function ChapterOverlay({ scroll }: { scroll: number }) {
  const s = scroll * 4;
  const ci = Math.min(Math.floor(s), 3);
  const lp = s - ci;

  return (
    <>
      {places.map((p, i) => {
        let opacity = 0;
        if (i === ci) {
          if (i === 0 && scroll < 0.001) opacity = 1;
          else if (lp < 0.08) opacity = Math.max(lp / 0.08, i === 0 ? 1 : 0);
          else if (lp < 0.60) opacity = 1;
          else if (i < 3) opacity = 1 - (lp - 0.60) / 0.15;
          else opacity = 1;
        }
        opacity = Math.max(0, Math.min(1, opacity));
        if (opacity < 0.01) return null;

        return (
          <div
            key={p.no}
            className="absolute inset-0 flex flex-col items-center justify-start pt-24 md:pt-28 text-center pointer-events-none"
            style={{ opacity, transition: 'opacity 80ms linear' }}
          >
            <span className="eyebrow text-white/90 drop-shadow-sm">
              {p.no} · {p.name}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/60 mt-1 drop-shadow-sm">
              {p.country}
            </span>
            <p className="script text-2xl md:text-3xl mt-4 text-white/95 drop-shadow-md">
              {p.context}
            </p>
            <p className="display-italic text-white text-lg md:text-xl max-w-lg mt-2 leading-snug text-balance drop-shadow-md">
              {p.line}
            </p>
          </div>
        );
      })}
    </>
  );
}

function ProgressDots({
  scroll,
  stageRef,
}: {
  scroll: number;
  stageRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ci = Math.min(Math.floor(scroll * 4), 3);

  const scrollToCity = useCallback(
    (idx: number) => {
      const el = stageRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const target = el.offsetTop + (idx / 4) * range;
      window.scrollTo({ top: target, behavior: 'smooth' });
    },
    [stageRef],
  );

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      aria-label="Journey progress"
    >
      {CITY_NAMES.map((city, i) => (
        <button
          key={city}
          onClick={() => scrollToCity(i)}
          className="flex items-center gap-2 group"
          aria-current={i === ci ? 'step' : undefined}
        >
          <span
            className={`text-[0.6rem] uppercase tracking-[0.2em] transition-opacity duration-500 text-white/90 drop-shadow-sm ${
              i === ci ? 'opacity-80' : 'opacity-0 group-hover:opacity-60'
            }`}
          >
            {city}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === ci
                ? 'h-2.5 w-2.5 bg-white shadow-sm'
                : 'h-1.5 w-1.5 bg-white/40 group-hover:bg-white/70'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}

function StaticFallback() {
  return (
    <div>
      {places.map((p, i) => (
        <div key={p.no} className="relative min-h-[75vh] overflow-hidden">
          <img
            src={PHOTOS[i]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: `center ${FOCAL_Y[i] * 100}%`,
              filter: 'saturate(0.88) sepia(0.06)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.25) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] text-center px-6">
            <span className="eyebrow text-white/90">{p.no} · {p.name}</span>
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/60 mt-1">
              {p.country}
            </span>
            <p className="script text-2xl md:text-3xl mt-4 text-white/95">{p.context}</p>
            <p className="display-italic text-white text-lg md:text-xl max-w-lg mt-2 leading-snug text-balance">
              {p.line}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function JourneyStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const [webgl] = useState(() => supportsWebGL() && !prefersReducedMotion());
  const [lost, setLost] = useState(false);
  const useStatic = !webgl || lost;

  useEffect(() => {
    if (useStatic) return;
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const t = Math.max(0, Math.min(1, -rect.top / range));
      setScroll(t);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [useStatic]);

  if (useStatic) {
    return <StaticFallback />;
  }

  return (
    <div ref={ref} className="bg-black" style={{ height: `${SCROLL_VH * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <SceneBoundary fallback={<StaticFallback />} onFailed={() => setLost(true)}>
            <Suspense fallback={null}>
              <JourneyCanvas scroll={scroll} onContextLost={() => setLost(true)} />
            </Suspense>
          </SceneBoundary>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        <ChapterOverlay scroll={scroll} />
        <ProgressDots scroll={scroll} stageRef={ref} />
      </div>
    </div>
  );
}
