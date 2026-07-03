import { useEffect, useState } from 'react';
import { setOcean } from '../lib/audio';

/**
 * The ambient ocean control. Starts muted (browsers block autoplay
 * with sound), floats quietly in the corner, and animates like a
 * tide when the sea is on.
 */
export default function SoundToggle() {
  const [on, setOn] = useState(false);
  const [hinted, setHinted] = useState(false);

  // Surface a one-time hint once the visitor first scrolls or clicks,
  // the earliest moment audio could legally start anyway.
  useEffect(() => {
    if (hinted) return;
    const arm = () => setHinted(true);
    window.addEventListener('scroll', arm, { once: true, passive: true });
    window.addEventListener('pointerdown', arm, { once: true });
    return () => {
      window.removeEventListener('scroll', arm);
      window.removeEventListener('pointerdown', arm);
    };
  }, [hinted]);

  const toggle = () => {
    const next = setOcean(!on);
    setOn(next);
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center gap-3">
      <span
        className={`hidden sm:block script text-xl transition-all duration-700 ${
          hinted && !on ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        hear the ocean?
      </span>
      <button
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? 'Mute the ocean' : 'Play the ambient ocean sound'}
        title={on ? 'Mute the ocean' : 'Hear the ocean'}
        className={`group grid place-items-center h-12 w-12 rounded-full border backdrop-blur-md transition-all duration-500 ${
          on
            ? 'bg-navy text-shell border-navy shadow-[0_16px_36px_-16px_rgba(28,43,94,0.75)]'
            : 'bg-white/70 text-navy border-ink/15 hover:border-navy/50'
        }`}
      >
        <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-[2.5px] rounded-full transition-colors ${on ? 'bg-gold' : 'bg-current'}`}
              style={
                on
                  ? {
                      animation: `soundbar 1.4s ease-in-out ${i * 0.18}s infinite`,
                      height: '30%',
                    }
                  : { height: `${30 + (i % 2) * 25}%` }
              }
            />
          ))}
        </span>
        <style>{`
          @keyframes soundbar {
            0%, 100% { height: 30%; }
            50% { height: 100%; }
          }
        `}</style>
      </button>
    </div>
  );
}
