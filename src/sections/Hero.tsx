import { lazy, Suspense, Component, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { WaveGlyph } from '../components/Mark';
import WaveBand from '../components/WaveBand';
import { hero, profile } from '../data/content';

const WaveScene = lazy(() => import('../three/WaveScene'));

/* Some browsers refuse to create a WebGL context (GPU blocklist,
   hardware acceleration off, repeated context loss). Without a
   boundary, the Canvas throwing during render would unmount the
   whole app, so the ocean degrades to the static SVG wave instead. */
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
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') ??
        canvas.getContext('webgl') ??
        canvas.getContext('experimental-webgl'),
    );
  } catch {
    return false;
  }
}

/** Still-water stand-in: the layered SVG wave band on the horizon,
 *  in the sunrise palette so it bridges into the blush section below.
 *  Gently animated so non-WebGL visitors still get a living tide. */
function StaticOcean() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none" aria-hidden="true">
      <WaveBand className="absolute inset-0 w-full h-full animate-[tide_9s_ease-in-out_infinite]" variant="sunrise" />
      <style>{`
        @keyframes tide {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-2%) scaleY(1.03); }
        }
      `}</style>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

export default function Hero() {
  const [webgl] = useState(supportsWebGL);
  const [lost, setLost] = useState(false);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* sunrise gradient base, stays exactly as is (brief §14) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #FFF6EC 0%, #FFE6C2 22%, #FACB73 44%, #F89128 60%, #E07A1E 74%)',
        }}
      />

      {/* live 3D ocean, rises when the cursor moves;
          falls back to the still SVG wave when WebGL is unavailable */}
      <div className="absolute inset-0">
        {webgl && !lost ? (
          <SceneBoundary fallback={<StaticOcean />}>
            <Suspense fallback={null}>
              <WaveScene onContextLost={() => setLost(true)} />
            </Suspense>
          </SceneBoundary>
        ) : (
          <StaticOcean />
        )}
      </div>

      {/* legibility veil over the horizon band */}
      <div
        className="absolute inset-x-0 top-0 h-[72%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,246,236,0.82) 0%, rgba(255,238,205,0.5) 45%, rgba(250,203,115,0.12) 80%, rgba(250,203,115,0) 100%)',
        }}
      />

      {/* palette bridge: the warm sunrise resolves into the exact blush
          (#FFEFF0) the About section opens with, so the scroll feels like
          a tide coming in, not a colour collision (brief · hero §2) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,239,240,0) 0%, rgba(255,245,230,0.55) 52%, #FFF5E6 80%, #FFEFF0 100%)',
        }}
      />

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 min-h-[100svh] flex flex-col items-center justify-start text-center section pt-[14vh] md:pt-[13vh]"
      >
        {/* the wave crown */}
        <motion.div variants={item}>
          <WaveGlyph className="w-14 md:w-20 mx-auto text-navy/80" strokeWidth={2} />
        </motion.div>

        {/* wordmark: Fraunces thin, wide letter-spacing, full contrast */}
        <motion.h1
          variants={item}
          className="wordmark t-hero text-navy mt-4 md:mt-6 pl-[0.22em]"
        >
          NIRANULA
        </motion.h1>

        {/* deep navy script, never again on a same-hue ground */}
        <motion.p variants={item} className="script text-4xl sm:text-5xl md:text-6xl mt-1 md:mt-0">
          The Narrative House
        </motion.p>

        <motion.p
          variants={item}
          className="display-italic text-navy text-xl sm:text-2xl md:text-[1.75rem] max-w-2xl mt-9 md:mt-12 text-balance leading-snug"
        >
          {hero.line}
        </motion.p>

        <motion.div variants={item} className="mt-8 md:mt-10 flex items-center gap-4 text-ink/70">
          <span className="hidden sm:block h-px w-10 bg-ink/25" />
          <span className="eyebrow text-ink/80">{profile.disciplines.join('  ·  ')}</span>
          <span className="hidden sm:block h-px w-10 bg-ink/25" />
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink/55 hover:text-ink transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-9 w-px overflow-hidden bg-ink/20">
          <span className="absolute inset-0 block bg-navy animate-[scrolldot_2s_ease-in-out_infinite]" />
        </span>
      </motion.a>

      <style>{`
        @keyframes scrolldot {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
