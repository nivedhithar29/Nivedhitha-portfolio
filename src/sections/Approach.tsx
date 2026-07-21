import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import { pillars, approach, manifesto } from '../data/content';

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

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          {/* left column: the Southwave anchor + what shaped the work */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <p className="whitespace-pre-line display text-navy text-[1.35rem] sm:text-2xl md:text-[1.7rem] leading-[1.35] text-balance">
                {approach.anchor}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-8">
              <WaveLine className="w-40 text-gold" strokeWidth={2} />
            </Reveal>

            <div className="mt-8 space-y-4 max-w-md">
              {approach.intro.map((para, i) => (
                <Reveal key={i} delay={(Math.min(i, 5)) as 0 | 1 | 2 | 3 | 4 | 5}>
                  <p className="whitespace-pre-line text-grey text-[0.92rem] leading-[1.8] text-pretty">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* right column: five practices, spoken voice */}
          <ol className="space-y-2">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.no} delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
                <div className="group relative grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-8 border-t border-ink/10">
                  <div className="flex items-start gap-3 pt-1">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                    <span className="display text-2xl md:text-3xl text-navy/30 tabular-nums">
                      {p.no}
                    </span>
                  </div>
                  <div>
                    <h3 className="display text-xl md:text-[1.55rem] text-navy">{p.title}</h3>
                    <p className="whitespace-pre-line mt-4 text-ink/78 text-[0.96rem] md:text-[1.02rem] leading-[1.75] max-w-xl text-pretty">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* My Approach manifesto */}
        <Reveal className="mt-24 md:mt-36 max-w-3xl mx-auto">
          <p className="script text-3xl md:text-4xl mb-10 text-center">{manifesto.kicker}</p>
          <div className="space-y-7">
            {manifesto.stanzas.map((stanza, i) => (
              <p
                key={i}
                className="whitespace-pre-line text-navy text-lg md:text-[1.35rem] leading-[1.7] text-pretty"
              >
                {stanza}
              </p>
            ))}

            {/* the beat: "Actually..." gets its own breath */}
            <p className="display-italic text-gold-deep text-2xl md:text-4xl py-4 md:py-6">
              {manifesto.beat}
            </p>

            <p className="whitespace-pre-line text-navy text-lg md:text-[1.35rem] leading-[1.7] text-pretty">
              {manifesto.close}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
