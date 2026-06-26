# NIRANULA — The Narrative House

The portfolio of **Nivedhitha Ravi**, a story-led communication specialist working at the
intersection of emotional brand strategy, copywriting and cultural communication.

A refined, editorial single-page experience built around the brand's "lone wave" mark — rendered
live in WebGL — and a soft, ukiyo-e-inspired pastel palette.

🌊 **Live:** _deployed on Vercel_

---

## Design language

- **Aesthetic** — refined editorial luxury; generous negative space, high-contrast serif display
  type, handwritten coral annotations, and a Japanese wave (ukiyo-e) motif.
- **Signature** — the hero ocean is a custom GLSL shader (layered wave field + foam crests) echoing
  the Niranula logo: a single, fluid line.
- **Type** — _Fraunces_ (display serif), _Hanken Grotesk_ (body), _Caveat_ (script accent).
- **Palette** — the full Niranula swatch set as CSS variables (shell pink, cream, teal, navy, sage,
  coral, gold…).

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
  components/   Nav, Mark, WaveLine, Reveal — shared UI + brand marks
  sections/     Hero · About · Approach · BehindLogo · Work · Services · Contact · Footer
  three/        WaveScene — the WebGL lone-wave ocean (GLSL shaders)
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
