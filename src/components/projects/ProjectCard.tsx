import Link from "next/link";

import type { Project, ProjectTag } from "@/data/projects";
import { cn } from "@/lib/utils";

const TAG_MAP: Record<ProjectTag, { cat: string; className: string }> = {
  Strategy: {
    cat: "strategy",
    className: "hover:bg-[#dc6e87] hover:text-white",
  },
  "Business Development": {
    cat: "businessdevelopment",
    className: "hover:bg-[#ed957a] hover:text-white",
  },
  "Service Planning": {
    cat: "serviceplanning",
    className: "hover:bg-[#bc71eb] hover:text-white",
  },
  "UX/UI Design": {
    cat: "uxuidesign",
    className: "hover:bg-[#8789f5] hover:text-white",
  },
  "System Design": {
    cat: "systemdesign",
    className: "hover:bg-[#ffce48] hover:text-white",
  },
  Marketing: {
    cat: "marketing",
    className: "hover:bg-[#00b6e5] hover:text-white",
  },
};

interface ProjectCardProps {
  project: Project;
  showClient?: boolean;
}

export function ProjectCard({ project, showClient = false }: ProjectCardProps) {
  return (
    <article className="relative z-0 -mt-px -ml-px w-full shrink-0 hover:z-[2] md:max-w-[calc(50%+1px)] md:basis-[calc(50%+1px)] lg:max-w-[calc(33.3333%+1px)] lg:basis-[calc(33.3333%+1px)]">
      <div className="group relative block h-full border border-[#e4e4e4] bg-white transition-[filter,border-color] duration-300 hover:border-transparent hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.05)]">
        <div className="relative z-[1] flex h-full flex-col p-[3.125vw]">
          <div className="overflow-hidden border-b border-[#e4e4e4] bg-white pb-5">
            <h3 className="text-[30px] leading-[1.5] font-bold tracking-[0.04em] text-[#333]">
              <span className="bg-[linear-gradient(#333,#333)] bg-[length:0_1px] bg-[position:100%_100%] bg-no-repeat transition-[background-size] duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-[length:100%_1px] group-hover:bg-[position:0_100%]">
                {project.title}
              </span>
            </h3>
            {showClient && (
              <div className="text-[14px] text-[#333]">{project.client}</div>
            )}
          </div>
          <div className="flex-1 py-5">
            <p className="text-sm leading-[1.8] tracking-[0.08em] text-[#333]">
              {project.description}
            </p>
          </div>
          <div className="mt-auto border-t border-[#e4e4e4] pt-5">
            <div className="-mx-[2px] -mt-1 flex flex-wrap">
              {project.tags.map((tag) => {
                const { cat, className } = TAG_MAP[tag];
                return (
                  <span key={tag} className="inline-block px-[2px] pt-1">
                    <Link
                      href={`/projects?cat=${cat}`}
                      className={cn(
                        "block rounded-[20px] bg-[#f6f7f7] px-[10px] py-1 text-[13px] leading-[1.5] text-[#333] transition-[background-color,color] duration-200",
                        className,
                      )}
                    >
                      #{tag}
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
