# Deploying NIRANULA — The Narrative House

The site is a static Vite + React build. `npm run build` outputs `/dist`,
which any static host serves. `vercel.json` is already configured.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # preview the production build
```

## Push to GitHub

> This was prepared on the branch `claude/ecstatic-bohr-aavf85`.
> If a session ever reports *“GitHub access is not enabled… connect the
> Claude GitHub App”*, enable write access for the Claude GitHub App on
> the repo (GitHub → Settings → Integrations / the Claude Code app),
> then push. From your own machine you can simply:

```bash
git add -A
git commit -m "NIRANULA portfolio"
git push -u origin claude/ecstatic-bohr-aavf85   # or main
```

## Deploy to Vercel (two ways)

### A) Git integration (recommended)
1. Push the repo to GitHub (above).
2. On Vercel → **Add New… → Project → Import** the `nivedhitha_portfolio`
   repo into your **Niranula** team.
3. Framework preset auto-detects **Vite** (or reads `vercel.json`).
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy.** Every push then redeploys automatically.

### B) Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod      # from the project root
```

That's it — the live URL appears once the build finishes (~1 min).
