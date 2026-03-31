"use client";

import { useRouter } from "next/navigation";

import {
  buildProjectsUrl,
  PROJECT_CATEGORY_ITEMS,
  PROJECT_CLIENT_ITEMS,
  type ProjectFilters,
} from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  filters: ProjectFilters;
}

export function ProjectFilter({ filters }: ProjectFilterProps) {
  const router = useRouter();

  return (
    <div className="pt-[60px] pb-[60px]">
      <div className="mb-5 flex items-baseline gap-5 max-md:flex-col max-md:items-start">
        <span className="shrink-0 text-xs font-medium whitespace-nowrap text-[#8e8e8e]">
          クライアントの業界で絞り込む
        </span>
        <ul className="flex flex-wrap gap-2">
          {PROJECT_CLIENT_ITEMS.map((item) => {
            const isActive =
              item.value === "all"
                ? !filters.client
                : filters.client === item.value;
            return (
              <li key={item.value}>
                <button
                  type="button"
                  className={cn(
                    "rounded-[20px] border border-[#e4e4e4] px-[14px] py-1.5 text-[13px] leading-[1.5] font-medium transition-all",
                    isActive
                      ? "border-[#333] bg-[#333] text-white"
                      : "text-[#8e8e8e] hover:border-[#333] hover:bg-[#333] hover:text-white",
                  )}
                  onClick={() =>
                    router.push(
                      buildProjectsUrl({
                        cat: filters.cat,
                        client: item.value,
                      }),
                    )
                  }
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-baseline gap-5 max-md:flex-col max-md:items-start">
        <span className="shrink-0 text-xs font-medium whitespace-nowrap text-[#8e8e8e]">
          業務内容で絞り込む
        </span>
        <ul className="flex flex-wrap gap-2">
          {PROJECT_CATEGORY_ITEMS.map((item) => {
            const isActive =
              item.value === "all" ? !filters.cat : filters.cat === item.value;
            return (
              <li key={item.value}>
                <button
                  type="button"
                  className={cn(
                    "rounded-[20px] border border-[#e4e4e4] px-[14px] py-1.5 text-[13px] leading-[1.5] font-medium transition-all",
                    isActive
                      ? "border-[#333] bg-[#333] text-white"
                      : "text-[#8e8e8e] hover:border-[#333] hover:bg-[#333] hover:text-white",
                  )}
                  onClick={() =>
                    router.push(
                      buildProjectsUrl({
                        cat: item.value,
                        client: filters.client,
                      }),
                    )
                  }
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
