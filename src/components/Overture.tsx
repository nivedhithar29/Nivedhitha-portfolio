import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/* ============================================================
   The Overture — the calm arrival.

   Before the house reveals itself, the lone wave draws a single
   breath on a blush ground, then the whole curtain lifts away.
   Not theatrical; a held breath, then release.

   - plays once per session (sessionStorage), so returning within a
     visit doesn't re-curtain the reader
   - fully skippable (pointer / key / scroll / touch)
   - honours prefers-reduced-motion by not rendering at all
   ============================================================ */

const SEEN_KEY = 'niranula-overture';
const ease = [0.22, 1, 0.36, 1] as const;

export default function Overture() {
  const reduced = useReducedMotion();

  // Decide synchronously on first render so the hero never flashes
  // behind the curtain, then vanishes.
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
      return sessionStorage.getItem(SEEN_KEY) !== '1';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;

    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — the overture simply plays every load */
    }

    // hold the page still while the curtain is down
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const dismiss = () => setShow(false);

    // a natural exit after the wave has drawn and breathed once…
    const timer = window.setTimeout(dismiss, 3000);
    // …or the moment the reader signals they'd like to come in
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') dismiss();
    };
    window.addEventListener('pointerdown', dismiss);
    window.addEventListener('wheel', dismiss, { passive: true });
    window.addEventListener('touchstart', dismiss, { passive: true });
    window.addEventListener('keydown', onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pointerdown', dismiss);
      window.removeEventListener('wheel', dismiss);
      window.removeEventListener('touchstart', dismiss);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [show]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="overture"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
          style={{ background: '#FFEFF0' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease } }}
          aria-hidden="true"
        >
          {/* the lone wave, drawing a single breath */}
          <motion.svg
            viewBox="0 0 240 40"
            fill="none"
            className="w-40 sm:w-52 md:w-64 text-navy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, ease } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.8, ease } }}
          >
            <motion.path
              d="M4 24 C 30 4, 52 4, 74 22 S 118 42, 140 22 S 184 2, 206 20 S 236 30, 236 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                transition: { pathLength: { duration: 1.9, ease }, opacity: { duration: 0.6 } },
              }}
            />
          </motion.svg>

          {/* the name, whispered in after the line settles */}
          <motion.p
            className="wordmark text-navy text-sm sm:text-base mt-8 pl-[0.24em]"
            style={{ letterSpacing: '0.4em' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.9, y: 0, transition: { delay: 1.7, duration: 1.1, ease } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            NIRANULA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
