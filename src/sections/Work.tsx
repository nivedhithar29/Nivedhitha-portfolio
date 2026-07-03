import Reveal from '../components/Reveal';
import Tilt from '../components/Tilt';
import { projects, experiences, impactStats } from '../data/content';

const accentMap: Record<string, string> = {
  navy: 'text-navy',
  gold: 'text-gold-deep',
};
const barMap: Record<string, string> = {
  navy: 'bg-navy',
  gold: 'bg-gold',
};

function Marquee() {
  const row = [...experiences, ...experiences];
  return (
    <div className="relative overflow-hidden py-8 border-y border-ink/12 bg-shell">
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

/* Impact numbers from real work, arch-topped cards à la the reference */
function ImpactCards() {
  return (
    <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
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

export default function Work() {
  return (
    <section id="work" className="relative bg-shell">
      {/* heading */}
      <div className="section pt-24 md:pt-36 pb-12 md:pb-16">
        <div className="wrap">
          <Reveal className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="eyebrow text-gold-deep">04 · Selected work</span>
            <span className="hairline flex-1" />
          </Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <Reveal>
              <h2 className="display t-h1 text-navy text-balance">
                Stories that <span className="display-italic text-gold-deep">moved</span> the
                numbers.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-grey leading-relaxed lg:pb-3 text-pretty">
                From luxury trend reports in Milan to founder-led narratives and compliance-grade
                research, a few rooms in the narrative house.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal>
        <Marquee />
      </Reveal>

      {/* impact numbers */}
      <div className="section pt-16 md:pt-24">
        <ImpactCards />
      </div>

      {/* case studies */}
      <div className="section pb-16 md:pb-24">
        <div className="wrap grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 2) as 0 | 1}
              className={`h-full ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <Tilt max={4} className="h-full">
                <div className="group relative h-full paper-card rounded-3xl p-7 md:p-9 flex flex-col">
                  <div
                    className={`absolute left-0 top-9 bottom-9 w-[3px] rounded-full ${barMap[p.accent]} opacity-70`}
                  />

                  <div
                    className={`${
                      i === 0 ? 'md:grid md:grid-cols-[1.4fr_1fr] md:gap-12 md:items-start' : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 pl-4">
                        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-ink/45">
                          {p.location}
                        </span>
                      </div>
                      <h3 className={`display text-3xl md:text-4xl pl-4 ${accentMap[p.accent]}`}>
                        {p.name}
                      </h3>
                      <p className="mt-2 pl-4 text-[0.78rem] uppercase tracking-[0.12em] text-ink/55">
                        {p.roles}
                      </p>
                      <p className="mt-5 pl-4 text-ink/75 leading-relaxed max-w-xl text-pretty">
                        {p.summary}
                      </p>
                    </div>

                    <div className={`${i === 0 ? 'mt-7 md:mt-0' : 'mt-6'} pl-4`}>
                      <div className="inline-flex flex-col mb-5">
                        <span className={`display text-4xl md:text-5xl ${accentMap[p.accent]}`}>
                          {p.metric.value}
                        </span>
                        <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink/50 mt-1">
                          {p.metric.label}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {p.impact.map((it, j) => (
                          <li key={j} className="flex gap-3 text-[0.86rem] text-ink/70 leading-snug">
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${barMap[p.accent]}`}
                            />
                            <span className="text-pretty">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
