import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import { portraitSrc } from '../assets/media';
import { about, profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section relative py-24 md:py-36 bg-shell">
      <div className="wrap">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-gold-deep">01 · About</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
          {/* text column */}
          <div>
            {/* the one addition: a quiet name line */}
            <Reveal>
              <p className="text-grey text-sm md:text-base mb-5">{about.hi}</p>
            </Reveal>

            <Reveal delay={1}>
              <p className="script text-3xl md:text-4xl mb-5">{about.kicker}</p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="display t-h1 text-navy text-balance">
                What I really
                <br />
                do is <span className="display-italic text-gold-deep">listen.</span>
              </h2>
            </Reveal>

            <Reveal delay={2} className="mt-9 max-w-xl">
              <p className="text-lg md:text-xl text-ink/85 leading-relaxed text-pretty">
                {about.lead}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5 max-w-xl">
              {about.body.map((p, i) => (
                <Reveal key={i} delay={(i + 2) as 2 | 3 | 4}>
                  <p className="text-grey leading-relaxed text-pretty">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={4} className="mt-12">
              <WaveLine className="w-44 text-gold" strokeWidth={2} />
            </Reveal>
          </div>

          {/* portrait column, framed arch treatment */}
          <Reveal delay={2} className="relative lg:sticky lg:top-28">
            <div className="relative px-6 sm:px-10 lg:px-6">
              {/* gold plinth behind the arch */}
              <div className="absolute inset-x-0 top-10 bottom-0 rounded-[2rem] bg-gold/25 border border-gold/40" />

              <figure className="relative max-w-sm mx-auto pt-8 pb-10">
                <div className="arch-frame relative border-[3px] border-navy/85 shadow-[0_40px_90px_-50px_rgba(28,25,23,0.65)] bg-blush-deep">
                  {/* inner hairline ring, editorial frame-within-frame */}
                  <div className="absolute inset-2 arch-frame border border-gold/70 z-10 pointer-events-none" />
                  <img
                    src={portraitSrc}
                    alt={`${profile.name}, founder of Niranula · The Narrative House`}
                    loading="lazy"
                    className="w-full aspect-[4/5.2] object-cover object-top"
                    style={{ filter: 'saturate(0.96) contrast(1.02)' }}
                  />
                </div>
                <figcaption className="text-center mt-6">
                  <p className="display text-navy text-2xl leading-none">{profile.name}</p>
                  <p className="text-grey text-[0.7rem] uppercase tracking-[0.22em] mt-2">
                    {profile.role}
                  </p>
                </figcaption>

                {/* script annotation */}
                <p className="script text-2xl md:text-3xl absolute -right-2 md:-right-8 top-10 rotate-[8deg] max-w-[7.5rem] text-right leading-tight">
                  story-led, always
                </p>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
