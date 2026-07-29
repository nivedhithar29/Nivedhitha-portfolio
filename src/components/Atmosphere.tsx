import { useEffect, useRef, useState } from 'react';

/* ============================================================
   Atmosphere — the light between rooms.

   A single, almost-invisible wash laid over the page whose warmth
   drifts as you scroll: the sunrise glow of the hero, cooling
   toward the deep-navy middle of the house, warming again as you
   reach the shore. You never quite see it move. You only feel that
   the light is different here than it was a moment ago.

   Ultra-low opacity, soft-light blend, pointer-events none. Held
   still under prefers-reduced-motion.
   ============================================================ */

type RGB = [number, number, number];

// warm cream → soft gold → cool sea → warm blush
const STOPS: RGB[] = [
  [250, 203, 115], // sunrise cream
  [200, 169, 126], // antique gold
  [87, 122, 154], // sea
  [255, 217, 219], // blush
];

function sample(t: number): RGB {
  const clamped = Math.max(0, Math.min(1, t));
  const span = STOPS.length - 1;
  const pos = clamped * span;
  const i = Math.min(Math.floor(pos), span - 1);
  const f = pos - i;
  const a = STOPS[i];
  const b = STOPS[i + 1];
  return [
    Math.round(a[0] + (b[0] - a[0]) * f),
    Math.round(a[1] + (b[1] - a[1]) * f),
    Math.round(a[2] + (b[2] - a[2]) * f),
  ];
}

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let queued = false;

    const paint = () => {
      queued = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const t = max > 0 ? window.scrollY / max : 0;
      const [r, g, b] = sample(t);
      // Edge-weighted so the reading centre stays clean (contrast first):
      // the tint gathers at the margins, like the light of the room you're
      // standing in, and drifts from overhead toward the horizon as you descend.
      const cy = 24 + t * 52;
      el.style.background = `radial-gradient(115% 95% at 50% ${cy}%, rgba(${r},${g},${b},0) 42%, rgba(${r},${g},${b},0.85) 100%)`;
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
  return <div ref={ref} className="atmosphere" aria-hidden="true" />;
}
