import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, CoverSlide} from "../../../types";
import {
  frameStyle,
  getCoverTitleMetrics,
  labelStyle,
  titleClampStyle,
  VisualSurface,
  SlideCounter,
} from "../shared";
import {getVariantFlags, getSurfaceInset} from "../variants";

export const CoverSlideView: React.FC<{
  slide: CoverSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isCinematic} = getVariantFlags(carousel);
  const surfaceInset = getSurfaceInset(carousel);
  const {fontSize, maxWidth} = getCoverTitleMetrics(
    slide.title,
    theme.typography.coverTitleLarge,
    theme.typography.coverTitleMedium,
    theme.typography.coverTitleSmall,
  );

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
          hint={slide.imageHint ?? "HERO IMAGE"}
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
            background: `linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 30%, ${theme.colors.overlayStrong} 100%)`,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: theme.spacing.outerY + surfaceInset,
          left: theme.spacing.outerX + surfaceInset,
          ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
        }}
      >
        {slide.accountLabel}
      </div>
      <div
        style={{
          position: "absolute",
          left: theme.spacing.outerX + surfaceInset,
          right: 490,
          bottom: 158,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 74,
            height: 1,
            background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184, 150, 92, 0.12) 100%)`,
          }}
        />
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: 700,
            color: theme.colors.fg,
            fontSize: fontSize,
            lineHeight: 0.84,
            letterSpacing: "-0.045em",
            textTransform: "uppercase",
            maxWidth: Math.min(maxWidth, 500),
            whiteSpace: "pre-line",
            ...titleClampStyle(isCinematic ? 5 : 4),
          }}
        >
          {slide.title}
        </div>
        {slide.subtitle ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 470,
              fontSize: theme.typography.subtitleSize,
              lineHeight: 1.3,
              color: "rgba(244, 239, 231, 0.72)",
              maxWidth: 440,
              ...titleClampStyle(2),
            }}
          >
            {slide.subtitle}
          </div>
        ) : null}
      </div>
      {isCinematic ? (
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + 240,
            right: theme.spacing.outerX,
            ...labelStyle("rgba(244, 239, 231, 0.22)", theme.typography.bodyFamily, 15),
          }}
        >
          Prompt Study
        </div>
      ) : null}
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};
