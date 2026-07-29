import { useEffect, useRef, useState } from 'react';
import Mark, { WaveGlyph } from '../components/Mark';
import { nav, profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  // A quiet reward for reaching the end: a line that surfaces only
  // once the footer is truly in view — for those who stayed.
  const endRef = useRef<HTMLDivElement>(null);
  const [arrived, setArrived] = useState(false);
  useEffect(() => {
    const el = endRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setArrived(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="section bg-navy text-shell pt-16 pb-10">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
          <div>
            <Mark stacked className="items-start !flex-col" />
            <p className="mt-5 max-w-xs text-shell/60 text-sm leading-relaxed text-pretty">
              A narrative house for voices, ideas, and the stories that need room to breathe.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold mb-4">Explore</p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-underline text-shell/75 hover:text-shell text-sm">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold mb-4">Say hello</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="link-underline text-shell/75 hover:text-shell">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="link-underline text-shell/75 hover:text-shell"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-shell/60">{profile.location}</li>
            </ul>
          </div>
        </div>

        {/* the end-note — only for those who came all the way down */}
        <div ref={endRef} className="mt-14 flex flex-col items-center text-center">
          <WaveGlyph className="w-12 text-gold" strokeWidth={2} alive />
          <p
            className={`script text-gold text-2xl md:text-3xl mt-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              arrived ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            You stayed till the end. Thank you for slowing down.
          </p>
        </div>

        <div className="mt-14 pt-7 border-t border-shell/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-shell/50 text-[0.78rem]">
            © {year} {profile.name} · {profile.brand} · {profile.house}
          </p>
          <p className="text-shell/40 text-[0.72rem] uppercase tracking-[0.18em]">
            Designed with attention, not noise.
          </p>
        </div>
      </div>
    </footer>
  );
}
