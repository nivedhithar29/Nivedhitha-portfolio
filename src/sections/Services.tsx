import Reveal from '../components/Reveal';
import { services } from '../data/content';

const accent: Record<string, { text: string; chip: string; ring: string }> = {
  terracotta: { text: 'text-terracotta', chip: 'bg-terracotta/12 text-terracotta', ring: 'hover:border-terracotta/45' },
  navy: { text: 'text-navy', chip: 'bg-navy/10 text-navy', ring: 'hover:border-navy/45' },
  teal: { text: 'text-teal', chip: 'bg-teal/12 text-teal', ring: 'hover:border-teal/45' },
  sage: { text: 'text-teal', chip: 'bg-sage/25 text-teal', ring: 'hover:border-sage/60' },
  amber: { text: 'text-amber', chip: 'bg-amber/20 text-[#a9801f]', ring: 'hover:border-amber/60' },
};

export default function Services() {
  return (
    <section id="services" className="section relative py-24 md:py-36 bg-paper overflow-hidden">
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-sage/20 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="eyebrow text-teal">05 · Services</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end mb-14 md:mb-20">
          <Reveal>
            <p className="script text-3xl md:text-4xl mb-3">what I offer</p>
            <h2 className="display t-h1 text-navy text-balance">
              Ways we can <span className="display-italic text-terracotta">work together.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-ink/70 leading-relaxed lg:pb-2 text-pretty">
              Built around the brand&apos;s emotional core, from a single deep-dive session to a
              full narrative system. Pricing is indicative and shaped to the brief.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {services.map((s, i) => {
            const a = accent[s.accent];
            return (
              <Reveal
                key={s.name}
                delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}
                className={`group rounded-3xl bg-white/55 border border-navy/10 ${a.ring} transition-all duration-500 hover:bg-white/80`}
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center p-7 md:p-9">
                  <div className="flex items-center gap-5">
                    <span className="display text-3xl md:text-4xl text-navy/25 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className={`text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full ${a.chip}`}>
                      {s.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className={`display text-2xl md:text-[1.9rem] ${a.text}`}>{s.name}</h3>
                    <p className="mt-2 text-ink/70 leading-relaxed max-w-2xl text-pretty">
                      {s.desc}
                    </p>
                  </div>

                  <div className="md:text-right shrink-0">
                    <p className={`display text-2xl md:text-3xl ${a.text}`}>{s.price}</p>
                    <p className="text-[0.66rem] uppercase tracking-[0.2em] text-ink/50 mt-1">
                      {s.unit}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2} className="mt-12 text-center">
          <p className="text-ink/55 text-sm">
            Not sure which fits?{' '}
            <a href="#contact" className="link-underline text-terracotta font-medium">
              Start with a hello
            </a>{' '}
           , we&apos;ll shape it together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
