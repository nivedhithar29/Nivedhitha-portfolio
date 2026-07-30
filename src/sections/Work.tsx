import Reveal from '../components/Reveal';
import Tilt from '../components/Tilt';
import { WaveGlyph } from '../components/Mark';
import { caseStudies, moreWork, experiences, impactStats, type CaseStudy } from '../data/content';

const accentText: Record<string, string> = {
  navy: 'text-navy',
  gold: 'text-gold-deep',
};
const accentBar: Record<string, string> = {
  navy: 'bg-navy',
  gold: 'bg-gold',
};

function Marquee() {
  const row = [...experiences, ...experiences];
  return (
    <div
      className="relative overflow-hidden py-8 border-y border-ink/12 bg-shell"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-12 md:gap-16 hover:[animation-play-state:paused]">
        {row.map((e, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="display text-2xl md:text-3xl text-navy/85 whitespace-nowrap">
              {e.name}
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.2em] text-grey whitespace-nowrap">
              {e.place}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-shell to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-shell to-transparent pointer-events-none" />
    </div>
  );
}

/* Outcome-specific numbers, arch-topped à la the reference */
function ImpactCards() {
  return (
    <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28">
      {impactStats.map((s, i) => (
        <Reveal key={s.no} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
          <Tilt max={9} className="h-full">
            <div className="arch-frame h-full bg-gold/25 border border-gold/50 px-5 md:px-7 pt-10 md:pt-14 pb-7 text-center flex flex-col items-center hover:bg-gold/35 transition-colors duration-500">
              <span className="eyebrow text-gold-deep">{s.no}</span>
              <span className="display text-4xl md:text-6xl text-navy mt-4 tilt-raise">
                {s.value}
              </span>
              <span className="mt-3 text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.16em] text-ink/70 leading-snug">
                {s.label}
              </span>
            </div>
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}

/* One case, told as a short narrative: the room, the thinking, what it
   made. The first case is given more room than the others (varied weight,
   not uniform repetition — blueprint §4). */
function Case({ c, lead }: { c: CaseStudy; lead: boolean }) {
  const movement = 'space-y-1.5';
  return (
    <Tilt max={3} className="h-full">
      <article className="group relative h-full paper-card rounded-3xl p-7 md:p-10 flex flex-col">
        <div
          className={`absolute left-0 top-10 bottom-10 w-[3px] rounded-full ${accentBar[c.accent]} opacity-70`}
        />
        <div className={lead ? 'md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:items-start' : ''}>
          <div className="pl-4">
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-ink/45">
              {c.location}
            </span>
            <h3 className={`display ${lead ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} mt-2 ${accentText[c.accent]}`}>
              {c.name}
            </h3>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-ink/55">{c.roles}</p>

            {/* the three movements */}
            <div className="mt-6 space-y-5 max-w-xl">
              <div className={movement}>
                <p className="eyebrow text-gold-deep">The room</p>
                <p className="text-ink/80 leading-relaxed text-pretty">{c.room}</p>
              </div>
              <div className={movement}>
                <p className="eyebrow text-gold-deep">The thinking</p>
                <p className="text-ink/80 leading-relaxed text-pretty">{c.thinking}</p>
              </div>
              <div className={movement}>
                <p className="eyebrow text-gold-deep">What it made</p>
                <p className="text-ink/80 leading-relaxed text-pretty">{c.made}</p>
              </div>
            </div>
          </div>

          {/* the pulled figure, or a founder's own words */}
          <div className={`pl-4 ${lead ? 'mt-8 md:mt-0' : 'mt-7'}`}>
            {c.pulled && (
              <div className="inline-flex flex-col">
                <span className={`display text-5xl md:text-6xl ${accentText[c.accent]}`}>
                  {c.pulled.value}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/55 mt-1 max-w-[12rem]">
                  {c.pulled.label}
                </span>
              </div>
            )}
            {c.quote && (
              <figure className="border-l-2 border-gold/60 pl-5">
                <blockquote className="display-italic text-navy text-lg md:text-xl leading-snug text-pretty">
                  “{c.quote.line}”
                </blockquote>
                <figcaption className="eyebrow text-gold-deep mt-3">— {c.quote.who}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative bg-shell">
      {/* heading */}
      <div className="section pt-24 md:pt-36 pb-12 md:pb-16">
        <div className="wrap">
          <Reveal className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="eyebrow text-gold-deep">06 · Selected work</span>
            <span className="hairline flex-1" />
          </Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <Reveal>
              <h2 className="display t-h1 text-navy text-balance">
                A few rooms, told{' '}
                <span className="display-italic text-gold-deep">truer</span> than loud.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-grey leading-relaxed lg:pb-3 text-pretty">
                From luxury trend rooms in Milan to founder-led narratives and compliance-grade
                research — a small number of cases, each told as the story it actually was.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal>
        <Marquee />
      </Reveal>

      {/* outcome numbers */}
      <div className="section pt-16 md:pt-24">
        <ImpactCards />
      </div>

      {/* the featured cases — the first breathes wider than the rest */}
      <div className="section pb-4">
        <div className="wrap space-y-5 md:space-y-6">
          <Reveal>
            <Case c={caseStudies[0]} lead />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {caseStudies.slice(1).map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) as 0 | 1} className="h-full">
                <Case c={c} lead={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* the rest of the house — a quieter list */}
      <div className="section pb-24 md:pb-32 pt-14 md:pt-20">
        <div className="wrap">
          <Reveal className="flex items-center gap-4 mb-8">
            <span className="eyebrow text-gold-deep">More rooms in the house</span>
            <span className="hairline flex-1" />
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {moreWork.map((w, i) => (
              <Reveal as="li" key={w.name} delay={(i % 2) as 0 | 1}>
                <div className="flex items-baseline gap-3">
                  <h3 className="display text-2xl text-navy">{w.name}</h3>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-grey">
                    {w.location}
                  </span>
                </div>
                <p className="mt-2 text-grey leading-relaxed text-pretty max-w-md">{w.line}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16 flex justify-center">
            <WaveGlyph className="w-16 text-gold" strokeWidth={2} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
