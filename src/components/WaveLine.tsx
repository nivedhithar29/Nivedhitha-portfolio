import { useEffect, useRef, useState } from 'react';

/**
 * The Lone Wave — a single fluid line that draws itself in.
 * The brand's core mark, reused as a section divider / accent.
 */
export default function WaveLine({
  className = '',
  color = 'currentColor',
  strokeWidth = 2,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 40"
      fill="none"
      className={className}
      role="img"
      aria-label="The Niranula lone wave"
    >
      <path
        d="M4 24 C 30 4, 52 4, 74 22 S 118 42, 140 22 S 184 2, 206 20 S 236 30, 236 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          strokeDasharray: 320,
          strokeDashoffset: drawn ? 0 : 320,
          transition: 'stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1)',
        }}
      />
    </svg>
  );
}
