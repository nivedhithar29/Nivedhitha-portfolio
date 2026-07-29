import { useEffect, useRef, useState } from 'react';

/* ============================================================
   The trailing presence.

   A soft ring that lags a breath behind the pointer and quietly
   widens over anything you can touch — a sense that the house is
   aware of you. It is additive: the real cursor stays, so nothing
   about clicking or reading ever changes.

   Only for fine pointers that hover. Silent on touch, and on
   prefers-reduced-motion.
   ============================================================ */

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"], summary';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    if (!ring) return;

    // start centred so it never leaps in from the corner
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        ring.style.opacity = '1';
      }
    };
    const onLeave = () => {
      visible = false;
      ring.style.opacity = '0';
    };

    // widen and warm over anything interactive
    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest(INTERACTIVE)) ring.classList.add('is-touching');
      else ring.classList.remove('is-touching');
    };

    // a soft press acknowledgement
    const onDown = () => ring.classList.add('is-pressing');
    const onUp = () => ring.classList.remove('is-pressing');

    const loop = () => {
      // lerp — the ring always arriving, never quite catching up
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />;
}
