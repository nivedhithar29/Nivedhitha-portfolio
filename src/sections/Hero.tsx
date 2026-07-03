import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { WaveGlyph } from '../components/Mark';
import { hero, profile } from '../data/content';

const WaveScene = lazy(() => import('../three/WaveScene'));

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

      {/* live 3D ocean, rises when the cursor moves */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <WaveScene />
        </Suspense>
      </div>

      {/* legibility veil over the horizon band */}
      <div
        className="absolute inset-x-0 top-0 h-[72%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,246,236,0.82) 0%, rgba(255,238,205,0.5) 45%, rgba(250,203,115,0.12) 80%, rgba(250,203,115,0) 100%)',
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
          className="mt-9 md:mt-12 text-ink/85 text-base sm:text-lg tracking-[0.02em]"
        >
          {hero.intro}
        </motion.p>

        <motion.p
          variants={item}
          className="display-italic text-navy text-xl sm:text-2xl md:text-[1.75rem] max-w-2xl mt-3 text-balance leading-snug"
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
