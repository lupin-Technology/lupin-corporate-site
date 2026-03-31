import { filterProjects, type ProjectFilters } from "@/data/projects";
import { revealClassName } from "@/lib/reveal";

import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  filters: ProjectFilters;
}

export function ProjectList({ filters }: ProjectListProps) {
  const projects = filterProjects(filters);

  return (
    <div className="pb-[60px]">
      <div className={revealClassName("flex flex-wrap")} data-observe="">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} showClient />
        ))}
      </div>
    </div>
  );
}
