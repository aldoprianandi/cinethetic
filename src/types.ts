export type CarouselVariant =
  | "v1-cinematic"
  | "v2-editorial"
  | "v3-studio"
  | "v4-monolith"
  | "v5-gallery"
  | "v6-side-rail"
  | "v7-bottom-band"
  | "v8-split-editorial"
  | "v9-archive-sheet"
  | "v10-tech-luxe"
  | "v11-story-signal"
  | "v12-story-ivory"
  | "v13-story-burnt"
  | "v14-story-proof"
  | "v15-story-noir"
  | "v16-manifest"
  | "v17-terminal"
  | "v18-gazette"
  | "v19-blueprint"
  | "v20-polaroid"
  | "v21-brutalist"
  | "v22-vapor"
  | "v23-redact"
  | "v24-neoprint";

export type CarouselTheme = {
  canvas: {width: number; height: number};
  spacing: {
    outerX: number;
    outerY: number;
    previewGap: number;
  };
  colors: {
    bg: string;
    fg: string;
    muted: string;
    accent: string;
    overlayStrong: string;
    overlaySoft: string;
    panel: string;
    panelBorder: string;
  };
  typography: {
    displayFamily: string;
    bodyFamily: string;
    labelSize: number;
    counterSize: number;
    coverTitleLarge: number;
    coverTitleMedium: number;
    coverTitleSmall: number;
    subtitleSize: number;
    promptHeadingSize: number;
    promptBodySize: number;
    metaSize: number;
    ctaSize: number;
  };
  radius: {
    panel: number;
  };
};

export type PromptSection = {
  label?: string;
  body: string;
};

export type PromptTag = {
  label: string;
  value: string;
};

type BaseSlide = {
  counter?: string;
};

export type ImageControls = {
  imagePosition?: string;
  imageScale?: number;
  imageBrightness?: number;
  imageContrast?: number;
  imageSaturation?: number;
};

export type StoryStep = {
  number?: string;
  title: string;
  body: string;
};

export type StoryProofCard = ImageControls & {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageHint?: string;
};

export type CoverSlide = BaseSlide &
  ImageControls & {
  type: "cover";
  accountLabel?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageHint?: string;
};

export type ResultSlide = BaseSlide &
  ImageControls & {
  type: "result";
  label?: string;
  noteCaption?: string;
  imageSrc?: string;
  imageHint?: string;
};

export type PromptSetupSlide = BaseSlide & {
  type: "prompt-setup";
  heading?: string;
  promptBody?: string;
  promptSections?: PromptSection[];
  tags?: PromptTag[];
  toolName?: string;
  cta?: string;
  backgroundImageSrc?: string;
  backgroundHint?: string;
  backgroundPosition?: string;
  backgroundScale?: number;
  backgroundBrightness?: number;
  backgroundContrast?: number;
  backgroundSaturation?: number;
};

export type StoryHeroSlide = BaseSlide &
  ImageControls & {
    type: "story-hero";
    eyebrow?: string;
    title: string;
    accentLine?: string;
    body?: string;
    imageSrc?: string;
    imageHint?: string;
  };

export type StoryPanelSlide = BaseSlide &
  ImageControls & {
    type: "story-panel";
    eyebrow?: string;
    title: string;
    body: string;
    chips?: string[];
    imageSrc?: string;
    imageHint?: string;
  };

export type StoryStepsSlide = BaseSlide & {
  type: "story-steps";
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: StoryStep[];
};

export type StoryProofSlide = BaseSlide & {
  type: "story-proof";
  eyebrow?: string;
  title: string;
  body?: string;
  cards: StoryProofCard[];
};

export type StoryCtaSlide = BaseSlide & {
  type: "story-cta";
  eyebrow?: string;
  title: string;
  body: string;
  handle?: string;
  buttonLabel?: string;
  footer?: string;
  avatarImageSrc?: string;
};

export type TextTip = {
  number?: string;
  title: string;
  body?: string;
};

export type CompareItem = {
  label: string;
  items: string[];
};

export type TextTipsSlide = BaseSlide & {
  type: "text-tips";
  eyebrow?: string;
  title: string;
  intro?: string;
  tips: TextTip[];
  backgroundImageSrc?: string;
  backgroundBrightness?: number;
};

export type TextQuoteSlide = BaseSlide & {
  type: "text-quote";
  quote: string;
  attribution?: string;
  context?: string;
  backgroundImageSrc?: string;
  backgroundBrightness?: number;
};

export type TextCompareSlide = BaseSlide & {
  type: "text-compare";
  eyebrow?: string;
  title?: string;
  left: CompareItem;
  right: CompareItem;
  backgroundImageSrc?: string;
  backgroundBrightness?: number;
};

export type TextStatSlide = BaseSlide & {
  type: "text-stat";
  eyebrow?: string;
  stat: string;
  unit?: string;
  body: string;
  source?: string;
  backgroundImageSrc?: string;
  backgroundBrightness?: number;
};

export type TextTitleSlide = BaseSlide & {
  type: "text-title";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  handle?: string;
  backgroundImageSrc?: string;
  backgroundBrightness?: number;
};

export type CarouselSlide =
  | CoverSlide
  | ResultSlide
  | PromptSetupSlide
  | StoryHeroSlide
  | StoryPanelSlide
  | StoryStepsSlide
  | StoryProofSlide
  | StoryCtaSlide
  | TextTipsSlide
  | TextQuoteSlide
  | TextCompareSlide
  | TextStatSlide
  | TextTitleSlide;

export type CarouselData = {
  name: string;
  variant?: CarouselVariant;
  theme: CarouselTheme;
  slides: CarouselSlide[];
};

export type LaunchPostFormat = "signature-prompt-showcase" | "studio-note-study";

export type LaunchPostPlan = {
  index: number;
  title: string;
  format: LaunchPostFormat;
  job: string;
  coverHook: string;
  cta: string;
  visualDirection: string;
};

export type LaunchPlan = {
  name: string;
  account: string;
  positioning: string;
  primaryGoals: string[];
  pinnedPosts: number[];
  posts: LaunchPostPlan[];
};
