import content from "./carousel-content.json";
import {
  brutalistV21Theme,
  manifestV16Theme,
  neoprintV24Theme,
  terminalV17Theme,
} from "../../../theme";
import type {CarouselData, CarouselSlide} from "../../../types";

const data = content as {name: string; slides: CarouselSlide[]};

const createDemoCarousel = (
  name: string,
  variant: CarouselData["variant"],
  theme: CarouselData["theme"],
): CarouselData => ({
  name,
  variant,
  theme,
  slides: data.slides,
});

export const demoManifestCarousel = createDemoCarousel(
  `${data.name} - Manifest`,
  "v16-manifest",
  manifestV16Theme,
);

export const demoTerminalCarousel = createDemoCarousel(
  `${data.name} - Terminal`,
  "v17-terminal",
  terminalV17Theme,
);

export const demoBrutalistCarousel = createDemoCarousel(
  `${data.name} - Brutalist`,
  "v21-brutalist",
  brutalistV21Theme,
);

export const demoNeoprintCarousel = createDemoCarousel(
  `${data.name} - Neoprint`,
  "v24-neoprint",
  neoprintV24Theme,
);

export const demoCarousel: CarouselData = {
  name: data.name,
  variant: "v16-manifest",
  theme: manifestV16Theme,
  slides: data.slides,
};
