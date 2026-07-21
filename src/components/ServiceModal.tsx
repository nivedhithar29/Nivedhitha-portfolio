import { useEffect, useRef } from 'react';
import { WaveGlyph } from './Mark';
import type { Service } from '../data/content';

/**
 * Full service "page", presented as an accessible overlay so the site
 * stays a single-page app (no router dependency). Esc / backdrop close,
 * body scroll locks while open, focus lands on the panel.
 */
export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const open = Boolean(service);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${service.name} — full service`}
      className="fixed inset-0 z-[70] flex justify-center overflow-y-auto"
    >
      {/* backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="fixed inset-0 bg-navy/40 backdrop-blur-sm animate-[fadein_.4s_ease] cursor-default"
      />

      {/* panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 my-6 md:my-12 w-[min(92vw,720px)] rounded-[1.8rem] bg-shell border border-gold/40 shadow-[0_50px_120px_-40px_rgba(28,25,23,0.6)] outline-none animate-[panelin_.5s_cubic-bezier(0.22,1,0.36,1)]"
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-7 md:px-10 pt-7 pb-4 bg-shell/95 backdrop-blur-sm rounded-t-[1.8rem] border-b border-ink/10">
          <div>
            <p className="eyebrow text-gold-deep">{service.tag}</p>
            <h2 className="display text-2xl md:text-3xl text-navy mt-1">{service.name}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close service"
            className="shrink-0 grid place-items-center h-10 w-10 rounded-full border border-ink/20 text-navy hover:bg-navy hover:text-shell hover:border-navy transition-colors"
          >
            <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* body */}
        <div className="px-7 md:px-10 pb-9 md:pb-11 pt-6">
          <p className="display-italic text-ink/85 text-lg md:text-xl leading-relaxed text-pretty">
            {service.entry}
          </p>

          <div className="mt-8">
            <p className="eyebrow text-gold-deep mb-2">What it is</p>
            <p className="text-grey leading-relaxed text-pretty">{service.full.whatItIs}</p>
          </div>

          <div className="mt-7">
            <p className="eyebrow text-gold-deep mb-3">{service.full.doLabel}</p>
            <ul className="space-y-2.5">
              {service.full.doList.map((item) => (
                <li key={item} className="flex gap-3 text-ink/80 leading-relaxed">
                  <WaveGlyph className="w-6 shrink-0 mt-1.5 text-gold" strokeWidth={2.4} />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <p className="eyebrow text-gold-deep mb-2">Who it's for</p>
            <p className="text-grey leading-relaxed text-pretty">{service.full.whoFor}</p>
          </div>

          {service.full.howToStart && (
            <div className="mt-7">
              <p className="eyebrow text-gold-deep mb-2">How to start</p>
              <p className="text-grey leading-relaxed text-pretty">{service.full.howToStart}</p>
            </div>
          )}

          <a href="#contact" onClick={onClose} className="btn-pill btn-dark mt-9 !normal-case !tracking-normal">
            {service.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadein { from { opacity: 0 } to { opacity: 1 } }
        @keyframes panelin {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
