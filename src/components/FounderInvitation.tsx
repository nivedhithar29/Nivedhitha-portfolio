import { useState } from 'react';
import { WaveGlyph } from './Mark';

/* ============================================================
   Founder's Therapy — the invitation.

   Not a pitch. A small doorway. The visitor is met where they
   actually are: they name the quiet thing they can't say, and the
   house answers gently, the way the session itself would begin.

   Keyboard-navigable buttons; the reveal is a soft opacity shift,
   so it stays calm under prefers-reduced-motion.
   ============================================================ */

const PROMPTS: { feeling: string; answer: string }[] = [
  {
    feeling: "I can't explain what I actually do.",
    answer: "Good. That's usually where the truest version is hiding.",
  },
  {
    feeling: "My words don't sound like me anymore.",
    answer: "Then we'll go and find the ones that do. Slowly.",
  },
  {
    feeling: "I've gone quiet, and I'm not sure why.",
    answer: "Quiet isn't empty. Let's listen to what's underneath it.",
  },
  {
    feeling: 'I only have a feeling. Not a brief.',
    answer: 'A feeling is a perfect place to start. Honestly, the best one.',
  },
];

export default function FounderInvitation() {
  const [chosen, setChosen] = useState<number | null>(null);

  return (
    <div className="mb-8 rounded-2xl border border-gold/40 bg-gradient-to-b from-white/70 to-blush-deep/30 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <WaveGlyph className="w-9 text-gold" strokeWidth={2.2} alive />
        <span className="eyebrow text-gold-deep">A small welcome, before the work</span>
      </div>

      <p className="display-italic text-navy text-xl md:text-2xl leading-snug mt-5 max-w-lg text-pretty">
        Come in. Sit down. Tell me where it stopped feeling like you.
      </p>

      <p className="text-grey text-sm mt-3 max-w-md text-pretty">
        No right answer. Just choose whichever one is quietly true today.
      </p>

      <div
        className="mt-6 flex flex-wrap gap-2.5"
        role="group"
        aria-label="What brings you here"
      >
        {PROMPTS.map((p, i) => {
          const active = chosen === i;
          return (
            <button
              key={i}
              type="button"
              aria-pressed={active}
              onClick={() => setChosen(active ? null : i)}
              className={`rounded-full border px-4 py-2 text-left text-[0.86rem] leading-snug transition-all duration-500 ${
                active
                  ? 'border-navy bg-navy text-shell shadow-[0_16px_36px_-22px_rgba(28,43,94,0.85)]'
                  : 'border-ink/15 bg-white/60 text-ink/80 hover:border-gold/60 hover:bg-white/85'
              }`}
            >
              {p.feeling}
            </button>
          );
        })}
      </div>

      {/* the house answers */}
      <div
        className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: chosen !== null ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p
            aria-live="polite"
            className={`script text-2xl md:text-3xl text-navy mt-6 transition-opacity duration-700 ${
              chosen !== null ? 'opacity-95' : 'opacity-0'
            }`}
          >
            {chosen !== null ? PROMPTS[chosen].answer : ' '}
          </p>
        </div>
      </div>
    </div>
  );
}
