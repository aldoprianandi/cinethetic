export const CINETHETIC_FONT_LINK =
  '<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">';

export const CINETHETIC_TYPOGRAPHY = {
  families: {
    display: "'Archivo Black', sans-serif",
    body: "'Inter Tight', sans-serif",
  },
  styles: {
    eyebrow: {
      font: 'body',
      size: 11,
      weight: 700,
      lineHeight: 1.1,
      letterSpacing: '0.22em',
      transform: 'uppercase',
    },
    displayHero: {
      font: 'display',
      size: 52,
      weight: 900,
      lineHeight: 0.9,
      transform: 'uppercase',
    },
    displayXl: {
      font: 'display',
      size: 46,
      weight: 900,
      lineHeight: 0.9,
      transform: 'uppercase',
    },
    displayLg: {
      font: 'display',
      size: 40,
      weight: 900,
      lineHeight: 0.92,
      transform: 'uppercase',
    },
    displayMd: {
      font: 'display',
      size: 34,
      weight: 900,
      lineHeight: 0.94,
      transform: 'uppercase',
    },
    titleSm: {
      font: 'display',
      size: 28,
      weight: 900,
      lineHeight: 0.94,
      transform: 'uppercase',
    },
    body: {
      font: 'body',
      size: 15,
      weight: 520,
      lineHeight: 1.58,
    },
    bodyStrong: {
      font: 'body',
      size: 15,
      weight: 600,
      lineHeight: 1.52,
    },
    bodySm: {
      font: 'body',
      size: 13,
      weight: 520,
      lineHeight: 1.5,
    },
    meta: {
      font: 'body',
      size: 10,
      weight: 600,
      lineHeight: 1,
      letterSpacing: '0.04em',
    },
    button: {
      font: 'body',
      size: 13,
      weight: 700,
      lineHeight: 1,
      letterSpacing: '0.09em',
      transform: 'uppercase',
    },
    stepNumber: {
      font: 'display',
      size: 72,
      weight: 900,
      lineHeight: 0.78,
      transform: 'uppercase',
    },
  },
};

export const CINETHETIC_SPACING = {
  padX: 42,
  padTop: 44,
  padBottom: 34,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const CINETHETIC_SHAPE = {
  cardWidth: 540,
  cardHeight: 720,
  panelRadius: 20,
  calloutRadius: 18,
  pillRadius: 999,
  ruleWidth: 42,
  ruleHeight: 3,
  buttonHeight: 48,
};

export const CINETHETIC_COMPONENTS = {
  button: {
    minHeight: CINETHETIC_SHAPE.buttonHeight,
    horizontalPadding: 28,
  },
  panel: {
    padding: 18,
  },
  callout: {
    paddingY: 16,
    paddingX: 18,
    accentBorderWidth: 3,
  },
  compareColumn: {
    padding: 18,
  },
  footer: {
    gap: 14,
  },
};

export const CINETHETIC_SLIDE_ARCHETYPES = [
  {
    id: 'hook',
    description: 'Big brutalist headline with one accent gesture and minimal supporting copy.',
  },
  {
    id: 'confession',
    description: 'Single narrative statement with one proof sentence and calm spacing.',
  },
  {
    id: 'process',
    description: 'Numbered list or method explanation with stacked rhythm.',
  },
  {
    id: 'compare',
    description: 'Two-column contrast using matched card shells, not ad-hoc boxes.',
  },
  {
    id: 'proof',
    description: 'One or two metrics inside panels with generous whitespace and clear emphasis.',
  },
  {
    id: 'cta',
    description: 'Centered closing slide with one action, one reason, one button.',
  },
];

export const CINETHETIC_THEMES = [
  {
    id: 'B',
    name: 'ink-coral',
    typography: CINETHETIC_TYPOGRAPHY.families,
    primarySurface: 'dark',
    dark: {
      bg: '#12151e',
      fg: '#f5efe6',
      muted: '#97a0ae',
      accent: '#e45c50',
      border: 'rgba(245, 239, 230, 0.12)',
      panel: 'rgba(255, 255, 255, 0.05)',
      buttonBg: '#e45c50',
      buttonFg: '#ffffff',
      placeholder: '#1d2230',
      placeholderLabel: 'rgba(245, 239, 230, 0.38)',
      glow: 'rgba(228, 92, 80, 0.22)',
      shine: 'rgba(255, 255, 255, 0.05)',
    },
    light: {
      bg: '#f5efe6',
      fg: '#171411',
      muted: '#6d6660',
      accent: '#e45c50',
      border: 'rgba(23, 20, 17, 0.1)',
      panel: 'rgba(255, 255, 255, 0.42)',
      buttonBg: '#e45c50',
      buttonFg: '#ffffff',
      placeholder: '#202735',
      placeholderLabel: 'rgba(245, 239, 230, 0.42)',
      glow: 'rgba(228, 92, 80, 0.18)',
      shine: 'rgba(255, 255, 255, 0.38)',
    },
  },
  {
    id: 'H',
    name: 'carbon-lime',
    typography: CINETHETIC_TYPOGRAPHY.families,
    primarySurface: 'light',
    dark: {
      bg: '#10120d',
      fg: '#eff2e8',
      muted: '#a4ae92',
      accent: '#bbd61f',
      border: 'rgba(239, 242, 232, 0.12)',
      panel: 'rgba(255, 255, 255, 0.05)',
      buttonBg: '#bbd61f',
      buttonFg: '#11140f',
      placeholder: '#1b1f15',
      placeholderLabel: 'rgba(239, 242, 232, 0.36)',
      glow: 'rgba(187, 214, 31, 0.18)',
      shine: 'rgba(255, 255, 255, 0.04)',
    },
    light: {
      bg: '#d3e92f',
      fg: '#11140f',
      muted: '#44521a',
      accent: '#11140f',
      border: 'rgba(17, 20, 15, 0.1)',
      panel: 'rgba(255, 255, 255, 0.26)',
      buttonBg: '#11140f',
      buttonFg: '#edf0e7',
      placeholder: '#afc61d',
      placeholderLabel: 'rgba(17, 20, 15, 0.4)',
      glow: 'rgba(255, 255, 255, 0.14)',
      shine: 'rgba(255, 255, 255, 0.24)',
    },
  },
];
