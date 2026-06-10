import {Composition} from "remotion";
import {publicDemoVariants} from "./demo-variants";
import {
  CarouselPreviewComposition,
  CarouselSlideComposition,
} from "./compositions/carousel/Carousel";
import {HeroGrid, ThemeReel} from "./compositions/Showcase";

export const RemotionRoot = () => {
  return (
    <>
      {publicDemoVariants.flatMap((definition) => {
        const {carousel} = definition;
        const {width, height} = carousel.theme.canvas;

        return [
          <Composition
            key={definition.slideCompositionId}
            id={definition.slideCompositionId}
            component={CarouselSlideComposition}
            durationInFrames={1}
            fps={30}
            width={width}
            height={height}
            defaultProps={{carousel, slideIndex: 0}}
          />,
          <Composition
            key={definition.previewCompositionId}
            id={definition.previewCompositionId}
            component={CarouselPreviewComposition}
            durationInFrames={1}
            fps={30}
            width={1920}
            height={1080}
            defaultProps={{carousel}}
          />,
        ];
      })}
      <Composition
        id="ThemeReel"
        component={ThemeReel}
        durationInFrames={9}
        fps={1}
        width={1080}
        height={1440}
      />
      <Composition
        id="HeroGrid"
        component={HeroGrid}
        durationInFrames={1}
        fps={30}
        width={2560}
        height={1280}
      />
    </>
  );
};
