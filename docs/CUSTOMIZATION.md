# Customization Guide

This guide covers the practical paths for adapting Cinethetic without turning the public demo into a private workflow dump.

## Quick Path

1. Copy the demo content folder:

```bash
cp -R src/data/posts/demo-carousel src/data/posts/my-carousel
```

2. Edit the new JSON file:

```text
src/data/posts/my-carousel/carousel-content.json
```

3. Keep the slide `type` values valid:

- `text-title`
- `text-quote`
- `text-tips`
- `text-compare`
- `text-stat`
- `story-cta`

4. Export a new `CarouselData` object from `post-data.ts`.
5. Register the composition in `src/Root.tsx`.
6. Render a still:

```bash
npm run compositions
npx remotion still src/index.ts DemoManifestSlide out/my-slide.png
```

## Switch A Theme

Theme variants are centralized in `src/theme.ts`.

For the demo carousel, edit:

```text
src/data/posts/demo-carousel/post-data.ts
```

Use one of the existing theme exports:

- `manifestV16Theme`
- `terminalV17Theme`
- `brutalistV21Theme`
- `neoprintV24Theme`
- `gazetteV18Theme`
- `blueprintV19Theme`
- `polaroidV20Theme`

When adding a new theme, update:

- `src/theme.ts`
- `src/Root.tsx`
- `scripts/render-demo.mjs`
- `README.md` if the theme is part of the public demo

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

## Release Checklist

Before publishing or pushing a demo change:

```bash
npm run verify
```

Also inspect the generated files in `out/` locally. `out/` is ignored and should not be committed.
