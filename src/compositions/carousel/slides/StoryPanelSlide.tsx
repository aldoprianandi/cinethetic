import React from "react";
import {AbsoluteFill} from "remotion";

import type {CarouselData, StoryPanelSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, VisualSurface, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const StoryPanelSlideView: React.FC<{
  slide: StoryPanelSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── blueprint: grid bg, split layout, dashed frame ── */
  if (isBlueprint) {
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

  /* ── polaroid: small tilted polaroid, serif text ── */
  if (isPolaroid) {
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

  /* ── brutalist: massive title, tiny image, inverted chips ── */
  if (isBrutalist) {
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

  /* ── vapor: gradient bg, glowing image, gradient chips ── */
  if (isVapor) {
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

  /* ── redact: newspaper-style 2-col, monospace, [REDACTED] chips ── */
  if (isRedact) {
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

  /* ── neoprint: halftone bg, orange corner overlay, outlined chips ── */
  if (isNeoprint) {
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

  /* ── manifest: solid bg, NO image, huge title, thin divider ── */
  if (isManifest) {
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

  /* ── terminal: black bg, code-style text, [tag] chips ── */
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

  /* ── gazette: newspaper 2-column layout ── */
  if (isGazette) {
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

  const showMedia = Boolean(slide.imageSrc);
  const titleSize = 68;
  const textTone = "rgba(245,240,232,0.72)";
  const mediaHeight = 500;

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
          inset: "84px 82px 118px",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
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
              maxWidth: 600,
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
                maxWidth: 620,
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
                maxWidth: 620,
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
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                      fontFamily: theme.typography.bodyFamily,
                      fontSize: 17,
                      fontWeight: 500,
                      color: "rgba(245,240,232,0.56)",
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
                  background: "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.32) 100%)",
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <StoryProgressBar carousel={carousel} slideIndex={slideIndex} counter={slide.counter} />
    </AbsoluteFill>
  );
};
