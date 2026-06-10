# Cinethetic Design System

Cinethetic is a Remotion carousel renderer. The design system is intentionally small: structured slide data, a compact set of slide archetypes, and theme tokens that can restyle the same content without changing the JSON.

## Source Of Truth

- Public demo variants: `src/data/demo-variants.json`
- Theme tokens: `src/theme.ts`
- Slide data contract: `src/types.ts`
- Renderer implementation: `src/compositions/carousel/` (slide modules, variant flags, dispatcher)
- Data validation: `scripts/check-data.mjs`

`src/theme.ts` is the visual source of truth. Documentation should describe that implementation, not a separate palette system.

## Public Themes

The public demo currently ships nine variants:

- `manifest`: editorial black-on-paper type system
- `terminal`: green-on-black developer console treatment
- `gazette`: newsprint serif treatment with a red accent
- `blueprint`: technical drafting-grid treatment in blue
- `polaroid`: warm cream snapshot treatment with serif display
- `brutalist`: loud poster treatment with high-contrast yellow and red
- `vapor`: deep purple treatment with magenta glow
- `redact`: monochrome dossier treatment with condensed caps
- `neoprint`: dark risograph/screen-print treatment with orange accent

Each public theme is registered in `src/data/demo-variants.json`, which drives Remotion composition registration and demo rendering.

## Slide Archetypes

The public demo content uses these slide types:

- `text-title`
- `text-quote`
- `text-tips`
- `text-compare`
- `story-cta`

Additional renderer support exists for story/image-heavy slide types in `src/types.ts`, but public samples should stay generic and safe.

## Token Rules

- Keep canvas dimensions in the theme object and register compositions from those values.
- Keep theme identity in color, typography, spacing, and progress treatment.
- Keep content meaning in JSON, not in theme-specific branches.
- Add a public theme only by updating the variant registry, theme tokens, docs, previews, and validation/render checks together.

## Content Rules

- Slide text should survive normal copy edits without manual layout changes.
- Long-copy fields should have documented budgets and validation checks.
- Image assets should be public-relative paths under `public/images/`.
- Do not allow remote URLs, data URLs, private brand assets, paid templates, analytics screenshots, or generated campaign output in public demo data.

## Visual Quality Checks

Before publishing visual changes:

```bash
npm run verify
```

Also inspect the generated previews in `out/demo/*/preview.png`. `verify` renders every public demo variant, but human inspection is still required for visual polish, text balance, and contrast.
