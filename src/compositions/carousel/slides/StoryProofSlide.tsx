import React from "react";
import {AbsoluteFill} from "remotion";
import type {CarouselData, StoryProofSlide} from "../../../types";
import {frameStyle, labelStyle, titleClampStyle, VisualSurface, StoryProgressBar} from "../shared";
import {getVariantFlags} from "../variants";

export const StoryProofSlideView: React.FC<{
  slide: StoryProofSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isManifest, isTerminal, isGazette, isBlueprint, isPolaroid, isBrutalist, isVapor, isRedact, isNeoprint} = getVariantFlags(carousel);

  /* ── blueprint: grid bg, 2x2 with dashed cyan borders ── */
  if (isBlueprint) {
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

  /* ── polaroid: scattered polaroid images, different rotations ── */
  if (isPolaroid) {
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

  /* ── brutalist: 2x2, thick borders, no radius, aggressive ── */
  if (isBrutalist) {
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

  /* ── vapor: glassmorphism 2x2 grid ── */
  if (isVapor) {
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

  /* ── redact: evidence photos, exhibit labels ── */
  if (isRedact) {
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

  /* ── neoprint: 2x2 with orange diagonal overlay corners ── */
  if (isNeoprint) {
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

  /* ── manifest: full-width horizontal strips ── */
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

  /* ── terminal: 2x2 grid as terminal windows ── */
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

  /* ── gazette: hero image + horizontal photo-spread row ── */
  if (isGazette) {
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
            fontWeight: 520,
            fontSize: 74,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
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
              color: "rgba(245,240,232,0.68)",
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
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 48px rgba(0, 0, 0, 0.3)",
                background: "rgba(16,16,19,0.82)",
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
