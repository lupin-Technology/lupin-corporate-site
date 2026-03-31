import { cn } from "@/lib/utils";

const baseRevealClassName =
  "translate-y-6 opacity-0 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[onscreen=true]:translate-y-0 data-[onscreen=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealDelayClassNames = {
  1: "[transition-delay:150ms]",
  2: "[transition-delay:300ms]",
  3: "[transition-delay:450ms]",
  4: "[transition-delay:600ms]",
  5: "[transition-delay:750ms]",
} as const;

type RevealDelay = keyof typeof revealDelayClassNames;

export function revealClassName(className?: string, delay?: RevealDelay) {
  return cn(
    baseRevealClassName,
    delay ? revealDelayClassNames[delay] : undefined,
    className,
  );
}
