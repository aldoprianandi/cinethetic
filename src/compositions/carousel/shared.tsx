import React, {type CSSProperties} from "react";
import {AbsoluteFill, Img, staticFile} from "remotion";
import type {CarouselData} from "../../types";

export const maxPreviewScale = 0.29;
const allowedImageAssetExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

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

export const getCoverTitleMetrics = (title: string, large: number, medium: number, small: number) => {
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

export const panelShadow = "0 24px 80px rgba(0, 0, 0, 0.45)";

export const frameStyle: CSSProperties = {
  boxShadow: panelShadow,
  overflow: "hidden",
};

export const titleClampStyle = (lines: number): CSSProperties => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
};

export const getVariantFlags = (carousel: CarouselData) => {
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

export const getSurfaceInset = (carousel: CarouselData) => {
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

export const getPreviewBackground = (carousel: CarouselData) => {
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

export const imagePlaceholderStyle = (
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

export const labelStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
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

export const counterStyle = (color: string, fontFamily: string, fontSize: number): CSSProperties => {
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

export const subtleTexture: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, rgba(255,255,255,0) 1px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, rgba(255,255,255,0) 1px 8px)",
  mixBlendMode: "screen",
  opacity: 0.32,
};

export const resolveAssetSrc = (src?: string) => {
  if (!src) {
    return undefined;
  }

  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) {
    throw new Error(
      `Remote and data URL assets are not allowed in public carousel data: ${src}`,
    );
  }

  let decodedSrc = src;
  try {
    decodedSrc = decodeURIComponent(src);
  } catch {
    throw new Error(`Carousel asset path must be valid URI text: ${src}`);
  }

  if (
    decodedSrc.startsWith("/") ||
    decodedSrc.includes("\\") ||
    decodedSrc.split(/[?#]/, 1)[0].split("/").includes("..")
  ) {
    throw new Error(`Carousel asset paths must be public-relative: ${src}`);
  }

  if (!decodedSrc.startsWith("images/")) {
    throw new Error(`Carousel assets must live under public/images/: ${src}`);
  }

  const extension = decodedSrc
    .split(/[?#]/, 1)[0]
    .toLowerCase()
    .match(/\.[a-z0-9]+$/)?.[0];
  if (!extension || !allowedImageAssetExtensions.has(extension)) {
    throw new Error(`Unsupported carousel asset extension: ${src}`);
  }

  return staticFile(decodedSrc);
};

export const VisualSurface: React.FC<{
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

export const SlideCounter: React.FC<{counter?: string; carousel: CarouselData}> = ({counter, carousel}) => {
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



export const StoryProgressBar: React.FC<{
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
