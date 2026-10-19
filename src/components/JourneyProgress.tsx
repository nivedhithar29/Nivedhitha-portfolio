import { useEffect, useState } from 'react';

const cities = ['Trichy', 'Salem', 'Milano', 'Chennai'] as const;

export default function JourneyProgress() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const ids = ['chapter-trichy', 'chapter-salem', 'chapter-milano', 'chapter-chennai'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setCurrent(idx);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      aria-label="Journey progress"
    >
      {cities.map((city, i) => (
        <a
          key={city}
          href={`#chapter-${city.toLowerCase()}`}
          className="flex items-center gap-2 group"
          aria-current={i === current ? 'step' : undefined}
        >
          <span
            className={`text-[0.6rem] uppercase tracking-[0.2em] transition-opacity duration-500 ${
              i === current ? 'opacity-80' : 'opacity-0 group-hover:opacity-60'
            }`}
          >
            {city}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === current
                ? 'h-2.5 w-2.5 bg-navy'
                : 'h-1.5 w-1.5 bg-ink/25 group-hover:bg-ink/50'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
