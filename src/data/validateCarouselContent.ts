import type {CarouselSlide} from "../types";

const slideTypes = new Set([
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

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

const requireString = (
  errors: string[],
  value: unknown,
  path: string,
) => {
  if (!isNonEmptyString(value)) {
    errors.push(`${path} must be a non-empty string.`);
  }
};

const requireArray = (
  errors: string[],
  value: unknown,
  path: string,
) => {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${path} must be a non-empty array.`);
    return undefined;
  }

  return value;
};

const validateCompareItem = (
  errors: string[],
  value: unknown,
  path: string,
) => {
  if (!isRecord(value)) {
    errors.push(`${path} must be an object.`);
    return;
  }

  requireString(errors, value.label, `${path}.label`);
  const items = requireArray(errors, value.items, `${path}.items`);
  items?.forEach((item, index) => requireString(errors, item, `${path}.items[${index}]`));
};

const validateSlide = (errors: string[], slide: unknown, index: number) => {
  const path = `slides[${index}]`;
  if (!isRecord(slide)) {
    errors.push(`${path} must be an object.`);
    return;
  }

  if (!isNonEmptyString(slide.type) || !slideTypes.has(slide.type)) {
    errors.push(`${path}.type is not supported.`);
    return;
  }

  switch (slide.type) {
    case "cover":
    case "story-hero":
    case "text-title":
      requireString(errors, slide.title, `${path}.title`);
      break;
    case "story-panel":
      requireString(errors, slide.title, `${path}.title`);
      requireString(errors, slide.body, `${path}.body`);
      break;
    case "story-steps": {
      requireString(errors, slide.title, `${path}.title`);
      const steps = requireArray(errors, slide.steps, `${path}.steps`);
      steps?.forEach((step, stepIndex) => {
        if (!isRecord(step)) {
          errors.push(`${path}.steps[${stepIndex}] must be an object.`);
          return;
        }
        requireString(errors, step.title, `${path}.steps[${stepIndex}].title`);
        requireString(errors, step.body, `${path}.steps[${stepIndex}].body`);
      });
      break;
    }
    case "story-proof": {
      requireString(errors, slide.title, `${path}.title`);
      const cards = requireArray(errors, slide.cards, `${path}.cards`);
      cards?.forEach((card, cardIndex) => {
        if (!isRecord(card)) {
          errors.push(`${path}.cards[${cardIndex}] must be an object.`);
          return;
        }
        requireString(errors, card.title, `${path}.cards[${cardIndex}].title`);
      });
      break;
    }
    case "story-cta":
      requireString(errors, slide.title, `${path}.title`);
      requireString(errors, slide.body, `${path}.body`);
      break;
    case "text-tips": {
      requireString(errors, slide.title, `${path}.title`);
      const tips = requireArray(errors, slide.tips, `${path}.tips`);
      tips?.forEach((tip, tipIndex) => {
        if (!isRecord(tip)) {
          errors.push(`${path}.tips[${tipIndex}] must be an object.`);
          return;
        }
        requireString(errors, tip.title, `${path}.tips[${tipIndex}].title`);
      });
      break;
    }
    case "text-quote":
      requireString(errors, slide.quote, `${path}.quote`);
      break;
    case "text-compare":
      validateCompareItem(errors, slide.left, `${path}.left`);
      validateCompareItem(errors, slide.right, `${path}.right`);
      break;
    case "text-stat":
      requireString(errors, slide.stat, `${path}.stat`);
      requireString(errors, slide.body, `${path}.body`);
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
    case "result":
      break;
  }
};

export type CarouselContent = {
  name: string;
  slides: CarouselSlide[];
};

export const validateCarouselContent = (content: unknown) => {
  const errors: string[] = [];

  if (!isRecord(content)) {
    return ["content must be an object."];
  }

  requireString(errors, content.name, "name");

  const slides = requireArray(errors, content.slides, "slides");
  slides?.forEach((slide, index) => validateSlide(errors, slide, index));

  return errors;
};

export function assertCarouselContent(
  content: unknown,
): asserts content is CarouselContent {
  const errors = validateCarouselContent(content);
  if (errors.length > 0) {
    throw new Error(`Invalid carousel content:\n${errors.join("\n")}`);
  }
}
