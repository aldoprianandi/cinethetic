import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {
  CarouselData,
  StoryCtaSlide,
  StoryHeroSlide,
  StoryPanelSlide,
  StoryProofSlide,
  StoryStepsSlide,
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

export const StoryHeroSlideView: React.FC<{
  slide: StoryHeroSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV11, isV12, isV13, isV14, isV15, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);

  /* ── v19-blueprint: technical schematic, dark blue, grid overlay ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "74px 82px 118px", display: "flex", flexDirection: "column", gap: 32}}>
          <div style={{width: "100%", height: 440, borderRadius: 16, overflow: "hidden", border: "2px dashed #4da6ff", position: "relative"}}>
            <VisualSurface hint={slide.imageHint ?? "STORY HERO"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
          </div>
          <div style={{display: "flex", alignItems: "center", gap: 16}}>
            <div style={{fontFamily: theme.typography.bodyFamily, fontSize: 14, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#7a92b4"}}>{slide.eyebrow}</div>
            <div style={{width: 1, height: 18, background: "#4da6ff"}} />
            {slide.accentLine ? <div style={{fontFamily: theme.typography.bodyFamily, fontSize: 20, fontWeight: 500, fontStyle: "italic", color: "#4da6ff"}}>{slide.accentLine}</div> : null}
          </div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: slide.title.length > 52 ? 58 : 68, lineHeight: 0.96, letterSpacing: "-0.02em", color: "#d4e0f0", ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: theme.typography.subtitleSize, lineHeight: 1.42, color: "rgba(212,224,240,0.64)", maxWidth: 620, ...titleClampStyle(3)}}>{slide.body}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid: nostalgic, warm, photo-pinned-on-wall ── */
  if (isV20) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <AbsoluteFill style={{backgroundImage: "repeating-linear-gradient(0deg, rgba(180,160,130,0.04) 0 1px, transparent 1px 3px)", opacity: 0.6}} />
        <div style={{position: "absolute", inset: "80px 100px 140px", display: "flex", flexDirection: "column", alignItems: "center", gap: 36}}>
          <div style={{background: "#ffffff", padding: "24px 24px 80px 24px", boxShadow: "0 12px 40px rgba(60,50,40,0.18)", transform: "rotate(-2deg)"}}>
            <div style={{width: 780, height: 520, overflow: "hidden", position: "relative"}}>
              <VisualSurface hint={slide.imageHint ?? "STORY HERO"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
            </div>
          </div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: slide.title.length > 48 ? 48 : 58, lineHeight: 1.02, letterSpacing: "-0.02em", color: "#2c2822", textAlign: "center", maxWidth: 760, ...titleClampStyle(3)}}>{slide.title}</div>
          {slide.accentLine ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 24, fontStyle: "italic", lineHeight: 1.3, color: "#c25a3c", textAlign: "center"}}>{slide.accentLine}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v21-brutalist: LOUD, yellow bg, black text, confrontational ── */
  if (isV21) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "80px 56px 118px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24}}>
          {slide.eyebrow ? <div style={{fontFamily: theme.typography.bodyFamily, fontSize: 18, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#000000", borderBottom: "4px solid #ff0040", alignSelf: "flex-start", paddingBottom: 6}}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 38 ? 112 : 140, lineHeight: 0.86, letterSpacing: "-0.04em", textTransform: "uppercase" as const, color: "#000000", ...titleClampStyle(5)}}>{slide.title}</div>
          {slide.accentLine ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: "#ff0040"}}>{slide.accentLine}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor: dreamy, purple/pink gradients, soft glow ── */
  if (isV22) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "80px 80px 118px", display: "flex", flexDirection: "column", gap: 36}}>
          <div style={{width: "100%", height: 440, borderRadius: 40, overflow: "hidden", boxShadow: "0 0 60px rgba(224,96,255,0.18), 0 0 120px rgba(180,60,220,0.08)", border: "1px solid rgba(224,96,255,0.16)", position: "relative"}}>
            <VisualSurface hint={slide.imageHint ?? "STORY HERO"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
          </div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: slide.title.length > 52 ? 56 : 66, lineHeight: 0.98, letterSpacing: "-0.02em", color: "#f0e8ff", textShadow: "0 0 24px rgba(224,96,255,0.3)", ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.accentLine ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 500, fontSize: 24, lineHeight: 1.3, color: "#e060ff"}}>{slide.accentLine}</div> : null}
          {slide.body ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: theme.typography.subtitleSize, lineHeight: 1.42, color: "rgba(240,232,255,0.6)", maxWidth: 620, ...titleClampStyle(3)}}>{slide.body}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact: declassified document, typewriter, redaction bars ── */
  if (isV23) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <AbsoluteFill style={{background: "linear-gradient(180deg, rgba(220,210,190,0.12) 0%, rgba(200,190,170,0.06) 100%)"}} />
        <div style={{position: "absolute", inset: "80px 78px 118px", display: "flex", flexDirection: "column", gap: 28}}>
          {slide.eyebrow ? <div style={{alignSelf: "flex-start", padding: "8px 18px", border: "2px solid #1c1a18", transform: "rotate(-4deg)", fontFamily: theme.typography.bodyFamily, fontSize: 16, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#1c1a18"}}>{slide.eyebrow}</div> : null}
          <div style={{width: "100%", height: 400, overflow: "hidden", border: "1px solid rgba(28,26,24,0.24)", position: "relative"}}>
            <VisualSurface hint={slide.imageHint ?? "STORY HERO"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.5)"}}>EXHIBIT — PHOTOGRAPHIC EVIDENCE</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: slide.title.length > 48 ? 52 : 64, lineHeight: 0.94, letterSpacing: "-0.02em", textTransform: "uppercase" as const, color: "#1c1a18", ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.accentLine ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 22, lineHeight: 1.3, color: "#f0ece4", background: "#1c1a18", padding: "6px 14px", alignSelf: "flex-start"}}>{slide.accentLine}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint: risograph/screen-print, dark bg, orange accent, halftone ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "74px 74px 118px", display: "flex", flexDirection: "column", gap: 32}}>
          <div style={{width: "100%", height: 440, overflow: "hidden", borderRadius: 16, position: "relative"}}>
            <VisualSurface hint={slide.imageHint ?? "STORY HERO"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
            <div style={{position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 60%, rgba(255,107,53,0.2) 100%)"}} />
          </div>
          {slide.eyebrow ? <div style={{fontFamily: theme.typography.bodyFamily, fontSize: 14, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#9090b0", borderBottom: "2px solid #ff6b35", alignSelf: "flex-start", paddingBottom: 4}}>{slide.eyebrow}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 48 ? 60 : 72, lineHeight: 0.94, letterSpacing: "-0.03em", color: "#ffffff", ...titleClampStyle(4)}}>{slide.title}</div>
          {slide.accentLine ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 600, fontSize: 24, lineHeight: 1.3, color: "#ff6b35"}}>{slide.accentLine}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest: ultra-typographic, text-dominant ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 82,
            ...labelStyle("#111111", theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.eyebrow}
        </div>
        <div
          style={{
            position: "absolute",
            left: 82,
            right: 82,
            top: 140,
            bottom: 300,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 800,
              fontSize: slide.title.length > 36 ? 108 : 128,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#111111",
              ...titleClampStyle(5),
            }}
          >
            {slide.title}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 80,
            height: 180,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "STORY HERO"}
            slideIndex={slideIndex}
            carousel={carousel}
            imageSrc={slide.imageSrc}
            imagePosition={slide.imagePosition}
            imageScale={slide.imageScale}
            imageBrightness={slide.imageBrightness}
            imageContrast={slide.imageContrast}
            imageSaturation={slide.imageSaturation}
          />
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal: hacker/dev, green-on-black ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#000000"}} />
        <AbsoluteFill
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle, rgba(0,255,136,0.07) 0 1px, transparent 1px 40px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 82,
            right: 82,
            top: 72,
            bottom: 118,
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(0,255,136,0.15)",
              background: "rgba(0,20,10,0.6)",
              display: "flex",
              flexDirection: "column",
              height: 380,
            }}
          >
            <div
              style={{
                height: 36,
                background: "rgba(0,255,136,0.06)",
                borderBottom: "1px solid rgba(0,255,136,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingLeft: 14,
              }}
            >
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#ff5f57"}} />
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#febc2e"}} />
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#28c840"}} />
            </div>
            <div style={{flex: 1, position: "relative", overflow: "hidden"}}>
              <VisualSurface
                hint={slide.imageHint ?? "STORY HERO"}
                slideIndex={slideIndex}
                carousel={carousel}
                imageSrc={slide.imageSrc}
                imagePosition={slide.imagePosition}
                imageScale={slide.imageScale}
                imageBrightness={slide.imageBrightness}
                imageContrast={slide.imageContrast}
                imageSaturation={slide.imageSaturation}
              />
            </div>
          </div>
          {slide.eyebrow ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontSize: theme.typography.labelSize,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ff88",
              }}
            >
              {">"} {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 500,
              fontSize: slide.title.length > 52 ? 64 : 76,
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              color: "#00ff88",
              textTransform: "lowercase",
              ...titleClampStyle(4),
            }}
          >
            $ {slide.title}
          </div>
          {slide.body ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.42,
                color: "rgba(0,255,136,0.5)",
                maxWidth: 620,
                ...titleClampStyle(3),
              }}
            >
              {slide.body}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette: newspaper/editorial, serif-heavy ── */
  if (isV18) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{position: "relative", overflow: "hidden"}}>
          <VisualSurface
            hint={slide.imageHint ?? "STORY HERO"}
            slideIndex={slideIndex}
            carousel={carousel}
            imageSrc={slide.imageSrc}
            imagePosition={slide.imagePosition}
            imageScale={slide.imageScale}
            imageBrightness={slide.imageBrightness}
            imageContrast={slide.imageContrast}
            imageSaturation={slide.imageSaturation ?? 0.8}
          />
        </AbsoluteFill>
        {slide.eyebrow ? (
          <div
            style={{
              position: "absolute",
              top: 52,
              left: 62,
              fontFamily: theme.typography.bodyFamily,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {slide.eyebrow}
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 340,
            background: "rgba(26,24,22,0.92)",
            display: "flex",
            flexDirection: "column",
            padding: "0 62px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 3,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                fontFamily: theme.typography.displayFamily,
                fontWeight: 700,
                fontSize: slide.title.length > 52 ? 52 : 64,
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                ...titleClampStyle(3),
              }}
            >
              {slide.title}
            </div>
            {slide.body ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 430,
                  fontSize: 24,
                  lineHeight: 1.4,
                  color: "rgba(242,237,228,0.74)",
                  maxWidth: 660,
                  ...titleClampStyle(2),
                }}
              >
                {slide.body}
              </div>
            ) : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  const isLight = isV12 || isV14;
  const textColor = isLight ? theme.colors.fg : "#f6f0e8";
  const bodyColor = isLight ? "rgba(36, 31, 26, 0.68)" : "rgba(245, 240, 232, 0.74)";
  const labelColor = isLight ? theme.colors.accent : theme.colors.muted;
  const titleLength = slide.title.length;
  const heroTitleSize = isV12
    ? titleLength > 62
      ? 76
      : 86
    : isV14
      ? titleLength > 62
        ? 72
        : 82
      : isV13
        ? titleLength > 58
          ? 80
          : 88
        : isV15
          ? titleLength > 46
            ? 72
            : 82
          : titleLength > 52
            ? 74
            : 84;
  const heroImageWidth = isV15 ? 620 : isV11 ? 820 : "100%";
  const heroImageHeight = isV12 || isV14 ? 356 : isV15 ? 352 : isV13 ? 308 : 334;

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: isV13
            ? "linear-gradient(180deg, #b55c31 0%, #a24d24 52%, #773416 100%)"
            : theme.colors.bg,
        }}
      />
      {isV13 ? (
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(circle at 50% 12%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 38%), radial-gradient(circle at 50% 100%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 46%)",
          }}
        />
      ) : null}
      {isV15 ? (
        <AbsoluteFill
          style={{
            background:
              "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.035) 0 2px, rgba(255,255,255,0) 2px 140px)",
            opacity: 0.34,
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          inset: "74px 82px 118px",
          display: "flex",
          flexDirection: "column",
          gap: 42,
        }}
      >
        <div
          style={{
            width: heroImageWidth,
            height: heroImageHeight,
            alignSelf: isV15 ? "flex-end" : "stretch",
            borderRadius: isV13 ? 34 : isLight ? 28 : 32,
            overflow: "hidden",
            boxShadow: isLight
              ? "0 28px 56px rgba(46, 36, 28, 0.14)"
              : "0 26px 58px rgba(0, 0, 0, 0.34)",
            border: isLight
              ? "1px solid rgba(36,31,26,0.08)"
              : "1px solid rgba(255,255,255,0.08)",
            background: isLight ? "rgba(255,255,255,0.9)" : "rgba(15,15,18,0.8)",
            position: "relative",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "STORY HERO"}
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
              background: isLight
                ? "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.18) 100%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.42) 100%)",
            }}
          />
          {isV13 ? (
            <div
              style={{
                position: "absolute",
                left: 34,
                top: 30,
                maxWidth: 420,
                padding: "18px 22px",
                borderRadius: 22,
                background: "rgba(86, 34, 14, 0.46)",
                border: "1px solid rgba(255, 234, 216, 0.12)",
                color: "rgba(255,245,238,0.84)",
                fontFamily: theme.typography.bodyFamily,
                fontSize: 23,
                fontStyle: "italic",
                lineHeight: 1.3,
                boxShadow: "0 18px 34px rgba(73, 22, 6, 0.2)",
              }}
            >
              {slide.accentLine ?? "Describe the visual once. Export the deck still by still."}
            </div>
          ) : null}
        </div>
        <div style={labelStyle(labelColor, theme.typography.bodyFamily, theme.typography.labelSize)}>
          {slide.eyebrow}
        </div>
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: isV14 ? 720 : 500,
            fontSize: heroTitleSize,
            lineHeight: isV12 ? 0.96 : 0.93,
            letterSpacing: isV14 ? "-0.05em" : "-0.035em",
            color: textColor,
            maxWidth: isV12 || isV14 ? 860 : isV15 ? 620 : 760,
            ...titleClampStyle(4),
          }}
        >
          {slide.title}
        </div>
        {slide.accentLine && !isV13 ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 600,
              fontSize: 26,
              lineHeight: 1.3,
              color: theme.colors.accent,
              maxWidth: 600,
              ...titleClampStyle(2),
            }}
          >
            {slide.accentLine}
          </div>
        ) : null}
        {slide.body ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: theme.typography.subtitleSize,
              lineHeight: 1.42,
              color: bodyColor,
              maxWidth: isV15 ? 440 : 620,
              ...titleClampStyle(3),
            }}
          >
            {slide.body}
          </div>
        ) : null}
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

export const StoryPanelSlideView: React.FC<{
  slide: StoryPanelSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV11, isV12, isV13, isV14, isV15, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);

  /* ── v19-blueprint: grid bg, split layout, dashed frame ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "grid", gridTemplateColumns: showMedia ? "1fr 1fr" : "1fr", gap: 36, alignItems: "center"}}>
          <div style={{display: "flex", flexDirection: "column", gap: 18}}>
            <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: slide.title.length > 48 ? 48 : 58, lineHeight: 0.96, color: "#d4e0f0", ...titleClampStyle(4)}}>{slide.title}</div>
            <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.48, color: "rgba(212,224,240,0.58)", maxWidth: 440, ...titleClampStyle(5)}}>{slide.body}</div>
            {slide.chips && slide.chips.length > 0 ? (
              <div style={{display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8}}>
                {slide.chips.map((chip) => (
                  <div key={chip} style={{padding: "8px 16px", border: "1px solid rgba(77,166,255,0.3)", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 15, fontWeight: 500, color: "rgba(77,166,255,0.72)"}}>{chip}</div>
                ))}
              </div>
            ) : null}
          </div>
          {showMedia ? (
            <div style={{height: 480, border: "2px dashed #4da6ff", borderRadius: 12, overflow: "hidden", position: "relative"}}>
              <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid: small tilted polaroid, serif text ── */
  if (isV20) {
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <AbsoluteFill style={{backgroundImage: "repeating-linear-gradient(0deg, rgba(180,160,130,0.04) 0 1px, transparent 1px 3px)", opacity: 0.6}} />
        <div style={{position: "absolute", inset: "84px 92px 118px", display: "flex", flexDirection: "column", gap: 28}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: slide.title.length > 46 ? 52 : 64, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#2c2822", ...titleClampStyle(4)}}>{slide.title}</div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.48, color: "rgba(44,40,34,0.64)", maxWidth: 620, ...titleClampStyle(5)}}>{slide.body}</div>
          {slide.chips && slide.chips.length > 0 ? (
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 20, fontStyle: "italic", color: "rgba(44,40,34,0.48)", lineHeight: 1.5}}>{slide.chips.join(" / ")}</div>
          ) : null}
          {showMedia ? (
            <div style={{alignSelf: "center", marginTop: 12, background: "#ffffff", padding: "16px 16px 56px 16px", boxShadow: "0 10px 36px rgba(60,50,40,0.16)", transform: "rotate(3deg)"}}>
              <div style={{width: 380, height: 280, overflow: "hidden", position: "relative"}}>
                <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
              </div>
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v21-brutalist: massive title, tiny image, inverted chips ── */
  if (isV21) {
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "84px 56px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
            <div style={{flex: 1}}>
              <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 42 ? 64 : 78, lineHeight: 0.88, letterSpacing: "-0.03em", textTransform: "uppercase" as const, color: "#000000", ...titleClampStyle(4)}}>{slide.title}</div>
            </div>
            {showMedia ? (
              <div style={{width: 160, height: 160, flexShrink: 0, border: "4px solid #000000", overflow: "hidden", marginLeft: 20, position: "relative"}}>
                <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
              </div>
            ) : null}
          </div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 24, lineHeight: 1.44, color: "rgba(0,0,0,0.72)", maxWidth: 740, ...titleClampStyle(5)}}>{slide.body}</div>
          {slide.chips && slide.chips.length > 0 ? (
            <div style={{display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8}}>
              {slide.chips.map((chip) => (
                <div key={chip} style={{padding: "10px 20px", background: "#000000", fontFamily: theme.typography.bodyFamily, fontSize: 17, fontWeight: 700, color: theme.colors.bg, textTransform: "uppercase" as const}}>{chip}</div>
              ))}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor: gradient bg, glowing image, gradient chips ── */
  if (isV22) {
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "grid", gridTemplateColumns: showMedia ? "1fr 1fr" : "1fr", gap: 36, alignItems: "center"}}>
          <div style={{display: "flex", flexDirection: "column", gap: 18}}>
            {slide.eyebrow ? <div style={{fontFamily: theme.typography.bodyFamily, fontSize: theme.typography.labelSize, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#e060ff"}}>{slide.eyebrow}</div> : null}
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: slide.title.length > 48 ? 50 : 60, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", ...titleClampStyle(4)}}>{slide.title}</div>
            <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.48, color: "rgba(240,232,255,0.56)", maxWidth: 440, ...titleClampStyle(5)}}>{slide.body}</div>
            {slide.chips && slide.chips.length > 0 ? (
              <div style={{display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8}}>
                {slide.chips.map((chip) => (
                  <div key={chip} style={{padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(224,96,255,0.3)", background: "linear-gradient(135deg, rgba(224,96,255,0.08), rgba(140,60,220,0.08))", fontFamily: theme.typography.bodyFamily, fontSize: 16, fontWeight: 500, color: "rgba(224,96,255,0.72)"}}>{chip}</div>
                ))}
              </div>
            ) : null}
          </div>
          {showMedia ? (
            <div style={{height: 480, borderRadius: 32, overflow: "hidden", boxShadow: "0 0 48px rgba(224,96,255,0.14), 0 0 96px rgba(180,60,220,0.06)", border: "1px solid rgba(224,96,255,0.12)", position: "relative"}}>
              <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact: newspaper-style 2-col, monospace, [REDACTED] chips ── */
  if (isV23) {
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <div style={{position: "absolute", inset: "84px 78px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: slide.title.length > 46 ? 48 : 58, lineHeight: 0.96, letterSpacing: "-0.02em", textTransform: "uppercase" as const, color: "#1c1a18", ...titleClampStyle(4)}}>{slide.title}</div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 21, lineHeight: 1.52, color: "rgba(28,26,24,0.58)", maxWidth: 660, ...titleClampStyle(6)}}>{slide.body}</div>
          {slide.chips && slide.chips.length > 0 ? (
            <div style={{display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4}}>
              {slide.chips.map((chip) => (
                <div key={chip} style={{padding: "8px 16px", background: "#1c1a18", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 15, fontWeight: 600, color: "#f0ece4"}}>{chip}</div>
              ))}
            </div>
          ) : null}
          {showMedia ? (
            <div style={{marginTop: 8, height: 380, overflow: "hidden", border: "1px solid rgba(28,26,24,0.2)", position: "relative"}}>
              <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
              <div style={{position: "absolute", left: 12, bottom: 12, fontFamily: theme.typography.bodyFamily, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.5)", background: "rgba(240,236,228,0.86)", padding: "4px 10px"}}>ATTACHED DOCUMENT</div>
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint: halftone bg, orange corner overlay, outlined chips ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "84px 74px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          {showMedia ? (
            <div style={{width: "100%", height: 480, overflow: "hidden", borderRadius: 12, position: "relative"}}>
              <VisualSurface hint={slide.imageHint ?? "STORY PANEL"} slideIndex={slideIndex} carousel={carousel} imageSrc={slide.imageSrc} imagePosition={slide.imagePosition} imageScale={slide.imageScale} imageBrightness={slide.imageBrightness} imageContrast={slide.imageContrast} imageSaturation={slide.imageSaturation} />
              <div style={{position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 60%, rgba(255,107,53,0.2) 100%)"}} />
            </div>
          ) : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 48 ? 48 : 58, lineHeight: 0.96, color: "#ffffff", ...titleClampStyle(3)}}>{slide.title}</div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.48, color: "rgba(144,144,176,0.72)", maxWidth: 660, ...titleClampStyle(4)}}>{slide.body}</div>
          {slide.chips && slide.chips.length > 0 ? (
            <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
              {slide.chips.map((chip) => (
                <div key={chip} style={{padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(255,107,53,0.4)", fontFamily: theme.typography.bodyFamily, fontSize: 16, fontWeight: 500, color: "rgba(255,107,53,0.8)"}}>{chip}</div>
              ))}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest: solid bg, NO image, huge title, thin divider ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div
          style={{
            position: "absolute",
            inset: "84px 82px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                ...labelStyle("#111111", theme.typography.bodyFamily, theme.typography.labelSize),
                marginBottom: 28,
              }}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 800,
              fontSize: slide.title.length > 46 ? 68 : 82,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#111111",
              maxWidth: 860,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#111111",
              marginTop: 36,
              marginBottom: 36,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 26,
              lineHeight: 1.48,
              color: "rgba(17,17,17,0.58)",
              maxWidth: 720,
              ...titleClampStyle(6),
            }}
          >
            {slide.body}
          </div>
          {slide.chips && slide.chips.length > 0 ? (
            <div
              style={{
                marginTop: 28,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 22,
                fontStyle: "italic",
                color: "rgba(17,17,17,0.44)",
                lineHeight: 1.5,
              }}
            >
              {slide.chips.join(", ")}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal: black bg, code-style text, [tag] chips ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#000000"}} />
        <AbsoluteFill
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle, rgba(0,255,136,0.07) 0 1px, transparent 1px 40px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "84px 82px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontSize: theme.typography.labelSize,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ff88",
              }}
            >
              {">"} {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 500,
              fontSize: slide.title.length > 52 ? 56 : 66,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              color: "#00ff88",
              maxWidth: 860,
              ...titleClampStyle(4),
            }}
          >
            {"// "}{slide.title}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 24,
              lineHeight: 1.48,
              color: "rgba(0,255,136,0.52)",
              maxWidth: 740,
              ...titleClampStyle(6),
            }}
          >
            {slide.body}
          </div>
          {slide.chips && slide.chips.length > 0 ? (
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 6,
              }}
            >
              {slide.chips.map((chip) => (
                <div
                  key={chip}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 4,
                    border: "1px solid rgba(0,255,136,0.3)",
                    background: "transparent",
                    fontFamily: theme.typography.bodyFamily,
                    fontSize: 17,
                    fontWeight: 500,
                    color: "rgba(0,255,136,0.72)",
                  }}
                >
                  [{chip}]
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette: newspaper 2-column layout ── */
  if (isV18) {
    const showMedia = Boolean(slide.imageSrc);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f2ede4"}} />
        <div
          style={{
            position: "absolute",
            inset: "84px 62px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div style={{width: "100%", height: 2, background: "#1a1816"}} />
          {slide.eyebrow ? (
            <div
              style={{
                marginTop: 20,
                fontFamily: theme.typography.bodyFamily,
                fontSize: theme.typography.labelSize,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: theme.colors.accent,
              }}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              marginTop: 24,
              flex: 1,
              display: "grid",
              gridTemplateColumns: showMedia ? "55fr 1px 45fr" : "1fr",
              gap: showMedia ? 28 : 0,
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                paddingTop: 4,
              }}
            >
              <div
                style={{
                  fontFamily: theme.typography.displayFamily,
                  fontWeight: 700,
                  fontSize: slide.title.length > 48 ? 48 : 58,
                  lineHeight: 0.96,
                  letterSpacing: "-0.03em",
                  color: "#1a1816",
                  ...titleClampStyle(4),
                }}
              >
                {slide.title}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 430,
                  fontSize: 23,
                  lineHeight: 1.52,
                  color: "rgba(26,24,22,0.64)",
                  maxWidth: 480,
                  ...titleClampStyle(7),
                }}
              >
                {slide.body}
              </div>
              {slide.chips && slide.chips.length > 0 ? (
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 430,
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "rgba(26,24,22,0.46)",
                    lineHeight: 1.5,
                  }}
                >
                  {slide.chips.join(", ")}
                </div>
              ) : null}
            </div>
            {showMedia ? (
              <>
                <div style={{width: 1, alignSelf: "stretch", background: "rgba(26,24,22,0.18)"}} />
                <div
                  style={{
                    height: 520,
                    overflow: "hidden",
                    border: "1px solid rgba(26,24,22,0.12)",
                    position: "relative",
                  }}
                >
                  <VisualSurface
                    hint={slide.imageHint ?? "STORY PANEL"}
                    slideIndex={slideIndex}
                    carousel={carousel}
                    imageSrc={slide.imageSrc}
                    imagePosition={slide.imagePosition}
                    imageScale={slide.imageScale}
                    imageBrightness={slide.imageBrightness}
                    imageContrast={slide.imageContrast}
                    imageSaturation={slide.imageSaturation}
                  />
                </div>
              </>
            ) : null}
          </div>
          <div style={{width: "100%", height: 2, background: "#1a1816", marginTop: 20}} />
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  const isLight = isV12 || isV14;
  const showMedia = Boolean(slide.imageSrc);
  const titleSize = isV12 ? 68 : isV14 ? 62 : isV13 ? 70 : isV15 ? 66 : 68;
  const textTone = isLight ? "rgba(36,31,26,0.72)" : "rgba(245,240,232,0.72)";
  const mediaHeight = isV13 ? 420 : isV15 ? 470 : 500;

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: isV13
            ? "linear-gradient(180deg, #cc7648 0%, #c56c3a 48%, #a75526 100%)"
            : theme.colors.bg,
        }}
      />
      {isV15 ? (
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 82%, rgba(255,255,255,0.03) 100%)",
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          inset: "84px 82px 118px",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {isV11 && showMedia ? (
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 36,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>
                {slide.eyebrow}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.displayFamily,
                  fontWeight: 520,
                  fontSize: titleSize,
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: theme.colors.fg,
                  maxWidth: 470,
                  ...titleClampStyle(4),
                }}
              >
                {slide.title}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 430,
                  fontSize: 24,
                  lineHeight: 1.44,
                  color: textTone,
                  maxWidth: 430,
                  ...titleClampStyle(5),
                }}
              >
                {slide.body}
              </div>
            </div>
            <div
              style={{
                height: 336,
                borderRadius: 30,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(14,14,18,0.8)",
                boxShadow: "0 24px 54px rgba(0, 0, 0, 0.3)",
                position: "relative",
              }}
            >
              <VisualSurface
                hint={slide.imageHint ?? "STORY PANEL"}
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
                  background: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.24) 100%)",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: showMedia ? "minmax(0, 1fr) minmax(420px, 0.95fr)" : "minmax(0, 1fr)",
              gap: showMedia ? 40 : 0,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                maxWidth: isV15 ? 560 : 600,
              }}
            >
              <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>
                {slide.eyebrow}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.displayFamily,
                  fontWeight: isV14 ? 720 : 520,
                  fontSize: titleSize,
                  lineHeight: 0.98,
                  letterSpacing: isV14 ? "-0.05em" : "-0.03em",
                  color: theme.colors.fg,
                  maxWidth: isV15 ? 560 : 620,
                  ...titleClampStyle(4),
                }}
              >
                {slide.title}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 430,
                  fontSize: 24,
                  lineHeight: 1.44,
                  color: textTone,
                  maxWidth: isV15 ? 560 : 620,
                  ...titleClampStyle(5),
                }}
              >
                {slide.body}
              </div>
              {slide.chips && slide.chips.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    marginTop: 6,
                  }}
                >
                  {slide.chips.map((chip) => (
                    <div
                      key={chip}
                      style={{
                        padding: "10px 18px",
                        borderRadius: 999,
                        border: `1px solid ${isLight ? "rgba(36,31,26,0.12)" : "rgba(255,255,255,0.12)"}`,
                        background: isLight ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0.04)",
                        fontFamily: theme.typography.bodyFamily,
                        fontSize: 17,
                        fontWeight: 500,
                        color: isLight ? "rgba(36,31,26,0.56)" : "rgba(245,240,232,0.56)",
                        textDecoration: isV12 ? "line-through" : undefined,
                      }}
                    >
                      {chip}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {showMedia ? (
              <div
                style={{
                  height: mediaHeight,
                  borderRadius: isV13 ? 28 : 30,
                  overflow: "hidden",
                  border: isLight
                    ? "1px solid rgba(36,31,26,0.08)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: isLight ? "rgba(255,255,255,0.92)" : "rgba(14,14,18,0.8)",
                  boxShadow: isLight
                    ? "0 24px 56px rgba(46, 36, 28, 0.12)"
                    : "0 24px 54px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                }}
              >
                <VisualSurface
                  hint={slide.imageHint ?? "STORY PANEL"}
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
                    background: isLight
                      ? "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.12) 100%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.32) 100%)",
                  }}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

export const StoryStepsSlideView: React.FC<{
  slide: StoryStepsSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV12, isV13, isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);

  /* ── v19-blueprint: grid bg, cyan circles connected by dashed line ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 58, lineHeight: 0.98, color: "#d4e0f0", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 12, display: "flex", flexDirection: "column", position: "relative", paddingLeft: 60}}>
            <div style={{position: "absolute", left: 19, top: 20, bottom: 20, width: 0, borderLeft: "2px dashed rgba(77,166,255,0.3)"}} />
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{display: "flex", alignItems: "flex-start", gap: 24, paddingBottom: 32, position: "relative"}}>
                <div style={{position: "absolute", left: -60, top: 0, width: 40, height: 40, borderRadius: 999, border: "2px solid #4da6ff", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a2744", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 16, fontWeight: 600, color: "#4da6ff"}}>{step.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 24, lineHeight: 1.24, color: "#d4e0f0"}}>{step.title}</div>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 420, fontSize: 20, lineHeight: 1.4, color: "rgba(212,224,240,0.56)", maxWidth: 620}}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid: sticky-note cards, slightly rotated ── */
  if (isV20) {
    const rotations = [-1, 1, -0.5, 0.8, -0.3];
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <AbsoluteFill style={{backgroundImage: "repeating-linear-gradient(0deg, rgba(180,160,130,0.04) 0 1px, transparent 1px 3px)", opacity: 0.6}} />
        <div style={{position: "absolute", inset: "84px 92px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          <div style={labelStyle("#c25a3c", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 54, lineHeight: 0.98, color: "#2c2822", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, display: "flex", flexDirection: "column", gap: 18}}>
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{background: "#fffef8", padding: "24px 28px", boxShadow: "0 6px 20px rgba(60,50,40,0.1)", transform: `rotate(${rotations[index % rotations.length]}deg)`, display: "flex", flexDirection: "column", gap: 8}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 38, fontStyle: "italic", lineHeight: 1, color: "#c25a3c"}}>{step.number ?? `0${index + 1}`}</div>
                <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.2, color: "#2c2822"}}>{step.title}</div>
                <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 420, fontSize: 18, lineHeight: 1.4, color: "rgba(44,40,34,0.6)"}}>{step.body}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v21-brutalist: huge numbered blocks, heavy rules ── */
  if (isV21) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "84px 56px 118px", display: "flex", flexDirection: "column", gap: 16}}>
          <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 56, lineHeight: 0.92, textTransform: "uppercase" as const, color: "#000000", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{display: "grid", gridTemplateColumns: "80px minmax(0, 1fr)", gap: 24, alignItems: "start", paddingTop: 28, paddingBottom: 28, borderTop: "4px solid #000000", borderBottom: index === slide.steps.length - 1 ? "4px solid #000000" : "none"}}>
                <div style={{width: 80, height: 80, background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 36, color: theme.colors.bg}}>{step.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8, paddingTop: 4}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 26, lineHeight: 1.2, color: "#000000", textTransform: "uppercase" as const}}>{step.title}</div>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 420, fontSize: 20, lineHeight: 1.4, color: "rgba(0,0,0,0.62)"}}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor: glassmorphism panel, glowing step numbers ── */
  if (isV22) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 58, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, borderRadius: 28, background: "rgba(30,20,52,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(224,96,255,0.12)", padding: "28px 32px", display: "flex", flexDirection: "column"}}>
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: 20, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderBottom: index === slide.steps.length - 1 ? "none" : "1px solid rgba(224,96,255,0.08)"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 36, lineHeight: 1, color: "#e060ff", textShadow: "0 0 16px rgba(224,96,255,0.4)"}}>{step.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.24, color: "#f0e8ff"}}>{step.title}</div>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 420, fontSize: 19, lineHeight: 1.4, color: "rgba(240,232,255,0.52)"}}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact: numbered document sections, CLASSIFIED watermark ── */
  if (isV23) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <AbsoluteFill style={{display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" as const}}>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 140, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.04)", transform: "rotate(-45deg)"}}>CLASSIFIED</div>
        </AbsoluteFill>
        <div style={{position: "absolute", inset: "84px 78px 118px", display: "flex", flexDirection: "column", gap: 20}}>
          <div style={labelStyle("#1c1a18", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 52, lineHeight: 0.96, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, display: "flex", flexDirection: "column"}}>
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{display: "flex", flexDirection: "column", gap: 8, paddingTop: 24, paddingBottom: 24, borderTop: "1px solid rgba(28,26,24,0.2)", borderBottom: index === slide.steps.length - 1 ? "1px solid rgba(28,26,24,0.2)" : "none"}}>
                <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 16, color: "rgba(28,26,24,0.4)"}}>{step.number ?? `${index + 1}.0`}</div>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 24, lineHeight: 1.2, color: "#1c1a18"}}>{step.title}</div>
                <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 420, fontSize: 18, lineHeight: 1.44, color: "rgba(28,26,24,0.56)", maxWidth: 660}}>{step.body}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint: orange left border, large orange numbers ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "84px 74px 118px", display: "flex", flexDirection: "column", gap: 24}}>
          <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 56, lineHeight: 0.96, color: "#ffffff", maxWidth: 700, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, borderLeft: "4px solid #ff6b35", paddingLeft: 28, display: "flex", flexDirection: "column"}}>
            {slide.steps.map((step, index) => (
              <div key={`${step.number ?? index}-${step.title}`} style={{display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: 18, alignItems: "start", paddingTop: 22, paddingBottom: 22, borderBottom: index === slide.steps.length - 1 ? "none" : "1px solid rgba(255,107,53,0.12)"}}>
                <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 36, lineHeight: 1, color: "#ff6b35"}}>{step.number ?? `0${index + 1}`}</div>
                <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 22, lineHeight: 1.24, color: "#ffffff"}}>{step.title}</div>
                  <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 420, fontSize: 19, lineHeight: 1.4, color: "rgba(144,144,176,0.6)"}}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest: horizontal rows, huge step numbers ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div
          style={{
            position: "absolute",
            inset: "84px 82px 118px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                ...labelStyle("#111111", theme.typography.bodyFamily, theme.typography.labelSize),
                marginBottom: 20,
              }}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {slide.steps.map((step, index) => (
              <div
                key={`${step.number ?? index}-${step.title}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px minmax(0, 1fr)",
                  gap: 32,
                  alignItems: "start",
                  paddingTop: 36,
                  paddingBottom: 36,
                  borderTop: "1px solid #111111",
                  borderBottom:
                    index === slide.steps.length - 1 ? "1px solid #111111" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: theme.typography.displayFamily,
                    fontWeight: 800,
                    fontSize: 86,
                    lineHeight: 1,
                    color: "#111111",
                  }}
                >
                  {step.number ?? `0${index + 1}`}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingTop: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 700,
                      fontSize: 26,
                      lineHeight: 1.2,
                      color: "#111111",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 420,
                      fontSize: 21,
                      lineHeight: 1.44,
                      color: "rgba(17,17,17,0.52)",
                      maxWidth: 580,
                    }}
                  >
                    {step.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal: code window with steps as code blocks ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#000000"}} />
        <div
          style={{
            position: "absolute",
            inset: "72px 64px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontSize: theme.typography.labelSize,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ff88",
              }}
            >
              {">"} {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              flex: 1,
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(0,255,136,0.15)",
              background: "rgba(0,255,136,0.04)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 36,
                background: "rgba(0,255,136,0.06)",
                borderBottom: "1px solid rgba(0,255,136,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingLeft: 14,
              }}
            >
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#ff5f57"}} />
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#febc2e"}} />
              <div style={{width: 10, height: 10, borderRadius: 999, background: "#28c840"}} />
              <div
                style={{
                  marginLeft: 12,
                  fontFamily: theme.typography.bodyFamily,
                  fontSize: 13,
                  color: "rgba(0,255,136,0.4)",
                }}
              >
                {slide.title}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                padding: "28px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 32,
                overflowY: "hidden",
              }}
            >
              {slide.steps.map((step, index) => (
                <div
                  key={`${step.number ?? index}-${step.title}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 500,
                      fontSize: 18,
                      color: "rgba(0,255,136,0.34)",
                    }}
                  >
                    {"// "}{step.number ?? `0${index + 1}`}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.typography.displayFamily,
                      fontWeight: 600,
                      fontSize: 28,
                      lineHeight: 1.18,
                      color: "#00ff88",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 420,
                      fontSize: 20,
                      lineHeight: 1.42,
                      color: "rgba(0,255,136,0.4)",
                      maxWidth: 640,
                    }}
                  >
                    {step.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette: two-column newspaper, drop-cap numbers ── */
  if (isV18) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f2ede4"}} />
        <div
          style={{
            position: "absolute",
            inset: "84px 62px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{width: 40, height: 4, background: theme.colors.accent}} />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              color: "#1a1816",
              maxWidth: 700,
              ...titleClampStyle(2),
            }}
          >
            {slide.title}
          </div>
          {slide.intro ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 22,
                lineHeight: 1.44,
                color: "rgba(26,24,22,0.6)",
                maxWidth: 660,
              }}
            >
              {slide.intro}
            </div>
          ) : null}
          <div
            style={{
              marginTop: 8,
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "0 36px",
              alignContent: "start",
            }}
          >
            {slide.steps.map((step, index) => (
              <div
                key={`${step.number ?? index}-${step.title}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  paddingTop: 22,
                  paddingBottom: 22,
                  borderTop: "1px solid rgba(26,24,22,0.18)",
                }}
              >
                <div
                  style={{
                    fontFamily: theme.typography.displayFamily,
                    fontWeight: 700,
                    fontSize: 72,
                    lineHeight: 1,
                    color: theme.colors.accent,
                  }}
                >
                  {step.number ?? `0${index + 1}`}
                </div>
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 700,
                    fontSize: 23,
                    lineHeight: 1.22,
                    color: "#1a1816",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 420,
                    fontSize: 19,
                    lineHeight: 1.44,
                    color: "rgba(26,24,22,0.56)",
                  }}
                >
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  const isLight = isV12 || isV14;
  const moduleBg = isV13
    ? "rgba(64, 24, 10, 0.46)"
    : isLight
      ? "rgba(255,255,255,0.72)"
      : "rgba(255,255,255,0.035)";
  const moduleBorder = isLight ? "rgba(24,22,20,0.09)" : "rgba(255,255,255,0.08)";
  const rowBorder = isLight ? "rgba(24,22,20,0.09)" : "rgba(255,255,255,0.07)";
  const moduleShadow = isLight
    ? "0 18px 36px rgba(46, 36, 28, 0.08)"
    : "0 14px 28px rgba(0, 0, 0, 0.16)";

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: isV13
            ? "linear-gradient(180deg, #7b3517 0%, #4f1f0d 100%)"
            : theme.colors.bg,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "92px 82px 118px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>
          {slide.eyebrow}
        </div>
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: isV14 ? 720 : 520,
            fontSize: isV12 ? 72 : isV14 ? 62 : 74,
            lineHeight: 0.98,
            letterSpacing: isV14 ? "-0.05em" : "-0.03em",
            color: theme.colors.fg,
            maxWidth: 700,
            ...titleClampStyle(2),
          }}
        >
          {slide.title}
        </div>
        {slide.intro ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 23,
              lineHeight: 1.42,
              color: isLight ? "rgba(24,22,20,0.7)" : "rgba(245,240,232,0.72)",
              maxWidth: 680,
            }}
          >
            {slide.intro}
          </div>
        ) : null}
        <div
          style={{
            marginTop: 18,
            borderRadius: 30,
            border: `1px solid ${moduleBorder}`,
            background: moduleBg,
            boxShadow: moduleShadow,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {slide.steps.map((step, index) => (
            <div
              key={`${step.number ?? index}-${step.title}`}
              style={{
                display: "grid",
                gridTemplateColumns: "90px minmax(0, 1fr)",
                gap: 18,
                alignItems: "start",
                padding: "26px 30px 24px",
                borderBottom:
                  index === slide.steps.length - 1 ? "none" : `1px solid ${rowBorder}`,
              }}
            >
              <div
                style={{
                  fontFamily: theme.typography.displayFamily,
                  fontWeight: 520,
                  fontSize: 40,
                  lineHeight: 1,
                  color: theme.colors.accent,
                  paddingTop: 2,
                }}
              >
                {step.number ?? `0${index + 1}`}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxWidth: 680,
                }}
              >
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 650,
                    fontSize: 24,
                    lineHeight: 1.24,
                    color: theme.colors.fg,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 420,
                    fontSize: 20,
                    lineHeight: 1.4,
                    color: isLight ? "rgba(24,22,20,0.68)" : "rgba(245,240,232,0.64)",
                    maxWidth: 620,
                  }}
                >
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

export const StoryProofSlideView: React.FC<{
  slide: StoryProofSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV12, isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);

  /* ── v19-blueprint: grid bg, 2x2 with dashed cyan borders ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "84px 82px 118px", display: "flex", flexDirection: "column", gap: 18}}>
          <div style={labelStyle("#4da6ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: 52, lineHeight: 0.98, color: "#d4e0f0", maxWidth: 760, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 10, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{position: "relative", border: "2px dashed #4da6ff", borderRadius: 8, overflow: "hidden"}}>
                <div style={{position: "absolute", inset: 0}}>
                  <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                  <AbsoluteFill style={{background: "linear-gradient(180deg, transparent 50%, rgba(18,28,52,0.82) 100%)"}} />
                </div>
                <div style={{position: "absolute", left: 16, right: 16, bottom: 14, fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 20, lineHeight: 1.2, color: "#d4e0f0"}}>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid: scattered polaroid images, different rotations ── */
  if (isV20) {
    const rotations = [-3, 2, -1, 3];
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <AbsoluteFill style={{backgroundImage: "repeating-linear-gradient(0deg, rgba(180,160,130,0.04) 0 1px, transparent 1px 3px)", opacity: 0.6}} />
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "flex", flexDirection: "column", gap: 16}}>
          <div style={labelStyle("#c25a3c", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 48, lineHeight: 0.98, color: "#2c2822", maxWidth: 660, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 10, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12, alignContent: "center"}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{background: "#ffffff", padding: "12px 12px 44px 12px", boxShadow: "0 8px 28px rgba(60,50,40,0.14)", transform: `rotate(${rotations[index]}deg)`}}>
                  <div style={{width: 340, height: 240, overflow: "hidden", position: "relative"}}>
                    <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                  </div>
                  <div style={{marginTop: 8, fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 16, fontStyle: "italic", color: "rgba(44,40,34,0.6)", textAlign: "center"}}>{card.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v21-brutalist: 2x2, thick borders, no radius, aggressive ── */
  if (isV21) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "84px 56px 118px", display: "flex", flexDirection: "column", gap: 16}}>
          <div style={labelStyle("#ff0040", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 52, lineHeight: 0.92, textTransform: "uppercase" as const, color: "#000000", ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{position: "relative", border: "4px solid #000000", overflow: "hidden"}}>
                <div style={{position: "absolute", inset: 0}}>
                  <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                  <AbsoluteFill style={{background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.78) 100%)"}} />
                </div>
                <div style={{position: "absolute", left: 16, right: 16, bottom: 14, fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: "#ffffff", textTransform: "uppercase" as const}}>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor: glassmorphism 2x2 grid ── */
  if (isV22) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "84px 80px 118px", display: "flex", flexDirection: "column", gap: 18}}>
          <div style={labelStyle("#e060ff", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: 52, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", maxWidth: 760, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 10, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{position: "relative", borderRadius: 24, overflow: "hidden", background: "rgba(30,20,52,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(224,96,255,0.12)", boxShadow: "0 0 32px rgba(224,96,255,0.06)"}}>
                <div style={{position: "absolute", inset: 0}}>
                  <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                  <AbsoluteFill style={{background: "linear-gradient(180deg, transparent 40%, rgba(14,10,26,0.76) 100%)"}} />
                </div>
                <div style={{position: "absolute", left: 18, right: 18, bottom: 16, fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 20, lineHeight: 1.22, color: "#f0e8ff"}}>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact: evidence photos, exhibit labels ── */
  if (isV23) {
    const exhibitLabels = ["EXHIBIT A", "EXHIBIT B", "EXHIBIT C", "EXHIBIT D"];
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <div style={{position: "absolute", inset: "84px 78px 118px", display: "flex", flexDirection: "column", gap: 16}}>
          <div style={labelStyle("#1c1a18", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: 48, lineHeight: 0.96, textTransform: "uppercase" as const, color: "#1c1a18", ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 8, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{display: "flex", flexDirection: "column", gap: 6}}>
                <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>{exhibitLabels[index]}</div>
                <div style={{flex: 1, border: "1px solid rgba(28,26,24,0.18)", boxShadow: "0 4px 16px rgba(40,32,24,0.08)", overflow: "hidden", position: "relative"}}>
                  <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                </div>
                <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 15, lineHeight: 1.2, color: "rgba(28,26,24,0.52)"}}>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint: 2x2 with orange diagonal overlay corners ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "84px 74px 118px", display: "flex", flexDirection: "column", gap: 18}}>
          <div style={labelStyle("#ff6b35", theme.typography.bodyFamily, theme.typography.labelSize)}>{slide.eyebrow}</div>
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: 52, lineHeight: 0.96, color: "#ffffff", maxWidth: 760, ...titleClampStyle(2)}}>{slide.title}</div>
          <div style={{marginTop: 10, flex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18}}>
            {slide.cards.slice(0, 4).map((card, index) => (
              <div key={`${card.title}-${index}`} style={{position: "relative", borderRadius: 12, overflow: "hidden"}}>
                <div style={{position: "absolute", inset: 0}}>
                  <VisualSurface hint={card.imageHint ?? `PROOF ${index + 1}`} slideIndex={slideIndex + index} carousel={carousel} imageSrc={card.imageSrc} imagePosition={card.imagePosition} imageScale={card.imageScale} imageBrightness={card.imageBrightness} imageContrast={card.imageContrast} imageSaturation={card.imageSaturation} />
                  <div style={{position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 65%, rgba(255,107,53,0.2) 100%)"}} />
                  <AbsoluteFill style={{background: "linear-gradient(180deg, transparent 50%, rgba(26,26,46,0.82) 100%)"}} />
                </div>
                <div style={{position: "absolute", left: 16, right: 16, bottom: 14, fontFamily: theme.typography.bodyFamily, fontWeight: 650, fontSize: 20, lineHeight: 1.22, color: "#ffffff"}}>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest: full-width horizontal strips ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div
          style={{
            position: "absolute",
            inset: "84px 82px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                ...labelStyle("#111111", theme.typography.bodyFamily, theme.typography.labelSize),
                marginBottom: 4,
              }}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 800,
              fontSize: 58,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#111111",
              ...titleClampStyle(2),
            }}
          >
            {slide.title}
          </div>
          <div
            style={{
              marginTop: 8,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {slide.cards.slice(0, 4).map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px minmax(0, 1fr)",
                  gap: 28,
                  alignItems: "center",
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderTop: "1px solid #111111",
                  borderBottom:
                    index === slide.cards.slice(0, 4).length - 1 ? "1px solid #111111" : "none",
                }}
              >
                <div
                  style={{
                    width: 200,
                    height: 200,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <VisualSurface
                    hint={card.imageHint ?? `PROOF ${index + 1}`}
                    slideIndex={slideIndex + index}
                    carousel={carousel}
                    imageSrc={card.imageSrc}
                    imagePosition={card.imagePosition}
                    imageScale={card.imageScale}
                    imageBrightness={card.imageBrightness}
                    imageContrast={card.imageContrast}
                    imageSaturation={card.imageSaturation}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: 1.2,
                      color: "#111111",
                    }}
                  >
                    {card.title}
                  </div>
                  {card.subtitle ? (
                    <div
                      style={{
                        fontFamily: theme.typography.bodyFamily,
                        fontWeight: 420,
                        fontSize: 19,
                        lineHeight: 1.36,
                        color: "rgba(17,17,17,0.52)",
                      }}
                    >
                      {card.subtitle}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal: 2x2 grid as terminal windows ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#000000"}} />
        <AbsoluteFill
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle, rgba(0,255,136,0.07) 0 1px, transparent 1px 40px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "84px 64px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontSize: theme.typography.labelSize,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ff88",
              }}
            >
              {">"} {slide.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            {slide.cards.slice(0, 4).map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid rgba(0,255,136,0.18)",
                  background: "rgba(0,20,10,0.5)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: 30,
                    background: "rgba(0,255,136,0.06)",
                    borderBottom: "1px solid rgba(0,255,136,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingLeft: 10,
                  }}
                >
                  <div style={{width: 8, height: 8, borderRadius: 999, background: "#ff5f57"}} />
                  <div style={{width: 8, height: 8, borderRadius: 999, background: "#febc2e"}} />
                  <div style={{width: 8, height: 8, borderRadius: 999, background: "#28c840"}} />
                  <div
                    style={{
                      marginLeft: 8,
                      fontFamily: theme.typography.bodyFamily,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "rgba(0,255,136,0.5)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: 320,
                    }}
                  >
                    {card.title}
                  </div>
                </div>
                <div style={{flex: 1, position: "relative", minHeight: 0}}>
                  <VisualSurface
                    hint={card.imageHint ?? `PROOF ${index + 1}`}
                    slideIndex={slideIndex + index}
                    carousel={carousel}
                    imageSrc={card.imageSrc}
                    imagePosition={card.imagePosition}
                    imageScale={card.imageScale}
                    imageBrightness={card.imageBrightness}
                    imageContrast={card.imageContrast}
                    imageSaturation={card.imageSaturation}
                  />
                </div>
                {card.subtitle ? (
                  <div
                    style={{
                      padding: "10px 12px",
                      fontFamily: theme.typography.bodyFamily,
                      fontSize: 14,
                      lineHeight: 1.3,
                      color: "rgba(0,255,136,0.38)",
                      borderTop: "1px solid rgba(0,255,136,0.08)",
                    }}
                  >
                    {card.subtitle}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette: hero image + horizontal photo-spread row ── */
  if (isV18) {
    const topCards = slide.cards.slice(0, 4);
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f2ede4"}} />
        <div
          style={{
            position: "absolute",
            inset: "64px 62px 118px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {slide.eyebrow ? (
            <div
              style={{
                ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
                marginBottom: 14,
              }}
            >
              {slide.eyebrow}
            </div>
          ) : null}
          {topCards.length > 0 ? (
            <div
              style={{
                width: "100%",
                height: 380,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <VisualSurface
                hint={topCards[0].imageHint ?? "PROOF HERO"}
                slideIndex={slideIndex}
                carousel={carousel}
                imageSrc={topCards[0].imageSrc}
                imagePosition={topCards[0].imagePosition}
                imageScale={topCards[0].imageScale}
                imageBrightness={topCards[0].imageBrightness}
                imageContrast={topCards[0].imageContrast}
                imageSaturation={topCards[0].imageSaturation}
              />
            </div>
          ) : null}
          <div
            style={{
              marginTop: 20,
              flex: 1,
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(topCards.length, 4)}, minmax(0, 1fr))`,
              gap: 0,
            }}
          >
            {topCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderLeft: index > 0 ? "1px solid rgba(26,24,22,0.16)" : "none",
                  paddingLeft: index > 0 ? 14 : 0,
                  paddingRight: index < topCards.length - 1 ? 14 : 0,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    position: "relative",
                    minHeight: 0,
                  }}
                >
                  <VisualSurface
                    hint={card.imageHint ?? `PROOF ${index + 1}`}
                    slideIndex={slideIndex + index}
                    carousel={carousel}
                    imageSrc={card.imageSrc}
                    imagePosition={card.imagePosition}
                    imageScale={card.imageScale}
                    imageBrightness={card.imageBrightness}
                    imageContrast={card.imageContrast}
                    imageSaturation={card.imageSaturation}
                  />
                </div>
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 430,
                    fontSize: 15,
                    fontStyle: "italic",
                    lineHeight: 1.28,
                    color: "rgba(26,24,22,0.52)",
                  }}
                >
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  const isLight = isV12 || isV14;

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill style={{background: theme.colors.bg}} />
      <div
        style={{
          position: "absolute",
          inset: "92px 82px 132px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize)}>
          {slide.eyebrow}
        </div>
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: isV14 ? 720 : 520,
            fontSize: isV14 ? 66 : 74,
            lineHeight: 0.98,
            letterSpacing: isV14 ? "-0.05em" : "-0.03em",
            color: theme.colors.fg,
            maxWidth: 760,
            ...titleClampStyle(2),
          }}
        >
          {slide.title}
        </div>
        {slide.body ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 22,
              lineHeight: 1.4,
              color: isLight ? "rgba(24,22,20,0.7)" : "rgba(245,240,232,0.68)",
              maxWidth: 680,
            }}
          >
            {slide.body}
          </div>
        ) : null}
        <div
          style={{
            marginTop: 10,
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 26,
          }}
        >
          {slide.cards.slice(0, 4).map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                border: isLight
                  ? "1px solid rgba(24,22,20,0.08)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isLight
                  ? "0 22px 48px rgba(46, 36, 28, 0.12)"
                  : "0 20px 48px rgba(0, 0, 0, 0.3)",
                background: isLight ? "rgba(255,255,255,0.88)" : "rgba(16,16,19,0.82)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <VisualSurface
                  hint={card.imageHint ?? `PROOF ${index + 1}`}
                  slideIndex={slideIndex + index}
                  carousel={carousel}
                  imageSrc={card.imageSrc}
                  imagePosition={card.imagePosition}
                  imageScale={card.imageScale}
                  imageBrightness={card.imageBrightness}
                  imageContrast={card.imageContrast}
                  imageSaturation={card.imageSaturation}
                />
                <AbsoluteFill
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.04) 36%, rgba(0,0,0,0.72) 100%)",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 26,
                  right: 26,
                  bottom: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: theme.typography.bodyFamily,
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1.22,
                    color: "#f7f2ea",
                    textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                  }}
                >
                  {card.title}
                </div>
                {card.subtitle ? (
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 430,
                      fontSize: 17,
                      lineHeight: 1.32,
                      color: "rgba(247,242,234,0.78)",
                      textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                    }}
                  >
                    {card.subtitle}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

export const StoryCtaSlideView: React.FC<{
  slide: StoryCtaSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV12, isV13, isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);

  /* ── v19-blueprint: centered dashed-border panel, monospace ── */
  if (isV19) {
    const gridBg = "repeating-linear-gradient(0deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(77,166,255,0.08) 0 1px, transparent 1px 40px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a2744"}} />
        <AbsoluteFill style={{backgroundImage: gridBg}} />
        <div style={{position: "absolute", inset: "160px 100px 160px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{width: "100%", maxWidth: 760, border: "2px dashed #4da6ff", borderRadius: 12, padding: "48px 52px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22, textAlign: "center"}}>
            {slide.handle ? <div style={labelStyle("rgba(77,166,255,0.6)", theme.typography.bodyFamily, 15)}>{slide.handle}</div> : null}
            <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 500, fontSize: slide.title.length > 28 ? 52 : 62, lineHeight: 0.98, color: "#d4e0f0", maxWidth: 620, ...titleClampStyle(3)}}>{slide.title}</div>
            <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.46, color: "rgba(212,224,240,0.56)", maxWidth: 540, ...titleClampStyle(3)}}>{slide.body}</div>
            {slide.buttonLabel ? <div style={{marginTop: 8, padding: "18px 40px", border: "2px solid #4da6ff", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 600, fontSize: 22, lineHeight: 1, color: "#4da6ff"}}>{slide.buttonLabel}</div> : null}
            {slide.footer ? <div style={{marginTop: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 16, lineHeight: 1.36, color: "rgba(212,224,240,0.4)"}}>{slide.footer}</div> : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v20-polaroid: postcard-style card, serif, warm ── */
  if (isV20) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#e8e2d6"}} />
        <AbsoluteFill style={{backgroundImage: "repeating-linear-gradient(0deg, rgba(180,160,130,0.04) 0 1px, transparent 1px 3px)", opacity: 0.6}} />
        <div style={{position: "absolute", inset: "160px 100px 160px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{width: "100%", maxWidth: 740, background: "#fffef8", borderRadius: 4, boxShadow: "0 12px 44px rgba(60,50,40,0.16)", padding: "52px 56px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center"}}>
            {slide.handle ? <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 18, fontStyle: "italic", color: "rgba(44,40,34,0.5)", letterSpacing: "0.12em"}}>{slide.handle}</div> : null}
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: slide.title.length > 28 ? 52 : 64, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#2c2822", maxWidth: 600, ...titleClampStyle(3)}}>{slide.title}</div>
            <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.46, color: "rgba(44,40,34,0.6)", maxWidth: 520, ...titleClampStyle(3)}}>{slide.body}</div>
            {slide.buttonLabel ? <div style={{marginTop: 8, fontFamily: theme.typography.displayFamily, fontWeight: 400, fontSize: 24, lineHeight: 1, color: "#c25a3c", textDecoration: "underline", textUnderlineOffset: 6, textDecorationThickness: 1}}>{slide.buttonLabel}</div> : null}
            {slide.footer ? <div style={{marginTop: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 16, lineHeight: 1.36, color: "rgba(44,40,34,0.4)"}}>{slide.footer}</div> : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v21-brutalist: MASSIVE title, solid black button, in-your-face ── */
  if (isV21) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: theme.colors.bg}} />
        <div style={{position: "absolute", inset: "140px 56px 140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24}}>
          {slide.handle ? <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 20, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#ff0040"}}>{slide.handle}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 24 ? 86 : 112, lineHeight: 0.86, letterSpacing: "-0.04em", textTransform: "uppercase" as const, color: "#000000", maxWidth: 900, ...titleClampStyle(4)}}>{slide.title}</div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 24, lineHeight: 1.44, color: "rgba(0,0,0,0.62)", maxWidth: 620, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.buttonLabel ? <div style={{marginTop: 8, padding: "22px 52px", background: "#000000", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 28, lineHeight: 1, color: theme.colors.bg, textTransform: "uppercase" as const}}>{slide.buttonLabel}</div> : null}
          {slide.footer ? <div style={{marginTop: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 17, lineHeight: 1.36, color: "rgba(0,0,0,0.44)"}}>{slide.footer}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v22-vapor: glassmorphism panel, gradient button ── */
  if (isV22) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "radial-gradient(circle at 50% 40%, #2a1848 0%, #0e0a1a 60%, #060410 100%)"}} />
        <div style={{position: "absolute", inset: "160px 100px 160px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{width: "100%", maxWidth: 740, borderRadius: 32, background: "rgba(30,20,52,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(224,96,255,0.12)", padding: "52px 56px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22, textAlign: "center"}}>
            {slide.handle ? <div style={labelStyle("rgba(224,96,255,0.6)", theme.typography.bodyFamily, 16)}>{slide.handle}</div> : null}
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 600, fontSize: slide.title.length > 28 ? 52 : 62, lineHeight: 0.98, color: "#f0e8ff", textShadow: "0 0 20px rgba(224,96,255,0.2)", maxWidth: 600, ...titleClampStyle(3)}}>{slide.title}</div>
            <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.46, color: "rgba(240,232,255,0.56)", maxWidth: 520, ...titleClampStyle(3)}}>{slide.body}</div>
            {slide.buttonLabel ? <div style={{marginTop: 8, padding: "18px 42px", borderRadius: 999, background: "linear-gradient(135deg, #a040e0 0%, #e060ff 100%)", fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 24, lineHeight: 1, color: "#ffffff"}}>{slide.buttonLabel}</div> : null}
            {slide.footer ? <div style={{marginTop: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 16, lineHeight: 1.36, color: "rgba(240,232,255,0.4)"}}>{slide.footer}</div> : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v23-redact: official form, SUBMIT stamp button ── */
  if (isV23) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f0ece4"}} />
        <div style={{position: "absolute", inset: "140px 78px 140px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{width: "100%", maxWidth: 760, border: "2px solid rgba(28,26,24,0.24)", padding: "48px 52px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center"}}>
            {slide.handle ? <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontSize: 14, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(28,26,24,0.46)"}}>AGENT: {slide.handle}</div> : null}
            <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 700, fontSize: slide.title.length > 28 ? 48 : 58, lineHeight: 0.96, textTransform: "uppercase" as const, color: "#1c1a18", maxWidth: 620, ...titleClampStyle(3)}}>{slide.title}</div>
            <div style={{fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 430, fontSize: 20, lineHeight: 1.46, color: "rgba(28,26,24,0.56)", maxWidth: 540, ...titleClampStyle(3)}}>{slide.body}</div>
            {slide.buttonLabel ? <div style={{marginTop: 8, padding: "16px 44px", border: "2px solid #1c1a18", fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 700, fontSize: 22, lineHeight: 1, color: "#1c1a18", textTransform: "uppercase" as const, letterSpacing: "0.1em"}}>{slide.buttonLabel}</div> : null}
            {slide.footer ? <div style={{marginTop: 8, fontFamily: "\"Space Grotesk\", \"Courier New\", monospace", fontWeight: 430, fontSize: 14, lineHeight: 1.36, color: "rgba(28,26,24,0.36)", letterSpacing: "0.08em", textTransform: "uppercase" as const}}>{slide.footer}</div> : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v24-neoprint: large decorative orange circle, solid button ── */
  if (isV24) {
    const halftoneBg = "repeating-radial-gradient(circle, rgba(255,107,53,0.04) 0 1px, transparent 1px 8px)";
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#1a1a2e"}} />
        <AbsoluteFill style={{backgroundImage: halftoneBg, backgroundSize: "8px 8px"}} />
        <div style={{position: "absolute", inset: "140px 74px 140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 22}}>
          <div style={{position: "absolute", width: 240, height: 240, borderRadius: 999, background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(255,107,53,0.02) 70%)", top: "50%", left: "50%", transform: "translate(-50%, -60%)", pointerEvents: "none" as const}} />
          {slide.handle ? <div style={labelStyle("rgba(144,144,176,0.6)", theme.typography.bodyFamily, 15)}>{slide.handle}</div> : null}
          <div style={{fontFamily: theme.typography.displayFamily, fontWeight: 900, fontSize: slide.title.length > 28 ? 56 : 68, lineHeight: 0.96, color: "#ffffff", maxWidth: 700, ...titleClampStyle(3), position: "relative"}}>{slide.title}</div>
          <div style={{fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 22, lineHeight: 1.46, color: "rgba(144,144,176,0.62)", maxWidth: 540, ...titleClampStyle(3)}}>{slide.body}</div>
          {slide.buttonLabel ? <div style={{marginTop: 8, padding: "18px 48px", background: "#ff6b35", borderRadius: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 700, fontSize: 24, lineHeight: 1, color: "#1a1a2e"}}>{slide.buttonLabel}</div> : null}
          {slide.footer ? <div style={{marginTop: 4, fontFamily: theme.typography.bodyFamily, fontWeight: 430, fontSize: 16, lineHeight: 1.36, color: "rgba(144,144,176,0.4)"}}>{slide.footer}</div> : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v16-manifest: no panel, enormous title, underlined button ── */
  if (isV16) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f6f4f0"}} />
        <div
          style={{
            position: "absolute",
            inset: "140px 82px 140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          {slide.handle ? (
            <div
              style={{
                ...labelStyle("rgba(17,17,17,0.48)", theme.typography.bodyFamily, 16),
              }}
            >
              {slide.handle}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 800,
              fontSize: slide.title.length > 28 ? 86 : 108,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#111111",
              maxWidth: 820,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 24,
              lineHeight: 1.46,
              color: "rgba(17,17,17,0.52)",
              maxWidth: 580,
              ...titleClampStyle(3),
            }}
          >
            {slide.body}
          </div>
          {slide.buttonLabel ? (
            <div
              style={{
                marginTop: 8,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: 26,
                lineHeight: 1,
                color: "#111111",
                textDecoration: "underline",
                textUnderlineOffset: 6,
                textDecorationThickness: 2,
              }}
            >
              {slide.buttonLabel}
            </div>
          ) : null}
          {slide.footer ? (
            <div
              style={{
                marginTop: 8,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 16,
                lineHeight: 1.36,
                color: "rgba(17,17,17,0.36)",
              }}
            >
              {slide.footer}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v17-terminal: green-on-black, user@host prompt, [ ENTER ] button ── */
  if (isV17) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#000000"}} />
        <div
          style={{
            position: "absolute",
            inset: "180px 82px 180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 28,
          }}
        >
          {slide.handle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "rgba(0,255,136,0.44)",
              }}
            >
              user@cinethetic:~$ {slide.handle}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 600,
              fontSize: slide.title.length > 32 ? 60 : 72,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              color: "#00ff88",
              maxWidth: 740,
              ...titleClampStyle(3),
            }}
          >
            {">"} {slide.title}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 23,
              lineHeight: 1.46,
              color: "rgba(0,255,136,0.44)",
              maxWidth: 580,
              ...titleClampStyle(3),
            }}
          >
            {slide.body}
          </div>
          {slide.buttonLabel ? (
            <div
              style={{
                marginTop: 8,
                padding: "18px 36px",
                border: "2px solid #00ff88",
                borderRadius: 0,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 700,
                fontSize: 26,
                lineHeight: 1,
                color: "#00ff88",
                letterSpacing: "0.08em",
                background: "transparent",
              }}
            >
              [ {slide.buttonLabel.toUpperCase()} ]
            </div>
          ) : null}
          {slide.footer ? (
            <div
              style={{
                marginTop: 4,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 16,
                lineHeight: 1.36,
                color: "rgba(0,255,136,0.22)",
              }}
            >
              {slide.footer}
            </div>
          ) : null}
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  /* ── v18-gazette: double-line border, editorial ad feel ── */
  if (isV18) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{background: "#f2ede4"}} />
        <div
          style={{
            position: "absolute",
            inset: "100px 72px 120px",
            border: "2px solid #1a1816",
            padding: 6,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid #1a1816",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 22,
              padding: "40px 48px",
            }}
          >
            {slide.handle ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: theme.colors.accent,
                }}
              >
                {slide.handle}
              </div>
            ) : null}
            <div
              style={{
                fontFamily: theme.typography.displayFamily,
                fontWeight: 700,
                fontSize: slide.title.length > 32 ? 56 : 68,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
                color: "#1a1816",
                maxWidth: 680,
                ...titleClampStyle(3),
              }}
            >
              {slide.title}
            </div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 23,
                lineHeight: 1.48,
                color: "rgba(26,24,22,0.6)",
                maxWidth: 560,
                ...titleClampStyle(3),
              }}
            >
              {slide.body}
            </div>
            {slide.buttonLabel ? (
              <div
                style={{
                  marginTop: 8,
                  padding: "20px 44px",
                  background: "#1a1816",
                  color: "#f2ede4",
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 700,
                  fontSize: 26,
                  lineHeight: 1,
                }}
              >
                {slide.buttonLabel}
              </div>
            ) : null}
            {slide.footer ? (
              <div
                style={{
                  marginTop: 4,
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 430,
                  fontSize: 17,
                  fontStyle: "italic",
                  lineHeight: 1.36,
                  color: "rgba(26,24,22,0.44)",
                }}
              >
                {slide.footer}
              </div>
            ) : null}
          </div>
        </div>
        <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
      </AbsoluteFill>
    );
  }

  const isLight = isV12 || isV14;
  const avatarSrc = resolveAssetSrc(slide.avatarImageSrc);
  const panelBg = isLight ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.04)";
  const panelBorder = isLight ? "rgba(24,22,20,0.08)" : "rgba(255,255,255,0.08)";
  const panelShadow = isLight
    ? "0 20px 54px rgba(46,36,28,0.1)"
    : "0 20px 50px rgba(0,0,0,0.18)";

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: isV13
            ? "linear-gradient(180deg, #c86f3b 0%, #b55728 52%, #94401d 100%)"
            : theme.colors.bg,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 54%, rgba(255,255,255,0.05) 0 2px, rgba(255,255,255,0) 2px 124px)",
          opacity: isV13 ? 0.34 : 0.22,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "170px 120px 180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 760,
            borderRadius: 36,
            border: `1px solid ${panelBorder}`,
            background: panelBg,
            boxShadow: panelShadow,
            padding: "42px 54px 44px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          {avatarSrc ? (
            <div
              style={{
                width: 112,
                height: 112,
                borderRadius: 999,
                overflow: "hidden",
                border: isLight
                  ? "2px solid rgba(24,22,20,0.12)"
                  : "2px solid rgba(255,255,255,0.2)",
                boxShadow: isLight
                  ? "0 18px 36px rgba(46,36,28,0.14)"
                  : "0 18px 36px rgba(0,0,0,0.24)",
              }}
            >
              <Img src={avatarSrc} style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
          ) : null}
          {slide.handle ? (
            <div
              style={labelStyle(
                isLight ? "rgba(24,22,20,0.6)" : "rgba(255,245,238,0.78)",
                theme.typography.bodyFamily,
                17,
              )}
            >
              {slide.handle}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: isV14 ? 720 : 520,
              fontSize: isV12 ? 70 : isV14 ? 62 : 70,
              lineHeight: 0.98,
              letterSpacing: isV14 ? "-0.05em" : "-0.03em",
              color: theme.colors.fg,
              maxWidth: 620,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: 23,
              lineHeight: 1.44,
              color: isLight ? "rgba(24,22,20,0.72)" : "rgba(255,245,238,0.8)",
              maxWidth: 560,
              ...titleClampStyle(3),
            }}
          >
            {slide.body}
          </div>
          {slide.buttonLabel ? (
            <div
              style={{
                marginTop: 4,
                padding: "20px 38px",
                borderRadius: 999,
                background: isLight ? "#ffffff" : "#fff6ef",
                color: "#64361c",
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 700,
                fontSize: 28,
                lineHeight: 1,
                boxShadow: "0 18px 36px rgba(0,0,0,0.14)",
              }}
            >
              {slide.buttonLabel}
            </div>
          ) : null}
          {slide.footer ? (
            <div
              style={{
                marginTop: 2,
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: 18,
                lineHeight: 1.36,
                color: isLight ? "rgba(24,22,20,0.56)" : "rgba(255,245,238,0.64)",
              }}
            >
              {slide.footer}
            </div>
          ) : null}
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   TEXT-ONLY SLIDE RENDERERS
   ═══════════════════════════════════════════════════════════════════════════ */
