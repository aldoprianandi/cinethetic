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

- `manifestTheme`
- `terminalTheme`
- `gazetteTheme`
- `blueprintTheme`
- `polaroidTheme`
- `brutalistTheme`
- `vaporTheme`
- `redactTheme`
- `neoprintTheme`

Each theme pairs with a variant name from the `CarouselVariant` union in `src/types.ts` (for example `gazetteTheme` + `"gazette"`). The variant drives per-theme layout decisions via the flags in `src/compositions/carousel/variants.ts`.

When adding a new theme, update:

- `src/theme.ts`
- the `CarouselVariant` union in `src/types.ts`
- the flags in `src/compositions/carousel/variants.ts`
- `src/data/demo-variants.json`
- the allowlists in `scripts/check-data.mjs`
- `README.md` if the theme is part of the public demo
- `docs/demo-*-preview.png` after visual output changes

## Add A Slide Type

Slide types are intentionally explicit. To add one:

1. Add the TypeScript type in `src/types.ts`.
2. Add a slide module in `src/compositions/carousel/slides/` (one file per slide type).
3. Register it in the `renderSlide` dispatcher in `src/compositions/carousel/Carousel.tsx`.
4. Add validation rules in `src/data/validateCarouselContent.ts` and `scripts/check-data.mjs`.
5. Add a safe demo example in `carousel-content.json`.
6. Run `npm run check:data` and `npm run typecheck`.
7. Render at least one still to inspect layout.

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
