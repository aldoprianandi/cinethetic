import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, StoryHeroSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, VisualSurface, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const StoryHeroSlideView: React.FC<{
  slide: StoryHeroSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── blueprint: technical schematic, dark blue, grid overlay ── */
  if (isBlueprint) {
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

  /* ── polaroid: nostalgic, warm, photo-pinned-on-wall ── */
  if (isPolaroid) {
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

  /* ── brutalist: LOUD, yellow bg, black text, confrontational ── */
  if (isBrutalist) {
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

  /* ── vapor: dreamy, purple/pink gradients, soft glow ── */
  if (isVapor) {
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

  /* ── redact: declassified document, typewriter, redaction bars ── */
  if (isRedact) {
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

  /* ── neoprint: risograph/screen-print, dark bg, orange accent, halftone ── */
  if (isNeoprint) {
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

  /* ── manifest: ultra-typographic, text-dominant ── */
  if (isManifest) {
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

  /* ── terminal: hacker/dev, green-on-black ── */
  if (isTerminal) {
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

  /* ── gazette: newspaper/editorial, serif-heavy ── */
  if (isGazette) {
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

  const textColor = "#f6f0e8";
  const bodyColor = "rgba(245, 240, 232, 0.74)";
  const labelColor = theme.colors.muted;
  const titleLength = slide.title.length;
  const heroTitleSize = titleLength > 52 ? 74 : 84;
  const heroImageWidth = "100%";
  const heroImageHeight = 334;

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: theme.colors.bg,
        }}
      />
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
            alignSelf: "stretch",
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 26px 58px rgba(0, 0, 0, 0.34)",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(15,15,18,0.8)",
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
              background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.42) 100%)",
            }}
          />
        </div>
        <div style={labelStyle(labelColor, theme.typography.bodyFamily, theme.typography.labelSize)}>
          {slide.eyebrow}
        </div>
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: 500,
            fontSize: heroTitleSize,
            lineHeight: 0.93,
            letterSpacing: "-0.035em",
            color: textColor,
            maxWidth: 760,
            ...titleClampStyle(4),
          }}
        >
          {slide.title}
        </div>
        {slide.accentLine ? (
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
};
