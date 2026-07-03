import Reveal from '../components/Reveal';
import { pillars, approach } from '../data/content';

export default function Approach() {
  return (
    <section id="approach" className="section relative py-24 md:py-36 bg-paper overflow-hidden">
      {/* soft background blooms */}
      <div className="absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-[22rem] w-[22rem] rounded-full bg-blush-deep/70 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-gold-deep">02 · How I think &amp; work</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          {/* sticky heading */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <h2 className="display t-h2 text-navy text-balance">
                A way of working that{' '}
                <span className="display-italic text-gold-deep">stays human.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 text-grey max-w-sm leading-relaxed">
                Five practices that turn a brand&apos;s noise into narrative. Each one starts
                with a real moment, because labels are not arguments.
              </p>
            </Reveal>
          </div>

          {/* pillars, each opens with a story fragment */}
          <ol className="space-y-2">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.no} delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
                <div className="group relative grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-8 border-t border-ink/10 transition-colors hover:bg-white/50 rounded-2xl px-3 md:px-5 -mx-3 md:-mx-5">
                  <div className="flex items-start gap-3 pt-1">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                    <span className="display text-2xl md:text-3xl text-navy/30 tabular-nums">
                      {p.no}
                    </span>
                  </div>
                  <div>
                    <h3 className="display text-2xl md:text-[1.7rem] text-navy">{p.title}</h3>
                    <p className="display-italic mt-3 text-ink/85 text-[1.02rem] md:text-lg leading-relaxed max-w-lg text-pretty">
                      {p.story}
                    </p>
                    <p className="mt-3 text-grey text-[0.92rem] leading-relaxed max-w-lg text-pretty">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* My Approach manifesto, revised */}
        <Reveal className="mt-24 md:mt-36 max-w-4xl mx-auto text-center">
          <p className="script text-3xl md:text-4xl mb-8">{approach.kicker}</p>
          <div className="space-y-4">
            {approach.lines.map((line, i) => (
              <p
                key={i}
                className={`display ${
                  i === approach.lines.length - 1
                    ? 'display-italic text-gold-deep'
                    : 'text-navy'
                } text-xl sm:text-2xl md:text-[2rem] leading-tight text-balance`}
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
