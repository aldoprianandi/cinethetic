import type {CSSProperties} from "react";
import type {CarouselData} from "../../types";

const cinematicPalettes = [
  ["#2f261f", "#0e1014", "#7a6338"],
  ["#1f2730", "#0a0d11", "#69512e"],
  ["#35241f", "#09090a", "#8f7552"],
  ["#1a2128", "#06080b", "#9a8359"],
  ["#30261f", "#09090b", "#6f5940"],
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

const variantPalettes = {
  cinematic: cinematicPalettes,
  manifest: manifestPalettes,
  terminal: terminalPalettes,
  gazette: gazettePalettes,
  blueprint: blueprintPalettes,
  polaroid: polaroidPalettes,
  brutalist: brutalistPalettes,
  vapor: vaporPalettes,
  redact: redactPalettes,
  neoprint: neoprintPalettes,
};

export const imagePlaceholderStyle = (
  index: number,
  variant: CarouselData["variant"],
): CSSProperties => {
  const palettes = variantPalettes[variant ?? "cinematic"];
  const [toneA, toneB, toneC] = palettes[index % palettes.length];
  const baseGradient = [
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
