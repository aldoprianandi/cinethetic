import React from "react";
import {AbsoluteFill, Img} from "remotion";
import type {CarouselData, StoryCtaSlide} from "../../../types";
import {
  frameStyle,
  labelStyle,
  titleClampStyle,
  resolveAssetSrc,
  StoryProgressBar,
} from "../shared";
import {getVariantFlags} from "../variants";

export const StoryCtaSlideView: React.FC<{
  slide: StoryCtaSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── blueprint: centered dashed-border panel, monospace ── */
  if (isBlueprint) {
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

  /* ── polaroid: postcard-style card, serif, warm ── */
  if (isPolaroid) {
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

  /* ── brutalist: MASSIVE title, solid black button, in-your-face ── */
  if (isBrutalist) {
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

  /* ── vapor: glassmorphism panel, gradient button ── */
  if (isVapor) {
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

  /* ── redact: official form, SUBMIT stamp button ── */
  if (isRedact) {
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

  /* ── neoprint: large decorative orange circle, solid button ── */
  if (isNeoprint) {
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

  /* ── manifest: no panel, enormous title, underlined button ── */
  if (isManifest) {
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

  /* ── terminal: green-on-black, user@host prompt, [ ENTER ] button ── */
  if (isTerminal) {
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

  /* ── gazette: double-line border, editorial ad feel ── */
  if (isGazette) {
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

  const avatarSrc = resolveAssetSrc(slide.avatarImageSrc);
  const panelBg = "rgba(255,255,255,0.04)";
  const panelBorder = "rgba(255,255,255,0.08)";
  const panelShadow = "0 20px 50px rgba(0,0,0,0.18)";

  return (
    <AbsoluteFill style={frameStyle}>
      <AbsoluteFill
        style={{
          background: theme.colors.bg,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 54%, rgba(255,255,255,0.05) 0 2px, rgba(255,255,255,0) 2px 124px)",
          opacity: 0.22,
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
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.24)",
              }}
            >
              <Img src={avatarSrc} style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
          ) : null}
          {slide.handle ? (
            <div
              style={labelStyle(
                "rgba(255,245,238,0.78)",
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
              fontWeight: 520,
              fontSize: 70,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
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
              color: "rgba(255,245,238,0.8)",
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
                background: "#fff6ef",
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
                color: "rgba(255,245,238,0.64)",
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
