import Reveal from '../components/Reveal';
import { lister } from '../data/content';

/**
 * "I am a lister." A clean typographic section: Fraunces display,
 * generous leading, thin rules as breath, minimal decoration.
 */
export default function Lister() {
  return (
    <section id="lister" className="section relative py-24 md:py-36 bg-shell">
      <div className="wrap max-w-3xl">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="script text-3xl md:text-4xl mb-4">i am a lister.</p>
          <h2 className="display t-h2 text-navy">{lister.title}</h2>
        </Reveal>

        <div role="list">
          {lister.items.map((item, i) => (
            <Reveal
              as="div"
              key={item}
              delay={(Math.min(i, 5)) as 0 | 1 | 2 | 3 | 4 | 5}
            >
              <div
                role="listitem"
                className="group flex items-baseline gap-5 md:gap-7 py-5 border-t border-ink/10"
              >
                <span
                  aria-hidden="true"
                  className="text-gold-deep transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
                <span className="display text-xl sm:text-2xl md:text-[1.75rem] text-navy leading-relaxed group-hover:text-gold-deep transition-colors duration-500">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>

        <Reveal delay={2} className="mt-10 text-center">
          <p className="display-italic text-ink/75 text-lg md:text-xl">{lister.outro}</p>
        </Reveal>
      </div>
    </section>
  );
}
