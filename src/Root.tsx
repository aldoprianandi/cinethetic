import {Composition} from "remotion";
import {
  DemoBrutalistPreview,
  DemoBrutalistSlide,
  DemoCarouselPreview,
  DemoCarouselSlide,
  DemoManifestPreview,
  DemoManifestSlide,
  DemoNeoprintPreview,
  DemoNeoprintSlide,
  DemoTerminalPreview,
  DemoTerminalSlide,
} from "./compositions/InstagramCarousel";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="DemoCarouselSlide"
        component={DemoCarouselSlide}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{slideIndex: 0}}
      />
      <Composition
        id="DemoCarouselPreview"
        component={DemoCarouselPreview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoManifestSlide"
        component={DemoManifestSlide}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{slideIndex: 0}}
      />
      <Composition
        id="DemoManifestPreview"
        component={DemoManifestPreview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoTerminalSlide"
        component={DemoTerminalSlide}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{slideIndex: 0}}
      />
      <Composition
        id="DemoTerminalPreview"
        component={DemoTerminalPreview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoBrutalistSlide"
        component={DemoBrutalistSlide}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{slideIndex: 0}}
      />
      <Composition
        id="DemoBrutalistPreview"
        component={DemoBrutalistPreview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoNeoprintSlide"
        component={DemoNeoprintSlide}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{slideIndex: 0}}
      />
      <Composition
        id="DemoNeoprintPreview"
        component={DemoNeoprintPreview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
