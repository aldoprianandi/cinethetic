import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, ResultSlide} from "../../../types";
import {frameStyle, labelStyle, VisualSurface, SlideCounter} from "../shared";
import {getSurfaceInset} from "../variants";

export const ResultSlideView: React.FC<{
  slide: ResultSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const surfaceInset = getSurfaceInset(carousel);

  return (
    <AbsoluteFill style={frameStyle}>
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <VisualSurface
          hint={slide.imageHint ?? "RESULT IMAGE"}
          slideIndex={slideIndex}
          carousel={carousel}
          imageSrc={slide.imageSrc}
          imagePosition={slide.imagePosition}
          imageScale={slide.imageScale}
          imageBrightness={slide.imageBrightness}
          imageContrast={slide.imageContrast}
          imageSaturation={slide.imageSaturation}
        />
        <AbsoluteFill
          style={{
            background: `linear-gradient(180deg, rgba(8,8,10,0.08) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.3) 100%)`,
          }}
        />
        <AbsoluteFill
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
      </div>
      {slide.label ? (
        <div
          style={{
            position: "absolute",
            top: carousel.theme.spacing.outerY + surfaceInset,
            left: carousel.theme.spacing.outerX + surfaceInset,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184,150,92,0.18) 100%)`,
            }}
          />
          <div style={labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize)}>
            {slide.label}
          </div>
        </div>
      ) : null}
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};
