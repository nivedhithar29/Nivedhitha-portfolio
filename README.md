# NIRANULA — The Narrative House

The portfolio of **Nivedhitha Ravi**, a story-led communication specialist working at the
intersection of emotional brand strategy, copywriting and cultural communication.

A refined, editorial single-page experience built around the brand's "lone wave" mark — rendered
live in WebGL — and a soft, ukiyo-e-inspired pastel palette.

🌊 **Live:** _deployed on Vercel_

---

## Design language

- **Aesthetic** — refined editorial luxury; generous negative space, oversized Fraunces display
  type, handwritten navy annotations, thin hairlines as section breath, and the lone-wave motif.
- **Signature** — the hero ocean is a custom GLSL shader (layered wave field + foam crests) echoing
  the Niranula logo: a single, fluid line. It rises when the cursor moves — the ocean noticing you.
- **Sound** — an ambient ocean bed and a cinematic contact-section swell, both synthesised live
  with the Web Audio API (muted by default, wave-bar toggle bottom-right).
- **Type** — _Fraunces_ (display serif; the wordmark at thin 300 with wide letter-spacing),
  _Hanken Grotesk_ (body), _Caveat_ (script accent, used sparingly).
- **Palette** — blush ground `#FFEFF0`, warm charcoal ink `#1C1917`, antique gold `#C8A97E`,
  wordmark navy `#1C2B5E`; the sunrise gradient is reserved for the hero and wave band.

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | React 18 + TypeScript                    |
| Build          | Vite 5                                   |
| 3D / WebGL     | three.js + @react-three/fiber (lazy)     |
| Styling        | Tailwind CSS 3 + CSS variables           |
| Motion         | Framer Motion + IntersectionObserver     |
| Hosting        | Vercel                                   |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  components/   Nav, Mark, WaveLine, Reveal, Ticker, Tilt, SoundToggle — shared UI + brand marks
  sections/     Hero · About · Approach · BehindLogo · Work · Heritage · Services · Lister ·
                Contact · Footer
  three/        WaveScene — the WebGL lone-wave ocean (GLSL shaders, cursor-reactive)
  lib/          audio.ts — Web Audio ocean ambience + cinematic swell (no audio binaries)
  data/         content.ts — single source of truth for all copy
  styles/       index.css — design system, tokens, type utilities
public/
  assets/       brand imagery (ukiyo-e wave, portrait)
  favicon.svg   the wave glyph
```

## Notes

- Fully responsive (mobile → wide desktop) with a sticky, scroll-aware navigation.
- Respects `prefers-reduced-motion`: animations and the wave slow/settle for motion-sensitive users.
- The contact form composes a `mailto:` so the site stays a pure, backend-free static frontend.
- Accessible: semantic landmarks, labelled form fields, descriptive alt text, keyboard-friendly nav.

---

_Designed with attention, not noise._
