import React, {type CSSProperties} from "react";
import {AbsoluteFill, Img, staticFile} from "remotion";
import {
  demoBrutalistCarousel,
  demoCarousel,
  demoManifestCarousel,
  demoNeoprintCarousel,
  demoTerminalCarousel,
} from "../data/posts/demo-carousel/post-data";
import type {
  CarouselData,
  CarouselSlide,
  CoverSlide,
  PromptSetupSlide,
  ResultSlide,
  StoryCtaSlide,
  StoryHeroSlide,
  StoryPanelSlide,
  StoryProofSlide,
  StoryStepsSlide,
  TextTipsSlide,
  TextQuoteSlide,
  TextCompareSlide,
  TextStatSlide,
  TextTitleSlide,
} from "../types";

const previewScale = 0.29;

const placeholderPalettes = [
  ["#2f261f", "#0e1014", "#7a6338"],
  ["#1f2730", "#0a0d11", "#69512e"],
  ["#35241f", "#09090a", "#8f7552"],
  ["#1a2128", "#06080b", "#9a8359"],
  ["#30261f", "#09090b", "#6f5940"],
];

const editorialPalettes = [
  ["#392921", "#0f0d10", "#b19773"],
  ["#3a2e29", "#111015", "#c5aa80"],
  ["#241c22", "#0c0c10", "#a18468"],
  ["#2f252b", "#0d0d11", "#b6a17b"],
  ["#352c24", "#101014", "#c2a57a"],
];

const studioPalettes = [
  ["#232528", "#090a0c", "#5e6268"],
  ["#242729", "#0a0b0d", "#686d74"],
  ["#212327", "#09090b", "#555b62"],
  ["#26292b", "#0b0c0e", "#72767d"],
  ["#202225", "#08090a", "#60656b"],
];

const monolithPalettes = [
  ["#34261d", "#08090c", "#8a6a3e"],
  ["#3a2820", "#06070a", "#6d4d2d"],
  ["#2e2520", "#09090c", "#9b7b4c"],
  ["#25211f", "#050608", "#846341"],
  ["#38271c", "#070709", "#755233"],
];

const galleryPalettes = [
  ["#4b3b30", "#0f0f12", "#d7c1a0"],
  ["#544236", "#111115", "#cdb08b"],
  ["#40322d", "#0d0d10", "#e1ccad"],
  ["#43352f", "#101014", "#c9ab82"],
  ["#372c27", "#0b0b0f", "#d6bd98"],
];

const railPalettes = [
  ["#1f272d", "#06080b", "#8091a1"],
  ["#24313a", "#07090d", "#6f8190"],
  ["#20282f", "#05070a", "#8c9ba7"],
  ["#20262c", "#06080b", "#5e717e"],
  ["#1f252b", "#050709", "#7e8e9a"],
];

const bandPalettes = [
  ["#2b261f", "#08090b", "#93846b"],
  ["#332b22", "#09090a", "#7e6d53"],
  ["#29251f", "#070809", "#a09275"],
  ["#302920", "#08090a", "#8b7a60"],
  ["#2a241d", "#070709", "#948066"],
];

const splitPalettes = [
  ["#30262b", "#09090c", "#b48f73"],
  ["#342830", "#0a0a0d", "#9e806d"],
  ["#29212a", "#08080b", "#c4a083"],
  ["#33272d", "#0a0a0d", "#b78c77"],
  ["#2b2228", "#07080a", "#a98469"],
];

const archivePalettes = [
  ["#3b342e", "#0b0b0d", "#d7ccba"],
  ["#3f372f", "#0b0b0d", "#c8baa7"],
  ["#342f2a", "#09090b", "#dfd4c3"],
  ["#37312c", "#0a0a0c", "#cdbca8"],
  ["#302b27", "#08090b", "#d7c7b1"],
];

const techPalettes = [
  ["#18242d", "#05070a", "#7b98b4"],
  ["#1b2932", "#05070a", "#6989a6"],
  ["#162129", "#040609", "#8ba7c0"],
  ["#1a242d", "#05070a", "#6c8397"],
  ["#18232b", "#040609", "#90a9bd"],
];

const storySignalPalettes = [
  ["#1c1b20", "#0b0b0e", "#d37f4f"],
  ["#1f1c22", "#0a0a0d", "#b96f45"],
  ["#1b1a1f", "#09090b", "#e19661"],
  ["#211d21", "#0b0b0d", "#cf8559"],
  ["#1a181d", "#08080a", "#b96a42"],
];

const storyIvoryPalettes = [
  ["#eee3d6", "#f7f1e8", "#c97c4b"],
  ["#eadccf", "#f5eee4", "#b66d42"],
  ["#f0e7dc", "#f8f3ec", "#d28957"],
  ["#eaded4", "#f4eee5", "#c27345"],
  ["#efe5da", "#f7f2e9", "#d78b5a"],
];

const storyBurntPalettes = [
  ["#a6502a", "#7f3919", "#f2b27f"],
  ["#b45b2d", "#8a3f1d", "#f8c08f"],
  ["#9f4d25", "#753417", "#f1aa77"],
  ["#a8542b", "#833a1a", "#f7bc87"],
  ["#974723", "#6f3016", "#ec9f6c"],
];

const storyProofPalettes = [
  ["#e6ddd2", "#f7f1e8", "#cb7c4e"],
  ["#e5dbcf", "#f8f3ec", "#d08458"],
  ["#ece2d7", "#faf5ef", "#c8734b"],
  ["#e8dfd5", "#f6f0e8", "#c97c4b"],
  ["#e9e0d6", "#f7f1e9", "#d38a5e"],
];

const storyNoirPalettes = [
  ["#1e1b1b", "#090909", "#c57b4c"],
  ["#1f1b1c", "#080809", "#a76640"],
  ["#1b1718", "#070708", "#d28b5a"],
  ["#231d1c", "#090909", "#ba7346"],
  ["#191515", "#060606", "#c97f4f"],
];

const manifestPalettes = [
  ["#e8e4de", "#f6f4f0", "#111111"],
  ["#e4e0da", "#f4f2ee", "#222222"],
  ["#eae6e0", "#f8f6f2", "#181818"],
  ["#e2ded8", "#f3f1ed", "#1a1a1a"],
  ["#e6e2dc", "#f5f3ef", "#141414"],
];

const terminalPalettes = [
  ["#001a0d", "#000000", "#00ff88"],
  ["#001f10", "#020202", "#00e87a"],
  ["#00150a", "#010101", "#00ff99"],
  ["#001c0e", "#000000", "#00f080"],
  ["#00180c", "#010101", "#00ff88"],
];

const gazettePalettes = [
  ["#e5ded4", "#f2ede4", "#c23028"],
  ["#e8e1d7", "#f4efe6", "#b82a24"],
  ["#e2dbd1", "#f0ebe2", "#c83830"],
  ["#e6dfd5", "#f3eee5", "#be2c26"],
  ["#e4ddd3", "#f1ece3", "#c43028"],
];

const blueprintPalettes = [
  ["#1e3054", "#0f1a32", "#4da6ff"],
  ["#1a2c4e", "#0d1830", "#3d96ef"],
  ["#223458", "#111c34", "#5db6ff"],
  ["#1c2e52", "#0e1a31", "#4aa0f0"],
  ["#203256", "#101b33", "#55aaf5"],
];

const polaroidPalettes = [
  ["#d8d2c6", "#f5f2ec", "#c25a3c"],
  ["#d4cec2", "#f3f0ea", "#b8523a"],
  ["#dcd6ca", "#f7f4ee", "#ca6040"],
  ["#d6d0c4", "#f4f1eb", "#be5638"],
  ["#dad4c8", "#f6f3ed", "#c45c3e"],
];

const brutalistPalettes = [
  ["#e6e300", "#fffc00", "#ff0040"],
  ["#d4d200", "#f0ee00", "#e80038"],
  ["#f0ed00", "#fffc00", "#ff1050"],
  ["#dcd900", "#f5f200", "#f00042"],
  ["#e0dd00", "#faf700", "#ff0840"],
];

const vaporPalettes = [
  ["#1e1434", "#0e0a1a", "#e060ff"],
  ["#221838", "#100c1e", "#d050f0"],
  ["#1a1030", "#0c0818", "#f070ff"],
  ["#201636", "#0f0b1c", "#d858f8"],
  ["#1c1232", "#0d091a", "#e868ff"],
];

const redactPalettes = [
  ["#e2ded6", "#f0ece4", "#1c1a18"],
  ["#dedad2", "#ece8e0", "#201e1c"],
  ["#e6e2da", "#f2eee6", "#1a1816"],
  ["#e0dcd4", "#eeeae2", "#1e1c1a"],
  ["#e4e0d8", "#f1ede5", "#1c1a18"],
];

const neoprintPalettes = [
  ["#24244a", "#1a1a2e", "#ff6b35"],
  ["#202046", "#18182a", "#f06030"],
  ["#28284e", "#1c1c32", "#ff7540"],
  ["#222248", "#1a1a2c", "#f56832"],
  ["#26264c", "#1b1b30", "#ff7038"],
];

const getCoverTitleMetrics = (title: string, large: number, medium: number, small: number) => {
  const length = title.length;
  const longestWord = title
    .split(/\s+/)
    .reduce((max, word) => Math.max(max, word.length), 0);

  if (length <= 24 && longestWord <= 10) {
    return {fontSize: large, maxWidth: 760};
  }

  if (length <= 38 && longestWord <= 12) {
    return {fontSize: medium, maxWidth: 740};
  }

  return {fontSize: small, maxWidth: 780};
};

const panelShadow = "0 24px 80px rgba(0, 0, 0, 0.45)";

const frameStyle: CSSProperties = {
  boxShadow: panelShadow,
  overflow: "hidden",
};

const titleClampStyle = (lines: number): CSSProperties => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
};

const getVariantFlags = (carousel: CarouselData) => {
  const variant = carousel.variant ?? "v1-cinematic";
  return {
    variant,
    isV1: variant === "v1-cinematic",
    isV2: variant === "v2-editorial",
    isV3: variant === "v3-studio",
    isV4: variant === "v4-monolith",
    isV5: variant === "v5-gallery",
    isV6: variant === "v6-side-rail",
    isV7: variant === "v7-bottom-band",
    isV8: variant === "v8-split-editorial",
    isV9: variant === "v9-archive-sheet",
    isV10: variant === "v10-tech-luxe",
    isV11: variant === "v11-story-signal",
    isV12: variant === "v12-story-ivory",
    isV13: variant === "v13-story-burnt",
    isV14: variant === "v14-story-proof",
    isV15: variant === "v15-story-noir",
    isV16: variant === "v16-manifest",
    isV17: variant === "v17-terminal",
    isV18: variant === "v18-gazette",
    isV19: variant === "v19-blueprint",
    isV20: variant === "v20-polaroid",
    isV21: variant === "v21-brutalist",
    isV22: variant === "v22-vapor",
    isV23: variant === "v23-redact",
    isV24: variant === "v24-neoprint",
  };
};

const getSurfaceInset = (carousel: CarouselData) => {
  const {variant} = getVariantFlags(carousel);

  switch (variant) {
    case "v2-editorial":
      return 34;
    case "v3-studio":
      return 10;
    case "v4-monolith":
      return 0;
    case "v5-gallery":
      return 28;
    case "v6-side-rail":
      return 12;
    case "v7-bottom-band":
      return 0;
    case "v8-split-editorial":
      return 18;
    case "v9-archive-sheet":
      return 28;
    case "v10-tech-luxe":
      return 12;
    case "v11-story-signal":
      return 18;
    case "v12-story-ivory":
      return 22;
    case "v13-story-burnt":
      return 0;
    case "v14-story-proof":
      return 20;
    case "v15-story-noir":
      return 14;
    case "v16-manifest":
      return 0;
    case "v17-terminal":
      return 0;
    case "v18-gazette":
      return 0;
    case "v19-blueprint":
      return 0;
    case "v20-polaroid":
      return 0;
    case "v21-brutalist":
      return 0;
    case "v22-vapor":
      return 0;
    case "v23-redact":
      return 0;
    case "v24-neoprint":
      return 0;
    default:
      return 0;
  }
};

const getPreviewBackground = (carousel: CarouselData) => {
  const {variant} = getVariantFlags(carousel);

  switch (variant) {
    case "v2-editorial":
      return "radial-gradient(circle at top, #2a241f 0%, #110f12 40%, #040405 100%)";
    case "v3-studio":
      return "radial-gradient(circle at top, #1a1c1f 0%, #090a0c 42%, #030304 100%)";
    case "v4-monolith":
      return "radial-gradient(circle at top, #231c17 0%, #0a0b0d 40%, #020304 100%)";
    case "v5-gallery":
      return "radial-gradient(circle at top, #2d261f 0%, #0d0c10 38%, #030304 100%)";
    case "v6-side-rail":
      return "radial-gradient(circle at top, #182027 0%, #07090c 38%, #020304 100%)";
    case "v7-bottom-band":
      return "radial-gradient(circle at top, #211d18 0%, #070809 42%, #020304 100%)";
    case "v8-split-editorial":
      return "radial-gradient(circle at top, #241d21 0%, #08080b 40%, #020304 100%)";
    case "v9-archive-sheet":
      return "radial-gradient(circle at top, #26211d 0%, #0a0a0c 40%, #020304 100%)";
    case "v10-tech-luxe":
      return "radial-gradient(circle at top, #162029 0%, #06080b 40%, #020304 100%)";
    case "v11-story-signal":
      return "radial-gradient(circle at top, #241b17 0%, #0b0b0e 42%, #020304 100%)";
    case "v12-story-ivory":
      return "linear-gradient(180deg, #f3ede3 0%, #ece4d9 100%)";
    case "v13-story-burnt":
      return "linear-gradient(180deg, #b75f32 0%, #8f4320 48%, #612710 100%)";
    case "v14-story-proof":
      return "linear-gradient(180deg, #f5efe5 0%, #ede4d8 100%)";
    case "v15-story-noir":
      return "radial-gradient(circle at top, #271a13 0%, #0a0a0b 42%, #030304 100%)";
    case "v16-manifest":
      return "linear-gradient(180deg, #f6f4f0 0%, #eae7e2 100%)";
    case "v17-terminal":
      return "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)";
    case "v18-gazette":
      return "linear-gradient(180deg, #f2ede4 0%, #e8e2d8 100%)";
    case "v19-blueprint":
      return "linear-gradient(180deg, #1a2744 0%, #0f1a32 100%)";
    case "v20-polaroid":
      return "linear-gradient(180deg, #e8e2d6 0%, #ddd7cb 100%)";
    case "v21-brutalist":
      return "linear-gradient(180deg, #d0d800 0%, #b8c000 100%)";
    case "v22-vapor":
      return "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)";
    case "v23-redact":
      return "linear-gradient(180deg, #f0ece4 0%, #e6e2da 100%)";
    case "v24-neoprint":
      return "linear-gradient(180deg, #1a1a2e 0%, #12122a 100%)";
    default:
      return "radial-gradient(circle at top, #1a1815 0%, #070709 42%, #030304 100%)";
  }
};

const imagePlaceholderStyle = (
  index: number,
  variant: CarouselData["variant"],
): CSSProperties => {
  const palettes = {
    "v1-cinematic": placeholderPalettes,
    "v2-editorial": editorialPalettes,
    "v3-studio": studioPalettes,
    "v4-monolith": monolithPalettes,
    "v5-gallery": galleryPalettes,
    "v6-side-rail": railPalettes,
    "v7-bottom-band": bandPalettes,
    "v8-split-editorial": splitPalettes,
    "v9-archive-sheet": archivePalettes,
    "v10-tech-luxe": techPalettes,
    "v11-story-signal": storySignalPalettes,
    "v12-story-ivory": storyIvoryPalettes,
    "v13-story-burnt": storyBurntPalettes,
    "v14-story-proof": storyProofPalettes,
    "v15-story-noir": storyNoirPalettes,
    "v16-manifest": manifestPalettes,
    "v17-terminal": terminalPalettes,
    "v18-gazette": gazettePalettes,
    "v19-blueprint": blueprintPalettes,
    "v20-polaroid": polaroidPalettes,
    "v21-brutalist": brutalistPalettes,
    "v22-vapor": vaporPalettes,
    "v23-redact": redactPalettes,
    "v24-neoprint": neoprintPalettes,
  }[variant ?? "v1-cinematic"];
  const [toneA, toneB, toneC] = palettes[index % palettes.length];
  const baseGradient =
    variant === "v3-studio"
      ? [
          `radial-gradient(circle at 20% 20%, ${toneC} 0%, rgba(0, 0, 0, 0) 34%)`,
          "linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0) 22%)",
          `linear-gradient(180deg, ${toneA} 0%, ${toneB} 54%, #050607 100%)`,
        ]
      : [
          `radial-gradient(circle at 20% 18%, ${toneC} 0%, rgba(0, 0, 0, 0) 38%)`,
          `radial-gradient(circle at 80% 24%, ${toneA} 0%, rgba(0, 0, 0, 0) 34%)`,
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 24%)",
          `linear-gradient(180deg, ${toneA} 0%, ${toneB} 48%, #050507 100%)`,
        ];

  return {
    backgroundColor: toneB,
    backgroundImage: baseGradient.join(", "),
  };
};

const labelStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
  return {
    fontFamily,
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color,
  };
};

const counterStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
  return {
    fontFamily,
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color,
  };
};

const subtleTexture: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, rgba(255,255,255,0) 1px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, rgba(255,255,255,0) 1px 8px)",
  mixBlendMode: "screen",
  opacity: 0.32,
};

const resolveAssetSrc = (src?: string) => {
  if (!src) {
    return undefined;
  }

  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) {
    return src;
  }

  return staticFile(src.replace(/^\/+/, ""));
};

const VisualSurface: React.FC<{
  hint: string;
  slideIndex: number;
  carousel: CarouselData;
  imageSrc?: string;
  imagePosition?: string;
  imageScale?: number;
  imageBrightness?: number;
  imageContrast?: number;
  imageSaturation?: number;
}> = ({
  hint,
  slideIndex,
  carousel,
  imageSrc,
  imagePosition,
  imageScale,
  imageBrightness,
  imageContrast,
  imageSaturation,
}) => {
  const resolvedSrc = resolveAssetSrc(imageSrc);
  const {isV2, isV3} = getVariantFlags(carousel);
  const imageFilter = [
    `brightness(${imageBrightness ?? 1})`,
    `contrast(${imageContrast ?? 1})`,
    `saturate(${imageSaturation ?? 1})`,
  ].join(" ");

  return (
    <AbsoluteFill>
      {resolvedSrc ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Img
            src={resolvedSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imagePosition ?? "center center",
              transform: `scale(${imageScale ?? 1})`,
              transformOrigin: "center center",
              filter: imageFilter,
            }}
          />
        </div>
      ) : (
        <AbsoluteFill style={imagePlaceholderStyle(slideIndex, carousel.variant)}>
          <AbsoluteFill
            style={{
              ...subtleTexture,
              opacity: isV3 ? 0.18 : isV2 ? 0.28 : 0.32,
            }}
          />
          <AbsoluteFill
            style={{
              background: isV3
                ? "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.18) 100%)"
                : isV2
                  ? "radial-gradient(circle at 46% 36%, rgba(255,244,224,0.08) 0%, rgba(255,255,255,0) 36%), linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.24) 100%)"
                  : "radial-gradient(circle at 50% 44%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 38%), linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.28) 100%)",
              mixBlendMode: "screen",
              opacity: isV3 ? 0.42 : 0.6,
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: isV3
                ? "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 -120px 180px rgba(0,0,0,0.26)"
                : "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 -160px 220px rgba(0,0,0,0.42)",
            }}
          />
          <AbsoluteFill
            style={{
              justifyContent: "space-between",
              padding: 60,
              opacity: 0.76,
            }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                width: 220,
                height: 220,
                borderRadius: 999,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 72%)",
                filter: "blur(12px)",
              }}
            />
            <div
              style={{
                alignSelf: "flex-start",
                fontFamily: carousel.theme.typography.bodyFamily,
                fontSize: isV2 ? 16 : isV3 ? 15 : 17,
                fontWeight: 500,
                letterSpacing: isV2 ? "0.18em" : isV3 ? "0.12em" : "0.14em",
                textTransform: "uppercase",
                color: isV3 ? "rgba(242, 239, 233, 0.42)" : "rgba(255, 247, 234, 0.52)",
              }}
            >
              {hint}
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

const SlideCounter: React.FC<{counter?: string; carousel: CarouselData}> = ({counter, carousel}) => {
  if (!counter) {
    return null;
  }

  const {variant, isV2, isV3, isV6} = getVariantFlags(carousel);
  const frameOffset = getSurfaceInset(carousel);

  const position = {
    right:
      variant === "v6-side-rail"
        ? carousel.theme.spacing.outerX
        : carousel.theme.spacing.outerX + (isV2 ? frameOffset - 8 : isV3 ? 6 : 0),
    bottom:
      variant === "v6-side-rail"
        ? 68
        : carousel.theme.spacing.outerY + (isV2 ? frameOffset - 8 : isV3 ? 6 : 0),
    left: isV6 ? 58 : undefined,
  };

  return (
    <div
      style={{
        position: "absolute",
        right: position.right,
        bottom: position.bottom,
        left: position.left,
        ...counterStyle(
          isV3 ? "rgba(242, 239, 233, 0.82)" : "rgba(244, 239, 231, 0.9)",
          carousel.theme.typography.bodyFamily,
          carousel.theme.typography.counterSize,
        ),
        opacity: isV2 ? 0.88 : 1,
      }}
    >
      {counter}
    </div>
  );
};

const CoverSlideView: React.FC<{
  slide: CoverSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV1, isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const surfaceInset = getSurfaceInset(carousel);
  const {fontSize, maxWidth} = getCoverTitleMetrics(
    slide.title,
    theme.typography.coverTitleLarge,
    theme.typography.coverTitleMedium,
    theme.typography.coverTitleSmall,
  );

  if (isV4) {
    return (
      <AbsoluteFill style={frameStyle}>
        <VisualSurface
          hint={slide.imageHint ?? "HERO IMAGE"}
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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 28%, rgba(0,0,0,0.62) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 120,
            right: 120,
            bottom: 210,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 2,
              background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${theme.colors.accent} 35%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 112),
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 760,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(244, 238, 227, 0.72)",
                maxWidth: 560,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 32,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "HERO IMAGE"}
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
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 34%, rgba(0,0,0,0.58) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255, 244, 224, 0.14), inset 0 0 0 18px rgba(10, 9, 11, 0.1)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + surfaceInset + 6,
            left: theme.spacing.outerX + surfaceInset + 6,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, 15),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 150,
            right: 150,
            bottom: 212,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 110),
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: theme.colors.fg,
              maxWidth: 620,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(246, 241, 232, 0.68)",
                maxWidth: 430,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "HERO IMAGE"}
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
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.82) 0%, rgba(6,8,11,0.64) 18%, rgba(6,8,11,0.08) 46%, rgba(0,0,0,0.28) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 250,
            background:
              "linear-gradient(180deg, rgba(11,14,18,0.94) 0%, rgba(11,14,18,0.82) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + 10,
            left: 62,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 62,
            right: 760,
            bottom: 190,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 600,
              fontSize: Math.min(fontSize, 82),
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 240,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.32,
                color: "rgba(237, 240, 242, 0.68)",
                maxWidth: 220,
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV7) {
    return (
      <AbsoluteFill style={frameStyle}>
        <VisualSurface
          hint={slide.imageHint ?? "HERO IMAGE"}
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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "52px 90px 92px 90px",
            background:
              "linear-gradient(180deg, rgba(11,11,13,0.06) 0%, rgba(11,11,13,0.86) 36%, rgba(11,11,13,0.95) 100%)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 76,
              height: 2,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 700,
              fontSize: Math.min(fontSize, 114),
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 820,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.28,
                color: "rgba(243, 239, 230, 0.72)",
                maxWidth: 560,
                ...titleClampStyle(2),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "HERO IMAGE"}
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
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.12) 56%, rgba(0,0,0,0.5) 56%, rgba(0,0,0,0.68) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + surfaceInset,
            left: theme.spacing.outerX + surfaceInset,
            ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, 15),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            top: 190,
            right: 110,
            width: 310,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: 58,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 400,
              fontSize: Math.min(fontSize, 88),
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 320,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(245, 240, 233, 0.72)",
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV9) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09090b"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 28,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "HERO IMAGE"}
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
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.16) 40%, rgba(0,0,0,0.54) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.14)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 126,
            right: 126,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 14)}>
            {slide.accountLabel}
          </div>
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 500,
              fontSize: Math.min(fontSize, 98),
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: theme.colors.fg,
              maxWidth: 560,
              ...titleClampStyle(3),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(242, 237, 228, 0.72)",
                maxWidth: 460,
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV10) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "HERO IMAGE"}
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
              background:
                "linear-gradient(180deg, rgba(5,8,12,0.12) 0%, rgba(5,8,12,0.2) 30%, rgba(5,8,12,0.64) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(171, 201, 228, 0.14), inset 0 0 0 16px rgba(5, 8, 12, 0.06)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 114,
            left: 110,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, 14),
          }}
        >
          {slide.accountLabel}
        </div>
        <div
          style={{
            position: "absolute",
            right: 94,
            top: 318,
            width: 392,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "right",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: 72,
              height: 1,
              background: theme.colors.accent,
            }}
          />
          <div
            style={{
              fontFamily: theme.typography.displayFamily,
              fontWeight: 640,
              fontSize: Math.min(fontSize, 78),
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: theme.colors.fg,
              maxWidth: 392,
              ...titleClampStyle(4),
            }}
          >
            {slide.title}
          </div>
          {slide.subtitle ? (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.subtitleSize,
                lineHeight: 1.34,
                color: "rgba(238, 242, 245, 0.7)",
                ...titleClampStyle(3),
              }}
            >
              {slide.subtitle}
            </div>
          ) : null}
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={frameStyle}>
      {isV2 ? (
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
      ) : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
          overflow: "hidden",
        }}
      >
        <VisualSurface
          hint={slide.imageHint ?? "HERO IMAGE"}
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
            background:
              isV2
                ? `linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.1) 22%, rgba(0,0,0,0.28) 52%, rgba(0,0,0,0.72) 100%)`
                : isV3
                  ? `linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 24%, rgba(0,0,0,0.22) 58%, ${theme.colors.overlayStrong} 100%)`
                  : `linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 30%, ${theme.colors.overlayStrong} 100%)`,
          }}
        />
      </div>
      {isV2 ? (
        <AbsoluteFill
          style={{
            inset: surfaceInset,
            borderRadius: 26,
            boxShadow:
              "inset 0 0 0 1px rgba(255, 245, 224, 0.12), inset 0 0 0 24px rgba(9, 8, 10, 0.06)",
            pointerEvents: "none",
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          top: theme.spacing.outerY + surfaceInset,
          left: theme.spacing.outerX + surfaceInset,
          ...labelStyle(theme.colors.muted, theme.typography.bodyFamily, theme.typography.labelSize),
        }}
      >
        {slide.accountLabel}
      </div>
      <div
        style={{
          position: "absolute",
          left: theme.spacing.outerX + (isV2 ? surfaceInset + 8 : surfaceInset),
          right: isV2 ? 170 : isV3 ? 280 : 490,
          bottom: isV2 ? 214 : isV3 ? 198 : 158,
          display: "flex",
          flexDirection: "column",
          gap: isV2 ? 24 : isV3 ? 28 : 18,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: isV2 ? 84 : isV3 ? 56 : 74,
            height: 1,
            background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184, 150, 92, ${isV2 ? "0.24" : isV3 ? "0.08" : "0.12"}) 100%)`,
          }}
        />
        <div
          style={{
            fontFamily: theme.typography.displayFamily,
            fontWeight: isV2 ? 600 : isV3 ? 620 : 700,
            color: theme.colors.fg,
            fontSize: isV2 ? Math.min(fontSize, 118) : fontSize,
            lineHeight: isV2 ? 0.78 : isV3 ? 0.86 : 0.84,
            letterSpacing: isV2 ? "-0.04em" : isV3 ? "-0.05em" : "-0.045em",
            textTransform: "uppercase",
            maxWidth: isV2 ? 500 : isV3 ? 360 : Math.min(maxWidth, 500),
            whiteSpace: "pre-line",
            ...titleClampStyle(isV1 ? 5 : 4),
          }}
        >
          {slide.title}
        </div>
        {slide.subtitle ? (
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: isV2 ? 430 : isV3 ? 420 : 470,
              fontSize: theme.typography.subtitleSize,
              lineHeight: isV2 ? 1.26 : isV3 ? 1.34 : 1.3,
              color: isV2
                ? "rgba(246, 241, 232, 0.64)"
                : isV3
                  ? "rgba(242, 239, 233, 0.68)"
                : "rgba(244, 239, 231, 0.72)",
              maxWidth: isV2 ? 360 : isV3 ? 320 : 440,
              ...titleClampStyle(2),
            }}
          >
            {slide.subtitle}
          </div>
        ) : null}
      </div>
      {isV1 ? (
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY + 240,
            right: theme.spacing.outerX,
            ...labelStyle("rgba(244, 239, 231, 0.22)", theme.typography.bodyFamily, 15),
          }}
        >
          Prompt Study
        </div>
      ) : null}
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};

const ResultSlideView: React.FC<{
  slide: ResultSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const surfaceInset = getSurfaceInset(carousel);

  if (isV4 || isV7) {
    return (
      <AbsoluteFill style={frameStyle}>
        <VisualSurface
          hint={slide.imageHint ?? "RESULT IMAGE"}
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
            background:
              isV7
                ? "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 58%, rgba(0,0,0,0.54) 100%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              left: theme.spacing.outerX,
              bottom: isV7 ? 134 : theme.spacing.outerY,
              padding: isV7 ? "10px 16px" : "10px 14px",
              background: "rgba(10,10,12,0.42)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 999,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 2),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        {isV7 ? (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 110,
              background: "linear-gradient(180deg, rgba(11,11,13,0.08) 0%, rgba(11,11,13,0.88) 100%)",
            }}
          />
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5 || isV9) {
    return (
      <AbsoluteFill style={frameStyle}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV9 ? 28 : 30,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "RESULT IMAGE"}
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
              background: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.36) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.14)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: theme.spacing.outerY + surfaceInset + 10,
              left: isV5 ? 0 : theme.spacing.outerX + surfaceInset + 8,
              right: isV5 ? 0 : undefined,
              textAlign: isV5 ? "center" : "left",
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "RESULT IMAGE"}
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
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.76) 0%, rgba(6,8,11,0.52) 16%, rgba(6,8,11,0.04) 40%, rgba(0,0,0,0.22) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 214,
            background: "linear-gradient(180deg, rgba(11,14,18,0.94) 0%, rgba(11,14,18,0.82) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: 108,
              left: 58,
              right: 860,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "RESULT IMAGE"}
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
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 56%, rgba(0,0,0,0.42) 56%, rgba(0,0,0,0.58) 100%)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: 120,
              right: 120,
              width: 280,
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV10) {
    return (
      <AbsoluteFill style={frameStyle}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.imageHint ?? "RESULT IMAGE"}
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
              background: "linear-gradient(180deg, rgba(5,8,12,0.04) 0%, rgba(5,8,12,0.28) 100%)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(171, 201, 228, 0.14)",
            }}
          />
        </div>
        {slide.label ? (
          <div
            style={{
              position: "absolute",
              top: theme.spacing.outerY + surfaceInset + 6,
              right: theme.spacing.outerX + surfaceInset + 6,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid rgba(171, 201, 228, 0.18)",
              background: "rgba(10,13,17,0.46)",
              ...labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize - 1),
            }}
          >
            {slide.label}
          </div>
        ) : null}
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={frameStyle}>
      {isV2 ? <AbsoluteFill style={{backgroundColor: "#09080a"}} /> : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
          overflow: "hidden",
        }}
      >
        <VisualSurface
          hint={slide.imageHint ?? "RESULT IMAGE"}
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
            background:
              isV2
                ? `linear-gradient(180deg, rgba(8,8,10,0.02) 0%, rgba(0,0,0,0.04) 28%, rgba(0,0,0,0.38) 100%)`
                : isV3
                  ? `linear-gradient(180deg, rgba(8,8,10,0.04) 0%, rgba(0,0,0,0.01) 22%, rgba(0,0,0,0.24) 100%)`
                  : `linear-gradient(180deg, rgba(8,8,10,0.08) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.3) 100%)`,
          }}
        />
        <AbsoluteFill
          style={{
            boxShadow: isV2
              ? "inset 0 0 0 1px rgba(255,245,224,0.12), inset 0 0 0 24px rgba(9,8,10,0.05)"
              : "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
      </div>
      {slide.label ? (
        <div
          style={{
            position: "absolute",
            top: carousel.theme.spacing.outerY + (isV2 ? surfaceInset + 6 : surfaceInset + (isV3 ? 6 : 0)),
            left: carousel.theme.spacing.outerX + (isV2 ? surfaceInset + 6 : surfaceInset + (isV3 ? 6 : 0)),
            display: "flex",
            alignItems: "center",
            gap: isV3 ? 10 : 14,
          }}
        >
          {isV3 ? null : (
            <div
              style={{
                width: isV2 ? 26 : 32,
                height: 1,
                background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184,150,92,0.18) 100%)`,
              }}
            />
          )}
          <div style={labelStyle(theme.colors.fg, theme.typography.bodyFamily, theme.typography.labelSize)}>
            {slide.label}
          </div>
        </div>
      ) : null}
      {isV3 && slide.noteCaption ? (
        <div
          style={{
            position: "absolute",
            left: carousel.theme.spacing.outerX + surfaceInset + 6,
            bottom: carousel.theme.spacing.outerY + 6,
            maxWidth: 320,
            fontFamily: theme.typography.bodyFamily,
            fontSize: 15,
            fontWeight: 420,
            lineHeight: 1.35,
            color: "rgba(242, 239, 233, 0.62)",
          }}
        >
          {slide.noteCaption}
        </div>
      ) : null}
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};

const PromptSetupSlideView: React.FC<{
  slide: PromptSetupSlide;
  carousel: CarouselData;
  slideIndex: number;
}> = ({slide, carousel, slideIndex}) => {
  const {theme} = carousel;
  const {isV2, isV3, isV4, isV5, isV6, isV7, isV8, isV9, isV10} = getVariantFlags(carousel);
  const promptSections = slide.promptSections ?? (slide.promptBody ? [{body: slide.promptBody}] : []);
  const surfaceInset = getSurfaceInset(carousel);

  if (isV4 || isV7) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <VisualSurface
          hint={slide.backgroundHint ?? "DARK BACKGROUND"}
          slideIndex={slideIndex}
          carousel={carousel}
          imageSrc={slide.backgroundImageSrc}
          imagePosition={slide.backgroundPosition}
          imageScale={slide.backgroundScale}
          imageBrightness={slide.backgroundBrightness}
          imageContrast={slide.backgroundContrast}
          imageSaturation={slide.backgroundSaturation}
        />
        <AbsoluteFill
          style={{
            background:
              isV7
                ? "linear-gradient(180deg, rgba(8,8,10,0.42) 0%, rgba(8,8,10,0.78) 62%, rgba(8,8,10,0.92) 100%)"
                : "linear-gradient(180deg, rgba(8,8,10,0.5) 0%, rgba(8,8,10,0.88) 100%)",
            backdropFilter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: theme.spacing.outerY,
            left: theme.spacing.outerX,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT"}
        </div>
        <div
          style={{
            position: "absolute",
            left: isV7 ? 0 : 110,
            right: isV7 ? 0 : 110,
            bottom: isV7 ? 0 : 176,
            padding: isV7 ? "44px 90px 92px 90px" : "40px 42px 34px 42px",
            background: isV7 ? "linear-gradient(180deg, rgba(11,11,13,0.06) 0%, rgba(11,11,13,0.92) 100%)" : theme.colors.panel,
            border: isV7 ? "none" : `1px solid ${theme.colors.panelBorder}`,
            borderRadius: isV7 ? 0 : theme.radius.panel,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 450,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.46,
              color: theme.colors.fg,
              maxWidth: isV7 ? 760 : 700,
              ...titleClampStyle(7),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.metaSize,
                lineHeight: 1.2,
                color: theme.colors.muted,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {slide.toolName}
            </div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV5 || isV9) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <AbsoluteFill style={{backgroundColor: "#09080a"}} />
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV9 ? 28 : 30,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.backgroundHint ?? "DARK BACKGROUND"}
            slideIndex={slideIndex}
            carousel={carousel}
            imageSrc={slide.backgroundImageSrc}
            imagePosition={slide.backgroundPosition}
            imageScale={slide.backgroundScale}
            imageBrightness={slide.backgroundBrightness}
            imageContrast={slide.backgroundContrast}
            imageSaturation={slide.backgroundSaturation}
          />
          <AbsoluteFill
            style={{
              background: "linear-gradient(180deg, rgba(8,8,10,0.44) 0%, rgba(8,8,10,0.84) 100%)",
              backdropFilter: "blur(24px)",
            }}
          />
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,244,224,0.12)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 136,
            left: 132,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT"}
        </div>
        <div
          style={{
            position: "absolute",
            left: 132,
            right: 132,
            top: isV9 ? 246 : 320,
            padding: isV9 ? "34px 34px 30px 34px" : "38px 42px 34px 42px",
            borderRadius: theme.radius.panel,
            background: isV9 ? "rgba(244, 238, 226, 0.05)" : theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {promptSections.length > 1 ? (
            <div style={{display: "flex", flexDirection: "column", gap: 18}}>
              {promptSections.map((section, index) => (
                <div
                  key={`${section.label ?? "section"}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingBottom: index === promptSections.length - 1 ? 0 : 16,
                    borderBottom:
                      index === promptSections.length - 1
                        ? "none"
                        : "1px solid rgba(255, 244, 224, 0.08)",
                  }}
                >
                  {section.label ? (
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>
                      {section.label}
                    </div>
                  ) : null}
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 430,
                      fontSize: theme.typography.promptBodySize,
                      lineHeight: 1.46,
                      color: theme.colors.fg,
                    }}
                  >
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 430,
                fontSize: theme.typography.promptBodySize,
                lineHeight: 1.48,
                color: theme.colors.fg,
                ...titleClampStyle(8),
              }}
            >
              {slide.promptBody}
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            {slide.tags?.length ? (
              <div style={{display: "flex", gap: 20, flexWrap: "wrap"}}>
                {slide.tags.map((tag) => (
                  <div key={`${tag.label}-${tag.value}`} style={{display: "flex", flexDirection: "column", gap: 6}}>
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 12)}>{tag.label}</div>
                    <div
                      style={{
                        fontFamily: theme.typography.bodyFamily,
                        fontWeight: 600,
                        fontSize: theme.typography.metaSize,
                        lineHeight: 1.2,
                        color: theme.colors.fg,
                      }}
                    >
                      {tag.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.metaSize,
                  lineHeight: 1.2,
                  color: theme.colors.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {slide.toolName}
              </div>
            )}
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV6) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.backgroundHint ?? "DARK BACKGROUND"}
            slideIndex={slideIndex}
            carousel={carousel}
            imageSrc={slide.backgroundImageSrc}
            imagePosition={slide.backgroundPosition}
            imageScale={slide.backgroundScale}
            imageBrightness={slide.backgroundBrightness}
            imageContrast={slide.backgroundContrast}
            imageSaturation={slide.backgroundSaturation}
          />
          <AbsoluteFill
            style={{
              background:
                "linear-gradient(90deg, rgba(6,8,11,0.86) 0%, rgba(6,8,11,0.74) 18%, rgba(6,8,11,0.18) 42%, rgba(6,8,11,0.54) 100%)",
              backdropFilter: "blur(18px)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 224,
            background: "linear-gradient(180deg, rgba(11,14,18,0.96) 0%, rgba(11,14,18,0.84) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 112,
            left: 58,
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "SETUP"}
        </div>
        <div
          style={{
            position: "absolute",
            left: 264,
            right: 84,
            top: 300,
            padding: "28px 32px 28px 32px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.5,
              color: theme.colors.fg,
              ...titleClampStyle(8),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>{slide.toolName}</div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  if (isV8 || isV10) {
    return (
      <AbsoluteFill style={{...frameStyle, backgroundColor: theme.colors.bg}}>
        <div
          style={{
            position: "absolute",
            inset: surfaceInset,
            borderRadius: isV10 ? 20 : 24,
            overflow: "hidden",
          }}
        >
          <VisualSurface
            hint={slide.backgroundHint ?? "DARK BACKGROUND"}
            slideIndex={slideIndex}
            carousel={carousel}
            imageSrc={slide.backgroundImageSrc}
            imagePosition={slide.backgroundPosition}
            imageScale={slide.backgroundScale}
            imageBrightness={slide.backgroundBrightness}
            imageContrast={slide.backgroundContrast}
            imageSaturation={slide.backgroundSaturation}
          />
          <AbsoluteFill
            style={{
              background:
                isV10
                  ? "linear-gradient(180deg, rgba(5,8,12,0.38) 0%, rgba(5,8,12,0.76) 100%)"
                  : "linear-gradient(90deg, rgba(8,8,10,0.28) 0%, rgba(8,8,10,0.22) 56%, rgba(8,8,10,0.68) 56%, rgba(8,8,10,0.82) 100%)",
              backdropFilter: "blur(18px)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: isV10 ? 120 : 132,
            right: 108,
            width: isV10 ? 360 : 320,
            padding: isV10 ? "26px 28px 24px 28px" : "30px 30px 28px 30px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, 13)}>
            {slide.heading ?? "PROMPT"}
          </div>
          <div
            style={{
              fontFamily: theme.typography.bodyFamily,
              fontWeight: 430,
              fontSize: theme.typography.promptBodySize,
              lineHeight: 1.48,
              color: theme.colors.fg,
              ...titleClampStyle(8),
            }}
          >
            {slide.promptBody}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 12)}>{slide.toolName}</div>
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: 600,
                fontSize: theme.typography.ctaSize,
                lineHeight: 1.2,
                color: theme.colors.fg,
              }}
            >
              {slide.cta}
            </div>
          </div>
        </div>
        <SlideCounter counter={slide.counter} carousel={carousel} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill
      style={{
        ...frameStyle,
        backgroundColor: theme.colors.bg,
      }}
    >
      {isV2 ? <AbsoluteFill style={{backgroundColor: "#09080a"}} /> : null}
      <div
        style={{
          position: "absolute",
          inset: surfaceInset,
          borderRadius: isV2 ? 26 : isV3 ? 28 : 0,
          overflow: "hidden",
        }}
      >
        <VisualSurface
          hint={slide.backgroundHint ?? "DARK BACKGROUND"}
          slideIndex={slideIndex}
          carousel={carousel}
          imageSrc={slide.backgroundImageSrc}
          imagePosition={slide.backgroundPosition}
          imageScale={slide.backgroundScale}
          imageBrightness={slide.backgroundBrightness}
          imageContrast={slide.backgroundContrast}
          imageSaturation={slide.backgroundSaturation}
        />
        <AbsoluteFill
          style={{
            background:
              isV3
                ? `linear-gradient(180deg, rgba(8,8,10,0.58) 0%, rgba(8,8,10,0.86) 100%)`
                : isV2
                  ? `linear-gradient(180deg, rgba(8,8,10,0.5) 0%, rgba(8,8,10,0.8) 100%)`
                  : `linear-gradient(180deg, rgba(8,8,10,0.66) 0%, rgba(8,8,10,0.84) 100%)`,
            backdropFilter: isV3 ? "blur(18px)" : "blur(26px)",
          }}
        />
        {isV2 ? (
          <AbsoluteFill
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,245,224,0.12), inset 0 0 0 24px rgba(9,8,10,0.05)",
            }}
          />
        ) : null}
      </div>
      <div
        style={{
          position: "absolute",
          inset: `${theme.spacing.outerY + surfaceInset}px ${theme.spacing.outerX + surfaceInset}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: isV2 ? "center" : "space-between",
          paddingBottom: isV3 ? 36 : 0,
        }}
      >
        <div
          style={{
            ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, theme.typography.labelSize),
          }}
        >
          {slide.heading ?? "PROMPT / SETUP"}
        </div>
        <div
          style={{
            width: isV2 ? 700 : isV3 ? 620 : 742,
            maxWidth: "100%",
            padding: isV2 ? "44px 44px 38px 44px" : isV3 ? "30px 34px 30px 34px" : "36px 42px 34px 42px",
            borderRadius: theme.radius.panel,
            background: theme.colors.panel,
            border: `1px solid ${theme.colors.panelBorder}`,
            boxShadow: isV3 ? "0 16px 42px rgba(0, 0, 0, 0.28)" : "0 22px 64px rgba(0, 0, 0, 0.38)",
            display: "flex",
            flexDirection: "column",
            gap: isV2 ? 30 : isV3 ? 18 : 24,
            alignSelf: isV3 ? "flex-start" : "stretch",
            marginTop: isV2 ? 48 : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(184,150,92,0.18) 100%)`,
              }}
            />
            <div
              style={{
                ...labelStyle(theme.colors.accent, theme.typography.bodyFamily, 16),
              }}
            >
              {slide.heading ?? "PROMPT / SETUP"}
            </div>
          </div>
          {isV2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {promptSections.map((section, index) => (
                <div
                  key={`${section.label ?? "section"}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingBottom: index === promptSections.length - 1 ? 0 : 16,
                    borderBottom:
                      index === promptSections.length - 1
                        ? "none"
                        : "1px solid rgba(255, 244, 224, 0.08)",
                  }}
                >
                  {section.label ? (
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 14)}>
                      {section.label}
                    </div>
                  ) : null}
                  <div
                    style={{
                      fontFamily: theme.typography.bodyFamily,
                      fontWeight: 450,
                      fontSize: theme.typography.promptBodySize,
                      lineHeight: 1.46,
                      color: theme.colors.fg,
                      maxWidth: 620,
                    }}
                  >
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: theme.typography.bodyFamily,
                fontWeight: isV3 ? 420 : 470,
                fontSize: theme.typography.promptBodySize,
                lineHeight: isV3 ? 1.56 : 1.48,
                color: theme.colors.fg,
                maxWidth: isV3 ? 470 : 604,
                ...titleClampStyle(isV3 ? 8 : 7),
              }}
            >
              {slide.promptBody}
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {slide.tags && slide.tags.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  gap: isV2 ? 24 : 20,
                  flexWrap: "wrap",
                }}
              >
                {slide.tags.map((tag) => (
                  <div
                    key={`${tag.label}-${tag.value}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div style={labelStyle(theme.colors.muted, theme.typography.bodyFamily, 13)}>
                      {tag.label}
                    </div>
                    <div
                      style={{
                        fontFamily: theme.typography.bodyFamily,
                        fontWeight: 600,
                        fontSize: theme.typography.metaSize,
                        lineHeight: 1.2,
                        color: theme.colors.fg,
                      }}
                    >
                      {tag.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : slide.toolName ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.metaSize,
                  lineHeight: 1.2,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: theme.colors.muted,
                }}
              >
                {slide.toolName}
              </div>
            ) : (
              <div />
            )}
            {slide.cta ? (
              <div
                style={{
                  fontFamily: theme.typography.bodyFamily,
                  fontWeight: 600,
                  fontSize: theme.typography.ctaSize,
                  lineHeight: 1.2,
                  color: isV3 ? "rgba(242, 239, 233, 0.74)" : "rgba(244, 239, 231, 0.9)",
                  textAlign: "right",
                }}
              >
                {slide.cta}
              </div>
            ) : null}
          </div>
        </div>
        {isV2 ? null : <div />}
      </div>
      <SlideCounter counter={slide.counter} carousel={carousel} />
    </AbsoluteFill>
  );
};

const StoryProgressBar: React.FC<{
  carousel: CarouselData;
  slideIndex: number;
  counter?: string;
}> = ({carousel, slideIndex, counter}) => {
  const {theme, slides} = carousel;
  const {isV12, isV14, isV16, isV17, isV18, isV19, isV20, isV21, isV22, isV23, isV24} = getVariantFlags(carousel);
  const total = slides.length;
  const progress = ((slideIndex + 1) / total) * 100;
  const isLightBar = isV12 || isV14 || isV16 || isV18 || isV20 || isV23;
  const fg = isV17
    ? "rgba(0, 255, 136, 0.82)"
    : isV21
      ? "rgba(0, 0, 0, 0.86)"
      : isLightBar
        ? "rgba(24, 22, 20, 0.86)"
        : "rgba(244, 239, 231, 0.92)";
  const track = isV17
    ? "rgba(0, 255, 136, 0.12)"
    : isV21
      ? "rgba(0, 0, 0, 0.14)"
      : isLightBar
        ? "rgba(24, 22, 20, 0.12)"
        : "rgba(255, 255, 255, 0.14)";
  const accentOverride = isV17
    ? "#00ff88"
    : isV18 || isV21
      ? theme.colors.accent
      : isV19
        ? "#4da6ff"
        : isV22
          ? "#e060ff"
          : isV24
            ? "#ff6b35"
            : undefined;

  return (
    <div
      style={{
        position: "absolute",
        left: 74,
        right: 74,
        bottom: 42,
        display: "flex",
        alignItems: "flex-end",
        gap: 24,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            height: 4,
            borderRadius: 999,
            background: track,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 999,
              background: accentOverride ?? theme.colors.accent,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: index === slideIndex ? (accentOverride ?? theme.colors.accent) : track,
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={counterStyle(fg, theme.typography.bodyFamily, theme.typography.counterSize)}
      >
        {counter ?? `${slideIndex + 1} / ${total}`}
      </div>
    </div>
  );
};

const StoryHeroSlideView: React.FC<{
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

const StoryPanelSlideView: React.FC<{
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

const StoryStepsSlideView: React.FC<{
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

const StoryProofSlideView: React.FC<{
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

const StoryCtaSlideView: React.FC<{
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

const TextTipsSlideView: React.FC<{
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

const TextQuoteSlideView: React.FC<{
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

const TextCompareSlideView: React.FC<{
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

const TextStatSlideView: React.FC<{
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

const TextTitleSlideView: React.FC<{
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

const renderSlide = (slide: CarouselSlide, carousel: CarouselData, slideIndex: number) => {
  switch (slide.type) {
    case "cover":
      return <CoverSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "result":
      return <ResultSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "prompt-setup":
      return <PromptSetupSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-hero":
      return <StoryHeroSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-panel":
      return <StoryPanelSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-steps":
      return <StoryStepsSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-proof":
      return <StoryProofSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "story-cta":
      return <StoryCtaSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-tips":
      return <TextTipsSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-quote":
      return <TextQuoteSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-compare":
      return <TextCompareSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-stat":
      return <TextStatSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    case "text-title":
      return <TextTitleSlideView slide={slide} carousel={carousel} slideIndex={slideIndex} />;
    default:
      return null;
  }
};

const CarouselSlideComposition: React.FC<{carousel: CarouselData; slideIndex?: number}> = ({
  carousel,
  slideIndex = 0,
}) => {
  const safeIndex = Math.min(Math.max(slideIndex, 0), carousel.slides.length - 1);
  const slide = carousel.slides[safeIndex];

  return renderSlide(slide, carousel, safeIndex);
};

const CarouselPreviewComposition: React.FC<{carousel: CarouselData}> = ({carousel}) => {
  const {theme, slides, name} = carousel;
  const {isV2, isV3, isV16, isV17, isV18, isV20, isV21, isV23} = getVariantFlags(carousel);
  const isLightPreview = isV16 || isV18 || isV20 || isV21 || isV23;

  return (
    <AbsoluteFill
      style={{
        background: getPreviewBackground(carousel),
        color: theme.colors.fg,
        padding: "48px 60px 56px 60px",
        fontFamily: theme.typography.bodyFamily,
        gap: 34,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={labelStyle(theme.colors.accent, theme.typography.bodyFamily, 16)}>
          Remotion Social Carousel
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1,
            color: theme.colors.fg,
            fontFamily: isV2 ? theme.typography.displayFamily : theme.typography.bodyFamily,
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: theme.spacing.previewGap,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.counter ?? index}
              style={{
                width: theme.canvas.width * previewScale,
                height: theme.canvas.height * previewScale,
                borderRadius: 22,
                overflow: "hidden",
                border: isLightPreview
                  ? "1px solid rgba(24,22,20,0.12)"
                  : isV3
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isLightPreview
                  ? "0 18px 48px rgba(46, 36, 28, 0.18)"
                  : isV2
                    ? "0 24px 64px rgba(0, 0, 0, 0.42)"
                    : "0 18px 48px rgba(0, 0, 0, 0.35)",
                transform: `translateY(${isV2 ? index * 4 : index === 0 ? 0 : 10}px)`,
              }}
            >
              <div
                style={{
                  width: theme.canvas.width * previewScale,
                  height: theme.canvas.height * previewScale,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <AbsoluteFill
                  style={{
                    width: theme.canvas.width,
                    height: theme.canvas.height,
                    transform: `scale(${previewScale})`,
                    transformOrigin: "top left",
                  }}
                >
                  {renderSlide(slide, carousel, index)}
                </AbsoluteFill>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const DemoCarouselSlide: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => {
  return <CarouselSlideComposition carousel={demoCarousel} slideIndex={slideIndex} />;
};

export const DemoCarouselPreview: React.FC = () => {
  return <CarouselPreviewComposition carousel={demoCarousel} />;
};

export const DemoManifestSlide: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => {
  return <CarouselSlideComposition carousel={demoManifestCarousel} slideIndex={slideIndex} />;
};

export const DemoManifestPreview: React.FC = () => {
  return <CarouselPreviewComposition carousel={demoManifestCarousel} />;
};

export const DemoTerminalSlide: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => {
  return <CarouselSlideComposition carousel={demoTerminalCarousel} slideIndex={slideIndex} />;
};

export const DemoTerminalPreview: React.FC = () => {
  return <CarouselPreviewComposition carousel={demoTerminalCarousel} />;
};

export const DemoBrutalistSlide: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => {
  return <CarouselSlideComposition carousel={demoBrutalistCarousel} slideIndex={slideIndex} />;
};

export const DemoBrutalistPreview: React.FC = () => {
  return <CarouselPreviewComposition carousel={demoBrutalistCarousel} />;
};

export const DemoNeoprintSlide: React.FC<{slideIndex?: number}> = ({slideIndex = 0}) => {
  return <CarouselSlideComposition carousel={demoNeoprintCarousel} slideIndex={slideIndex} />;
};

export const DemoNeoprintPreview: React.FC = () => {
  return <CarouselPreviewComposition carousel={demoNeoprintCarousel} />;
};
