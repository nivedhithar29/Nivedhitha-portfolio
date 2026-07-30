import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import { WaveGlyph } from '../components/Mark';
import { heritage } from '../data/content';

/* ============================================================
   Heritage — The Origin.

   The single most important beat on the site (blueprint §5):
   recognition, before any proof is asked for. Rebuilt from a
   fragile horizontal carousel into a vertical timeline so each
   city is given real room — Trichy, Salem, Milano, Chennai — and
   the reader simply walks down it. Scroll is the only mechanism;
   it is keyboard- and screen-reader-accessible by nature, needs
   no arrows, and lets the room be as long and slow as it deserves.
   ============================================================ */

export default function Heritage() {
  return (
    <section id="heritage" className="relative py-24 md:py-36 bg-paper overflow-hidden">
      <div className="absolute top-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="section">
        <div className="wrap">
          <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
            <span className="eyebrow text-gold-deep">02 · Heritage</span>
            <span className="hairline flex-1" />
          </Reveal>

          <div className="max-w-2xl mb-16 md:mb-24">
            <Reveal>
              <p className="script text-3xl md:text-4xl mb-4">{heritage.kicker}</p>
              <h2 className="display t-h1 text-navy text-balance">{heritage.title}</h2>
            </Reveal>
          </div>

          {/* the timeline — a single wave-line spine, one city per stop */}
          <ol className="relative max-w-3xl mx-auto lg:mx-0 lg:ml-[6vw]">
            {/* the spine */}
            <span
              aria-hidden="true"
              className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
            />

            {heritage.places.map((place, i) => (
              <Reveal
                as="li"
                key={place.name}
                delay={(Math.min(i, 3)) as 0 | 1 | 2 | 3}
                className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-16 md:pb-24 last:pb-0"
              >
                {/* node on the spine */}
                <span className="relative z-10 flex flex-col items-center pt-1.5">
                  <span className="grid place-items-center h-6 w-6 md:h-8 md:w-8 rounded-full bg-paper border border-gold/60 shadow-[0_0_0_5px_rgba(255,247,244,1)]">
                    <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-gold" />
                  </span>
                </span>

                {/* the city, given room */}
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-4">
                    <span className="display text-navy/25 text-2xl md:text-3xl tabular-nums leading-none">
                      {place.no}
                    </span>
                    <h3 className="display text-4xl md:text-6xl text-navy leading-none">
                      {place.name}
                    </h3>
                    <WaveGlyph
                      className="w-9 md:w-11 text-gold ml-1 hidden sm:block"
                      strokeWidth={2.2}
                    />
                  </div>

                  <p className="eyebrow text-gold-deep mt-4">{place.country}</p>

                  {/* the genuinely personal note — script earns its place here */}
                  <p className="script script-gold text-2xl md:text-3xl mt-5 leading-none">
                    {place.context}
                  </p>

                  <p className="display-italic text-ink/80 text-lg md:text-xl leading-snug mt-3 max-w-xl text-pretty">
                    {place.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* closing beat — the homecoming line, then out */}
          <Reveal className="max-w-3xl mx-auto lg:mx-0 lg:ml-[6vw] mt-4 md:mt-8 pl-[calc(1.5rem+24px)] md:pl-[calc(2.5rem+32px)]">
            <p className="script text-gold-deep text-3xl md:text-4xl leading-tight max-w-lg">
              {heritage.note}
            </p>
            <p className="eyebrow text-grey mt-5">Open to international travel</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 md:mt-28 flex justify-center">
        <WaveLine className="w-48 text-gold" strokeWidth={2} />
      </Reveal>
    </section>
  );
}
