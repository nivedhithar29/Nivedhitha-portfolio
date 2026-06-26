import Reveal from '../components/Reveal';
import { pillars, approach } from '../data/content';

const toneMap: Record<string, { dot: string; text: string }> = {
  navy: { dot: 'bg-navy', text: 'text-navy' },
  teal: { dot: 'bg-teal', text: 'text-teal' },
  sage: { dot: 'bg-sage', text: 'text-sage' },
  terracotta: { dot: 'bg-terracotta', text: 'text-terracotta' },
  amber: { dot: 'bg-amber', text: 'text-amber' },
};

export default function Approach() {
  return (
    <section id="approach" className="section relative py-24 md:py-36 bg-paper overflow-hidden">
      {/* soft background blooms */}
      <div className="absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-aqua/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-[22rem] w-[22rem] rounded-full bg-coral/25 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-teal">02 — How I think &amp; work</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          {/* sticky heading */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <h2 className="display t-h2 text-navy text-balance">
                A way of working that{' '}
                <span className="display-italic text-terracotta">stays human.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 text-ink/70 max-w-sm leading-relaxed">
                Five practices that turn a brand&apos;s noise into narrative — gentle, grounded,
                and quietly strategic.
              </p>
            </Reveal>
          </div>

          {/* pillars */}
          <ol className="space-y-2">
            {pillars.map((p, i) => {
              const tone = toneMap[p.tone];
              return (
                <Reveal as="li" key={p.no} delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
                  <div className="group relative grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-7 border-t border-navy/12 transition-colors hover:bg-white/40 rounded-2xl px-3 md:px-5 -mx-3 md:-mx-5">
                    <div className="flex items-start gap-3 pt-1">
                      <span className={`mt-2 h-2 w-2 rounded-full ${tone.dot}`} />
                      <span className="display text-2xl md:text-3xl text-navy/30 tabular-nums">
                        {p.no}
                      </span>
                    </div>
                    <div>
                      <h3 className={`display text-2xl md:text-[1.7rem] ${tone.text}`}>
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-ink/70 leading-relaxed max-w-lg text-pretty">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* My Approach manifesto */}
        <Reveal className="mt-24 md:mt-36 max-w-4xl mx-auto text-center">
          <p className="script text-3xl md:text-4xl mb-6">{approach.kicker}</p>
          <div className="space-y-3">
            {approach.lines.map((line, i) => (
              <p
                key={i}
                className={`display ${
                  i === approach.lines.length - 1 ? 'display-italic text-terracotta' : 'text-navy'
                } text-2xl sm:text-3xl md:text-[2.4rem] leading-tight text-balance`}
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
