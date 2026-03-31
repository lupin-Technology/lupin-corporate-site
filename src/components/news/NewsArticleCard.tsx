import Link from "next/link";

import { ArrowRight } from "lucide-react";

import type { NewsItem } from "@/data/news";
import { cn } from "@/lib/utils";

const CATEGORY_CLASSES = {
  "Press Release":
    "before:bg-[linear-gradient(135deg,#ff77bb_0%,#aa88ff_50%,#66ccff_100%)]",
  Information: "before:bg-[linear-gradient(135deg,#66ccff_0%,#00d2d0_100%)]",
  Report: "before:bg-[linear-gradient(135deg,#ffe65f_0%,#96da8b_100%)]",
} as const;

interface NewsArticleCardProps {
  item: NewsItem;
  compact?: boolean;
}

export function NewsArticleCard({
  item,
  compact = false,
}: NewsArticleCardProps) {
  return (
    <article className="border-b border-[#e4e4e4]">
      <Link
        href={item.url}
        className={cn(
          "group relative block overflow-hidden pr-20",
          compact ? "py-10" : "flex items-start py-[2.34375vw] pr-[4.6875vw]",
        )}
      >
        <div
          className={cn(
            "transition-transform duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-x-[10px]",
            compact ? "flex items-center" : "flex items-center",
          )}
        >
          <time
            className={cn(
              "text-[#8e8e8e]",
              compact ? "mr-[10px] text-sm" : "w-[75px] text-sm",
            )}
          >
            {item.date}
          </time>
          <span
            className={cn(
              "mr-5 inline-flex h-5 items-center rounded-[20px] border border-[#e4e4e4] bg-white px-[10px] text-[13px] text-[#8e8e8e] before:mr-1.5 before:inline-block before:size-[5px] before:rounded-full before:content-['']",
              CATEGORY_CLASSES[item.category],
            )}
          >
            {item.category}
          </span>
        </div>
        <div
          className={cn(
            "transition-transform duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-x-[10px]",
            compact ? "mt-[15px]" : "flex-1",
          )}
        >
          <h3 className="text-sm leading-[2] tracking-[0.08em] text-[#333]">
            {item.title}
          </h3>
        </div>
        <span className="absolute top-1/2 right-5 block -translate-y-1/2">
          <span className="inline-flex items-center overflow-hidden text-[#222] group-hover:animate-[arrow-forward_0.9s_cubic-bezier(0.215,0.61,0.355,1)_forwards]">
            <ArrowRight size={14} strokeWidth={1.5} />
          </span>
        </span>
        <span className="invisible absolute right-0 bottom-0 left-0 h-px translate-x-[-100%] animate-[gradient-anim_5s_linear_infinite] [background-image:linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] [background-size:700%_700%] group-hover:visible group-hover:animate-[right-in_0.5s_cubic-bezier(0.215,0.61,0.355,1)_0.2s_forwards]" />
      </Link>
    </article>
  );
}
