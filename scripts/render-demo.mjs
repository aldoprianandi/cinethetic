import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const cwd = process.cwd();
const npxBin = process.platform === "win32" ? "npx.cmd" : "npx";
const content = JSON.parse(
  readFileSync(
    resolve(cwd, "src/data/posts/demo-carousel/carousel-content.json"),
    "utf8",
  ),
);

if (!Array.isArray(content.slides) || content.slides.length === 0) {
  console.error("Demo content must include at least one slide in `slides`.");
  process.exit(1);
}

const allVariants = [
  { name: "manifest", composition: "DemoManifest" },
  { name: "terminal", composition: "DemoTerminal" },
  { name: "brutalist", composition: "DemoBrutalist" },
  { name: "neoprint", composition: "DemoNeoprint" },
];

const requestedVariant = process.argv[2];
const variants = requestedVariant
  ? allVariants.filter((variant) => variant.name === requestedVariant)
  : allVariants;

if (variants.length === 0) {
  console.error(`Unknown variant: ${requestedVariant}`);
  console.error(
    `Available variants: ${allVariants.map((variant) => variant.name).join(", ")}`,
  );
  process.exit(1);
}

const run = (args) => {
  const result = spawnSync(npxBin, args, {
    cwd,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

for (const variant of variants) {
  const variantDir = resolve(cwd, "out/demo", variant.name);
  const slidesDir = resolve(variantDir, "slides");

  mkdirSync(slidesDir, { recursive: true });

  content.slides.forEach((_, slideIndex) => {
    const slideNumber = String(slideIndex + 1).padStart(2, "0");
    run([
      "remotion",
      "still",
      "src/index.ts",
      `${variant.composition}Slide`,
      resolve(slidesDir, `slide-${slideNumber}.png`),
      `--props=${JSON.stringify({ slideIndex })}`,
    ]);
  });

  run([
    "remotion",
    "still",
    "src/index.ts",
    `${variant.composition}Preview`,
    resolve(variantDir, "preview.png"),
  ]);
}
