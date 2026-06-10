import React from "react";
import {CarouselPreviewComposition, CarouselSlideComposition} from "./carousel/Carousel";
import {
  demoBlueprintCarousel,
  demoBrutalistCarousel,
  demoGazetteCarousel,
  demoManifestCarousel,
  demoNeoprintCarousel,
  demoPolaroidCarousel,
  demoRedactCarousel,
  demoTerminalCarousel,
  demoVaporCarousel,
} from "../data/posts/demo-carousel/post-data";
import type {CarouselData} from "../types";

const makeSlideComposition = (carousel: CarouselData): React.FC<{slideIndex?: number}> => {
  const SlideComposition: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => (
    <CarouselSlideComposition carousel={carousel} slideIndex={slideIndex} />
  );
  return SlideComposition;
};

const makePreviewComposition = (carousel: CarouselData): React.FC => {
  const PreviewComposition: React.FC = () => <CarouselPreviewComposition carousel={carousel} />;
  return PreviewComposition;
};

export const DemoManifestSlide = makeSlideComposition(demoManifestCarousel);
export const DemoManifestPreview = makePreviewComposition(demoManifestCarousel);

export const DemoTerminalSlide = makeSlideComposition(demoTerminalCarousel);
export const DemoTerminalPreview = makePreviewComposition(demoTerminalCarousel);

export const DemoGazetteSlide = makeSlideComposition(demoGazetteCarousel);
export const DemoGazettePreview = makePreviewComposition(demoGazetteCarousel);

export const DemoBlueprintSlide = makeSlideComposition(demoBlueprintCarousel);
export const DemoBlueprintPreview = makePreviewComposition(demoBlueprintCarousel);

export const DemoPolaroidSlide = makeSlideComposition(demoPolaroidCarousel);
export const DemoPolaroidPreview = makePreviewComposition(demoPolaroidCarousel);

export const DemoBrutalistSlide = makeSlideComposition(demoBrutalistCarousel);
export const DemoBrutalistPreview = makePreviewComposition(demoBrutalistCarousel);

export const DemoVaporSlide = makeSlideComposition(demoVaporCarousel);
export const DemoVaporPreview = makePreviewComposition(demoVaporCarousel);

export const DemoRedactSlide = makeSlideComposition(demoRedactCarousel);
export const DemoRedactPreview = makePreviewComposition(demoRedactCarousel);

export const DemoNeoprintSlide = makeSlideComposition(demoNeoprintCarousel);
export const DemoNeoprintPreview = makePreviewComposition(demoNeoprintCarousel);
