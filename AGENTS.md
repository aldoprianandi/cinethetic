# Agent Instructions

## Project Context

Cinethetic is a public Remotion, React, and TypeScript renderer for programmable social carousel stills. Treat this repository as a generic public demo, not as a private workflow dump.

The project should stay focused on:

- JSON-driven carousel content
- reusable visual themes
- Remotion still compositions
- clean public documentation
- safe demo data with no private brand or client material

## Environment

- Use Node.js 22 or newer.
- Use `npm` and the existing `package-lock.json`.
- Do not introduce another package manager unless explicitly requested.
- Generated renders belong in `out/` and should not be committed.

## Common Commands

Run the smallest useful check for the change, and use the full verification set before claiming the repo is demo-ready:

```bash
npm run verify
```

Useful targeted checks:

```bash
npm run check:public
npm run check:data
npm run test:data
npm run typecheck
npm run compositions
npm run render:demo -- manifest
```

Useful local commands:

```bash
npm run dev
npm run render:demo
node scripts/render-demo.mjs manifest
node scripts/render-demo.mjs terminal
node scripts/render-demo.mjs brutalist
node scripts/render-demo.mjs neoprint
# also: gazette, blueprint, polaroid, vapor, redact
npm run render:reel
npm run render:hero
```

## Public Safety Rules

- Do not add API keys, tokens, cookies, local machine paths, private notes, or internal client data.
- Do not add private brand assets, paid content, internal templates, or production workflow logic.
- Keep demo copy generic and inspectable.
- Keep screenshots and previews limited to safe demo content.
- Do not commit generated videos, large binary outputs, `out/`, caches, or environment files.
- If adding new ignore patterns, preserve existing safety coverage in `.gitignore`.

## Implementation Rules

- Prefer the existing React and Remotion composition patterns.
- Keep slide data typed through `src/types.ts`.
- Keep public demo variants registered through `src/data/demo-variants.json`.
- Keep themes centralized in `src/theme.ts` unless there is a clear reason to split them.
- When adding a theme, also add or update:
  - the `CarouselVariant` union in `src/types.ts`
  - per-theme layout flags in `src/compositions/carousel/variants.ts`
  - public demo registration in `src/data/demo-variants.json`
  - data validation allowlists in `scripts/check-data.mjs`
  - README examples or preview references when user-facing
- When adding a slide type, update `src/types.ts`, add a slide module in `src/compositions/carousel/slides/`, and register it in the `renderSlide` dispatcher in `src/compositions/carousel/Carousel.tsx`.
- Avoid one-off layout hacks that only work for the current demo text.

## Documentation Rules

- Keep `README.md` beginner-friendly and demo-focused.
- Keep `DESIGN-SYSTEM.md` focused on reusable visual rules.
- Keep `SECURITY.md` and `docs/CUSTOMIZATION.md` aligned with public setup and safety expectations.
- If previews change materially, regenerate the affected images in `docs/`.
- Keep `AGENTS.md` and `CLAUDE.md` aligned when changing agent instructions.

## Commit Style

Use conventional commits:

- `feat:` for new user-facing capability
- `fix:` for bug fixes
- `docs:` for documentation-only changes
- `chore:` for tooling, metadata, or maintenance
- `refactor:` for internal code restructuring without behavior change
