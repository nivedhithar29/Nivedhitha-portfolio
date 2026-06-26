import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { WaveGlyph } from '../components/Mark';
import { profile } from '../data/content';

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
      {/* sky gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #FFF6EC 0%, #FFE6C2 22%, #FACB73 44%, #F89128 60%, #E07A1E 74%)',
        }}
      />

      {/* live 3D ocean */}
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
        className="relative z-10 min-h-[100svh] flex flex-col items-center justify-start text-center section pt-[16vh] md:pt-[15vh]"
      >
        <motion.div variants={item}>
          <WaveGlyph className="w-16 md:w-20 mx-auto text-teal/90" strokeWidth={2} />
        </motion.div>

        <motion.h1
          variants={item}
          className="display t-hero text-navy mt-5 md:mt-7"
          style={{ fontWeight: 500 }}
        >
          NIRANULA
        </motion.h1>

        <motion.p variants={item} className="script text-4xl sm:text-5xl md:text-6xl -mt-2 md:-mt-4">
          The Narrative House
        </motion.p>

        <motion.div variants={item} className="mt-9 md:mt-11 flex items-center gap-4 text-ink/70">
          <span className="hidden sm:block h-px w-10 bg-ink/25" />
          <span className="eyebrow text-ink/80">{profile.name}</span>
          <span className="hidden sm:block h-px w-10 bg-ink/25" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-[0.82rem] sm:text-sm tracking-[0.04em] text-ink/65"
        >
          {profile.disciplines.join('  ·  ')}
        </motion.p>
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
          <span className="absolute inset-0 block bg-terracotta animate-[scrolldot_2s_ease-in-out_infinite]" />
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
