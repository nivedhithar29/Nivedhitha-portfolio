import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import Tilt from '../components/Tilt';
import { WaveGlyph } from '../components/Mark';
import { logoMeanings, wordmark } from '../data/content';

// Family initials on the deep-navy card, each tone bright enough
// to pass the colour-overlap rule. NI · RA · NU · LA
const toneClass: Record<string, string> = {
  blush: 'text-[#FFD9DB]',
  sky: 'text-[#AAC4DA]',
  gold: 'text-[#E3C89B]',
  coral: 'text-[#F5A34E]',
};

export default function BehindLogo() {
  return (
    <section id="logo" className="section relative py-24 md:py-36 bg-navy text-shell overflow-hidden">
      {/* faint wave wash */}
      <WaveGlyph
        className="absolute -right-16 top-1/4 w-[60%] text-gold/[0.08] pointer-events-none"
        strokeWidth={1}
      />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#2A3D7A]/40 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-gold">03 · Behind the mark</span>
          <span className="h-px flex-1 bg-shell/20" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* the lone wave */}
          <div>
            <Reveal>
              <p className="script text-gold text-3xl md:text-4xl mb-4">the lone wave</p>
              <h2 className="display t-h2 text-shell text-balance">
                A single, fluid line.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <WaveGlyph className="w-48 md:w-64 my-10 text-gold" strokeWidth={2.2} />
            </Reveal>
            <Reveal delay={2}>
              <p className="text-shell/75 leading-relaxed max-w-md text-pretty">
                One unbroken stroke, symbolising intuition, movement, and a quiet
                &ldquo;lone-wolf&rdquo; creative energy. It bends without breaking; it knows when
                to rise, and when to rest.
              </p>
            </Reveal>
          </div>

          {/* wordmark, wave crowned, Fraunces thin */}
          <Reveal delay={1}>
            <Tilt max={5}>
              <div className="rounded-3xl p-8 md:p-11 bg-white/[0.05] border border-white/15 backdrop-blur-sm shadow-[0_24px_60px_-38px_rgba(0,0,0,0.6)]">
                <p className="eyebrow text-gold mb-6">{wordmark.title}</p>
                <WaveGlyph className="w-14 text-gold mb-3" strokeWidth={2.2} />
                <div className="wordmark text-4xl sm:text-5xl md:text-6xl leading-none">
                  {wordmark.initials.map((p) => (
                    <span key={p.letter} className={toneClass[p.tone]}>
                      {p.letter}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-shell/70 text-pretty">{wordmark.body}</p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                  {wordmark.initials.map((p) => (
                    <div key={p.who} className="flex items-baseline gap-3">
                      <span className={`display text-3xl ${toneClass[p.tone]}`}>{p.letter}</span>
                      <span className="text-[0.78rem] text-shell/65 leading-tight">{p.who}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-shell/15">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold mb-2">Submark</p>
                  <p className="text-shell/70 text-sm text-pretty">{wordmark.submark}</p>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>

        <Reveal className="my-16 md:my-24 flex justify-center">
          <WaveLine className="w-56 text-gold/70" strokeWidth={1.8} />
        </Reveal>

        {/* eight meanings */}
        <Reveal>
          <p className="text-center script text-gold text-3xl mb-3">eight quiet readings</p>
          <h3 className="text-center display t-h3 text-shell mb-12 md:mb-16">
            One wave, many meanings
          </h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {logoMeanings.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
              <Tilt max={8} className="h-full">
                <div className="group h-full rounded-2xl p-6 bg-white/[0.04] border border-shell/10 hover:border-gold/50 hover:bg-white/[0.07] transition-all duration-500">
                  <WaveGlyph className="w-10 text-gold/80 mb-4 transition-transform duration-500 group-hover:translate-x-1 tilt-raise" />
                  <h4 className="display text-xl text-shell mb-2">{m.title}</h4>
                  <p className="text-shell/60 text-[0.85rem] leading-relaxed text-pretty">{m.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-shell/45 text-sm">
            Each reading is collecting its own true story. The rest are on their way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
