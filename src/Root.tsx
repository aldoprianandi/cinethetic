import React from "react";
import {Composition} from "remotion";
import {
  DemoBlueprintPreview,
  DemoBlueprintSlide,
  DemoBrutalistPreview,
  DemoBrutalistSlide,
  DemoGazettePreview,
  DemoGazetteSlide,
  DemoManifestPreview,
  DemoManifestSlide,
  DemoNeoprintPreview,
  DemoNeoprintSlide,
  DemoPolaroidPreview,
  DemoPolaroidSlide,
  DemoRedactPreview,
  DemoRedactSlide,
  DemoTerminalPreview,
  DemoTerminalSlide,
  DemoVaporPreview,
  DemoVaporSlide,
} from "./compositions/InstagramCarousel";
import {HeroGrid, ThemeReel} from "./compositions/Showcase";

const demoVariants = [
  {id: "DemoManifest", Slide: DemoManifestSlide, Preview: DemoManifestPreview},
  {id: "DemoTerminal", Slide: DemoTerminalSlide, Preview: DemoTerminalPreview},
  {id: "DemoGazette", Slide: DemoGazetteSlide, Preview: DemoGazettePreview},
  {id: "DemoBlueprint", Slide: DemoBlueprintSlide, Preview: DemoBlueprintPreview},
  {id: "DemoPolaroid", Slide: DemoPolaroidSlide, Preview: DemoPolaroidPreview},
  {id: "DemoBrutalist", Slide: DemoBrutalistSlide, Preview: DemoBrutalistPreview},
  {id: "DemoVapor", Slide: DemoVaporSlide, Preview: DemoVaporPreview},
  {id: "DemoRedact", Slide: DemoRedactSlide, Preview: DemoRedactPreview},
  {id: "DemoNeoprint", Slide: DemoNeoprintSlide, Preview: DemoNeoprintPreview},
];

export const RemotionRoot = () => {
  return (
    <>
      {demoVariants.map(({id, Slide, Preview}) => (
        <React.Fragment key={id}>
          <Composition
            id={`${id}Slide`}
            component={Slide}
            durationInFrames={1}
            fps={30}
            width={1080}
            height={1440}
            defaultProps={{slideIndex: 0}}
          />
          <Composition
            id={`${id}Preview`}
            component={Preview}
            durationInFrames={1}
            fps={30}
            width={1920}
            height={1080}
          />
        </React.Fragment>
      ))}
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
