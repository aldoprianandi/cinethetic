import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, CarouselSlide} from "../types";
import {CoverSlideView, PromptSetupSlideView, ResultSlideView} from "./carousel/classicSlides";
import {
  StoryCtaSlideView,
  StoryHeroSlideView,
  StoryPanelSlideView,
  StoryProofSlideView,
  StoryStepsSlideView,
} from "./carousel/storySlides";
import {
  TextCompareSlideView,
  TextQuoteSlideView,
  TextStatSlideView,
  TextTipsSlideView,
  TextTitleSlideView,
} from "./carousel/textSlides";
import {getPreviewBackground, getVariantFlags, labelStyle, maxPreviewScale} from "./carousel/shared";

const renderSlide = (slide: CarouselSlide, carousel: CarouselData, slideIndex: number) => {
  switch (slide.type) {
    case "cover":
      return <CoverSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "result":
      return <ResultSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "prompt-setup":
      return <PromptSetupSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-hero":
      return <StoryHeroSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-panel":
      return <StoryPanelSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-steps":
      return <StoryStepsSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-proof":
      return <StoryProofSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-cta":
      return <StoryCtaSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-tips":
      return <TextTipsSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-quote":
      return <TextQuoteSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-compare":
      return <TextCompareSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-stat":
      return <TextStatSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-title":
      return <TextTitleSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    default:
      throw new Error(`Unsupported slide type: ${(slide as {type?: string}).type ?? "unknown"}`);
  }
};

export const CarouselSlideComposition: React.FC<{carousel: CarouselData; slideIndex?: number}> = ({
  carousel,
  slideIndex = 0,
}) => {
  const safeIndex = Math.min(Math.max(slideIndex, 0), carousel.slides.length - 1);
  const slide = carousel.slides[safeIndex];

  return renderSlide(slide, carousel, safeIndex);
};

export const CarouselPreviewComposition: React.FC<{carousel: CarouselData}> = ({carousel}) => {
  const {theme, slides, name} = carousel;
  const {isV2, isV3, isV16, isV17, isV18, isV20, isV21, isV23} = getVariantFlags(carousel);
  const isLightPreview = isV16 || isV18 || isV20 || isV21 || isV23;
  const previewPaddingX = 60;
  const availablePreviewWidth = 1920 - previewPaddingX * 2;
  const rowCount = Math.max(1, Math.ceil(slides.length / 5));
  const cardsPerRow = Math.max(1, Math.ceil(slides.length / rowCount));
  const previewScale = Math.min(
    maxPreviewScale,
    (availablePreviewWidth - theme.spacing.previewGap * (cardsPerRow - 1)) /
      (theme.canvas.width * cardsPerRow),
  );

  return (
    <AbsoluteFill
      style={{
        background: getPreviewBackground(carousel),
        color: theme.colors.fg,
        padding: `48px ${previewPaddingX}px 56px ${previewPaddingX}px`,
        fontFamily: theme.typography.bodyFamily,
        gap: 34,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, 16)}>
          Remotion Social Carousel
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1,
            color: theme.colors.fg,
            fontFamily: isV2 ? theme.typography.displayFamily : theme.typography.bodyFamily,
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: theme.spacing.previewGap,
          rowGap: 28,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.counter ?? index}
              style={{
                width: theme.canvas.width * previewScale,
                height: theme.canvas.height * previewScale,
                borderRadius: 22,
                overflow: "hidden",
                border: isLightPreview
                  ? "1px solid rgba(24,22,20,0.12)"
                  : isV3
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isLightPreview
                  ? "0 18px 48px rgba(46, 36, 28, 0.18)"
                  : isV2
                    ? "0 24px 64px rgba(0, 0, 0, 0.42)"
                    : "0 18px 48px rgba(0, 0, 0, 0.35)",
                transform: `translateY(${isV2 ? index * 4 : index === 0 ? 0 : 10}px)`,
              }}
            >
              <div
                style={{
                  width: theme.canvas.width * previewScale,
                  height: theme.canvas.height * previewScale,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <AbsoluteFill
                  style={{
                    width: theme.canvas.width,
                    height: theme.canvas.height,
                    transform: `scale(${previewScale})`,
                    transformOrigin: "top left",
                  }}
                >
                  {renderSlide(slide, carousel, index)}
                </AbsoluteFill>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
