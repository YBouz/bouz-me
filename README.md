# bouz.me

Single-page personal card for Youssef Bouz — founder and manager of
[GCC Brokers](https://gccbrokers.com).

Next.js 14 (App Router) + Tailwind, statically rendered, deployed on Vercel
at [bouz.me](https://bouz.me).

## Layout

Everything lives in one route. There is no CMS and no content directory —
edit the page directly.

| Path | What it holds |
| --- | --- |
| `src/app/page.tsx` | The whole card: identity, background, the GCC Brokers block, links |
| `src/app/layout.tsx` | Fonts, metadata, Open Graph |
| `src/app/globals.css` | Palette tokens, the grid backdrop, entry animation |
| `src/components/local-time.tsx` | Dubai wall-clock in the status line |
| `src/images/yb-mark.png` | YB monogram used in the header |

Icons are wired through the App Router file conventions: `src/app/icon.png`
(tab), `src/app/apple-icon.png` (home screen), `src/app/opengraph-image.png`
(link previews). Replacing any of them is a file swap — no code change.

## Palette

Tokens are defined once on `:root` in `globals.css`.

| Token | Value | Source |
| --- | --- | --- |
| `--accent` | `#B08D57` | Personal brand gold |
| `--foreground` | near-white | — |
| `--background` | near-black, navy cast | — |

The brand pack (charcoal `#2B2B2B`, cream `#EBE9E3`, gold `#B08D57`) lives
outside this repo in OneDrive under `99-Private/yb-brand`.

## Claims about GCC Brokers

The figures in the venture block — FSC regulated, established 2016, 100+
instruments, STP execution — are taken from gccbrokers.com's own published
copy. Keep them in step with that site rather than editing them here in
isolation.

## Local

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # must pass clean before pushing
```

Pushing to `main` deploys to production via Vercel.
