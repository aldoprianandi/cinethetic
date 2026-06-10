import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, TextQuoteSlide} from "../../../types";
import {frameStyle, titleClampStyle, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const TextQuoteSlideView: React.FC<{
  slide: TextQuoteSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);
  const isLight = isManifest || isGazette || isPolaroid || isRedact;
  const quoteFontSize = slide.quote.length > 120 ? 56 : slide.quote.length > 60 ? 64 : 72;

  /* ── brutalist ── */
  if (isBrutalist) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "120px 56px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 260, lineHeight: 0.7, color: theme.colors.bg, WebkitTextStroke: "6px #000000"}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: quoteFontSize, lineHeight: 1.0, color: "#000000", maxWidth: 860, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 24, lineHeight: 1.4, color: "rgba(0,0,0,0.72)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 21, lineHeight: 1.4, color: "rgba(0,0,0,0.58)"}}>{slide.context}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 72px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 200, lineHeight: 0.7, color: "rgba(0,255,136,0.2)"}}>{"\u201C"}</div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: quoteFontSize - 8, lineHeight: 1.06, color: "#00ff88", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "rgba(0,255,136,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(0,255,136,0.3)"}}>{slide.context}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 200, lineHeight: 0.7, color: "rgba(77,166,255,0.2)"}}>{"\u201C"}</div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: quoteFontSize - 8, lineHeight: 1.06, color: "#d4e0f0", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "rgba(212,224,240,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(212,224,240,0.36)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── polaroid ── */
  if (isPolaroid) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <div style={{position: "absolute", inset: "120px 92px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 220, lineHeight: 0.7, fontStyle: "italic", color: "rgba(194,90,60,0.2)"}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: quoteFontSize, lineHeight: 1.06, color: "#2c2822", maxWidth: 800, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "rgba(44,40,34,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(44,40,34,0.36)"}}>{slide.context}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 80px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 220, lineHeight: 0.7, color: "rgba(224,96,255,0.15)", textShadow: "0 0 40px rgba(224,96,255,0.2)"}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: quoteFontSize, lineHeight: 1.06, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.15)", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "rgba(240,232,255,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(240,232,255,0.34)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── redact ── */
  if (isRedact) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <div style={{position: "absolute", inset: "120px 78px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 200, lineHeight: 0.7, color: "rgba(28,26,24,0.08)"}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: quoteFontSize - 4, lineHeight: 1.04, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 18, lineHeight: 1.4, color: "rgba(28,26,24,0.46)", marginTop: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 16, lineHeight: 1.4, color: "rgba(28,26,24,0.36)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── manifest / gazette (light generics) ── */
  if (isManifest || isGazette) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: isManifest ? "#f6f4f0" : "#f2ede4"}} />
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 220, lineHeight: 0.7, color: `${theme.colors.accent}22`}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: quoteFontSize, lineHeight: 1.06, letterSpacing: "-0.03em", color: isManifest ? "#1a1a18" : "#1a1816", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: isManifest ? "rgba(26,26,24,0.5)" : "rgba(26,24,22,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: isManifest ? "rgba(26,26,24,0.36)" : "rgba(26,24,22,0.36)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── neoprint ── */
  if (isNeoprint) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "120px 74px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 220, lineHeight: 0.7, color: "rgba(255,107,53,0.15)"}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: quoteFontSize, lineHeight: 1.04, color: "#ffffff", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 22, lineHeight: 1.4, color: "rgba(144,144,176,0.6)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(144,144,176,0.4)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark) ── */
  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
        <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 220, lineHeight: 0.7, color: `${theme.colors.accent}22`}}>{"\u201C"}</div>
        <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: quoteFontSize, lineHeight: 1.06, letterSpacing: "-0.03em", color: theme.colors.fg, maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
        {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: theme.colors.muted, marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
        {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: theme.colors.muted, opacity: 0.7}}>{slide.context}</div> : null}
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};
