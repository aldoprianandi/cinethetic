import {mkdirSync} from 'fs';

import {CINETHETIC_FONT_LINK, CINETHETIC_THEMES} from './design-system.mjs';
import {launchBrowser} from './puppeteer-launch.mjs';

const palettes = CINETHETIC_THEMES;
const pad = 42;
const width = 540;
const height = 720;

const styles = (theme) => {
  const primary = theme.primarySurface === 'dark' ? theme.dark : theme.light;
  const inverse = theme.primarySurface === 'dark' ? theme.light : theme.dark;

  return `
  :root {
    --display: ${theme.typography.display};
    --body: ${theme.typography.body};
    --primary-bg: ${primary.bg};
    --primary-text: ${primary.fg};
    --primary-muted: ${primary.muted};
    --primary-accent: ${primary.accent};
    --primary-border: ${primary.border};
    --primary-panel: ${primary.panel};
    --primary-glow: ${primary.glow};
    --primary-shine: ${primary.shine};
    --inverse-bg: ${inverse.bg};
    --inverse-text: ${inverse.fg};
    --inverse-muted: ${inverse.muted};
    --inverse-accent: ${inverse.accent};
    --inverse-border: ${inverse.border};
    --inverse-panel: ${inverse.panel};
    --inverse-glow: ${inverse.glow};
    --inverse-shine: ${inverse.shine};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #0a0a0a;
    color: #ffffff;
  }

  .overview-header {
    padding: 16px 24px;
    background: #0a0a0a;
  }

  .overview-label {
    font-family: var(--body);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #707070;
  }

  .overview-grid {
    display: flex;
    gap: 16px;
    padding: 16px 24px 32px;
    background: #0a0a0a;
  }

  .card {
    width: ${width}px;
    height: ${height}px;
    padding: ${pad}px;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    position: relative;
    overflow: hidden;
    color: var(--text);
  }

  .card--primary {
    --bg: var(--primary-bg);
    --text: var(--primary-text);
    --muted: var(--primary-muted);
    --accent: var(--primary-accent);
    --border: var(--primary-border);
    --panel: var(--primary-panel);
    --glow: var(--primary-glow);
    --shine: var(--primary-shine);
  }

  .card--inverse {
    --bg: var(--inverse-bg);
    --text: var(--inverse-text);
    --muted: var(--inverse-muted);
    --accent: var(--inverse-accent);
    --border: var(--inverse-border);
    --panel: var(--inverse-panel);
    --glow: var(--inverse-glow);
    --shine: var(--inverse-shine);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top right, var(--glow) 0%, rgba(0, 0, 0, 0) 34%),
      linear-gradient(180deg, var(--shine) 0%, rgba(255, 255, 255, 0) 24%),
      var(--bg);
    z-index: 0;
  }

  .card__content,
  .footer {
    position: relative;
    z-index: 1;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 0;
  }

  .card__content--center {
    align-items: center;
    text-align: center;
  }

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
    color: var(--text);
  }

  .title--xl { font-size: 50px; max-width: 410px; }
  .title--lg { font-size: 40px; max-width: 390px; }
  .title--md { font-size: 34px; max-width: 420px; }

  .rule {
    width: 44px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent);
    margin-top: 18px;
  }

  .copy {
    font-family: var(--body);
    font-size: 15px;
    line-height: 1.58;
    font-weight: 520;
    color: var(--muted);
    max-width: 410px;
  }

  .copy--strong {
    color: var(--text);
    font-weight: 600;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
    font-family: var(--body);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 22px;
  }

  .step {
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 16px;
    align-items: start;
  }

  .step__number {
    font-family: var(--display);
    font-size: 30px;
    line-height: 0.88;
    color: var(--accent);
  }

  .step__title {
    font-family: var(--body);
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
  }

  .step__copy {
    font-family: var(--body);
    font-size: 13px;
    line-height: 1.55;
    font-weight: 520;
    color: var(--muted);
  }

  .divider {
    height: 1px;
    background: var(--border);
  }

  .quote-mark {
    position: absolute;
    top: 66px;
    left: 28px;
    font-family: Georgia, serif;
    font-size: 210px;
    line-height: 0.7;
    color: var(--accent);
    opacity: 0.16;
  }

  .quote-block {
    max-width: 404px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .quote-label {
    font-family: var(--body);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .compare-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 24px;
  }

  .compare-col {
    border-radius: 20px;
    padding: 18px;
    background: var(--panel);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .chip {
    align-self: flex-start;
    padding: 7px 12px;
    border-radius: 999px;
    font-family: var(--body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .chip--neutral {
    background: rgba(127, 127, 127, 0.14);
    color: var(--muted);
  }

  .chip--accent {
    background: var(--accent);
    color: var(--bg);
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
    font-size: 13px;
    line-height: 1.48;
  }

  .compare-item--muted { color: var(--muted); }
  .compare-item--strong { color: var(--text); font-weight: 600; }

  .compare-bullet {
    color: var(--accent);
    font-weight: 700;
  }

  .ghost-block {
    position: absolute;
    top: 28px;
    right: 0;
    width: 136px;
    height: 136px;
    background: var(--panel);
    border: 1px solid var(--border);
    opacity: 0.72;
  }

  .bg-word {
    position: absolute;
    top: 24px;
    left: -8px;
    font-family: var(--display);
    font-size: 180px;
    line-height: 0.8;
    text-transform: uppercase;
    color: var(--border);
    opacity: 0.64;
  }
`;
};

const shell = (mode, content) => `
  <section class="card card--${mode}">
    <div class="card__content">${content}</div>
    <div class="footer">
      <div>@cinethetic</div>
      <div>Palette test</div>
    </div>
  </section>
`;

const layout1 = () =>
  shell(
    'primary',
    `
      <div class="ghost-block"></div>
      <div class="eyebrow">Prompt Craft</div>
      <div class="title title--xl" style="margin-top: 18px;">One prompt changed everything.</div>
      <div class="rule"></div>
      <div class="copy" style="margin-top: 18px;">The jump from generic to editorial is not about talent. It is about giving the model a better brief.</div>
      <div class="copy copy--strong" style="margin-top: 6px;">Better structure. Better image decisions. Better outputs.</div>
    `,
  );

const layout2 = () =>
  shell(
    'inverse',
    `
      <div class="eyebrow">The Method</div>
      <div class="title title--lg" style="margin-top: 18px;">Three rules.</div>
      <div class="steps">
        <div class="step">
          <div class="step__number">01</div>
          <div>
            <div class="step__title">Name the camera</div>
            <div class="step__copy">Use a real device like “Hasselblad X2D, 85mm f/1.4” instead of generic quality claims.</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="step">
          <div class="step__number">02</div>
          <div>
            <div class="step__title">Direct the light</div>
            <div class="step__copy">Specify source, direction, and tone so the scene only has one clear interpretation.</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="step">
          <div class="step__number">03</div>
          <div>
            <div class="step__title">End with exclusions</div>
            <div class="step__copy">Negative constraints strip out the fake polish: avoid CGI skin, flat flash, and over-smoothing.</div>
          </div>
        </div>
      </div>
    `,
  );

const layout3 = () =>
  shell(
    'primary',
    `
      <div class="bg-word">Brief</div>
      <div class="card__content card__content--center" style="flex: 1; justify-content: center;">
        <div class="quote-mark">“</div>
        <div class="quote-block">
          <div class="quote-label">Core Principle</div>
          <div class="title title--lg" style="text-align: center;">The prompt is not a wish. It is a brief.</div>
          <div class="rule" style="margin-top: 0;"></div>
          <div class="copy" style="text-align: center; max-width: 360px;">Write like you are directing a photographer with constraints, not tossing adjectives into a slot machine.</div>
        </div>
      </div>
    `,
  );

const compareItem = (text, tone) => `
  <li class="compare-item compare-item--${tone}">
    <span class="compare-bullet">•</span>
    <span>${text}</span>
  </li>
`;

const layout4 = () =>
  shell(
    'inverse',
    `
      <div class="eyebrow">Comparison</div>
      <div class="title title--md" style="margin-top: 18px;">Generic intent vs specific direction.</div>
      <div class="compare-grid">
        <div class="compare-col">
          <div class="chip chip--neutral">Don't</div>
          <ul class="compare-list">
            ${compareItem('"Beautiful portrait"', 'muted')}
            ${compareItem('"Cinematic lighting"', 'muted')}
            ${compareItem('"High quality, 4K"', 'muted')}
            ${compareItem('No exclusions or camera cues', 'muted')}
          </ul>
        </div>
        <div class="compare-col">
          <div class="chip chip--accent">Do</div>
          <ul class="compare-list">
            ${compareItem('"Woman, 30s, linen blazer"', 'strong')}
            ${compareItem('"Portra 400, 85mm f/1.4"', 'strong')}
            ${compareItem('"Window light from the left"', 'strong')}
            ${compareItem('"Avoid CGI skin and flash glare"', 'strong')}
          </ul>
        </div>
      </div>
    `,
  );

async function main() {
  mkdirSync(new URL('../out/palette-tests/', import.meta.url), {recursive: true});
  const browser = await launchBrowser();

  for (const theme of palettes) {
    const page = await browser.newPage();
    await page.setViewport({width: 2280, height: 840});

    const html = `<!DOCTYPE html>
<html>
  <head>
    ${CINETHETIC_FONT_LINK}
    <style>${styles(theme)}</style>
  </head>
  <body>
    <div class="overview-header">
      <div class="overview-label">${theme.id} · ${theme.name} · 4 layout templates</div>
    </div>
    <div class="overview-grid">
      ${layout1()}
      ${layout2()}
      ${layout3()}
      ${layout4()}
    </div>
  </body>
</html>`;

    await page.setContent(html, {waitUntil: 'domcontentloaded'});
    await page.waitForFunction(() => document.fonts?.status !== 'loading', {timeout: 3000}).catch(() => {});
    await new Promise((resolve) => setTimeout(resolve, 120));
    const outDir = new URL('../out/palette-tests/', import.meta.url).pathname;
    await page.screenshot({path: `${outDir}${theme.id}-${theme.name}-layouts.png`, fullPage: true});
    await page.close();
    console.log(`✓ ${theme.id}-${theme.name}`);
  }

  await browser.close();
}

main().catch(console.error);
