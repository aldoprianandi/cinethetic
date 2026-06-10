import variantDefinitions from "./data/demo-variants.json";
import content from "./data/posts/demo-carousel/carousel-content.json";
import {assertCarouselContent} from "./data/validateCarouselContent";
import {
  blueprintTheme,
  brutalistTheme,
  gazetteTheme,
  manifestTheme,
  neoprintTheme,
  polaroidTheme,
  redactTheme,
  terminalTheme,
  vaporTheme,
} from "./theme";
import type {CarouselData, CarouselTheme, CarouselVariant} from "./types";
import type {CarouselContent} from "./data/validateCarouselContent";

const themeByExportName = {
  blueprintTheme,
  brutalistTheme,
  gazetteTheme,
  manifestTheme,
  neoprintTheme,
  polaroidTheme,
  redactTheme,
  terminalTheme,
  vaporTheme,
} satisfies Record<string, CarouselTheme>;

type ThemeExportName = keyof typeof themeByExportName;

export type DemoVariantDefinition = {
  name: string;
  displayName: string;
  variant: CarouselVariant;
  theme: ThemeExportName;
  compositionPrefix: string;
  public: boolean;
};

assertCarouselContent(content);
const demoContent: CarouselContent = content;

const definitions = variantDefinitions as DemoVariantDefinition[];

const createCarousel = (definition: DemoVariantDefinition): CarouselData => ({
  name: `${demoContent.name} - ${definition.displayName}`,
  variant: definition.variant,
  theme: themeByExportName[definition.theme],
  slides: demoContent.slides,
});

export const demoVariants = definitions.map((definition) => ({
  ...definition,
  carousel: createCarousel(definition),
  slideCompositionId: `${definition.compositionPrefix}Slide`,
  previewCompositionId: `${definition.compositionPrefix}Preview`,
}));

export const publicDemoVariants = demoVariants.filter(
  (definition) => definition.public,
);

export const demoCarousels = publicDemoVariants.map(
  (definition) => definition.carousel,
);

export const getDemoVariant = (name: string) => {
  const match = publicDemoVariants.find((definition) => definition.name === name);
  if (!match) {
    throw new Error(`Unknown public demo variant: ${name}`);
  }
  return match;
};

export const demoManifestCarousel = getDemoVariant("manifest").carousel;
export const demoTerminalCarousel = getDemoVariant("terminal").carousel;
export const demoBrutalistCarousel = getDemoVariant("brutalist").carousel;
export const demoNeoprintCarousel = getDemoVariant("neoprint").carousel;
