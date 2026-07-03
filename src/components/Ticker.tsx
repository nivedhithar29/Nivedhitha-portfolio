import { WaveGlyph } from './Mark';

/**
 * Scrolling ticker bar, identity lines moving across the page.
 * Borrowed from the Starseed reference; tuned quiet for NIRANULA.
 */
export default function Ticker({
  lines,
  dark = false,
  reverse = false,
}: {
  lines: string[];
  dark?: boolean;
  reverse?: boolean;
}) {
  const row = [...lines, ...lines, ...lines];
  return (
    <div
      className={`relative overflow-hidden border-y ${
        dark ? 'bg-navy border-navy text-shell' : 'bg-shell border-ink/12 text-navy'
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center gap-8 md:gap-12 py-3.5 md:py-4 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee-slow'
        } hover:[animation-play-state:paused]`}
      >
        {row.map((line, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12 shrink-0">
            <span className="display text-sm md:text-base uppercase tracking-[0.3em] whitespace-nowrap">
              {line}
            </span>
            <WaveGlyph className={`w-8 shrink-0 ${dark ? 'text-gold' : 'text-gold-deep/70'}`} strokeWidth={2.4} />
          </span>
        ))}
      </div>
    </div>
  );
}
