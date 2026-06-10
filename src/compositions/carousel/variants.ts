import type {CarouselData} from "../../types";

export const getVariantFlags = (carousel: CarouselData) => {
  const variant = carousel.variant ?? "cinematic";
  return {
    variant,
    isCinematic: variant === "cinematic",
    isManifest: variant === "manifest",
    isTerminal: variant === "terminal",
    isGazette: variant === "gazette",
    isBlueprint: variant === "blueprint",
    isPolaroid: variant === "polaroid",
    isBrutalist: variant === "brutalist",
    isVapor: variant === "vapor",
    isRedact: variant === "redact",
    isNeoprint: variant === "neoprint",
  };
};

// Every current theme renders its visual surface full-bleed. The hook stays so
// a theme can reintroduce a framed, inset surface without touching slide code.
export const getSurfaceInset = (_carousel: CarouselData) => 0;

export const getPreviewBackground = (carousel: CarouselData) => {
  const {variant} = getVariantFlags(carousel);

  switch (variant) {
    case "manifest":
      return "linear-gradient(180deg, #f6f4f0 0%, #eae7e2 100%)";
    case "terminal":
      return "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)";
    case "gazette":
      return "linear-gradient(180deg, #f2ede4 0%, #e8e2d8 100%)";
    case "blueprint":
      return "linear-gradient(180deg, #1a2744 0%, #0f1a32 100%)";
    case "polaroid":
      return "linear-gradient(180deg, #e8e2d6 0%, #ddd7cb 100%)";
    case "brutalist":
      return "linear-gradient(180deg, #d0d800 0%, #b8c000 100%)";
    case "vapor":
      return "radial-gradient(circle at 50% 30%, #2a1848 0%, #0e0a1a 60%, #060410 100%)";
    case "redact":
      return "linear-gradient(180deg, #f0ece4 0%, #e6e2da 100%)";
    case "neoprint":
      return "linear-gradient(180deg, #1a1a2e 0%, #12122a 100%)";
    default:
      return "radial-gradient(circle at top, #1a1815 0%, #070709 42%, #030304 100%)";
  }
};
