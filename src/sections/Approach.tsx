import { useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';
import { pillars, approach, manifesto } from '../data/content';
import { isOceanOn, playSwell } from '../lib/audio';

const PEAK_KEY = 'niranula-peak-swell';

const toneMap: Record<string, { dot: string; text: string }> = {
  navy: { dot: 'bg-navy', text: 'text-navy' },
  gold: { dot: 'bg-gold', text: 'text-gold-deep' },
};

export default function Approach() {
  // The one reserved swell of the whole page (blueprint §6): as the reader
  // crosses the Heritage → Approach hinge — the emotional peak — the score
  // lifts once, but ONLY if they've opened the ocean. Silence is honoured
  // absolutely; a muted visitor hears nothing. Plays a single time.
  const peakRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = peakRef.current;
    if (!el) return;
    try {
      if (sessionStorage.getItem(PEAK_KEY) === '1') return;
    } catch {
      /* ignore storage failures */
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!isOceanOn()) return; // muted → no swell, ever
        playSwell();
        try {
          sessionStorage.setItem(PEAK_KEY, '1');
        } catch {
          /* ignore */
        }
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="approach" className="section relative py-24 md:py-36 bg-paper overflow-hidden">
      {/* the peak marker — where the score is allowed to lift, once */}
      <div ref={peakRef} aria-hidden="true" className="absolute top-1/4 left-0 h-px w-px" />
      {/* soft background blooms */}
      <div className="absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-[22rem] w-[22rem] rounded-full bg-blush-deep/70 blur-3xl pointer-events-none" />

      <div className="wrap relative">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-gold-deep">03 · How I think &amp; work</span>
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
              <p className="mt-6 text-grey max-w-sm leading-relaxed text-pretty">{approach.intro}</p>
            </Reveal>
          </div>

          {/* pillars: short italic lead + a line of body */}
          <ol className="space-y-2">
            {pillars.map((p, i) => {
              const tone = toneMap[p.tone];
              return (
                <Reveal as="li" key={p.no} delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
                  <div className="group relative grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-7 border-t border-ink/10 transition-colors hover:bg-white/40 rounded-2xl px-3 md:px-5 -mx-3 md:-mx-5">
                    <div className="flex items-start gap-3 pt-1">
                      <span className={`mt-2 h-2 w-2 rounded-full ${tone.dot}`} />
                      <span className="display text-2xl md:text-3xl text-navy/30 tabular-nums">
                        {p.no}
                      </span>
                    </div>
                    <div>
                      <h3 className={`display text-2xl md:text-[1.7rem] ${tone.text}`}>{p.title}</h3>
                      <p className="display-italic mt-2.5 text-ink/85 text-[1.02rem] md:text-lg leading-snug max-w-lg text-pretty">
                        {p.lead}
                      </p>
                      <p className="mt-2 text-grey leading-relaxed max-w-lg text-pretty">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
