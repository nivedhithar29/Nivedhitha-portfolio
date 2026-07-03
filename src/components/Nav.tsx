import { useEffect, useState } from 'react';
import Mark from './Mark';
import { nav } from '../data/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-shell/80 backdrop-blur-md border-b border-navy/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="wrap section flex items-center justify-between !px-0">
        <div className="section !py-0 flex items-center justify-between w-full">
          <Mark />

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`link-underline text-[0.82rem] tracking-wide transition-colors ${
                  active === n.id ? 'text-gold-deep' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn-pill btn-dark !py-2.5 !px-5 !text-[0.72rem]">
              Let&apos;s talk
            </a>
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-50 flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-shell/97 backdrop-blur-lg transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-7">
          {nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="display text-4xl text-navy"
              style={{
                transitionDelay: `${i * 40}ms`,
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity .5s, transform .5s',
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-pill btn-dark mt-3"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
