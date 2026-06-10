import content from "./carousel-content.json";
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
} from "../../../theme";
import type {CarouselData, CarouselSlide} from "../../../types";

const data = content as {name: string; slides: CarouselSlide[]};

const createDemoCarousel = (
  label: string,
  variant: CarouselData["variant"],
  theme: CarouselData["theme"],
): CarouselData => ({
  name: `${data.name} - ${label}`,
  variant,
  theme,
  slides: data.slides,
});

export const demoManifestCarousel = createDemoCarousel("Manifest", "manifest", manifestTheme);
export const demoTerminalCarousel = createDemoCarousel("Terminal", "terminal", terminalTheme);
export const demoGazetteCarousel = createDemoCarousel("Gazette", "gazette", gazetteTheme);
export const demoBlueprintCarousel = createDemoCarousel("Blueprint", "blueprint", blueprintTheme);
export const demoPolaroidCarousel = createDemoCarousel("Polaroid", "polaroid", polaroidTheme);
export const demoBrutalistCarousel = createDemoCarousel("Brutalist", "brutalist", brutalistTheme);
export const demoVaporCarousel = createDemoCarousel("Vapor", "vapor", vaporTheme);
export const demoRedactCarousel = createDemoCarousel("Redact", "redact", redactTheme);
export const demoNeoprintCarousel = createDemoCarousel("Neoprint", "neoprint", neoprintTheme);

export const demoCarousels = [
  demoManifestCarousel,
  demoTerminalCarousel,
  demoGazetteCarousel,
  demoBlueprintCarousel,
  demoPolaroidCarousel,
  demoBrutalistCarousel,
  demoVaporCarousel,
  demoRedactCarousel,
  demoNeoprintCarousel,
];
