import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {
  CarouselData,
  TextCompareSlide,
  TextQuoteSlide,
  TextStatSlide,
  TextTipsSlide,
  TextTitleSlide,
} from "../../types";
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

export const TextTipsSlideView: React.FC<{
  slide: TextTipsSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const isLight = isV14 || isV16 || isV18 || isV20 || isV23;

  /* ── v21-brutalist ── */
  if (isV21) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "84px 56px 118px", display: "flex", flexDirection: "column", gap: 16}}>
          {slide.eyebrow ? <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 56, lineHeight: 0.92, textTransform: "uppercase" as const, color: "#000000", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(0,0,0,0.62)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "80px minmax(0, 1fr)", gap: 24, alignItems: "start", paddingTop: 28, paddingBottom: 28, borderTop: "4px solid #000000", borderBottom: index === slide.tips.length - 1 ? "4px solid #000000" : "none"}}>
                <div style={{width: 80, height: 80, background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 36, color: theme.colors.bg}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8, paddingTop: 4}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 26, lineHeight: 1.2, color: "#000000", textTransform: "uppercase" as const}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.4, color: "rgba(0,0,0,0.62)"}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#0a0e14"}} />
        <div style={{position: "absolute", inset: "84px 72px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("rgba(0,255,136,0.6)", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 52, lineHeight: 0.98, color: "#00ff88", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.44, color: "rgba(0,255,136,0.4)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 12, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: 20, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderBottom: index === slide.tips.length - 1 ? "none" : "1px solid rgba(0,255,136,0.12)"}}>
                <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 32, lineHeight: 1, color: "#00ff88"}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.24, color: "rgba(0,255,136,0.88)"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.4, color: "rgba(0,255,136,0.4)", maxWidth: 640}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v19-blueprint ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 52, lineHeight: 0.98, color: "#d4e0f0", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.44, color: "rgba(212,224,240,0.56)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 12, display: "flex", flexDirection: "column", position: "relative", paddingLeft: 60}}>
            <div style={{position: "absolute", left: 19, top: 20, bottom: 20, width: 0, borderLeft: "2px dashed rgba(77,166,255,0.3)"}} />
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "flex", alignItems: "flex-start", gap: 24, paddingBottom: 32, position: "relative"}}>
                <div style={{position: "absolute", left: -60, top: 0, width: 40, height: 40, borderRadius: 999, border: "2px solid #4da6ff", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a2744", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 16, fontWeight: 600, color: "#4da6ff"}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.24, color: "#d4e0f0"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.4, color: "rgba(212,224,240,0.56)", maxWidth: 620}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid ── */
  if (isV20) {
    const rotations = [-1, 1, -0.5, 0.8, -0.3];
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <div style={{position: "absolute", inset: "84px 92px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle("#c25a3c", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 54, lineHeight: 0.98, color: "#2c2822", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(44,40,34,0.6)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, display: "flex", flexDirection: "column", gap: 18}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{background: "#fffef8", padding: "24px 28px", boxShadow: "0 6px 20px rgba(60,50,40,0.1)", transform: `rotate(${rotations[index % rotations.length]}deg)`, display: "flex", flexDirection: "column", gap: 8}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 38, fontStyle: "italic", lineHeight: 1, color: "#c25a3c"}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.2, color: "#2c2822"}}>{tip.title}</div>
                {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: "rgba(44,40,34,0.6)"}}>{tip.body}</div> : null}
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor ── */
  if (isV22) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          {slide.eyebrow ? <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 56, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(240,232,255,0.52)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, borderRadius: 28, background: "rgba(30,20,52,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(224,96,255,0.12)", padding: "28px 32px", display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: 20, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderBottom: index === slide.tips.length - 1 ? "none" : "1px solid rgba(224,96,255,0.08)"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 36, lineHeight: 1, color: "#e060ff", textShadow: "0 0 16px rgba(224,96,255,0.4)"}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.24, color: "#f0e8ff"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 19, lineHeight: 1.4, color: "rgba(240,232,255,0.52)"}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact ── */
  if (isV23) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <div style={{position: "absolute", inset: "84px 78px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 14, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 52, lineHeight: 0.96, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 20, lineHeight: 1.44, color: "rgba(28,26,24,0.56)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "flex", flexDirection: "column", gap: 8, paddingTop: 24, paddingBottom: 24, borderTop: "1px solid rgba(28,26,24,0.2)", borderBottom: index === slide.tips.length - 1 ? "1px solid rgba(28,26,24,0.2)" : "none"}}>
                <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, color: "rgba(28,26,24,0.4)"}}>{tip.number ?? `${index + 1}.0`}</div>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 24, lineHeight: 1.2, color: "#1c1a18"}}>{tip.title}</div>
                {tip.body ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 520, fontSize: 18, lineHeight: 1.44, color: "rgba(28,26,24,0.56)", maxWidth: 660}}>{tip.body}</div> : null}
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 56, lineHeight: 0.94, letterSpacing: "-0.03em", color: "#1a1a18", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(26,26,24,0.6)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "72px minmax(0, 1fr)", gap: 20, alignItems: "start", paddingTop: 24, paddingBottom: 24, borderTop: `1px solid rgba(26,26,24,0.14)`, borderBottom: index === slide.tips.length - 1 ? `1px solid rgba(26,26,24,0.14)` : "none"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 48, lineHeight: 1, color: theme.colors.accent}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.22, color: "#1a1a18"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.42, color: "rgba(26,26,24,0.56)"}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette ── */
  if (isV18) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f2ede4"}} />
        <div style={{position: "absolute", inset: "84px 62px 118px", display: "flex", flexDirection: "column", gap: 18}}>
          <div style={{width: 40, height: 4, background: theme.colors.accent}} />
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 56, lineHeight: 0.94, letterSpacing: "-0.03em", color: "#1a1816", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(26,24,22,0.6)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: 18, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderTop: "1px solid rgba(26,24,22,0.18)", borderBottom: index === slide.tips.length - 1 ? "1px solid rgba(26,24,22,0.18)" : "none"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 48, lineHeight: 1, color: theme.colors.accent}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 23, lineHeight: 1.22, color: "#1a1816"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 19, lineHeight: 1.44, color: "rgba(26,24,22,0.56)"}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "84px 74px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          {slide.eyebrow ? <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 56, lineHeight: 0.96, color: "#ffffff", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.44, color: "rgba(144,144,176,0.6)", maxWidth: 660}}>{slide.intro}</div> : null}
          <div style={{marginTop: 8, borderLeft: "4px solid #ff6b35", paddingLeft: 28, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: 18, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderBottom: index === slide.tips.length - 1 ? "none" : "1px solid rgba(255,107,53,0.12)"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 36, lineHeight: 1, color: "#ff6b35"}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.24, color: "#ffffff"}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 19, lineHeight: 1.4, color: "rgba(144,144,176,0.6)"}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v14 (light) ── */
  if (isV14) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "92px 82px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 720, fontSize: 62, lineHeight: 0.98, letterSpacing: "-0.05em", color: theme.colors.fg, maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 23, lineHeight: 1.42, color: "rgba(24,22,20,0.7)", maxWidth: 680}}>{slide.intro}</div> : null}
          <div style={{marginTop: 12, display: "flex", flexDirection: "column"}}>
            {slide.tips.map((tip, index) => (
              <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "90px minmax(0, 1fr)", gap: 18, alignItems: "start", paddingTop: 26, paddingBottom: 24, borderBottom: index === slide.tips.length - 1 ? "none" : "1px solid rgba(24,22,20,0.09)"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 40, lineHeight: 1, color: theme.colors.accent, paddingTop: 2}}>{tip.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.24, color: theme.colors.fg}}>{tip.title}</div>
                  {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.42, color: theme.colors.muted, maxWidth: 640}}>{tip.body}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark: v4, v7, v11 etc.) ── */
  const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      {resolvedBg ? (
        <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
      ) : null}
      <div style={{position: "absolute", inset: "92px 82px 118px", display: "flex", flexDirection: "column", gap: 24}}>
        {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
        <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 74, lineHeight: 0.98, letterSpacing: "-0.03em", color: theme.colors.fg, maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
        {slide.intro ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 23, lineHeight: 1.42, color: "rgba(245,240,232,0.72)", maxWidth: 680}}>{slide.intro}</div> : null}
        <div style={{marginTop: 12, display: "flex", flexDirection: "column"}}>
          {slide.tips.map((tip, index) => (
            <div key={`${tip.number ?? index}-${tip.title}`} style={{display: "grid", gridTemplateColumns: "90px minmax(0, 1fr)", gap: 18, alignItems: "start", paddingTop: 26, paddingBottom: 24, borderBottom: index === slide.tips.length - 1 ? "none" : "1px solid rgba(255,255,255,0.07)"}}>
              <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 520, fontSize: 40, lineHeight: 1, color: theme.colors.accent, paddingTop: 2}}>{tip.number ?? `0${index + 1}`}</div>
              <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.24, color: theme.colors.fg}}>{tip.title}</div>
                {tip.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 20, lineHeight: 1.42, color: theme.colors.muted, maxWidth: 640}}>{tip.body}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

/* ── TextQuoteSlideView ── */

export const TextQuoteSlideView: React.FC<{
  slide: TextQuoteSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const isLight = isV14 || isV16 || isV18 || isV20 || isV23;
  const quoteFontSize = slide.quote.length > 120 ? 56 : slide.quote.length > 60 ? 64 : 72;

  /* ── v21-brutalist ── */
  if (isV21) {
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

  /* ── v17-terminal ── */
  if (isV17) {
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

  /* ── v19-blueprint ── */
  if (isV19) {
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

  /* ── v20-polaroid ── */
  if (isV20) {
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

  /* ── v22-vapor ── */
  if (isV22) {
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

  /* ── v23-redact ── */
  if (isV23) {
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

  /* ── v16-manifest / v18-gazette (light generics) ── */
  if (isV16 || isV18) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: isV16 ? "#f6f4f0" : "#f2ede4"}} />
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 220, lineHeight: 0.7, color: `${theme.colors.accent}22`}}>{"\u201C"}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: quoteFontSize, lineHeight: 1.06, letterSpacing: "-0.03em", color: isV16 ? "#1a1a18" : "#1a1816", maxWidth: 820, ...titleClampStyle(5)}}>{slide.quote}</div>
          {slide.attribution ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 22, lineHeight: 1.4, color: isV16 ? "rgba(26,26,24,0.5)" : "rgba(26,24,22,0.5)", marginTop: 12}}>{"\u2014 "}{slide.attribution}</div> : null}
          {slide.context ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 18, lineHeight: 1.4, color: isV16 ? "rgba(26,26,24,0.36)" : "rgba(26,24,22,0.36)"}}>{slide.context}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint ── */
  if (isV24) {
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

  /* ── v14 (light) ── */
  if (isV14) {
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
  }

  /* ── generic (dark: v4, v7, v11 etc.) ── */
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

/* ── TextCompareSlideView ── */

export const TextCompareSlideView: React.FC<{
  slide: TextCompareSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const isLight = isV14 || isV16 || isV18 || isV20 || isV23;

  /* ── v21-brutalist ── */
  if (isV21) {
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

  /* ── v17-terminal ── */
  if (isV17) {
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

  /* ── v19-blueprint ── */
  if (isV19) {
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

  /* ── v20-polaroid ── */
  if (isV20) {
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

  /* ── v22-vapor ── */
  if (isV22) {
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

  /* ── v23-redact ── */
  if (isV23) {
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

  /* ── v16-manifest / v18-gazette ── */
  if (isV16 || isV18) {
    const bg = isV16 ? "#f6f4f0" : "#f2ede4";
    const fg = isV16 ? "#1a1a18" : "#1a1816";
    const muted = isV16 ? "rgba(26,26,24,0.56)" : "rgba(26,24,22,0.56)";
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

  /* ── v24-neoprint ── */
  if (isV24) {
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

  /* ── v14 (light) ── */
  if (isV14) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          {slide.title ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 720, fontSize: 48, lineHeight: 0.98, letterSpacing: "-0.05em", color: theme.colors.fg, maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div> : null}
          <div style={{marginTop: 12, flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0}}>
            <div style={{display: "flex", flexDirection: "column", gap: 18, paddingRight: 22}}>
              <div style={{padding: "10px 18px", background: "rgba(24,22,20,0.06)", fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: theme.colors.muted, alignSelf: "flex-start"}}>{slide.left.label}</div>
              {slide.left.items.map((item, i) => (
                <div key={`l-${i}`} style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 21, lineHeight: 1.4, color: theme.colors.muted}}>{"- "}{item}</div>
              ))}
            </div>
            <div style={{background: "rgba(24,22,20,0.09)"}} />
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
  }

  /* ── generic (dark: v4, v7, v11 etc.) ── */
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

/* ── TextStatSlideView ── */

export const TextStatSlideView: React.FC<{
  slide: TextStatSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const isLight = isV14 || isV16 || isV18 || isV20 || isV23;

  /* ── v21-brutalist ── */
  if (isV21) {
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

  /* ── v17-terminal ── */
  if (isV17) {
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

  /* ── v19-blueprint ── */
  if (isV19) {
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

  /* ── v20-polaroid ── */
  if (isV20) {
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

  /* ── v22-vapor ── */
  if (isV22) {
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

  /* ── v23-redact ── */
  if (isV23) {
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

  /* ── v16-manifest / v18-gazette ── */
  if (isV16 || isV18) {
    const bg = isV16 ? "#f6f4f0" : "#f2ede4";
    const fg = isV16 ? "#1a1a18" : "#1a1816";
    const muted = isV16 ? "rgba(26,26,24,0.56)" : "rgba(26,24,22,0.56)";
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
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: isV16 ? "rgba(26,26,24,0.36)" : "rgba(26,24,22,0.36)", marginTop: 16}}>Source: {slide.source}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint ── */
  if (isV24) {
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

  /* ── v14 (light) ── */
  if (isV14) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 720, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.05em", color: theme.colors.accent}}>{slide.stat}</div>
            {slide.unit ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 720, fontSize: 72, lineHeight: 0.85, color: theme.colors.accent, marginLeft: 8}}>{slide.unit}</div> : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: theme.colors.muted, maxWidth: 600, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.source ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 15, lineHeight: 1.4, color: theme.colors.muted, opacity: 0.6, marginTop: 16}}>Source: {slide.source}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark: v4, v7, v11 etc.) ── */
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

/* ── TextTitleSlideView ── */

export const TextTitleSlideView: React.FC<{
  slide: TextTitleSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const isLight = isV14 || isV16 || isV18 || isV20 || isV23;
  const titleLen = slide.title.length;
  const titleSize = titleLen > 20 ? 100 : titleLen > 12 ? 120 : 140;

  /* ── v21-brutalist ── */
  if (isV21) {
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

  /* ── v17-terminal ── */
  if (isV17) {
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

  /* ── v19-blueprint ── */
  if (isV19) {
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

  /* ── v20-polaroid ── */
  if (isV20) {
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

  /* ── v22-vapor ── */
  if (isV22) {
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

  /* ── v23-redact ── */
  if (isV23) {
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

  /* ── v16-manifest / v18-gazette ── */
  if (isV16 || isV18) {
    const bg = isV16 ? "#f6f4f0" : "#f2ede4";
    const fg = isV16 ? "#1a1a18" : "#1a1816";
    const muted = isV16 ? "rgba(26,26,24,0.56)" : "rgba(26,24,22,0.56)";
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

  /* ── v24-neoprint ── */
  if (isV24) {
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

  /* ── v14 (light) ── */
  if (isV14) {
    const resolvedBg = resolveAssetSrc(slide.backgroundImageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        {resolvedBg ? (
          <Img src={resolvedBg} style={{width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${slide.backgroundBrightness ?? 0.15})`}} />
        ) : null}
        <div style={{position: "absolute", inset: "120px 82px 118px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 20}}>
          {slide.eyebrow ? <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 720, fontSize: titleSize, lineHeight: 0.92, letterSpacing: "-0.05em", color: theme.colors.fg, maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.subtitle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 520, fontSize: 24, lineHeight: 1.44, color: theme.colors.muted, maxWidth: 660, ...titleClampStyle(2)}}>{slide.subtitle}</div> : null}
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: theme.colors.accent, marginTop: 12}}>{slide.handle}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── generic (dark: v4, v7, v11 etc.) ── */
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
