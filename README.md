# NERWebsite

Northeastern Electric Racing's team website.

Built with [Vite](https://vite.dev), React, TypeScript, and [Tailwind CSS](https://tailwindcss.com).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Lint / format

```sh
npm run lint
npm run format
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages automatically via
`.github/workflows/deploy.yml`.

The build targets the root path (`base: '/'` in `vite.config.ts`), so the site is meant
to be served from a custom domain once one is attached (Settings → Pages, plus a
`public/CNAME` file — not yet added). Until then, the default Pages URL
(https://northeastern-electric-racing.github.io/NERWebsite/) will render a blank page,
since its assets are requested from `/NERWebsite/assets/...` but built for `/assets/...`.
This is expected, not a bug.
