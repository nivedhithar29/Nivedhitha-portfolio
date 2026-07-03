import { useRef, type ReactNode } from 'react';

/**
 * Pointer-tracking 3D tilt. Cards lean toward the cursor with a
 * soft sheen, and settle back when the pointer leaves. Inert on
 * touch-only devices and under prefers-reduced-motion.
 */
export default function Tilt({
  children,
  className = '',
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === 'touch') return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(0)`;
      el.style.setProperty('--sheen-x', `${(px + 0.5) * 100}%`);
      el.style.setProperty('--sheen-y', `${(py + 0.5) * 100}%`);
    });
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className={`tilt-wrap ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={cardRef}
        className="group/tilt tilt-card relative h-full"
        style={{ transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)' }}
      >
        {children}
        {/* cursor-following sheen */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(320px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(255,255,255,0.22), transparent 65%)',
          }}
        />
      </div>
    </div>
  );
}
