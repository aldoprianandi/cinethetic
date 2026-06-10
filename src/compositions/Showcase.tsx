import React from "react";
import {AbsoluteFill, useCurrentFrame} from "remotion";
import {CarouselSlideComposition} from "./carousel/Carousel";
import {
  demoBrutalistCarousel,
  demoCarousels,
  demoManifestCarousel,
  demoNeoprintCarousel,
  demoTerminalCarousel,
} from "../demo-variants";
import type {CarouselData} from "../types";

// One frame per theme; rendered as a looping GIF at 1 fps.
export const ThemeReel: React.FC = () => {
  const frame = useCurrentFrame();
  const carousel = demoCarousels[frame % demoCarousels.length];

  return (
    <AbsoluteFill style={{background: "#0d0d10"}}>
      <CarouselSlideComposition carousel={carousel} slideIndex={0} />
      <div
        style={{
          position: "absolute",
          top: 28,
          right: 28,
          padding: "12px 22px",
          borderRadius: 999,
          background: "rgba(8, 8, 10, 0.62)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color: "#ffffff",
          fontFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        {carousel.variant}
      </div>
    </AbsoluteFill>
  );
};

const heroCarousels: {carousel: CarouselData; lift: number}[] = [
  {carousel: demoBrutalistCarousel, lift: -22},
  {carousel: demoTerminalCarousel, lift: 22},
  {carousel: demoManifestCarousel, lift: -22},
  {carousel: demoNeoprintCarousel, lift: 22},
];

const heroSlideScale = 0.42;

// Static banner sized for a GitHub social preview (render at --scale=0.5 for 1280x640).
export const HeroGrid: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 18% 0%, #1d1c22 0%, #0d0d10 52%, #060608 100%)",
        padding: "0 32px 0 96px",
        flexDirection: "row",
        alignItems: "center",
        gap: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          width: 440,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8f867a",
          }}
        >
          Cinethetic
        </div>
        <div
          style={{
            fontFamily: "\"Archivo Black\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
            fontSize: 78,
            lineHeight: 1.04,
            color: "#f4efe7",
          }}
        >
          One JSON file.
          <br />
          Nine themes.
        </div>
        <div
          style={{
            fontFamily: "\"Space Grotesk\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
            fontSize: 26,
            lineHeight: 1.5,
            color: "rgba(244, 239, 231, 0.6)",
            maxWidth: 420,
          }}
        >
          Programmable social carousels rendered with Remotion, React, and
          TypeScript.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}
      >
        {heroCarousels.map(({carousel, lift}) => (
          <div
            key={carousel.name}
            style={{
              width: carousel.theme.canvas.width * heroSlideScale,
              height: carousel.theme.canvas.height * heroSlideScale,
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 36px 90px rgba(0, 0, 0, 0.55)",
              transform: `translateY(${lift}px)`,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <AbsoluteFill
              style={{
                width: carousel.theme.canvas.width,
                height: carousel.theme.canvas.height,
                transform: `scale(${heroSlideScale})`,
                transformOrigin: "top left",
              }}
            >
              <CarouselSlideComposition carousel={carousel} slideIndex={0} />
            </AbsoluteFill>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
