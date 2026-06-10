import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, StoryStepsSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const StoryStepsSlideView: React.FC<{
  slide: StoryStepsSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── blueprint: grid bg, cyan circles connected by dashed line ── */
  if (isBlueprint) {
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

  /* ── polaroid: sticky-note cards, slightly rotated ── */
  if (isPolaroid) {
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

  /* ── brutalist: huge numbered blocks, heavy rules ── */
  if (isBrutalist) {
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

  /* ── vapor: glassmorphism panel, glowing step numbers ── */
  if (isVapor) {
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

  /* ── redact: numbered document sections, CLASSIFIED watermark ── */
  if (isRedact) {
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

  /* ── neoprint: orange left border, large orange numbers ── */
  if (isNeoprint) {
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

  /* ── manifest: horizontal rows, huge step numbers ── */
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

  /* ── terminal: code window with steps as code blocks ── */
  if (isTerminal) {
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

  /* ── gazette: two-column newspaper, drop-cap numbers ── */
  if (isGazette) {
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

  const moduleBg = "rgba(255,255,255,0.035)";
  const moduleBorder = "rgba(255,255,255,0.08)";
  const rowBorder = "rgba(255,255,255,0.07)";
  const moduleShadow = "0 14px 28px rgba(0, 0, 0, 0.16)";

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
            fontWeight: 520,
            fontSize: 74,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
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
              color: "rgba(245,240,232,0.72)",
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
                    color: "rgba(245,240,232,0.64)",
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
