import Reveal from '../components/Reveal';
import WaveLine from '../components/WaveLine';
import { portraitSrc } from '../assets/media';
import { about, profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section relative py-24 md:py-36 bg-shell">
      <div className="wrap">
        <Reveal className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="eyebrow text-teal">01 — About</span>
          <span className="hairline flex-1" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
          {/* text column */}
          <div>
            <Reveal>
              <p className="script text-3xl md:text-4xl mb-5">{about.kicker}</p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="display t-h1 text-navy text-balance">
                What I really
                <br />
                do is <span className="display-italic text-terracotta">listen.</span>
              </h2>
            </Reveal>

            <Reveal delay={2} className="mt-9 max-w-xl">
              <p className="text-lg md:text-xl text-ink/80 leading-relaxed text-pretty">
                {about.lead}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5 max-w-xl">
              {about.body.map((p, i) => (
                <Reveal key={i} delay={(i + 2) as 2 | 3 | 4}>
                  <p className="text-ink/70 leading-relaxed text-pretty">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={4} className="mt-12">
              <WaveLine className="w-44 text-terracotta/70" strokeWidth={2} />
            </Reveal>
          </div>

          {/* portrait column */}
          <Reveal delay={2} className="relative">
            <div className="relative">
              {/* offset color block */}
              <div className="absolute -top-5 -left-5 right-8 bottom-8 rounded-[2rem] bg-aqua/50" />
              <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-coral/40 blur-xl" />

              <figure className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_90px_-50px_rgba(19,57,81,0.65)]">
                <img
                  src={portraitSrc}
                  alt={`${profile.name}, founder of Niranula — The Narrative House`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top"
                  style={{ filter: 'saturate(0.96) contrast(1.02)' }}
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy/70 to-transparent">
                  <p className="display text-shell text-2xl leading-none">{profile.name}</p>
                  <p className="text-shell/80 text-[0.7rem] uppercase tracking-[0.22em] mt-1.5">
                    {profile.role}
                  </p>
                </figcaption>
              </figure>

              {/* script annotation */}
              <p className="script text-2xl md:text-3xl absolute -right-2 md:-right-6 top-6 rotate-[8deg] max-w-[7rem] text-right leading-tight">
                story-led, always
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
