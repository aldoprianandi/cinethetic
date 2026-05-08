import {existsSync, readdirSync, readFileSync} from "node:fs";
import {join, resolve} from "node:path";

const allowedSlideTypes = new Set([
  "cover",
  "result",
  "prompt-setup",
  "story-hero",
  "story-panel",
  "story-steps",
  "story-proof",
  "story-cta",
  "text-tips",
  "text-quote",
  "text-compare",
  "text-stat",
  "text-title",
]);

const allowedThemes = new Set([
  "brutalistV21Theme",
  "manifestV16Theme",
  "neoprintV24Theme",
  "terminalV17Theme",
]);

const allowedVariants = new Set([
  "v16-manifest",
  "v17-terminal",
  "v21-brutalist",
  "v24-neoprint",
]);

const allowedImageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

const isObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

const validateRequiredString = (errors, value, path) => {
  if (!isNonEmptyString(value)) {
    errors.push(`${path} must be a non-empty string.`);
  }
};

const validateOptionalString = (errors, value, path) => {
  if (value !== undefined && typeof value !== "string") {
    errors.push(`${path} must be a string when provided.`);
  }
};

const validateStringArray = (errors, value, path) => {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${path} must be a non-empty array.`);
    return;
  }

  value.forEach((item, index) => {
    if (!isNonEmptyString(item)) {
      errors.push(`${path}[${index}] must be a non-empty string.`);
    }
  });
};

const validateCompareItem = (errors, value, path) => {
  if (!isObject(value)) {
    errors.push(`${path} must be an object.`);
    return;
  }

  validateRequiredString(errors, value.label, `${path}.label`);
  validateStringArray(errors, value.items, `${path}.items`);
};

const extensionFor = (assetPath) => {
  const cleanPath = assetPath.split(/[?#]/, 1)[0].toLowerCase();
  const match = cleanPath.match(/\.[a-z0-9]+$/);
  return match?.[0];
};

export const validateAssetPath = (assetPath) => {
  if (assetPath === undefined) {
    return undefined;
  }

  if (!isNonEmptyString(assetPath)) {
    return "asset path must be a non-empty string.";
  }

  if (/^(https?:)?\/\//i.test(assetPath)) {
    return "asset path must not be a remote URL.";
  }

  if (/^data:/i.test(assetPath)) {
    return "asset path must not be a data URL.";
  }

  if (assetPath.startsWith("/") || assetPath.includes("\\")) {
    return "asset path must be public-relative, for example images/example.png.";
  }

  let decoded = assetPath;
  try {
    decoded = decodeURIComponent(assetPath);
  } catch {
    return "asset path must be valid URI text.";
  }

  if (decoded.split(/[?#]/, 1)[0].split("/").includes("..")) {
    return "asset path must not contain traversal segments.";
  }

  if (!decoded.startsWith("images/")) {
    return "asset path must live under public/images/.";
  }

  const extension = extensionFor(decoded);
  if (!extension || !allowedImageExtensions.has(extension)) {
    return `asset path must use one of: ${Array.from(allowedImageExtensions).join(", ")}.`;
  }

  return undefined;
};

const validateImageFields = (errors, slide, path) => {
  for (const field of ["imageSrc", "backgroundImageSrc", "avatarImageSrc"]) {
    const error = validateAssetPath(slide[field]);
    if (error) {
      errors.push(`${path}.${field}: ${error}`);
    }
  }

  if (Array.isArray(slide.cards)) {
    slide.cards.forEach((card, index) => {
      if (!isObject(card)) {
        return;
      }

      const error = validateAssetPath(card.imageSrc);
      if (error) {
        errors.push(`${path}.cards[${index}].imageSrc: ${error}`);
      }
    });
  }
};

const validateTips = (errors, tips, path) => {
  if (!Array.isArray(tips) || tips.length === 0) {
    errors.push(`${path} must be a non-empty array.`);
    return;
  }

  tips.forEach((tip, index) => {
    const tipPath = `${path}[${index}]`;
    if (!isObject(tip)) {
      errors.push(`${tipPath} must be an object.`);
      return;
    }

    validateRequiredString(errors, tip.title, `${tipPath}.title`);
    validateOptionalString(errors, tip.body, `${tipPath}.body`);
  });
};

const validateStorySteps = (errors, steps, path) => {
  if (!Array.isArray(steps) || steps.length === 0) {
    errors.push(`${path} must be a non-empty array.`);
    return;
  }

  steps.forEach((step, index) => {
    const stepPath = `${path}[${index}]`;
    if (!isObject(step)) {
      errors.push(`${stepPath} must be an object.`);
      return;
    }

    validateRequiredString(errors, step.title, `${stepPath}.title`);
    validateRequiredString(errors, step.body, `${stepPath}.body`);
  });
};

const validateProofCards = (errors, cards, path) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    errors.push(`${path} must be a non-empty array.`);
    return;
  }

  cards.forEach((card, index) => {
    const cardPath = `${path}[${index}]`;
    if (!isObject(card)) {
      errors.push(`${cardPath} must be an object.`);
      return;
    }

    validateRequiredString(errors, card.title, `${cardPath}.title`);
    validateOptionalString(errors, card.subtitle, `${cardPath}.subtitle`);
  });
};

const validateSlide = (errors, slide, index) => {
  const path = `slides[${index}]`;
  if (!isObject(slide)) {
    errors.push(`${path} must be an object.`);
    return;
  }

  if (!isNonEmptyString(slide.type) || !allowedSlideTypes.has(slide.type)) {
    errors.push(`${path}.type must be one of: ${Array.from(allowedSlideTypes).join(", ")}.`);
    return;
  }

  validateImageFields(errors, slide, path);

  switch (slide.type) {
    case "cover":
    case "story-hero":
    case "text-title":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateOptionalString(errors, slide.subtitle, `${path}.subtitle`);
      break;
    case "result":
      validateOptionalString(errors, slide.label, `${path}.label`);
      validateOptionalString(errors, slide.noteCaption, `${path}.noteCaption`);
      break;
    case "prompt-setup":
      if (
        !isNonEmptyString(slide.heading) &&
        !isNonEmptyString(slide.promptBody) &&
        (!Array.isArray(slide.promptSections) || slide.promptSections.length === 0)
      ) {
        errors.push(`${path} must include heading, promptBody, or promptSections.`);
      }
      break;
    case "story-panel":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateRequiredString(errors, slide.body, `${path}.body`);
      if (slide.chips !== undefined) {
        validateStringArray(errors, slide.chips, `${path}.chips`);
      }
      break;
    case "story-steps":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateStorySteps(errors, slide.steps, `${path}.steps`);
      break;
    case "story-proof":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateProofCards(errors, slide.cards, `${path}.cards`);
      break;
    case "story-cta":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateRequiredString(errors, slide.body, `${path}.body`);
      validateOptionalString(errors, slide.buttonLabel, `${path}.buttonLabel`);
      break;
    case "text-tips":
      validateRequiredString(errors, slide.title, `${path}.title`);
      validateTips(errors, slide.tips, `${path}.tips`);
      break;
    case "text-quote":
      validateRequiredString(errors, slide.quote, `${path}.quote`);
      break;
    case "text-compare":
      validateCompareItem(errors, slide.left, `${path}.left`);
      validateCompareItem(errors, slide.right, `${path}.right`);
      break;
    case "text-stat":
      validateRequiredString(errors, slide.stat, `${path}.stat`);
      validateRequiredString(errors, slide.body, `${path}.body`);
      break;
  }
};

export const validateCarouselContent = (content) => {
  const errors = [];

  if (!isObject(content)) {
    return ["content must be an object."];
  }

  validateRequiredString(errors, content.name, "name");

  if (!Array.isArray(content.slides) || content.slides.length === 0) {
    errors.push("slides must be a non-empty array.");
    return errors;
  }

  content.slides.forEach((slide, index) => validateSlide(errors, slide, index));
  return errors;
};

export const validateDemoVariants = (variants) => {
  const errors = [];
  if (!Array.isArray(variants) || variants.length === 0) {
    return ["demo variants must be a non-empty array."];
  }

  const names = new Set();
  const compositionPrefixes = new Set();

  variants.forEach((variant, index) => {
    const path = `variants[${index}]`;
    if (!isObject(variant)) {
      errors.push(`${path} must be an object.`);
      return;
    }

    for (const field of ["name", "displayName", "variant", "theme", "compositionPrefix"]) {
      validateRequiredString(errors, variant[field], `${path}.${field}`);
    }

    if (variant.public !== true && variant.public !== false) {
      errors.push(`${path}.public must be a boolean.`);
    }

    if (isNonEmptyString(variant.name)) {
      if (names.has(variant.name)) {
        errors.push(`${path}.name duplicate variant name: ${variant.name}.`);
      }
      names.add(variant.name);
    }

    if (isNonEmptyString(variant.compositionPrefix)) {
      if (compositionPrefixes.has(variant.compositionPrefix)) {
        errors.push(`${path}.compositionPrefix duplicate composition prefix: ${variant.compositionPrefix}.`);
      }
      compositionPrefixes.add(variant.compositionPrefix);
    }

    if (isNonEmptyString(variant.variant) && !allowedVariants.has(variant.variant)) {
      errors.push(`${path}.variant is not one of the public demo variants.`);
    }

    if (isNonEmptyString(variant.theme) && !allowedThemes.has(variant.theme)) {
      errors.push(`${path}.theme is not one of the public demo theme exports.`);
    }
  });

  return errors;
};

const findCarouselContentFiles = (rootDir) => {
  const postsDir = join(rootDir, "src/data/posts");
  if (!existsSync(postsDir)) {
    return [];
  }

  return readdirSync(postsDir, {withFileTypes: true})
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(postsDir, entry.name, "carousel-content.json"))
    .filter((file) => existsSync(file));
};

export const checkCarouselDataFiles = (rootDir = process.cwd()) => {
  const files = findCarouselContentFiles(rootDir);
  const failures = [];

  for (const file of files) {
    const content = JSON.parse(readFileSync(file, "utf8"));
    const errors = validateCarouselContent(content);
    for (const error of errors) {
      failures.push(`${file}: ${error}`);
    }
  }

  const variantFile = join(rootDir, "src/data/demo-variants.json");
  if (existsSync(variantFile)) {
    files.push(variantFile);
    const variants = JSON.parse(readFileSync(variantFile, "utf8"));
    const errors = validateDemoVariants(variants);
    for (const error of errors) {
      failures.push(`${variantFile}: ${error}`);
    }
  }

  return {files, failures};
};

const isDirectRun = process.argv[1] && resolve(process.argv[1]) === import.meta.filename;

if (isDirectRun) {
  const {files, failures} = checkCarouselDataFiles();

  if (failures.length > 0) {
    console.error("Carousel data check failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Carousel data check passed for ${files.length} file(s).`);
}
