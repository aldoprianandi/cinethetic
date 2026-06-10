import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, PromptSetupSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, VisualSurface, SlideCounter} from "../shared";
import {getSurfaceInset} from "../variants";

export const PromptSetupSlideView: React.FC<{
  slide: PromptSetupSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const surfaceInset = getSurfaceInset(carousel);

  return (
    <AbsoluteFill
      style={{
        ...frameStyle,
        backgroundColor: theme.colors.bg,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <VisualSurface
          hint={slide.backgroundHint ?? "DARK BACKGROUND"}
          slideIndex={slideIndex}
          carousel={carousel}
          imageSrc={slide.backgroundImageSrc}
          imagePosition={slide.backgroundPosition}
          imageScale={slide.backgroundScale}
          imageBrightness={slide.backgroundBrightness}
          imageContrast={slide.backgroundContrast}
          imageSaturation={slide.backgroundSaturation}
        />
        <AbsoluteFill
          style={{
            background: `linear-gradient(180deg, rgba(8,8,10,0.66) 0%, rgba(8,8,10,0.84) 100%)`,
            backdropFilter: "blur(26px)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: `${theme.spacing.outerY + surfaceInset}px ${theme.spacing.outerX + surfaceInset}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT / SETUP"}
        </div>
        <div
          style={{
            width: 742,
            maxWidth: "100%",
            padding: "36px 42px 34px 42px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            boxShadow: "0 22px 64px rgba(0, 0, 0, 0.38)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignSelf: "stretch",
            marginTop: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184,150,92,0.18) 100%)`,
              }}
            />
            <div
              style={{
                ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, 16),
              }}
            >
              {slide.heading ?? "PROMPT / SETUP"}
            </div>
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 470,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.48,
              color: theme.colors.fg,
              maxWidth: 604,
              ...titleClampStyle(7),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {slide.tags && slide.tags.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                {slide.tags.map((tag) => (
                  <div
                    key={`${tag.label}-${tag.value}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>
                      {tag.label}
                    </div>
                    <div
                      style={{
                        fontFamily: theme.typography.bodyFamily,
                        fontWeight: 600,
                        fontSize: theme.typography.metaSize,
                        lineHeight: 1.2,
                        color: theme.colors.fg,
                      }}
                    >
                      {tag.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : slide.toolName ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.metaSize,
                  lineHeight: 1.2,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: theme.colors.muted,
                }}
              >
                {slide.toolName}
              </div>
            ) : (
              <div />
            )}
            {slide.cta ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.ctaSize,
                  lineHeight: 1.2,
                  color: "rgba(244, 239, 231, 0.9)",
                  textAlign: "right",
                }}
              >
                {slide.cta}
              </div>
            ) : null}
          </div>
        </div>
        <div />
      </div>
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};
