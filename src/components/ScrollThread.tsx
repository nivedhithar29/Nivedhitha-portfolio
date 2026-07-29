import { useEffect, useRef, useState } from 'react';

/* ============================================================
   The thread.

   A single quiet line down the edge of the page that fills as you
   move through the house — a sense of how far the story has come,
   and how much room is left to breathe. Desktop only; it never
   competes for attention. Scroll-driven, so it rests when you rest.
   ============================================================ */

export default function ScrollThread() {
  const fillRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // only where there's room for a margin thread
    if (window.matchMedia('(min-width: 1024px)').matches) setEnabled(true);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const fill = fillRef.current;
    if (!fill) return;
    let raf = 0;
    let queued = false;

    const paint = () => {
      queued = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
      fill.style.transform = `scaleY(${t})`;
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="scroll-thread" aria-hidden="true">
      <span ref={fillRef} className="scroll-thread-fill" />
    </div>
  );
}
