import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {CarouselData, TextTipsSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, resolveAssetSrc, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const TextTipsSlideView: React.FC<{
  slide: TextTipsSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);
  const isLight = isManifest || isGazette || isPolaroid || isRedact;

  /* ── brutalist ── */
  if (isBrutalist) {
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

  /* ── terminal ── */
  if (isTerminal) {
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

  /* ── blueprint ── */
  if (isBlueprint) {
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

  /* ── polaroid ── */
  if (isPolaroid) {
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

  /* ── vapor ── */
  if (isVapor) {
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

  /* ── redact ── */
  if (isRedact) {
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

  /* ── manifest ── */
  if (isManifest) {
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

  /* ── gazette ── */
  if (isGazette) {
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

  /* ── neoprint ── */
  if (isNeoprint) {
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

  /* ── generic (dark) ── */
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
