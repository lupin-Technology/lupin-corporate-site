import Link from "next/link";

import { whiteTextReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";
import { cn } from "@/lib/utils";

import { ViewMoreButton } from "./ViewMoreLink";

interface SectionLinkProps {
  href: string;
  heading: string;
  description: string;
  variant: "services" | "professionals";
  children?: React.ReactNode;
  className?: string;
}

export function SectionLink({
  href,
  heading,
  description,
  variant,
  children,
  className,
}: SectionLinkProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "services" ? "bg-[#111]" : "bg-[#222]",
        className,
      )}
    >
      <Link href={href} className="block">
        <div className="relative z-[1] mx-auto flex h-[36.1111vw] w-full max-w-[84vw] items-center">
          <div className="font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-white">
            <h2
              className={revealClassName("group/gt relative")}
              data-observe=""
            >
              <span
                className={`${whiteTextReveal} text-[clamp(36px,2.929vw,56px)] leading-[1.2] font-medium`}
              >
                {heading}
              </span>
            </h2>
            <p
              className={revealClassName(
                "mt-[2.34375vw] max-w-[36rem] text-base leading-[2] font-normal tracking-[0.08em]",
                1,
              )}
              data-observe=""
            >
              {description}
            </p>
          </div>

          <div
            className={revealClassName("absolute right-0 bottom-[60px]", 2)}
            data-observe=""
          >
            <ViewMoreButton white />
          </div>
        </div>

        {children}
      </Link>
    </div>
  );
}
