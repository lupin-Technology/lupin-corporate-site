import {
  PageBody,
  PageHeader,
  SectionLink,
  SectionLinkBackground,
} from "@/components/common";
import {
  BusinessSection,
  DigitalSection,
  MediaSection,
  ServiceDesignSection,
  ServicesIntroSection,
} from "@/components/services";

export default function Services() {
  return (
    <main>
      <PageHeader
        heading="Services"
        headingJp="サービス"
        breadcrumb="Services"
      />
      <PageBody className="pb-0">
        <ServicesIntroSection />
        <BusinessSection />
        <ServiceDesignSection />
        <DigitalSection />
        <MediaSection />
      </PageBody>
      <SectionLink
        href="/projects/"
        heading="Projects"
        description="当社で支援したプロジェクト事例をご紹介します。"
        variant="professionals"
      >
        <SectionLinkBackground
          className="top-[-15%] h-[130%]"
          overlayClassName="after:bg-black/30"
          layers={[
            { src: "/images/ref/d7ffb9d.jpg", className: "max-lg:hidden" },
            {
              src: "/images/ref/1dceea5.jpg",
              className: "hidden max-lg:block",
            },
          ]}
        />
      </SectionLink>
    </main>
  );
}
