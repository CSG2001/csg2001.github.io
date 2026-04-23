# Project Context

> [!IMPORTANT]
> **AGENT.MD CRITICAL RULES:**
> **No Fluff:** Minimum characters. Concise but 100% complete.
> **No History:** No changelogs. Reflect ONLY the current "Source of Truth".
> **Live Sync:** Always keep AGENTS.md file updated with the latest relevant code changes after code is updated.

> [!WARNING]
> **Avoid Redundant Documentation**
> AGENTS.md is the **Single Source of Truth**. Do NOT create separate MAINTENANCE.md, ARCHITECTURE.md, or other documentation files that duplicate information here.
> Update README.md with quick refs and links back to AGENTS.md sections.

Static portfolio site for Colegio San Gabriel's 2001 graduating class 25-year reunion. React + Vite + TypeScript + shadcn/ui. Package manager: **bun**.

**Visual Style:** Premium Comic-Book / Pop-Art Ilustrado.

## Commands

```bash
bun run dev       # Start dev server at http://localhost:8080
bun run build     # Production build
bun run build:dev # Dev-mode build
bun run lint      # ESLint
bun run test      # Run tests (Vitest)
bun run test:watch# Watch mode
bun run preview   # Preview production build
```

## Folder Structure

```
src/
├── App.tsx              # Root: QueryClient + BrowserRouter + 3 routes
├── main.tsx             # Entry point
├── index.css            # Global styles, design system vars, comic utilities
├── assets/
│   └── hero-school.jpg  # Hero image
├── components/
│   ├── sections/        # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── Sponsors.tsx
│   │   ├── Gallery.tsx
│   │   ├── Footer.tsx
│   │   └── NimblersoftFooter.tsx
│   ├── ComicCard.tsx    # Project card: image/emoji, title, date, desc, tilt rotation
│   ├── HighlightedComicCard.tsx # Featured project hero card
│   ├── NavLink.tsx      # React Router NavLink wrapper with activeClassName support
│   └── ui/              # 54 shadcn/ui components (Radix UI + Tailwind)
├── data/
│   └── projects.ts      # 14 project definitions + accentBg color map
├── hooks/
│   ├── use-mobile.tsx   # Mobile breakpoint hook (768px)
│   └── use-toast.ts     # Toast hook (sonner)
├── lib/
│   └── utils.ts         # cn() — clsx + tailwind-merge
├── pages/
│   ├── Index.tsx        # Home: hero + Sponsors Section + 13-project gallery grid
│   ├── ProjectDetail.tsx# /proyecto/:slug — hero, story, gallery, back button
│   └── NotFound.tsx     # 404
├── public/
│   └── images/
│       ├── logo-2001.png    # Promo logo
│       ├── logo-colegio.png # School logo
└── test/
    ├── example.test.ts
    └── setup.ts
```

## Routes

- `/` → `src/pages/Index.tsx`
- `/proyecto/:slug` → `src/pages/ProjectDetail.tsx`
- `*` → `src/pages/NotFound.tsx`

## Data Model

**`src/data/projects.ts`** — exports `projects[]` and `accentBg` color map.

```ts
interface Project {
  slug: string;
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: 'primary' | 'secondary' | 'accent' | 'orange' | 'green';
  story: string;       // Long-form HTML/text narrative
  images: string[];    // Hero/featured images
  gallery: string[];   // Gallery images
}
```

14 projects covering charity, religious ceremonies, reunions, and social events.

## Design System

**Fonts:** Bangers (display), Fredoka (headers), Nunito (body) — Google Fonts.

**Colors (CSS vars in `index.css`):**
| Token | HSL | Use |
|-------|-----|-----|
| primary | 222 70% 28% | Deep blue |
| secondary | 45 95% 55% | Gold |
| accent | 178 65% 48% | Turquoise |
| orange | 22 92% 58% | Orange |
| green | 145 55% 42% | Green |
| background | 45 60% 97% | Cream |
| ink | 222 70% 8% | Near black |

**Comic utilities (index.css):** `.panel`, `.halftone`, `.comic-border`, `font-display`, `.animate-logo-highlight`. Hover on `.panel` translates -3px -3px.

**Shadows:** `--comic-shadow` (6px 6px offset, black), `-sm`, `-lg` variants.

**Card tilt:** Per-index rotation (-1° to +2°) on ComicCard.

## Stack

- React Router v6 — routing
- TanStack React Query v5 — data fetching
- Recharts — charts
- Radix UI primitives (via shadcn/ui)
- TailwindCSS 3 + tailwindcss-animate
- Sonner — toast notifications

## Deployment

- **Host:** GitHub Pages (csg2001.github.io)
- **Vite base:** `/` (root domain)
- **CI:** `.github/workflows/deploy.yml` — push to `main` triggers `bun install` → `bun run build` → `peaceiris/actions-gh-pages` publishes `./dist` to `gh-pages` branch
- **Manual deploy:** Use `gh-pages-deploy` skill for streamlined commit, push, and verification workflow

## Testing

- Files: `src/**/*.{test,spec}.{ts,tsx}`
- Environment: jsdom
- Setup: `src/test/setup.ts`
- Runner: Vitest + @testing-library/react

## Path Aliases

`@/*` → `./src` (tsconfig + vite.config)

## Notes

- **Always use bun** — no npm or yarn.
- Dev server: host `::` (IPv6), port 8080, HMR overlay disabled.
- `lovable-tagger` plugin active in dev mode only.
- Deduplicates react, react-dom, @tanstack/react-query.
- No .env files — fully static, no secrets.
- No pre-commit hooks configured.
