import { useRef } from 'react';
import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import { WaveGlyph } from '../components/Mark';
import { heritage } from '../data/content';

/* Collage tilts, alternating so the strip feels pinned by hand */
const tiltClass = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];

export default function Heritage() {
  const stripRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 480), behavior: 'smooth' });
  };

  return (
    <section id="heritage" className="relative py-24 md:py-36 bg-paper overflow-hidden">
      <div className="absolute top-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="section">
        <div className="wrap">
          <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
            <span className="eyebrow text-gold-deep">05 · Heritage</span>
            <span className="hairline flex-1" />
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-end mb-12 md:mb-16">
            <Reveal>
              <p className="script text-3xl md:text-4xl mb-4">{heritage.kicker}</p>
              <h2 className="display t-h1 text-navy text-balance">{heritage.title}</h2>
            </Reveal>
            <Reveal delay={1} className="flex lg:justify-end gap-3 pb-2">
              <button
                onClick={() => nudge(-1)}
                aria-label="Scroll heritage back"
                className="grid place-items-center h-11 w-11 rounded-full border border-ink/20 text-navy hover:bg-navy hover:text-shell hover:border-navy transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => nudge(1)}
                aria-label="Scroll heritage forward"
                className="grid place-items-center h-11 w-11 rounded-full border border-ink/20 text-navy hover:bg-navy hover:text-shell hover:border-navy transition-colors"
              >
                →
              </button>
            </Reveal>
          </div>
        </div>
      </div>

      {/* horizontal collage strip, full-bleed */}
      <Reveal>
        <div
          ref={stripRef}
          className="h-scroll px-[clamp(1.25rem,5vw,5.5rem)]"
          role="list"
          aria-label="The places that shaped the story"
        >
          {heritage.places.map((place, i) => (
            <article
              key={place.name}
              role="listitem"
              className={`group relative w-[78vw] sm:w-[24rem] md:w-[26rem] ${tiltClass[i % 4]} hover:rotate-0 transition-transform duration-700`}
            >
              <div className="h-full rounded-[1.6rem] bg-white/75 border border-gold/40 shadow-[0_30px_70px_-45px_rgba(28,25,23,0.5)] p-7 md:p-9 flex flex-col min-h-[19rem] md:min-h-[21rem]">
                {/* postmark corner */}
                <div className="flex items-start justify-between">
                  <span className="display text-navy/25 text-5xl md:text-6xl">{place.no}</span>
                  <WaveGlyph className="w-10 text-gold group-hover:translate-x-1 transition-transform duration-500" strokeWidth={2.2} />
                </div>

                <h3 className="display text-4xl md:text-5xl text-navy mt-auto">{place.name}</h3>
                <p className="eyebrow text-gold-deep mt-3">{place.country}</p>
                <p className="script script-gold text-xl mt-4 leading-none">{place.context}</p>
                <p className="display-italic text-ink/80 text-lg md:text-xl leading-snug mt-2 text-pretty">
                  {place.line}
                </p>
              </div>
            </article>
          ))}

          {/* closing note card */}
          <article className="relative w-[78vw] sm:w-[24rem] md:w-[26rem] rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="h-full rounded-[1.6rem] bg-navy text-shell p-7 md:p-9 flex flex-col justify-between min-h-[19rem] md:min-h-[21rem]">
              <WaveGlyph className="w-12 text-gold" strokeWidth={2.2} />
              <div>
                <p className="script text-gold text-3xl md:text-4xl leading-tight">
                  {heritage.note}
                </p>
                <p className="eyebrow text-shell/60 mt-6">Open to international travel</p>
              </div>
            </div>
          </article>
        </div>
      </Reveal>

      <Reveal className="mt-12 flex justify-center">
        <WaveLine className="w-48 text-gold" strokeWidth={2} />
      </Reveal>
    </section>
  );
}
