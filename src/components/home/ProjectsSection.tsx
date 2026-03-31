import { ViewMoreLink } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import { getHomeProjects } from "@/data/projects";
import { gradientReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function ProjectsSection() {
  const projects = getHomeProjects();

  return (
    <section id="projects" className="relative z-[1] bg-white py-[150px]">
      <div className="mx-auto w-full max-w-[84vw]">
        <div className="pb-[60px]">
          <h2 className={revealClassName("group/gt relative")} data-observe="">
            <span
              className={`${gradientReveal} font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-[clamp(36px,2.929vw,56px)] leading-[1.2] font-medium`}
            >
              Projects
            </span>
          </h2>
          <p
            className={revealClassName(
              "mt-[30px] text-base leading-[2] tracking-[0.08em] text-[#333]",
              1,
            )}
            data-observe=""
          >
            当社で支援したプロジェクト事例をご紹介します。
          </p>
        </div>

        <div className={revealClassName(undefined, 2)} data-observe="">
          <div className="flex flex-wrap">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div
          className={revealClassName("mt-[50px] text-right", 3)}
          data-observe=""
        >
          <ViewMoreLink href="/projects/" />
        </div>
      </div>
    </section>
  );
}
