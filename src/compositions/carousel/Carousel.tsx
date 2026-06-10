import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, CarouselSlide} from "../../types";
import {labelStyle, previewScale} from "./shared";
import {getPreviewBackground, getVariantFlags} from "./variants";
import {CoverSlideView} from "./slides/CoverSlide";
import {ResultSlideView} from "./slides/ResultSlide";
import {PromptSetupSlideView} from "./slides/PromptSetupSlide";
import {StoryHeroSlideView} from "./slides/StoryHeroSlide";
import {StoryPanelSlideView} from "./slides/StoryPanelSlide";
import {StoryStepsSlideView} from "./slides/StoryStepsSlide";
import {StoryProofSlideView} from "./slides/StoryProofSlide";
import {StoryCtaSlideView} from "./slides/StoryCtaSlide";
import {TextTipsSlideView} from "./slides/TextTipsSlide";
import {TextQuoteSlideView} from "./slides/TextQuoteSlide";
import {TextCompareSlideView} from "./slides/TextCompareSlide";
import {TextStatSlideView} from "./slides/TextStatSlide";
import {TextTitleSlideView} from "./slides/TextTitleSlide";

export const renderSlide = (slide: CarouselSlide, carousel: CarouselData, slideIndex: number) => {
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
      return null;
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
  const {isManifest, isGazette, isPolaroid, isBrutalist, isRedact} = getVariantFlags(carousel);
  const isLightPreview = isManifest || isGazette || isPolaroid || isBrutalist || isRedact;

  return (
    <AbsoluteFill
      style={{
        background: getPreviewBackground(carousel),
        color: theme.colors.fg,
        padding: "48px 60px 56px 60px",
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
            fontFamily: theme.typography.bodyFamily,
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: theme.spacing.previewGap,
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
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isLightPreview
                  ? "0 18px 48px rgba(46, 36, 28, 0.18)"
                  : "0 18px 48px rgba(0, 0, 0, 0.35)",
                transform: `translateY(${index === 0 ? 0 : 10}px)`,
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
