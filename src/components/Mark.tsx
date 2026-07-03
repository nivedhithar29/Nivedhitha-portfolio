/** The Niranula lone-wave glyph + wordmark lockup.
 *  Wordmark rule (brief §02/§04): Fraunces thin (300), wide
 *  letter-spacing, with the wave sitting above it as a crown. */
export function WaveGlyph({
  className = '',
  color = 'currentColor',
  strokeWidth = 2.4,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg viewBox="0 0 64 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 16 C 12 4, 19 4, 27 14 S 45 26, 53 14 S 61 9, 61 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Mark({
  stacked = false,
  className = '',
}: {
  stacked?: boolean;
  className?: string;
}) {
  if (stacked) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <WaveGlyph className="w-10 mb-2 text-gold" />
        <span className="wordmark text-2xl">NIRANULA</span>
        {/* stacked mark lives on navy ground, so the script goes gold for contrast */}
        <span className="script text-gold text-lg mt-1">The Narrative House</span>
      </div>
    );
  }
  return (
    <a href="#top" className={`group flex flex-col items-start leading-none ${className}`} aria-label="Niranula · home">
      <WaveGlyph className="w-7 text-navy transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="wordmark text-navy text-[1rem] mt-1">NIRANULA</span>
      <span className="text-[0.55rem] uppercase tracking-[0.28em] text-grey mt-1">
        The Narrative House
      </span>
    </a>
  );
}
