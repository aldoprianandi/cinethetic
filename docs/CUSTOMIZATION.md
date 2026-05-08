# Customization Guide

This guide covers the practical paths for adapting Cinethetic without turning the public demo into a private workflow dump.

## Quick Path

For the simplest customization path, edit the current demo JSON:

```text
src/data/posts/demo-carousel/carousel-content.json
```

Then run:

```bash
npm run check:data
npm run render:demo
```

Keep the slide `type` values valid:

- `text-title`
- `text-quote`
- `text-tips`
- `text-compare`
- `text-stat`
- `story-cta`

For a separate content set, copy the demo folder and wire that content into `src/demo-variants.ts`. Keep `src/data/demo-variants.json` focused on public theme registrations.

Render a still:

```bash
npm run compositions
npx remotion still src/index.ts DemoManifestSlide out/my-slide.png
```

## Switch A Theme

Theme variants are centralized in `src/theme.ts`.

Public demo registrations are centralized in:

```text
src/data/demo-variants.json
```

Use one of the public demo theme exports:

- `manifestV16Theme`
- `terminalV17Theme`
- `brutalistV21Theme`
- `neoprintV24Theme`

When adding a new theme, update:

- `src/theme.ts`
- `src/data/demo-variants.json`
- `README.md` if the theme is part of the public demo
- `docs/demo-*-preview.png` after visual output changes

## Add A Slide Type

Slide types are intentionally explicit. To add one:

1. Add the TypeScript type in `src/types.ts`.
2. Add render logic in `src/compositions/InstagramCarousel.tsx`.
3. Add a safe demo example in `carousel-content.json`.
4. Run `npm run typecheck`.
5. Render at least one still to inspect layout.

Avoid one-off layout fixes that only work for a single sentence. The renderer should tolerate normal copy length changes.

## Use Images

Local images should live under `public/images/` and be referenced from slide data with a public-relative path:

```json
{
  "imageSrc": "images/example.png"
}
```

Do not commit private brand assets, paid templates, analytics screenshots, customer screenshots, or generated campaign output.

Remote URLs, data URLs, absolute paths, and `..` traversal segments are rejected by the data checker.

## Release Checklist

Before publishing or pushing a demo change:

```bash
npm run verify
```

Also inspect the generated files in `out/` locally. `out/` is ignored and should not be committed.
