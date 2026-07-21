import { useEffect, useState } from 'react';
import { setOcean } from '../lib/audio';

/**
 * The ambient ocean control. Starts muted (browsers block autoplay
 * with sound), sits as a prominent labelled pill in the corner, and
 * animates like a tide when the sea is on.
 */
export default function SoundToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    const next = setOcean(!on);
    setOn(next);
  };

  // A soft pulse on the button until the visitor first interacts,
  // so the control actually gets noticed.
  const [nudge, setNudge] = useState(true);
  useEffect(() => {
    const stop = () => setNudge(false);
    window.addEventListener('pointerdown', stop, { once: true });
    window.addEventListener('scroll', stop, { once: true, passive: true });
    return () => {
      window.removeEventListener('pointerdown', stop);
      window.removeEventListener('scroll', stop);
    };
  }, []);

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Mute the ambient ocean' : 'Play the ambient ocean sound'}
      className={`group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center gap-3 rounded-full border pl-4 pr-5 py-3 backdrop-blur-md transition-all duration-500 ${
        on
          ? 'bg-navy text-shell border-navy shadow-[0_20px_44px_-18px_rgba(28,43,94,0.85)]'
          : 'bg-white/85 text-navy border-ink/15 hover:border-navy/50 shadow-[0_16px_36px_-20px_rgba(28,25,23,0.5)]'
      } ${nudge && !on ? 'animate-[soundnudge_2.6s_ease-in-out_infinite]' : ''}`}
    >
      <span className="flex items-end gap-[3px] h-5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`w-[3px] rounded-full ${on ? 'bg-gold' : 'bg-current'}`}
            style={
              on
                ? { animation: `soundbar 1.4s ease-in-out ${i * 0.16}s infinite`, height: '30%' }
                : { height: `${35 + (i % 3) * 22}%` }
            }
          />
        ))}
      </span>
      <span
        className={`script text-xl md:text-2xl leading-none whitespace-nowrap pb-0.5 ${
          on ? 'text-gold' : ''
        }`}
      >
        {on ? 'ocean on' : 'hear the ocean?'}
      </span>

      <style>{`
        @keyframes soundbar {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        @keyframes soundnudge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </button>
  );
}
