import React, {type CSSProperties} from "react";
import {AbsoluteFill, Img, staticFile} from "remotion";
import type {CarouselData} from "../../types";
import {imagePlaceholderStyle} from "./palettes";
import {getVariantFlags} from "./variants";

export const previewScale = 0.29;

export const getCoverTitleMetrics = (title: string, large: number, medium: number, small: number) => {
  const length = title.length;
  const longestWord = title
    .split(/\s+/)
    .reduce((max, word) => Math.max(max, word.length), 0);

  if (length <= 24 && longestWord <= 10) {
    return {fontSize: large, maxWidth: 760};
  }

  if (length <= 38 && longestWord <= 12) {
    return {fontSize: medium, maxWidth: 740};
  }

  return {fontSize: small, maxWidth: 780};
};

export const panelShadow = "0 24px 80px rgba(0, 0, 0, 0.45)";

export const frameStyle: CSSProperties = {
  boxShadow: panelShadow,
  overflow: "hidden",
};

export const titleClampStyle = (lines: number): CSSProperties => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
};

export const labelStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
  return {
    fontFamily,
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color,
  };
};

export const counterStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
  return {
    fontFamily,
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color,
  };
};

export const subtleTexture: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, rgba(255,255,255,0) 1px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, rgba(255,255,255,0) 1px 8px)",
  mixBlendMode: "screen",
  opacity: 0.32,
};

export const resolveAssetSrc = (src?: string) => {
  if (!src) {
    return undefined;
  }

  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) {
    return src;
  }

  return staticFile(src.replace(/^\/+/, ""));
};

export const VisualSurface: React.FC<{
  hint: string;
  slideIndex: number;
  carousel: CarouselData;
  imageSrc?: string;
  imagePosition?: string;
  imageScale?: number;
  imageBrightness?: number;
  imageContrast?: number;
  imageSaturation?: number;
}> = ({
  hint,
  slideIndex,
  carousel,
  imageSrc,
  imagePosition,
  imageScale,
  imageBrightness,
  imageContrast,
  imageSaturation,
}) => {
  const resolvedSrc = resolveAssetSrc(imageSrc);
  const imageFilter = [
    `brightness(${imageBrightness ?? 1})`,
    `contrast(${imageContrast ?? 1})`,
    `saturate(${imageSaturation ?? 1})`,
  ].join(" ");

  return (
    <AbsoluteFill>
      {resolvedSrc ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Img
            src={resolvedSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imagePosition ?? "center center",
              transform: `scale(${imageScale ?? 1})`,
              transformOrigin: "center center",
              filter: imageFilter,
            }}
          />
        </div>
      ) : (
        <AbsoluteFill style={imagePlaceholderStyle(slideIndex, carousel.variant)}>
          <AbsoluteFill style={subtleTexture} />
          <AbsoluteFill
            style={{
              background:
                "radial-gradient(circle at 50% 44%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 38%), linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.28) 100%)",
              mixBlendMode: "screen",
              opacity: 0.6,
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 -160px 220px rgba(0,0,0,0.42)",
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: "space-between",
              padding: 60,
              opacity: 0.76,
            }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                width: 220,
                height: 220,
                borderRadius: 999,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 72%)",
                filter: "blur(12px)",
              }}
            />
            <div
              style={{
                alignSelf: "flex-start",
                fontFamily: carousel.theme.typography.bodyFamily,
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255, 247, 234, 0.52)",
              }}
            >
              {hint}
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

export const SlideCounter: React.FC<{counter?: string; carousel: CarouselData}> = ({counter, carousel}) => {
  if (!counter) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        right: carousel.theme.spacing.outerX,
        bottom: carousel.theme.spacing.outerY,
        ...counterStyle(
          "rgba(244, 239, 231, 0.9)",
          carousel.theme.typography.bodyFamily,
          carousel.theme.typography.counterSize,
        ),
      }}
    >
      {counter}
    </div>
  );
};

export const StoryProgressBar: React.FC<{
  carousel: CarouselData;
  slideIndex: number;
  counter?: string;
}> = ({carousel, slideIndex, counter}) => {
  const {theme, slides} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} =
    getVariantFlags(carousel);
  const total = slides.length;
  const progress = ((slideIndex + 1) / total) * 100;
  const isLightBar = isManifest || isGazette || isPolaroid || isRedact;
  const fg = isTerminal
    ? "rgba(0, 255, 136, 0.82)"
    : isBrutalist
      ? "rgba(0, 0, 0, 0.86)"
      : isLightBar
        ? "rgba(24, 22, 20, 0.86)"
        : "rgba(244, 239, 231, 0.92)";
  const track = isTerminal
    ? "rgba(0, 255, 136, 0.12)"
    : isBrutalist
      ? "rgba(0, 0, 0, 0.14)"
      : isLightBar
        ? "rgba(24, 22, 20, 0.12)"
        : "rgba(255, 255, 255, 0.14)";
  const accentOverride = isTerminal
    ? "#00ff88"
    : isGazette || isBrutalist
      ? theme.colors.accent
      : isBlueprint
        ? "#4da6ff"
        : isVapor
          ? "#e060ff"
          : isNeoprint
            ? "#ff6b35"
            : undefined;

  return (
    <div
      style={{
        position: "absolute",
        left: 74,
        right: 74,
        bottom: 42,
        display: "flex",
        alignItems: "flex-end",
        gap: 24,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            height: 4,
            borderRadius: 999,
            background: track,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 999,
              background: accentOverride ?? theme.colors.accent,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: index === slideIndex ? (accentOverride ?? theme.colors.accent) : track,
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={counterStyle(fg, theme.typography.bodyFamily, theme.typography.counterSize)}
      >
        {counter ?? `${slideIndex + 1} / ${total}`}
      </div>
    </div>
  );
};
