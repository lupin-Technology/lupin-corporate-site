import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ViewMoreLinkProps {
  href: string;
  label?: string;
  white?: boolean;
  className?: string;
}

export function ViewMoreLink({
  href,
  label = "View More",
  white = false,
  className,
}: ViewMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex min-h-[60px] min-w-[240px] overflow-hidden no-underline transition-colors",
        white ? "text-white" : "text-[#333]",
        className,
      )}
    >
      <div className="flex h-full w-full items-center pl-[5px]">
        <span className="inline-block overflow-hidden">
          <span className="inline-block text-[18px] leading-none font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-x-[10px]">
            {label}
          </span>
        </span>
        <span className="absolute top-1/2 right-[10px] inline-block -translate-y-1/2 overflow-hidden">
          <span
            className={cn(
              "inline-flex items-center overflow-hidden text-[13px] group-hover:animate-[arrow-forward_0.9s_cubic-bezier(0.215,0.61,0.355,1)_forwards]",
              white ? "text-white" : "text-[#333]",
            )}
          >
            <ArrowRight size={13} strokeWidth={1.5} />
          </span>
        </span>
        <span
          className={cn(
            "absolute right-0 bottom-0 left-0 h-px overflow-hidden",
            white
              ? "bg-white/50 group-hover:bg-white/10"
              : "bg-black/50 group-hover:bg-black/10",
          )}
        >
          <span className="invisible absolute inset-0 translate-x-[-100%] animate-[gradient-anim_5s_linear_infinite] [background-image:linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] [background-size:700%_700%] transition-[visibility] duration-500 group-hover:visible group-hover:animate-[right-in_0.5s_cubic-bezier(0.215,0.61,0.355,1)_0.2s_forwards]" />
        </span>
      </div>
    </Link>
  );
}

export function ViewMoreButton({
  label = "View More",
  white = false,
  className,
}: Omit<ViewMoreLinkProps, "href">) {
  return (
    <div
      className={cn(
        "group relative inline-flex min-h-[60px] min-w-[240px] overflow-hidden transition-colors",
        white ? "text-white" : "text-[#333]",
        className,
      )}
    >
      <div className="flex h-full w-full items-center pl-[5px]">
        <span className="inline-block overflow-hidden">
          <span className="inline-block text-[18px] leading-none font-medium transition-transform duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-x-[10px]">
            {label}
          </span>
        </span>
        <span className="absolute top-1/2 right-[10px] inline-block -translate-y-1/2 overflow-hidden">
          <span
            className={cn(
              "inline-flex items-center overflow-hidden text-[13px] group-hover:animate-[arrow-forward_0.9s_cubic-bezier(0.215,0.61,0.355,1)_forwards]",
              white ? "text-white" : "text-[#333]",
            )}
          >
            <ArrowRight size={13} strokeWidth={1.5} />
          </span>
        </span>
        <span
          className={cn(
            "absolute right-0 bottom-0 left-0 h-px overflow-hidden",
            white
              ? "bg-white/50 group-hover:bg-white/10"
              : "bg-black/50 group-hover:bg-black/10",
          )}
        >
          <span className="invisible absolute inset-0 translate-x-[-100%] animate-[gradient-anim_5s_linear_infinite] [background-image:linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] [background-size:700%_700%] transition-[visibility] duration-500 group-hover:visible group-hover:animate-[right-in_0.5s_cubic-bezier(0.215,0.61,0.355,1)_0.2s_forwards]" />
        </span>
      </div>
    </div>
  );
}
