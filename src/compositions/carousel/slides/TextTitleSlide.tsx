import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {CarouselData, TextTitleSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, resolveAssetSrc, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

/* ── TextTitleSlideView ── */

export const TextTitleSlideView: React.FC<{
  slide: TextTitleSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);
  const titleLen = slide.title.length;
  const titleSize = titleLen > 20 ? 100 : titleLen > 12 ? 120 : 140;

  /* ── brutalist ── */
  if (isBrutalist) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 56px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: titleSize, lineHeight: 0.86, textTransform: "uppercase" as const, color: "#000000", maxWidth: 960, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 26, lineHeight: 1.44, color: "rgba(0,0,0,0.62)", maxWidth: 700, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 20, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#ff0040", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── terminal ── */
  if (isTerminal) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#0a0e14"}} />
        <div style={{position: "absolute", inset: "120px 72px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("rgba(0,255,136,0.6)", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: titleSize - 20, lineHeight: 0.92, color: "#00ff88", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(0,255,136,0.4)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(0,255,136,0.5)", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── blueprint ── */
  if (isBlueprint) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: titleSize - 20, lineHeight: 0.92, color: "#d4e0f0", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(212,224,240,0.56)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(77,166,255,0.6)", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── polaroid ── */
  if (isPolaroid) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 92px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 18, fontStyle: "italic", color: "rgba(44,40,34,0.5)", letterSpacing: "0.12em"}}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: titleSize, lineHeight: 0.92, letterSpacing: "-0.02em", color: "#2c2822", maxWidth: 880, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(44,40,34,0.6)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 20, fontStyle: "italic", color: "#c25a3c", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── vapor ── */
  if (isVapor) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 40%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "120px 80px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: titleSize, lineHeight: 0.92, color: "#f0e8ff", textShadow: "0 0 30px rgba(224,96,255,0.2)", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(240,232,255,0.52)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(224,96,255,0.6)", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── redact ── */
  if (isRedact) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 78px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 14, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: titleSize - 10, lineHeight: 0.92, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(28,26,24,0.56)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.4)", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── manifest / gazette ── */
  if (isManifest || isGazette) {
    const bg = isManifest ? "#f6f4f0" : "#f2ede4";
    const fg = isManifest ? "#1a1a18" : "#1a1816";
    const muted = isManifest ? "rgba(26,26,24,0.56)" : "rgba(26,24,22,0.56)";
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: bg}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: titleSize, lineHeight: 0.92, letterSpacing: "-0.03em", color: fg, maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: muted, maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: theme.colors.accent, marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── neoprint ── */
  if (isNeoprint) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 74px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: titleSize, lineHeight: 0.92, color: "#ffffff", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(144,144,176,0.6)", maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#ff6b35", marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark) ── */
  const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      {resolvedBg ? (
        <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
      ) : null}
      <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
        {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
        <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: titleSize, lineHeight: 0.92, letterSpacing: "-0.03em", color: theme.colors.fg, maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
        {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: theme.colors.muted, maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
        {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: theme.colors.accent, marginTop: 12}}>{slide.handle}</div> : null}
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};
