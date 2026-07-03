import { useState } from 'react';
import Reveal from '../components/Reveal';
import { services } from '../data/content';

const numberWords = ['one', 'two', 'three', 'four', 'five'];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="services" className="section relative py-24 md:py-36 bg-paper overflow-hidden">
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="eyebrow text-gold-deep">06 · Services</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end mb-14 md:mb-20">
          <Reveal>
            <p className="script text-3xl md:text-4xl mb-3">what I offer</p>
            <h2 className="display t-h1 text-navy text-balance">
              Ways we can <span className="display-italic text-gold-deep">work together.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-grey leading-relaxed lg:pb-2 text-pretty">
              Built around the brand&apos;s emotional core, from a single deep-dive session to a
              full narrative system. Every engagement starts with a conversation, not a cart.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {services.map((s, i) => {
            const open = openIdx === i;
            return (
              <Reveal
                key={s.name}
                delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}
                className={`rounded-3xl bg-white/60 border transition-all duration-500 ${
                  open ? 'border-gold/70 bg-white/85 shadow-[0_30px_70px_-50px_rgba(28,25,23,0.45)]' : 'border-ink/10 hover:border-gold/50 hover:bg-white/75'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`service-panel-${i}`}
                  className="w-full text-left p-6 md:p-8 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-start md:items-center"
                >
                  <span className="flex flex-col items-center gap-1 pt-1 md:pt-0">
                    <span className="eyebrow text-gold-deep">{numberWords[i]}</span>
                    <span className="display text-3xl md:text-4xl text-navy/25 tabular-nums">
                      0{i + 1}
                    </span>
                  </span>

                  <span className="block">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="display text-2xl md:text-[1.9rem] text-navy">{s.name}</span>
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-gold/25 text-gold-deep">
                        {s.tag}
                      </span>
                    </span>
                    {/* the emotional entry point leads */}
                    <span className="display-italic block mt-2.5 text-ink/85 text-[1.02rem] md:text-lg leading-relaxed max-w-2xl text-pretty">
                      {s.entry}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`grid place-items-center h-10 w-10 rounded-full border transition-all duration-500 shrink-0 ${
                      open
                        ? 'rotate-45 border-navy bg-navy text-shell'
                        : 'border-ink/20 text-navy'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* expandable detail */}
                <div
                  id={`service-panel-${i}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-7 md:pb-9 md:pl-[7.5rem]">
                      <div className="hairline mb-5" />
                      <p className="text-grey leading-relaxed max-w-2xl text-pretty">{s.detail}</p>
                      <a
                        href="#contact"
                        className="btn-pill btn-ghost mt-6 !normal-case !tracking-normal !text-sm"
                      >
                        {s.cta}
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2} className="mt-12 text-center">
          <p className="text-grey text-sm">
            Not sure which fits?{' '}
            <a href="#contact" className="link-underline text-gold-deep font-medium">
              Start with a hello
            </a>
            , we&apos;ll shape it together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
