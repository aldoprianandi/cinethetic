import assert from "node:assert/strict";

import {
  validateDemoVariants,
  validateAssetPath,
  validateCarouselContent,
} from "./check-data.mjs";

const validContent = {
  name: "Valid Demo",
  slides: [
    {
      type: "text-title",
      title: "A valid title",
    },
    {
      type: "text-compare",
      left: {label: "Before", items: ["Manual"]},
      right: {label: "After", items: ["Programmatic"]},
    },
  ],
};

assert.deepEqual(validateCarouselContent(validContent), []);

assert.match(
  validateCarouselContent({
    name: "Invalid",
    slides: [{type: "unknown-slide"}],
  }).join("\n"),
  /slides\[0\]\.type/,
);

assert.match(
  validateCarouselContent({
    name: "Invalid",
    slides: [{type: "text-title"}],
  }).join("\n"),
  /slides\[0\]\.title/,
);

assert.equal(validateAssetPath("images/example.png"), undefined);
assert.match(validateAssetPath("https://example.com/image.png") ?? "", /remote URL/);
assert.match(validateAssetPath("../secret.png") ?? "", /traversal/);
assert.match(validateAssetPath("data:image/svg+xml;base64,abc") ?? "", /data URL/);

assert.deepEqual(
  validateDemoVariants([
    {
      name: "manifest",
      displayName: "Manifest",
      variant: "manifest",
      theme: "manifestTheme",
      compositionPrefix: "DemoManifest",
      public: true,
    },
  ]),
  [],
);
assert.match(
  validateDemoVariants([
    {
      name: "manifest",
      displayName: "Manifest",
      variant: "manifest",
      theme: "manifestTheme",
      compositionPrefix: "DemoManifest",
      public: true,
    },
    {
      name: "manifest",
      displayName: "Duplicate",
      variant: "terminal",
      theme: "terminalTheme",
      compositionPrefix: "DemoTerminal",
      public: true,
    },
  ]).join("\n"),
  /duplicate variant name/,
);

console.log("Data validation tests passed.");
