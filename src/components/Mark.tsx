/** The Niranula lone-wave glyph + wordmark lockup. */
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
        <WaveGlyph className="w-10 mb-2 text-navy" />
        <span className="display text-navy tracking-[0.18em] text-2xl">NIRANULA</span>
        <span className="script text-lg -mt-1">The Narrative House</span>
      </div>
    );
  }
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="Niranula · home">
      <WaveGlyph className="w-7 text-navy transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="display text-navy tracking-[0.16em] text-[1.05rem]">NIRANULA</span>
        <span className="text-[0.58rem] uppercase tracking-[0.28em] text-teal/80 mt-1">
          The Narrative House
        </span>
      </span>
    </a>
  );
}
