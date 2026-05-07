import {mkdirSync} from 'fs';
import {
  CINETHETIC_FONT_LINK,
  CINETHETIC_SHAPE,
  CINETHETIC_SPACING,
  CINETHETIC_THEMES,
} from './design-system.mjs';

export const [B, H] = CINETHETIC_THEMES;
export const THEMES = CINETHETIC_THEMES;

const W = CINETHETIC_SHAPE.cardWidth;
const HGT = CINETHETIC_SHAPE.cardHeight;
const PAD_X = CINETHETIC_SPACING.padX;
const PAD_TOP = CINETHETIC_SPACING.padTop;
const PAD_BOTTOM = CINETHETIC_SPACING.padBottom;

const fontLink = CINETHETIC_FONT_LINK;
const OVERVIEW_GAP = 16;
const OVERVIEW_PAD_X = 24;
const OVERVIEW_PAD_Y = 16;
const OVERVIEW_HEADER_H = 52;

const baseStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--body);
  }

  .card {
    width: ${W}px;
    height: ${HGT}px;
    padding: ${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, var(--glow) 0%, rgba(0, 0, 0, 0) 34%),
      linear-gradient(180deg, var(--shine) 0%, rgba(255, 255, 255, 0) 22%),
      var(--bg);
    color: var(--fg);
  }

  .card__main {
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: var(--main-justify, center);
    align-items: var(--main-align, flex-start);
    text-align: var(--text-align, left);
    gap: 18px;
    position: relative;
    z-index: 1;
  }

  .card__footer {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 14px;
    position: relative;
    z-index: 1;
  }

  .footer__meta {
    font-family: var(--body);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .footer__meta:last-child {
    text-align: right;
  }

  .pagination {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .pagination__dot {
    width: 5px;
    height: 3px;
    border-radius: 999px;
    background: var(--dot-idle);
    transition: width 160ms ease;
  }

  .pagination__dot--active {
    width: 15px;
    background: var(--accent);
  }

  .stack {
    display: flex;
    flex-direction: column;
  }

  .stack--xs { gap: 8px; }
  .stack--sm { gap: 12px; }
  .stack--md { gap: 16px; }
  .stack--lg { gap: 20px; }
  .stack--xl { gap: 24px; }

  .eyebrow {
    font-family: var(--body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .title {
    font-family: var(--display);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.9;
    max-width: 430px;
  }

  .title--hero { font-size: 52px; }
  .title--xl { font-size: 46px; }
  .title--lg { font-size: 40px; }
  .title--md { font-size: 34px; }
  .title--sm { font-size: 28px; line-height: 0.94; }

  .rule {
    width: 42px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent);
  }

  .copy {
    font-family: var(--body);
    font-size: 15px;
    line-height: 1.58;
    font-weight: 520;
    max-width: 412px;
  }

  .copy--muted { color: var(--muted); }
  .copy--strong { color: var(--fg); font-weight: 600; }
  .copy--italic { font-style: italic; }
  .copy--tight { line-height: 1.46; }
  .copy--small { font-size: 13px; }

  .copy--wide { max-width: 440px; }

  .center {
    align-items: center;
    text-align: center;
  }

  .panel {
    width: 100%;
    border-radius: 20px;
    padding: 18px;
    background: var(--panel);
    border: 1px solid var(--border);
  }

  .panel--soft {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, var(--panel) 100%);
  }

  .callout {
    width: 100%;
    border-radius: 18px;
    padding: 16px 18px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 28px;
    border-radius: 999px;
    background: var(--button-bg);
    color: var(--button-fg);
    font-family: var(--body);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    text-align: center;
  }

  .metric {
    width: 100%;
    border-radius: 20px;
    padding: 20px 18px;
    background: var(--panel);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .metric__value {
    font-family: var(--display);
    font-size: 96px;
    line-height: 0.82;
    color: var(--accent);
    font-variant-numeric: tabular-nums lining-nums;
    white-space: nowrap;
  }

  .metric__value small {
    font-size: 44px;
  }

  .metric__value--compact {
    font-size: 82px;
  }

  .metric__value--dense {
    font-size: 72px;
  }

  .metric__value--muted {
    color: var(--muted);
    opacity: 0.34;
  }

  .metric__label {
    font-family: var(--body);
    font-size: 15px;
    font-weight: 600;
    line-height: 1.45;
    color: var(--fg);
  }

  .metric__note {
    font-family: var(--body);
    font-size: 13px;
    line-height: 1.45;
    color: var(--muted);
  }

  .step-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .step-row {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 14px;
    align-items: start;
  }

  .step-badge {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    background: var(--button-bg);
    color: var(--button-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--display);
    font-size: 23px;
    line-height: 1;
  }

  .step-number {
    font-family: var(--display);
    font-size: 72px;
    line-height: 0.78;
    color: var(--accent);
  }

  .step-title {
    font-family: var(--display);
    font-size: 32px;
    line-height: 0.94;
    text-transform: uppercase;
    max-width: 360px;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: var(--border);
  }

  .kv-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .kv-row {
    width: 100%;
    display: grid;
    grid-template-columns: 126px 24px 1fr;
    gap: 14px;
    align-items: center;
    padding: 14px 0;
  }

  .kv-row + .kv-row {
    border-top: 1px solid var(--border);
  }

  .kv-old {
    font-family: var(--body);
    color: var(--muted);
    font-size: 14px;
    line-height: 1.42;
    font-weight: 600;
  }

  .kv-arrow {
    font-family: var(--body);
    color: var(--accent);
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }

  .kv-new {
    font-family: var(--body);
    color: var(--fg);
    font-size: 14px;
    line-height: 1.42;
    font-weight: 600;
  }

  .kv-new--compact {
    font-size: 13px;
    line-height: 1.4;
  }

  .compare-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .compare-col {
    min-height: 226px;
    border-radius: 20px;
    padding: 18px;
    border: 1px solid var(--border);
    background: var(--panel);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .chip {
    align-self: flex-start;
    border-radius: 999px;
    padding: 7px 12px;
    font-family: var(--body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .chip--neutral {
    background: var(--chip-neutral-bg);
    color: var(--muted);
  }

  .chip--accent {
    background: var(--button-bg);
    color: var(--button-fg);
  }

  .compare-list {
    display: flex;
    flex-direction: column;
    gap: 11px;
    list-style: none;
  }

  .compare-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-family: var(--body);
    font-size: 14px;
    line-height: 1.46;
  }

  .compare-item--muted {
    color: var(--muted);
    font-weight: 560;
  }

  .compare-item--strong {
    color: var(--fg);
    font-weight: 600;
  }

  .compare-bullet {
    color: var(--accent);
    font-weight: 700;
  }

  .placeholder {
    width: 100%;
    height: 260px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 28%),
      var(--placeholder);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder--sm {
    height: 214px;
  }

  .placeholder__label {
    font-family: var(--body);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--placeholder-label);
  }

  .quote-mark {
    position: absolute;
    top: 64px;
    left: 2px;
    font-family: Georgia, serif;
    font-size: 148px;
    line-height: 0.6;
    color: var(--accent);
    opacity: 0.2;
  }

  .quote-block {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-top: 56px;
  }

  .tiny-label {
    font-family: var(--body);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .stat-strip {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .stat-row {
    display: grid;
    grid-template-columns: 156px 1fr;
    gap: 14px;
    align-items: start;
    padding: 4px 0;
  }

  .stat-row__value {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 4px;
    min-width: 0;
    font-variant-numeric: tabular-nums lining-nums;
  }

  .stat-row__value strong {
    font-family: var(--display);
    font-size: 38px;
    line-height: 0.86;
    color: var(--accent);
    white-space: nowrap;
  }

  .stat-row__value--compact strong {
    font-size: 34px;
  }

  .stat-row__value--dense strong {
    font-size: 30px;
  }

  .stat-row__value span {
    font-family: var(--body);
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    white-space: nowrap;
  }

  .stat-row__copy {
    font-family: var(--body);
    font-size: 14px;
    line-height: 1.46;
    color: var(--fg);
  }

  .highlight {
    color: var(--accent);
  }

  .ghost-ring {
    position: absolute;
    border: 2px solid var(--border);
    border-radius: 999px;
    opacity: 0.9;
    pointer-events: none;
  }

  .ghost-block {
    position: absolute;
    background: var(--panel);
    border: 1px solid var(--border);
    opacity: 0.72;
    pointer-events: none;
  }

  .bg-word {
    position: absolute;
    font-family: var(--display);
    font-size: 180px;
    line-height: 0.8;
    color: var(--border);
    opacity: 0.65;
    text-transform: uppercase;
    pointer-events: none;
  }

  .long-rule {
    width: 100%;
    height: 2px;
    background: var(--border);
  }

  .process-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
  }

  .process-row {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 14px;
    align-items: start;
  }

  .process-row__index {
    font-family: var(--display);
    font-size: 28px;
    line-height: 0.95;
    color: var(--accent);
  }

  .process-row__copy {
    font-family: var(--body);
    font-size: 15px;
    line-height: 1.45;
    color: var(--fg);
  }
`;

const tokensFor = (theme, surface) => {
  const primary =
    theme.primarySurface === 'dark' ? theme.dark : theme.light;
  const inverse =
    theme.primarySurface === 'dark' ? theme.light : theme.dark;
  const resolvedSurface =
    surface === 'dark'
      ? theme.dark
      : surface === 'light'
        ? theme.light
        : surface === 'primary' || surface === 'bg1'
          ? primary
          : inverse;
  const isDark = resolvedSurface === theme.dark;
  const dotIdle = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(17,20,15,0.14)';
  const chipNeutralBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(17,20,15,0.08)';

  return [
    `--display:${theme.typography.display}`,
    `--body:${theme.typography.body}`,
    `--bg:${resolvedSurface.bg}`,
    `--fg:${resolvedSurface.fg}`,
    `--muted:${resolvedSurface.muted}`,
    `--accent:${resolvedSurface.accent}`,
    `--border:${resolvedSurface.border}`,
    `--panel:${resolvedSurface.panel}`,
    `--button-bg:${resolvedSurface.buttonBg}`,
    `--button-fg:${resolvedSurface.buttonFg}`,
    `--placeholder:${resolvedSurface.placeholder}`,
    `--placeholder-label:${resolvedSurface.placeholderLabel}`,
    `--glow:${resolvedSurface.glow}`,
    `--shine:${resolvedSurface.shine}`,
    `--dot-idle:${dotIdle}`,
    `--chip-neutral-bg:${chipNeutralBg}`,
  ].join(';');
};

export const slide = (
  theme,
  surface,
  content,
  counter,
  total,
  {
    justify = 'center',
    align = 'flex-start',
    textAlign = 'left',
    footerHandle = '@cinethetic',
  } = {},
) => {
  return `<article class="card" style="${tokensFor(theme, surface)};--main-justify:${justify};--main-align:${align};--text-align:${textAlign};">
    <div class="card__main">${content}</div>
    <div class="card__footer">
      <div class="footer__meta">${escapeHtml(footerHandle)}</div>
      <div class="pagination">${Array.from({length: total}, (_, index) => `<span class="pagination__dot${index + 1 === counter ? ' pagination__dot--active' : ''}"></span>`).join('')}</div>
      <div class="footer__meta">${counter}/${total}</div>
    </div>
  </article>`;
};

export const placeholder = (label, small = false) =>
  `<div class="placeholder${small ? ' placeholder--sm' : ''}"><div class="placeholder__label">${label}</div></div>`;

export const button = (label) => `<div class="button">${label}</div>`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const sizeClassForValue = (value) => {
  const length = String(value).trim().length;
  if (length >= 5) return 'dense';
  if (length >= 4) return 'compact';
  return 'base';
};

export const metricValue = (value, suffix = '', {muted = false} = {}) => {
  const sizeClass = sizeClassForValue(value);
  const classes = [
    'metric__value',
    sizeClass !== 'base' ? `metric__value--${sizeClass}` : '',
    muted ? 'metric__value--muted' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<div class="${classes}">${escapeHtml(value)}${
    suffix ? `<small>${escapeHtml(` ${suffix}`)}</small>` : ''
  }</div>`;
};

export const statRow = ({value, label, copy}) => {
  const sizeClass = sizeClassForValue(value);
  const valueClasses = ['stat-row__value', sizeClass !== 'base' ? `stat-row__value--${sizeClass}` : '']
    .filter(Boolean)
    .join(' ');

  return `<div class="stat-row">
    <div class="${valueClasses}"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>
    <div class="stat-row__copy">${escapeHtml(copy)}</div>
  </div>`;
};

export const replaceRow = ({from, to}) => {
  const toClasses = ['kv-new', String(to).length >= 38 ? 'kv-new--compact' : '']
    .filter(Boolean)
    .join(' ');

  return `<div class="kv-row">
    <div class="kv-old">${escapeHtml(from)}</div>
    <div class="kv-arrow">→</div>
    <div class="${toClasses}">${escapeHtml(to)}</div>
  </div>`;
};

export const quoteBlock = (label, headline, copy) => `
  <div class="quote-block">
    <div class="quote-mark">“</div>
    <div class="tiny-label">${label}</div>
    <div class="title title--lg">${headline}</div>
    <div class="rule"></div>
    <div class="copy copy--muted">${copy}</div>
  </div>
`;

export const deckHtml = (slideMarkup) => `<!DOCTYPE html>
<html>
  <head>
    ${fontLink}
    <style>${baseStyles}</style>
  </head>
  <body>${slideMarkup}</body>
</html>`;

const overviewHtml = (slides, label) => `<!DOCTYPE html>
<html>
  <head>
    ${fontLink}
    <style>
      ${baseStyles}

      body {
        background: #0a0a0a;
        color: #ffffff;
        font-family: var(--body, 'Inter Tight', sans-serif);
      }

      .overview-header {
        padding: ${OVERVIEW_PAD_Y}px ${OVERVIEW_PAD_X}px;
        background: #0a0a0a;
      }

      .overview-label {
        font-family: 'Inter Tight', sans-serif;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #707070;
      }

      .overview-grid {
        display: flex;
        gap: ${OVERVIEW_GAP}px;
        padding: ${OVERVIEW_PAD_Y}px ${OVERVIEW_PAD_X}px ${OVERVIEW_PAD_Y * 2}px;
        background: #0a0a0a;
        align-items: flex-start;
      }

      .overview-grid .card {
        flex: 0 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="overview-header">
      <div class="overview-label">${label}</div>
    </div>
    <div class="overview-grid">
      ${slides.join('')}
    </div>
  </body>
</html>`;

export const renderDeckSets = async (browser, baseDir, entries) => {
  for (const {type, gen} of entries) {
    for (const theme of THEMES) {
      const slides = gen(theme);
      const dir = `${baseDir}mock-${type}-${theme.id}/`;
      mkdirSync(dir, {recursive: true});

      for (let index = 0; index < slides.length; index += 1) {
        const page = await browser.newPage();
        await page.setViewport({width: W, height: HGT});
        await page.setContent(deckHtml(slides[index]), {waitUntil: 'domcontentloaded'});
        await page.waitForFunction(() => document.fonts?.status !== 'loading', {timeout: 3000}).catch(() => {});
        await new Promise((resolve) => setTimeout(resolve, 120));
        await page.screenshot({path: `${dir}slide-${index + 1}.png`});
        await page.close();
      }

      const overviewPage = await browser.newPage();
      const overviewWidth =
        OVERVIEW_PAD_X * 2 + W * slides.length + OVERVIEW_GAP * Math.max(slides.length - 1, 0);
      await overviewPage.setViewport({width: overviewWidth, height: HGT + OVERVIEW_HEADER_H + OVERVIEW_PAD_Y * 3});
      await overviewPage.setContent(
        overviewHtml(
          slides,
          `${type} · ${theme.id} · ${theme.name} · ${slides.length} slides`,
        ),
        {waitUntil: 'domcontentloaded'},
      );
      await overviewPage.waitForFunction(() => document.fonts?.status !== 'loading', {timeout: 3000}).catch(() => {});
      await new Promise((resolve) => setTimeout(resolve, 120));
      await overviewPage.screenshot({
        path: `${baseDir}mock-${type}-${theme.id}-overview.png`,
        fullPage: true,
      });
      await overviewPage.close();

      console.log(`✓ ${type}-${theme.id} (${slides.length} slides)`);
    }
  }
};
