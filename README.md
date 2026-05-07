# Cinethetic

Programmable social carousel renderer built with Remotion, React, and TypeScript.

Cinethetic turns structured slide data into polished Instagram-ready stills. It is designed for editorial posts, product explainers, launch notes, and repeatable social content where the layout should stay consistent across many decks.

![Cinethetic manifest demo](docs/demo-manifest-preview.png)

## Why Use This

Designing carousels manually is fine for one post. It becomes slow when you need consistent typography, spacing, pagination, themes, and repeated exports. Cinethetic keeps content in JSON and lets React/Remotion handle the layout.

## What It Includes

- Remotion still compositions for social carousel slides
- React + TypeScript slide renderer
- JSON-driven content model
- reusable theme variants with one demo rendered in multiple visual directions
- design-system notes in `DESIGN-SYSTEM.md`
- demo rendering scripts for all slides and previews

## Demo

The public demo is defined in:

- `src/data/posts/demo-carousel/carousel-content.json`
- `src/data/posts/demo-carousel/post-data.ts`
- `src/compositions/InstagramCarousel.tsx`
- `src/Root.tsx`

The same content is registered in four theme variants:

- `DemoManifestSlide` / `DemoManifestPreview`
- `DemoTerminalSlide` / `DemoTerminalPreview`
- `DemoBrutalistSlide` / `DemoBrutalistPreview`
- `DemoNeoprintSlide` / `DemoNeoprintPreview`

## Theme Variations

| Manifest | Terminal |
| --- | --- |
| ![Manifest variation](docs/demo-manifest-preview.png) | ![Terminal variation](docs/demo-terminal-preview.png) |

| Brutalist | Neoprint |
| --- | --- |
| ![Brutalist variation](docs/demo-brutalist-preview.png) | ![Neoprint variation](docs/demo-neoprint-preview.png) |

## Commands

```bash
npm install
npm run dev
npm run compositions
npm run typecheck
npm run render:slide
npm run render:preview
npm run render:demo
```

Rendered files are written to `out/`.

To render one variant only:

```bash
node scripts/render-demo.mjs manifest
node scripts/render-demo.mjs terminal
node scripts/render-demo.mjs brutalist
node scripts/render-demo.mjs neoprint
```

## How To Customize

### 1. Edit The Content

Open:

```text
src/data/posts/demo-carousel/carousel-content.json
```

Change the slide text while keeping the slide `type` fields. The current demo uses:

- `text-title`
- `text-quote`
- `text-tips`
- `text-compare`
- `story-cta`

Supported slide types are defined in `src/types.ts`.

### 2. Switch The Theme

Open:

```text
src/data/posts/demo-carousel/post-data.ts
```

Change the theme import and `variant` value. Available themes live in `src/theme.ts`, including:

- `manifestV16Theme`
- `terminalV17Theme`
- `brutalistV21Theme`
- `neoprintV24Theme`
- `gazetteV18Theme`
- `blueprintV19Theme`
- `polaroidV20Theme`

### 3. Add A New Carousel

1. Copy `src/data/posts/demo-carousel/` to `src/data/posts/my-carousel/`.
2. Edit `carousel-content.json`.
3. Export a new `CarouselData` object in the new `post-data.ts`.
4. Import it in `src/compositions/InstagramCarousel.tsx`.
5. Register a slide and preview composition in `src/Root.tsx`.
6. Run `npm run compositions` and render with `remotion still`.

### 4. Render All Demo Slides

```bash
npm run render:demo
```

Output:

```text
out/demo/
  manifest/
    preview.png
    slides/slide-01.png
  terminal/
  brutalist/
  neoprint/
```

## Project Shape

```text
src/
  compositions/InstagramCarousel.tsx
  data/posts/demo-carousel/
  theme.ts
  types.ts
scripts/
  design-system.mjs
  mock-shared.mjs
  palette-test.mjs
docs/
  demo-*-preview.png
```

## Public Safety

This repo is intentionally scoped as a generic renderer demo. It excludes private content operations, brand assets, generated output, environment files, local assistant commands, and internal worktrees.

## License

MIT.

## Notes

This public version intentionally includes only the renderer and a safe generic demo. Production workflows, brand assets, generated output, and local assistant command files are excluded.
