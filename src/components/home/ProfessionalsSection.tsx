import { SectionLink, SectionLinkBackground } from "@/components/common";

export function ProfessionalsSection() {
  return (
    <section id="professionals">
      <SectionLink
        href="/professionals/"
        heading="Professionals"
        description="様々なバックグラウンド・知見を持ったコンサルタントをご紹介します。"
        variant="professionals"
      >
        <SectionLinkBackground
          className="top-[-15%] h-[130%]"
          overlayClassName="after:bg-black/30"
          layers={[{ src: "/images/ref/4056b06.jpg" }]}
        />
      </SectionLink>
    </section>
  );
}
