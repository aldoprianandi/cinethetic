import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, TextStatSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

/* ── TextStatSlideView ── */

export const TextStatSlideView: React.FC<{
  slide: TextStatSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── brutalist ── */
  if (isBrutalist) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "120px 56px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 200, lineHeight: 0.85, color: "#000000"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 72, lineHeight: 0.85, color: "#000000", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 26, lineHeight: 1.44, color: "rgba(0,0,0,0.62)", maxWidth: 620, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, lineHeight: 1.4, color: "rgba(0,0,0,0.52)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 72px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("rgba(0,255,136,0.6)", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 180, lineHeight: 0.85, color: "#00ff88"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 64, lineHeight: 0.85, color: "#00ff88", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(0,255,136,0.4)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: "rgba(0,255,136,0.25)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 180, lineHeight: 0.85, color: "#4da6ff"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 64, lineHeight: 0.85, color: "#4da6ff", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(212,224,240,0.56)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: "rgba(212,224,240,0.3)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 92px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#c25a3c", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 200, lineHeight: 0.85, fontStyle: "italic", color: "#c25a3c"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 72, lineHeight: 0.85, fontStyle: "italic", color: "#c25a3c", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(44,40,34,0.6)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: "rgba(44,40,34,0.36)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 80px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 200, lineHeight: 0.85, color: "#e060ff", textShadow: "0 0 40px rgba(224,96,255,0.3)"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 72, lineHeight: 0.85, color: "#e060ff", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(240,232,255,0.56)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: "rgba(240,232,255,0.3)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 78px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 14, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 200, lineHeight: 0.85, textTransform: "uppercase" as const, color: "#1c1a18"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 72, lineHeight: 0.85, color: "#1c1a18", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(28,26,24,0.56)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 14, lineHeight: 1.4, color: "rgba(28,26,24,0.36)", marginTop: 16, letterSpacing: "0.08em", textTransform: "uppercase" as const}}>Source: {slide.source}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── manifest / gazette ── */
  if (isManifest || isGazette) {
    const bg = isManifest ? "#f6f4f0" : "#f2ede4";
    const muted = isManifest ? "rgba(26,26,24,0.56)" : "rgba(26,24,22,0.56)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: bg}} />
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.04em", color: theme.colors.accent}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 72, lineHeight: 0.85, color: theme.colors.accent, marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: muted, maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: isManifest ? "rgba(26,26,24,0.36)" : "rgba(26,24,22,0.36)", marginTop: 16}}>Source: {slide.source}</div> : null}
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
        <div style={{position: "absolute", inset: "120px 74px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 200, lineHeight: 0.85, color: "#ff6b35"}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 72, lineHeight: 0.85, color: "#ff6b35", marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: "rgba(144,144,176,0.6)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: "rgba(144,144,176,0.3)", marginTop: 16}}>Source: {slide.source}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark) ── */
  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
        {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
        <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.03em", color: theme.colors.accent}}>{slide.stat}</div>
          {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 72, lineHeight: 0.85, color: theme.colors.accent, marginLeft: 8}}>{slide.unit}</div> : null}
        </div>
        <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: theme.colors.muted, maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
        {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: theme.colors.muted, opacity: 0.6, marginTop: 16}}>Source: {slide.source}</div> : null}
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};
