# Mohamed Arshad: Portfolio

React + TypeScript + Vite + plain CSS. No paid services, no UI libraries. Fonts (Bricolage Grotesque, Newsreader) are self-hosted through free `@fontsource` packages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 20+.

## Where to edit content

All text lives in `src/data/`, so you rarely need to touch components:

| File             | What it controls                                   |
| ---------------- | -------------------------------------------------- |
| `profile.ts`     | Name, hero copy, contact details, About text       |
| `experience.ts`  | Employers, roles, dates, achievements (from resume) |
| `projects.ts`    | Project cards. Add `repoUrl` to make a card live   |
| `skills.ts`      | Skill groups and certifications                    |

Replacing the portrait: swap `src/assets/hero-desktop.webp` (wide, portrait on the right) and `src/assets/hero-mobile.webp` (portrait crop), and `public/og-image.jpg` (1200x630 social card).

## Deploy for free

**GitHub Pages (workflow included)**
1. Push this folder to a GitHub repo on the `main` branch.
2. Repo Settings, Pages, Source: **GitHub Actions**.
3. Every push to `main` builds and publishes. Works on `username.github.io/repo-name/` because asset paths are relative.

**Netlify / Cloudflare Pages / Vercel (free tiers)**
- Import the repo. Build command: `npm run build`. Output directory: `dist`.

## After you have a live URL

Set `VITE_SITE_URL` (for example `https://yourname.pages.dev`, no trailing slash) in your host's environment variables or in `.env`. This makes the social preview image (`og:image`) an absolute link, which LinkedIn and WhatsApp need.
