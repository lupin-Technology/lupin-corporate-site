import { cn } from "@/lib/utils";

// Common base for all gradient text (hidden + reveal via clip-path)
const gradientTextHidden =
  "relative inline-block [clip-path:polygon(0_0,0_0,0_105%,0_105%)] transform-gpu [will-change:clip-path]";

const gradientTextRevealed =
  "group-data-[onscreen=true]/gt:[clip-path:polygon(0_0,100%_0,100%_105%,0_105%)]";

/**
 * Rainbow gradient wipe-in → color transitions to inherited (dark) text.
 * Parent with `data-observe` needs `group/gt` class.
 */
export const gradientReveal = cn(
  gradientTextHidden,
  "text-transparent",
  "[background-image:linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)]",
  "[background-size:700%_700%]",
  "bg-clip-text",
  "animate-[gradient-anim_3s_linear_infinite]",
  "[transition:color_2s_cubic-bezier(0.215,0.61,0.355,1)_0.9s,clip-path_0.8s_cubic-bezier(0.645,0.045,0.355,1)_0.1s]",
  gradientTextRevealed,
  "group-data-[onscreen=true]/gt:text-inherit",
);

/**
 * Clip-path wipe only, no gradient — for white text on dark backgrounds.
 * Parent with `data-observe` needs `group/gt` class.
 */
export const whiteTextReveal = cn(
  gradientTextHidden,
  "[transition:clip-path_0.8s_cubic-bezier(0.645,0.045,0.355,1)_0.1s]",
  gradientTextRevealed,
);

const variantGradients = {
  business: cn(
    "[background-image:linear-gradient(270deg,#cc73b7,#dd7385,#fae561,#cc73b7,#dd7385)]",
    "[background-size:400%_400%]",
    "animate-[gradient-anim_1s_linear_infinite]",
  ),
  digital: cn(
    "[background-image:linear-gradient(270deg,#ffe65f,#96da8b,#09d2cc,#0bb3e6,#ffe65f,#96da8b)]",
    "[background-size:500%_500%]",
    "animate-[gradient-anim_1s_linear_infinite]",
  ),
  service: cn(
    "[background-image:linear-gradient(270deg,#00b6e5,#8789f5,#b973ec,#cc73b7,#00b6e5,#8789f5)]",
    "[background-size:500%_500%]",
    "animate-[gradient-anim_1s_linear_infinite]",
  ),
} as const;

export type GradientVariant = keyof typeof variantGradients;

/**
 * Variant gradient wipe-in (stays as gradient text, then color transitions to inherited).
 * Parent with `data-observe` needs `group/gt` class.
 */
export function variantReveal(variant: GradientVariant) {
  return cn(
    gradientTextHidden,
    "text-transparent",
    variantGradients[variant],
    "bg-clip-text",
    "[transition:color_2s_cubic-bezier(0.215,0.61,0.355,1)_0.9s,clip-path_0.8s_cubic-bezier(0.645,0.045,0.355,1)_0.1s]",
    gradientTextRevealed,
    "group-data-[onscreen=true]/gt:text-inherit",
  );
}
