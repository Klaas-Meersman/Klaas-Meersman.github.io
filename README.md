# klaas-meersman.github.io

Personal academic website of **Klaas Meersman** — PhD researcher at the
Light & Lighting Laboratory, KU Leuven. Built with [Astro](https://astro.build).

Live at <https://klaas-meersman.github.io>.

## Running it locally

```bash
npm install       # once
npm run dev       # start the dev server at http://localhost:4321
```

The page reloads automatically as you edit. To check the production build:

```bash
npm run build     # output goes to dist/
npm run preview   # serve the built site locally
```

## Where to edit what

Everything is plain text — mostly Markdown and small `.astro`/`.ts` files.

| I want to change...            | Edit this file                                |
| ------------------------------ | --------------------------------------------- |
| My name, email, links, nav bar | `src/consts.ts`                               |
| Home / About text and photo    | `src/pages/index.astro`                       |
| Publications                   | `src/data/publications.ts`                    |
| Research projects              | `src/data/projects.ts`                        |
| Teaching                       | `src/pages/teaching.astro`                    |
| CV                             | `src/pages/cv.astro` (+ drop `public/cv.pdf`) |
| Timeline / news                | `src/data/timeline.ts`                        |
| Colours & fonts                | `src/styles/global.css` (the `--variables`)   |

### Adding a photo

Drop `profile.jpg` into the `public/` folder and update the avatar block near
the top of `src/pages/index.astro`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. **One-time setup:** in the repo on GitHub, go to
**Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
