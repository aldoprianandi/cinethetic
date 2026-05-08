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

- `src/data/demo-variants.json`
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
npm ci
npm run verify
```

Open Remotion Studio:

```bash
npm run dev
```

Useful individual commands:

```bash
npm run check:public
npm run check:data
npm run test:data
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
src/data/demo-variants.json
```

The public demo variants are registered there. Public variants currently use:

- `manifestV16Theme`
- `terminalV17Theme`
- `brutalistV21Theme`
- `neoprintV24Theme`

Theme token objects live in `src/theme.ts`.

### 3. Use Your Own Content

For the fastest path, edit `src/data/posts/demo-carousel/carousel-content.json` in place and keep the existing slide types.

For a separate content set, copy `src/data/posts/demo-carousel/` to a new folder and wire that content into `src/demo-variants.ts`. Keep `src/data/demo-variants.json` for public theme registrations, not private content operations.

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
  demo-variants.ts
  data/demo-variants.json
  compositions/InstagramCarousel.tsx
  data/posts/demo-carousel/
  theme.ts
  types.ts
scripts/
  check-data.mjs
  public-check.mjs
  render-demo.mjs
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
