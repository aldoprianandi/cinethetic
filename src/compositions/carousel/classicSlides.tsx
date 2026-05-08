import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {CarouselData, CoverSlide, PromptSetupSlide, ResultSlide} from "../../types";
import {
  SlideCounter,
  StoryProgressBar,
  VisualSurface,
  counterStyle,
  frameStyle,
  getCoverTitleMetrics,
  getSurfaceInset,
  getVariantFlags,
  labelStyle,
  panelShadow,
  resolveAssetSrc,
  subtleTexture,
  titleClampStyle,
} from "./shared";

export const CoverSlideView: React.FC<{
  slide: CoverSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV1, isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const surfaceInset = getSurfaceInset(carousel);
  const {fontSize, maxWidth} = getCoverTitleMetrics(
    slide.title,
    theme.typography.coverTitleLarge,
    theme.typography.coverTitleMedium,
    theme.typography.coverTitleSmall,
  );

  if (isV4) {
    return (
      <AbsoluteFill style={frameStyle}>
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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 28%, rgba(0,0,0,0.62) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 120,
            right: 120,
            bottom: 210,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 2,
              background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${theme.colors.accent} 35%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 112),
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 760,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(244, 238, 227, 0.72)",
                maxWidth: 560,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 32,
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
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 34%, rgba(0,0,0,0.58) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255, 244, 224, 0.14), inset 0 0 0 18px rgba(10, 9, 11, 0.1)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + surfaceInset + 6,
            left: theme.spacing.outerX + surfaceInset + 6,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, 15),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 150,
            right: 150,
            bottom: 212,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 110),
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: theme.colors.fg,
              maxWidth: 620,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(246, 241, 232, 0.68)",
                maxWidth: 430,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
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
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.82) 0%, rgba(6,8,11,0.64) 18%, rgba(6,8,11,0.08) 46%, rgba(0,0,0,0.28) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 250,
            background:
              "linear-gradient(180deg, rgba(11,14,18,0.94) 0%, rgba(11,14,18,0.82) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + 10,
            left: 62,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 62,
            right: 760,
            bottom: 190,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 600,
              fontSize: Math.min(fontSize, 82),
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 240,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.32,
                color: "rgba(237, 240, 242, 0.68)",
                maxWidth: 220,
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV7) {
    return (
      <AbsoluteFill style={frameStyle}>
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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "52px 90px 92px 90px",
            background:
              "linear-gradient(180deg, rgba(11,11,13,0.06) 0%, rgba(11,11,13,0.86) 36%, rgba(11,11,13,0.95) 100%)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 76,
              height: 2,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 700,
              fontSize: Math.min(fontSize, 114),
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 820,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(243, 239, 230, 0.72)",
                maxWidth: 560,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
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
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.12) 56%, rgba(0,0,0,0.5) 56%, rgba(0,0,0,0.68) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + surfaceInset,
            left: theme.spacing.outerX + surfaceInset,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, 15),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            top: 190,
            right: 110,
            width: 310,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: 58,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 88),
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 320,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(245, 240, 233, 0.72)",
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV9) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09090b"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 28,
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
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.16) 40%, rgba(0,0,0,0.54) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.14)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 126,
            right: 126,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 14)}>
            {slide.accountLabel}
          </div>
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 500,
              fontSize: Math.min(fontSize, 98),
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: theme.colors.fg,
              maxWidth: 560,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(242, 237, 228, 0.72)",
                maxWidth: 460,
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV10) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 20,
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
              background:
                "linear-gradient(180deg, rgba(5,8,12,0.12) 0%, rgba(5,8,12,0.2) 30%, rgba(5,8,12,0.64) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(171, 201, 228, 0.14), inset 0 0 0 16px rgba(5, 8, 12, 0.06)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 114,
            left: 110,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, 14),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            right: 94,
            top: 318,
            width: 392,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "right",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: 72,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 640,
              fontSize: Math.min(fontSize, 78),
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 392,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(238, 242, 245, 0.7)",
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={frameStyle}>
      {isV2 ? (
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
      ) : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
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
            background:
              isV2
                ? `linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.1) 22%, rgba(0,0,0,0.28) 52%, rgba(0,0,0,0.72) 100%)`
                : isV3
                  ? `linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 24%, rgba(0,0,0,0.22) 58%, ${theme.colors.overlayStrong} 100%)`
                  : `linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 30%, ${theme.colors.overlayStrong} 100%)`,
          }}
        />
      </div>
      {isV2 ? (
        <AbsoluteFill
          style={{
            inset: surfaceInset,
            borderRadius: 26,
            boxShadow:
              "inset 0 0 0 1px rgba(255, 245, 224, 0.12), inset 0 0 0 24px rgba(9, 8, 10, 0.06)",
            pointerEvents: "none",
          }}
        />
      ) : null}
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
          left: theme.spacing.outerX + (isV2 ? surfaceInset + 8 : surfaceInset),
          right: isV2 ? 170 : isV3 ? 280 : 490,
          bottom: isV2 ? 214 : isV3 ? 198 : 158,
          display: "flex",
          flexDirection: "column",
          gap: isV2 ? 24 : isV3 ? 28 : 18,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: isV2 ? 84 : isV3 ? 56 : 74,
            height: 1,
            background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184, 150, 92, ${isV2 ? "0.24" : isV3 ? "0.08" : "0.12"}) 100%)`,
          }}
        />
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: isV2 ? 600 : isV3 ? 620 : 700,
            color: theme.colors.fg,
            fontSize: isV2 ? Math.min(fontSize, 118) : fontSize,
            lineHeight: isV2 ? 0.78 : isV3 ? 0.86 : 0.84,
            letterSpacing: isV2 ? "-0.04em" : isV3 ? "-0.05em" : "-0.045em",
            textTransform: "uppercase",
            maxWidth: isV2 ? 500 : isV3 ? 360 : Math.min(maxWidth, 500),
            whiteSpace: "pre-line",
            ...titleClampStyle(isV1 ? 5 : 4),
          }}
        >
          {slide.title}
        </div>
        {slide.subtitle ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: isV2 ? 430 : isV3 ? 420 : 470,
              fontSize: theme.typography.subtitleSize,
              lineHeight: isV2 ? 1.26 : isV3 ? 1.34 : 1.3,
              color: isV2
                ? "rgba(246, 241, 232, 0.64)"
                : isV3
                  ? "rgba(242, 239, 233, 0.68)"
                : "rgba(244, 239, 231, 0.72)",
              maxWidth: isV2 ? 360 : isV3 ? 320 : 440,
              ...titleClampStyle(2),
            }}
          >
            {slide.subtitle}
          </div>
        ) : null}
      </div>
      {isV1 ? (
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

export const ResultSlideView: React.FC<{
  slide: ResultSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const surfaceInset = getSurfaceInset(carousel);

  if (isV4 || isV7) {
    return (
      <AbsoluteFill style={frameStyle}>
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
            background:
              isV7
                ? "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 58%, rgba(0,0,0,0.54) 100%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              left: theme.spacing.outerX,
              bottom: isV7 ? 134 : theme.spacing.outerY,
              padding: isV7 ? "10px 16px" : "10px 14px",
              background: "rgba(10,10,12,0.42)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 999,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 2),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        {isV7 ? (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 110,
              background: "linear-gradient(180deg, rgba(11,11,13,0.08) 0%, rgba(11,11,13,0.88) 100%)",
            }}
          />
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5 || isV9) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV9 ? 28 : 30,
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
              background: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.36) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.14)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: theme.spacing.outerY + surfaceInset + 10,
              left: isV5 ? 0 : theme.spacing.outerX + surfaceInset + 8,
              right: isV5 ? 0 : undefined,
              textAlign: isV5 ? "center" : "left",
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
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
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.76) 0%, rgba(6,8,11,0.52) 16%, rgba(6,8,11,0.04) 40%, rgba(0,0,0,0.22) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 214,
            background: "linear-gradient(180deg, rgba(11,14,18,0.94) 0%, rgba(11,14,18,0.82) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: 108,
              left: 58,
              right: 860,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
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
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 56%, rgba(0,0,0,0.42) 56%, rgba(0,0,0,0.58) 100%)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: 120,
              right: 120,
              width: 280,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV10) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 20,
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
              background: "linear-gradient(180deg, rgba(5,8,12,0.04) 0%, rgba(5,8,12,0.28) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(171, 201, 228, 0.14)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: theme.spacing.outerY + surfaceInset + 6,
              right: theme.spacing.outerX + surfaceInset + 6,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid rgba(171, 201, 228, 0.18)",
              background: "rgba(10,13,17,0.46)",
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={frameStyle}>
      {isV2 ? <AbsoluteFill style={{backgroundColor: "#09080a"}} /> : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
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
            background:
              isV2
                ? `linear-gradient(180deg, rgba(8,8,10,0.02) 0%, rgba(0,0,0,0.04) 28%, rgba(0,0,0,0.38) 100%)`
                : isV3
                  ? `linear-gradient(180deg, rgba(8,8,10,0.04) 0%, rgba(0,0,0,0.01) 22%, rgba(0,0,0,0.24) 100%)`
                  : `linear-gradient(180deg, rgba(8,8,10,0.08) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.3) 100%)`,
          }}
        />
        <AbsoluteFill
          style={{
            boxShadow: isV2
              ? "inset 0 0 0 1px rgba(255,245,224,0.12), inset 0 0 0 24px rgba(9,8,10,0.05)"
              : "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
      </div>
      {slide.label ? (
        <div
          style={{
            position: "absolute",
            top: carousel.theme.spacing.outerY + (isV2 ? surfaceInset + 6 : surfaceInset + (isV3 ? 6 : 0)),
            left: carousel.theme.spacing.outerX + (isV2 ? surfaceInset + 6 : surfaceInset + (isV3 ? 6 : 0)),
            display: "flex",
            alignItems: "center",
            gap: isV3 ? 10 : 14,
          }}
        >
          {isV3 ? null : (
            <div
              style={{
                width: isV2 ? 26 : 32,
                height: 1,
                background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184,150,92,0.18) 100%)`,
              }}
            />
          )}
          <div style={labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize)}>
            {slide.label}
          </div>
        </div>
      ) : null}
      {isV3 && slide.noteCaption ? (
        <div
          style={{
            position: "absolute",
            left: carousel.theme.spacing.outerX + surfaceInset + 6,
            bottom: carousel.theme.spacing.outerY + 6,
            maxWidth: 320,
            fontFamily: theme.typography.bodyFamily,
            fontSize: 15,
            fontWeight: 420,
            lineHeight: 1.35,
            color: "rgba(242, 239, 233, 0.62)",
          }}
        >
          {slide.noteCaption}
        </div>
      ) : null}
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};

export const PromptSetupSlideView: React.FC<{
  slide: PromptSetupSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const promptSections = slide.promptSections ?? (slide.promptBody ? [{body: slide.promptBody}] : []);
  const surfaceInset = getSurfaceInset(carousel);

  if (isV4 || isV7) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
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
            background:
              isV7
                ? "linear-gradient(180deg, rgba(8,8,10,0.42) 0%, rgba(8,8,10,0.78) 62%, rgba(8,8,10,0.92) 100%)"
                : "linear-gradient(180deg, rgba(8,8,10,0.5) 0%, rgba(8,8,10,0.88) 100%)",
            backdropFilter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT"}
        </div>
        <div
          style={{
            position: "absolute",
            left: isV7 ? 0 : 110,
            right: isV7 ? 0 : 110,
            bottom: isV7 ? 0 : 176,
            padding: isV7 ? "44px 90px 92px 90px" : "40px 42px 34px 42px",
            background: isV7 ? "linear-gradient(180deg, rgba(11,11,13,0.06) 0%, rgba(11,11,13,0.92) 100%)" : theme.colors.panel,
            border: isV7 ? "none" : `1px solid ${theme.colors.panelBorder}`,
            borderRadius: isV7 ? 0 : theme.radius.panel,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 450,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.46,
              color: theme.colors.fg,
              maxWidth: isV7 ? 760 : 700,
              ...titleClampStyle(7),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.metaSize,
                lineHeight: 1.2,
                color: theme.colors.muted,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {slide.toolName}
            </div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5 || isV9) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV9 ? 28 : 30,
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
              background: "linear-gradient(180deg, rgba(8,8,10,0.44) 0%, rgba(8,8,10,0.84) 100%)",
              backdropFilter: "blur(24px)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.12)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 136,
            left: 132,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT"}
        </div>
        <div
          style={{
            position: "absolute",
            left: 132,
            right: 132,
            top: isV9 ? 246 : 320,
            padding: isV9 ? "34px 34px 30px 34px" : "38px 42px 34px 42px",
            borderRadius: theme.radius.panel,
            background: isV9 ? "rgba(244, 238, 226, 0.05)" : theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {promptSections.length > 1 ? (
            <div style={{display: "flex", flexDirection: "column", gap: 18}}>
              {promptSections.map((section, index) => (
                <div
                  key={`${section.label ?? "section"}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingBottom: index === promptSections.length - 1 ? 0 : 16,
                    borderBottom:
                      index === promptSections.length - 1
                        ? "none"
                        : "1px solid rgba(255, 244, 224, 0.08)",
                  }}
                >
                  {section.label ? (
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>
                      {section.label}
                    </div>
                  ) : null}
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 430,
                      fontSize: theme.typography.promptBodySize,
                      lineHeight: 1.46,
                      color: theme.colors.fg,
                    }}
                  >
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.promptBodySize,
                lineHeight: 1.48,
                color: theme.colors.fg,
                ...titleClampStyle(8),
              }}
            >
              {slide.promptBody}
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            {slide.tags?.length ? (
              <div style={{display: "flex", gap: 20, flexWrap: "wrap"}}>
                {slide.tags.map((tag) => (
                  <div key={`${tag.label}-${tag.value}`} style={{display: "flex", flexDirection: "column", gap: 6}}>
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 12)}>{tag.label}</div>
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
            ) : (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.metaSize,
                  lineHeight: 1.2,
                  color: theme.colors.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {slide.toolName}
              </div>
            )}
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
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
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.86) 0%, rgba(6,8,11,0.74) 18%, rgba(6,8,11,0.18) 42%, rgba(6,8,11,0.54) 100%)",
              backdropFilter: "blur(18px)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 224,
            background: "linear-gradient(180deg, rgba(11,14,18,0.96) 0%, rgba(11,14,18,0.84) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 112,
            left: 58,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "SETUP"}
        </div>
        <div
          style={{
            position: "absolute",
            left: 264,
            right: 84,
            top: 300,
            padding: "28px 32px 28px 32px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.5,
              color: theme.colors.fg,
              ...titleClampStyle(8),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>{slide.toolName}</div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8 || isV10) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV10 ? 20 : 24,
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
              background:
                isV10
                  ? "linear-gradient(180deg, rgba(5,8,12,0.38) 0%, rgba(5,8,12,0.76) 100%)"
                  : "linear-gradient(90deg, rgba(8,8,10,0.28) 0%, rgba(8,8,10,0.22) 56%, rgba(8,8,10,0.68) 56%, rgba(8,8,10,0.82) 100%)",
              backdropFilter: "blur(18px)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: isV10 ? 120 : 132,
            right: 108,
            width: isV10 ? 360 : 320,
            padding: isV10 ? "26px 28px 24px 28px" : "30px 30px 28px 30px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, 13)}>
            {slide.heading ?? "PROMPT"}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.48,
              color: theme.colors.fg,
              ...titleClampStyle(8),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 12)}>{slide.toolName}</div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill
      style={{
        ...frameStyle,
        backgroundColor: theme.colors.bg,
      }}
    >
      {isV2 ? <AbsoluteFill style={{backgroundColor: "#09080a"}} /> : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
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
            background:
              isV3
                ? `linear-gradient(180deg, rgba(8,8,10,0.58) 0%, rgba(8,8,10,0.86) 100%)`
                : isV2
                  ? `linear-gradient(180deg, rgba(8,8,10,0.5) 0%, rgba(8,8,10,0.8) 100%)`
                  : `linear-gradient(180deg, rgba(8,8,10,0.66) 0%, rgba(8,8,10,0.84) 100%)`,
            backdropFilter: isV3 ? "blur(18px)" : "blur(26px)",
          }}
        />
        {isV2 ? (
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,245,224,0.12), inset 0 0 0 24px rgba(9,8,10,0.05)",
            }}
          />
        ) : null}
      </div>
      <div
        style={{
          position: "absolute",
          inset: `${theme.spacing.outerY + surfaceInset}px ${theme.spacing.outerX + surfaceInset}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: isV2 ? "center" : "space-between",
          paddingBottom: isV3 ? 36 : 0,
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
            width: isV2 ? 700 : isV3 ? 620 : 742,
            maxWidth: "100%",
            padding: isV2 ? "44px 44px 38px 44px" : isV3 ? "30px 34px 30px 34px" : "36px 42px 34px 42px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            boxShadow: isV3 ? "0 16px 42px rgba(0, 0, 0, 0.28)" : "0 22px 64px rgba(0, 0, 0, 0.38)",
            display: "flex",
            flexDirection: "column",
            gap: isV2 ? 30 : isV3 ? 18 : 24,
            alignSelf: isV3 ? "flex-start" : "stretch",
            marginTop: isV2 ? 48 : 0,
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
          {isV2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {promptSections.map((section, index) => (
                <div
                  key={`${section.label ?? "section"}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingBottom: index === promptSections.length - 1 ? 0 : 16,
                    borderBottom:
                      index === promptSections.length - 1
                        ? "none"
                        : "1px solid rgba(255, 244, 224, 0.08)",
                  }}
                >
                  {section.label ? (
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 14)}>
                      {section.label}
                    </div>
                  ) : null}
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 450,
                      fontSize: theme.typography.promptBodySize,
                      lineHeight: 1.46,
                      color: theme.colors.fg,
                      maxWidth: 620,
                    }}
                  >
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: isV3 ? 420 : 470,
                fontSize: theme.typography.promptBodySize,
                lineHeight: isV3 ? 1.56 : 1.48,
                color: theme.colors.fg,
                maxWidth: isV3 ? 470 : 604,
                ...titleClampStyle(isV3 ? 8 : 7),
              }}
            >
              {slide.promptBody}
            </div>
          )}
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
                  gap: isV2 ? 24 : 20,
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
                  color: isV3 ? "rgba(242, 239, 233, 0.74)" : "rgba(244, 239, 231, 0.9)",
                  textAlign: "right",
                }}
              >
                {slide.cta}
              </div>
            ) : null}
          </div>
        </div>
        {isV2 ? null : <div />}
      </div>
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};
