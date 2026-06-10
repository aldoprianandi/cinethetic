import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, TextCompareSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

/* ── TextCompareSlideView ── */

export const TextCompareSlideView: React.FC<{
  slide: TextCompareSlide;
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
        <div style={{position: "absolute", inset: "84px 56px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 52, lineHeight: 0.92, textTransform: "uppercase" as const, color: "#000000", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 4px 1fr", gap: 0}}>
            {/* Left column */}
            <div style={{display: "flex", flexDirection: "column", gap: 20, paddingRight: 24}}>
              <div style={{padding: "12px 20px", background: "#ff0040", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#000000", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "rgba(0,0,0,0.7)"}}>{"- "}{item}</div>
              ))}
            </div>
            {/* Divider */}
            <div style={{background: "#000000"}} />
            {/* Right column */}
            <div style={{display: "flex", flexDirection: "column", gap: 20, paddingLeft: 24}}>
              <div style={{padding: "12px 20px", background: "#000000", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: theme.colors.bg, alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: "#000000"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 72px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("rgba(0,255,136,0.6)", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 48, lineHeight: 0.98, color: "#00ff88", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 16px", border: "1px solid rgba(255,60,60,0.4)", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,60,60,0.7)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(0,255,136,0.4)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(0,255,136,0.15)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 16px", border: "1px solid rgba(0,255,136,0.4)", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#00ff88", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(0,255,136,0.88)"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 48, lineHeight: 0.98, color: "#d4e0f0", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 2px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 16px", border: "2px dashed rgba(255,100,100,0.4)", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,100,100,0.7)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(212,224,240,0.5)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(77,166,255,0.25)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 16px", border: "2px solid #4da6ff", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#4da6ff", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "#d4e0f0"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 92px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#c25a3c", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 48, lineHeight: 0.98, color: "#2c2822", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 18px", background: "rgba(44,40,34,0.08)", borderRadius: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(44,40,34,0.5)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(44,40,34,0.6)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(44,40,34,0.15)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 18px", background: "#c25a3c", borderRadius: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ffffff", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "#2c2822"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 48, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, borderRadius: 28, background: "rgba(30,20,52,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(224,96,255,0.12)", padding: "28px 32px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 16px", borderRadius: 999, background: "rgba(255,60,100,0.15)", fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,120,160,0.8)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(240,232,255,0.5)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(224,96,255,0.12)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 16px", borderRadius: 999, background: "rgba(160,64,224,0.3)", fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#e060ff", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "#f0e8ff"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 78px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 14, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 48, lineHeight: 0.96, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 2px 1fr", gap: 0, border: "2px solid rgba(28,26,24,0.24)", padding: "24px 28px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "8px 14px", border: "2px solid rgba(28,26,24,0.3)", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.6)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 20, lineHeight: 1.4, color: "rgba(28,26,24,0.56)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(28,26,24,0.2)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "8px 14px", border: "2px solid #1c1a18", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1c1a18", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 20, lineHeight: 1.4, color: "#1c1a18"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: bg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 48, lineHeight: 0.96, letterSpacing: "-0.03em", color: fg, maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 18px", background: "rgba(26,26,24,0.08)", fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: muted, alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: muted}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(26,26,24,0.14)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 18px", background: theme.colors.accent, fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ffffff", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: fg}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
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
        <div style={{position: "absolute", inset: "84px 74px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 48, lineHeight: 0.96, color: "#ffffff", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 2px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 16px", border: "2px solid rgba(144,144,176,0.3)", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(144,144,176,0.6)", alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "rgba(144,144,176,0.5)"}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(255,107,53,0.2)"}} />
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
              <div style={{padding: "10px 16px", background: "#ff6b35", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ffffff", alignSelf: "flex-start"}}>{slide.right.label}</div>
              {slide.right.items.map((item, i) => (
                <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: "#ffffff"}}>{"- "}{item}</div>
              ))}
            </div>
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark) ── */
  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
        {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
        {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 52, lineHeight: 0.98, letterSpacing: "-0.03em", color: theme.colors.fg, maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
        <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0}}>
          <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
            <div style={{padding: "10px 18px", background: "rgba(255,255,255,0.06)", fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: theme.colors.muted, alignSelf: "flex-start"}}>{slide.left.label}</div>
            {slide.left.items.map((item, i) => (
              <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: theme.colors.muted}}>{"- "}{item}</div>
            ))}
          </div>
          <div style={{background: "rgba(255,255,255,0.08)"}} />
          <div style={{display: "flex", flexDirection: "column", gap: 18, paddingLeft: 22}}>
            <div style={{padding: "10px 18px", background: theme.colors.accent, fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ffffff", alignSelf: "flex-start"}}>{slide.right.label}</div>
            {slide.right.items.map((item, i) => (
              <div key={`r-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: theme.colors.fg}}>{"- "}{item}</div>
            ))}
          </div>
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};
