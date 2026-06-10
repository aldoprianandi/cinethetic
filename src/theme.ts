import type {CarouselTheme} from "./types";

const threeByFourCanvas = {width: 1080, height: 1440};
const fourByFiveCanvas = {width: 1080, height: 1350};

export const defaultCarouselTheme: CarouselTheme = {
  canvas: fourByFiveCanvas,
  spacing: {
    outerX: 88,
    outerY: 88,
    previewGap: 40,
  },
  colors: {
    bg: "#070709",
    fg: "#f4efe7",
    muted: "#b4aa9b",
    accent: "#b8965c",
    overlayStrong: "rgba(6, 6, 8, 0.82)",
    overlaySoft: "rgba(8, 8, 10, 0.34)",
    panel: "rgba(14, 14, 18, 0.9)",
    panelBorder: "rgba(255, 244, 224, 0.11)",
  },
  typography: {
    displayFamily:
      "\"Barlow Condensed\", \"Arial Narrow\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily:
      "\"Manrope Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 19,
    counterSize: 18,
    coverTitleLarge: 132,
    coverTitleMedium: 116,
    coverTitleSmall: 102,
    subtitleSize: 24,
    promptHeadingSize: 24,
    promptBodySize: 27,
    metaSize: 18,
    ctaSize: 20,
  },
  radius: {
    panel: 32,
  },
};

export const manifestTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: {
    outerX: 88,
    outerY: 80,
    previewGap: 40,
  },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#f6f4f0",
    fg: "#111111",
    muted: "#888882",
    accent: "#111111",
    overlayStrong: "rgba(0, 0, 0, 0.04)",
    overlaySoft: "rgba(255, 255, 255, 0.14)",
    panel: "rgba(255, 255, 255, 0.0)",
    panelBorder: "rgba(17, 17, 17, 0.14)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Archivo Black\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 14,
    counterSize: 14,
    coverTitleLarge: 142,
    coverTitleMedium: 118,
    coverTitleSmall: 98,
    subtitleSize: 20,
    promptHeadingSize: 22,
    promptBodySize: 20,
    metaSize: 14,
    ctaSize: 18,
  },
  radius: {
    panel: 0,
  },
};

export const terminalTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: {
    outerX: 62,
    outerY: 62,
    previewGap: 40,
  },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#000000",
    fg: "#e0ffe0",
    muted: "#5a7a5a",
    accent: "#00ff88",
    overlayStrong: "rgba(0, 0, 0, 0.92)",
    overlaySoft: "rgba(0, 255, 136, 0.03)",
    panel: "rgba(0, 255, 136, 0.06)",
    panelBorder: "rgba(0, 255, 136, 0.2)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Space Grotesk\", \"Courier New\", monospace",
    bodyFamily: "\"Space Grotesk\", \"Courier New\", monospace",
    labelSize: 15,
    counterSize: 14,
    coverTitleLarge: 82,
    coverTitleMedium: 72,
    coverTitleSmall: 62,
    subtitleSize: 20,
    promptHeadingSize: 20,
    promptBodySize: 19,
    metaSize: 14,
    ctaSize: 17,
  },
  radius: {
    panel: 8,
  },
};

export const gazetteTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: {
    outerX: 72,
    outerY: 72,
    previewGap: 40,
  },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#f2ede4",
    fg: "#1a1816",
    muted: "#8a8078",
    accent: "#c23028",
    overlayStrong: "rgba(26, 24, 22, 0.88)",
    overlaySoft: "rgba(255, 255, 255, 0.06)",
    panel: "rgba(242, 237, 228, 0.96)",
    panelBorder: "rgba(26, 24, 22, 0.16)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"DM Serif Display\", Georgia, \"Times New Roman\", serif",
    bodyFamily: "\"Inter Tight\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 14,
    counterSize: 14,
    coverTitleLarge: 108,
    coverTitleMedium: 92,
    coverTitleSmall: 78,
    subtitleSize: 21,
    promptHeadingSize: 24,
    promptBodySize: 20,
    metaSize: 14,
    ctaSize: 17,
  },
  radius: {
    panel: 0,
  },
};

export const blueprintTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 68, outerY: 68, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#1a2744",
    fg: "#d4e0f0",
    muted: "#7a92b4",
    accent: "#4da6ff",
    overlayStrong: "rgba(18, 28, 52, 0.9)",
    overlaySoft: "rgba(77, 166, 255, 0.06)",
    panel: "rgba(26, 39, 68, 0.8)",
    panelBorder: "rgba(77, 166, 255, 0.22)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Space Grotesk\", \"Courier New\", monospace",
    bodyFamily: "\"Inter Tight\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 13, counterSize: 13,
    coverTitleLarge: 78, coverTitleMedium: 68, coverTitleSmall: 60,
    subtitleSize: 19, promptHeadingSize: 20, promptBodySize: 18,
    metaSize: 13, ctaSize: 16,
  },
  radius: { panel: 4 },
};

export const polaroidTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 92, outerY: 92, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#e8e2d6",
    fg: "#2c2822",
    muted: "#8a8276",
    accent: "#c25a3c",
    overlayStrong: "rgba(44, 40, 34, 0.12)",
    overlaySoft: "rgba(255, 255, 255, 0.28)",
    panel: "rgba(255, 255, 252, 0.96)",
    panelBorder: "rgba(44, 40, 34, 0.06)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Cormorant Garamond\", Georgia, serif",
    bodyFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 14, counterSize: 14,
    coverTitleLarge: 88, coverTitleMedium: 78, coverTitleSmall: 68,
    subtitleSize: 19, promptHeadingSize: 22, promptBodySize: 19,
    metaSize: 14, ctaSize: 17,
  },
  radius: { panel: 4 },
};

export const brutalistTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 56, outerY: 56, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#d0d800",
    fg: "#000000",
    muted: "#3d3a00",
    accent: "#e8003a",
    overlayStrong: "rgba(0, 0, 0, 0.88)",
    overlaySoft: "rgba(230, 216, 0, 0.08)",
    panel: "rgba(0, 0, 0, 0.92)",
    panelBorder: "rgba(232, 0, 58, 0.4)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Archivo Black\", Impact, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 16, counterSize: 16,
    coverTitleLarge: 136, coverTitleMedium: 112, coverTitleSmall: 94,
    subtitleSize: 22, promptHeadingSize: 24, promptBodySize: 21,
    metaSize: 15, ctaSize: 20,
  },
  radius: { panel: 0 },
};

export const vaporTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 80, outerY: 80, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#0e0a1a",
    fg: "#f0e8ff",
    muted: "#8a7aaa",
    accent: "#e060ff",
    overlayStrong: "rgba(14, 10, 26, 0.86)",
    overlaySoft: "rgba(224, 96, 255, 0.06)",
    panel: "rgba(24, 18, 42, 0.78)",
    panelBorder: "rgba(224, 96, 255, 0.18)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Sora Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily: "\"Inter Tight\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 15, counterSize: 15,
    coverTitleLarge: 96, coverTitleMedium: 84, coverTitleSmall: 74,
    subtitleSize: 19, promptHeadingSize: 22, promptBodySize: 20,
    metaSize: 14, ctaSize: 17,
  },
  radius: { panel: 28 },
};

export const redactTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 78, outerY: 78, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#f0ece4",
    fg: "#1c1a18",
    muted: "#8a857c",
    accent: "#1c1a18",
    overlayStrong: "rgba(28, 26, 24, 0.82)",
    overlaySoft: "rgba(255, 255, 255, 0.12)",
    panel: "rgba(240, 236, 228, 0.92)",
    panelBorder: "rgba(28, 26, 24, 0.2)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Barlow Condensed\", \"Arial Narrow\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily: "\"Space Grotesk\", \"Courier New\", monospace",
    labelSize: 14, counterSize: 14,
    coverTitleLarge: 108, coverTitleMedium: 94, coverTitleSmall: 82,
    subtitleSize: 19, promptHeadingSize: 22, promptBodySize: 19,
    metaSize: 13, ctaSize: 17,
  },
  radius: { panel: 0 },
};

export const neoprintTheme: CarouselTheme = {
  ...defaultCarouselTheme,
  canvas: threeByFourCanvas,
  spacing: { outerX: 74, outerY: 74, previewGap: 40 },
  colors: {
    ...defaultCarouselTheme.colors,
    bg: "#1a1a2e",
    fg: "#ffffff",
    muted: "#9090b0",
    accent: "#ff6b35",
    overlayStrong: "rgba(26, 26, 46, 0.88)",
    overlaySoft: "rgba(255, 107, 53, 0.06)",
    panel: "rgba(30, 30, 54, 0.82)",
    panelBorder: "rgba(255, 107, 53, 0.2)",
  },
  typography: {
    ...defaultCarouselTheme.typography,
    displayFamily: "\"Archivo Black\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    bodyFamily: "\"Inter Tight\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    labelSize: 14, counterSize: 14,
    coverTitleLarge: 104, coverTitleMedium: 92, coverTitleSmall: 80,
    subtitleSize: 20, promptHeadingSize: 22, promptBodySize: 20,
    metaSize: 14, ctaSize: 17,
  },
  radius: { panel: 16 },
};
