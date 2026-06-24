# Demo Build Bot

The deploy target for NationGraph's **Demo Build Bot** pipeline. Demos are built
on demand from Slack: post a spec in `#testing-demo-build-bot`, react with 🔨,
and a live page is shipped here automatically.

- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Deploy:** Vercel auto-deploys every push to `main`
- **Design system:** shared "Signal Brief" tokens in `tailwind.config.ts` /
  `app/globals.css` (brand orange `#F4900A`, panels, mono labels)

## How a build is added (for the bot / contributors)

Each demo is a single route. To add one with slug `my-demo`:

1. Create `app/<slug>/page.tsx` — a default-exported React component. Reuse the
   shared classes (`panel`, `eyebrow`, `mono-label`, fonts) for visual
   consistency. Keep it **static, public, and secret-free**.
2. Add any one-off components under `app/<slug>/` or `components/`.
3. Commit and push to `main`. Vercel builds and deploys automatically.
4. The page is live at `https://<production-domain>/<slug>`.

Slugs must be URL-safe (lowercase, hyphens). The home page (`app/page.tsx`)
explains the pipeline to visitors.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build / sanity check
```
