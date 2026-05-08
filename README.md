# Cinethetic

Small public Remotion, React, and TypeScript demo for JSON-driven carousel visuals.

Cinethetic shows one simple idea: keep slide content in structured data, then render it through reusable visual themes. It is intentionally small, public-safe, and built as a clean example rather than a production content engine.

![Cinethetic manifest demo](docs/demo-manifest-preview.png)

## Why This Exists

Designing one carousel manually is fine. Repeating the same layout decisions across many slides gets slow. This repo keeps the demo content in JSON and lets React/Remotion handle layout, typography, pagination, and export.

## What It Includes

- Remotion still compositions for carousel-style slides
- React + TypeScript renderer components
- JSON-driven demo content
- reusable theme variants using the same content
- design-system notes in `DESIGN-SYSTEM.md`
- rendering scripts for demo slides and previews

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

| Manifest                                              | Terminal                                              |
| ----------------------------------------------------- | ----------------------------------------------------- |
| ![Manifest variation](docs/demo-manifest-preview.png) | ![Terminal variation](docs/demo-terminal-preview.png) |

| Brutalist                                               | Neoprint                                              |
| ------------------------------------------------------- | ----------------------------------------------------- |
| ![Brutalist variation](docs/demo-brutalist-preview.png) | ![Neoprint variation](docs/demo-neoprint-preview.png) |

## Commands

Requires Node.js 22 or newer.

```bash
npm install
npm run verify
```

Open Remotion Studio:

```bash
npm run dev
```

Useful individual commands:

```bash
npm run check:public
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

For a practical recipe, see [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md).

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

## Scope

This is a renderer demo, not a production workflow. It excludes private content operations, brand assets, generated output, environment files, local assistant commands, and internal worktrees.

## Public Safety

Before publishing changes, run:

```bash
npm run verify
```

Security and public-safety notes live in [`SECURITY.md`](SECURITY.md).

## License

MIT.
