import {
  PageBody,
  PageHeader,
  SectionLink,
  SectionLinkBackground,
} from "@/components/common";
import {
  ProjectFilter,
  ProjectList,
  ProjectsHero,
  ProjectsIntroSection,
} from "@/components/projects";
import { parseProjectFilters, type ProjectSearchParams } from "@/data/projects";

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<ProjectSearchParams>;
}) {
  const filters = parseProjectFilters(await searchParams);

  return (
    <main>
      <PageHeader
        heading="Projects"
        headingJp="プロジェクト"
        breadcrumb="Projects"
      />
      <ProjectsHero />
      <PageBody
        className="pb-0"
        containerClassName="mx-auto w-full max-w-[84vw]"
      >
        <ProjectsIntroSection />
        <ProjectFilter filters={filters} />
        <ProjectList filters={filters} />
      </PageBody>
      <SectionLink
        href="/professionals/"
        heading="Professionals"
        description="様々なバックグラウンド・知見を持ったコンサルタントをご紹介します。"
        variant="professionals"
      >
        <SectionLinkBackground
          className="top-[-15%] h-[130%]"
          overlayClassName="after:bg-black/30"
          layers={[
            { src: "/images/ref/4056b06.jpg", className: "max-lg:hidden" },
            {
              src: "/images/ref/cf9466b.jpg",
              className: "hidden max-lg:block",
            },
          ]}
        />
      </SectionLink>
    </main>
  );
}
