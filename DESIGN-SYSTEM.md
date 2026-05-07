# Cinethetic Design System

This file is the source of truth for visual consistency across `palette-test`, `mock-*`, and future carousel templates.

## System Name

- Name: `Cinethetic Editorial System`
- Intent: editorial, assertive, scroll-stopping, minimal ornament, high contrast, brutalist headline energy with disciplined spacing.

## Core Principle

- One visual language, many decks.
- Variety should come from content structure and theme application, not random font swaps or arbitrary color logic.

## Typography

Typography is fixed across all themes.

- Display font: `Archivo Black`
- Body font: `Inter Tight`
- Rule: no theme-specific body font swaps

### Type Scale

- `eyebrow`
  - 11px
  - 700
  - uppercase
  - tracking `0.22em`
- `display-hero`
  - 52px
  - 900
  - uppercase
  - line-height `0.9`
- `display-xl`
  - 46px
  - 900
  - uppercase
  - line-height `0.9`
- `display-lg`
  - 40px
  - 900
  - uppercase
  - line-height `0.92`
- `display-md`
  - 34px
  - 900
  - uppercase
  - line-height `0.94`
- `title-sm`
  - 28px
  - 900
  - uppercase
  - line-height `0.94`
- `body`
  - 15px
  - 520
  - line-height `1.58`
- `body-strong`
  - 15px
  - 600
  - line-height `1.52`
- `body-sm`
  - 13px
  - 520
  - line-height `1.5`
- `meta`
  - 10px
  - 600
  - tracking `0.04em`
- `button`
  - 13px
  - 700
  - uppercase
  - tracking `0.09em`

## Color System

Each theme has exactly two surfaces:

- `primary surface`
  - the identity-heavy surface
- `inverse surface`
  - the counter-surface used for alternation

Do not invent extra background colors per deck unless they are explicitly added to the system.

### Theme B: `ink-coral`

- Primary / dark
  - bg `#12151e`
  - fg `#f5efe6`
  - muted `#97a0ae`
  - accent `#e45c50`
- Inverse / light
  - bg `#f5efe6`
  - fg `#171411`
  - muted `#6d6660`
  - accent `#e45c50`

### Theme H: `carbon-lime`

- Primary / dark
  - bg `#10120d`
  - fg `#eff2e8`
  - muted `#a4ae92`
  - accent `#bbd61f`
- Inverse / light
  - bg `#d3e92f`
  - fg `#11140f`
  - muted `#44521a`
  - accent `#11140f`

## Surface Rules

- Accent must be semantically stable inside each surface.
- `B` always uses coral as accent on both surfaces.
- `H` uses lime accent on dark surface, black accent on lime surface.
- Buttons, chips, dividers, and pagination active states must derive from the same accent token for that surface.
- Decorative shapes must use border/panel/glow tokens, not ad-hoc opaque fills.

## Spacing

Base spacing scale:

- `4`
- `8`
- `12`
- `16`
- `20`
- `24`
- `32`

Canvas rules for mock slides:

- width `540`
- height `720`
- horizontal padding `42`
- top padding `44`
- bottom padding `34`

## Shape Language

- Card corners: square to slightly softened only through internal panels, not playful rounding
- Panel radius: `20`
- Callout radius: `18`
- Pill/button radius: `999`
- Rule width: `42`
- Rule height: `3`

Decorative motifs allowed:

- ghost ring
- ghost block
- oversized background word
- soft radial glow

Decorative motifs not allowed:

- random gradients unrelated to theme
- extra fonts as decoration
- novelty icons
- multiple competing ornament styles in one deck

## Component Set

Allowed reusable components:

- `eyebrow`
- `headline`
- `supporting copy`
- `rule`
- `panel`
- `callout`
- `button`
- `compare column`
- `metric card`
- `footer + pagination`

If a layout needs a new component, define it once in the shared system before using it in one deck.

## Slide Archetypes

Every deck should be composed from these archetypes:

- `hook`
  - big statement, minimal support
- `confession`
  - narrative honesty or framing
- `process`
  - numbered steps or method explanation
- `compare`
  - two-column contrast with mirrored structure
- `proof`
  - stats, metrics, transformation, or evidence
- `cta`
  - one action, one reason, one clear button

## Consistency Rules

- Never change fonts between themes.
- Never create a new accent logic inside a single script.
- Never let `palette-test` define colors separately from the mock system.
- Never let one deck invent a different button style.
- Never mix “soft editorial serif” slides into this system unless the whole system changes.

## Implementation Source Of Truth

- Machine-readable tokens: `scripts/design-system.mjs`
- Shared mock renderer: `scripts/mock-shared.mjs`

## Next Step

After this file is approved, all rendering scripts and Remotion variants should be aligned to this system instead of inventing local exceptions.
