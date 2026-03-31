import { SectionLink, SectionLinkBackground } from "@/components/common";

export function ServicesSection() {
  return (
    <section id="services" className="relative z-[1] pt-[150px]">
      <SectionLink
        href="/services/"
        heading="Services"
        description="クライアントの新規事業開発を、戦略策定から実行、エンハンスまで、一気通貫で支援します。"
        variant="services"
      >
        <SectionLinkBackground
          className="top-[-3.4722vw] h-[40.2778vw]"
          overlayClassName="after:bg-black/50"
          layers={[
            {
              src: "/images/ref/1271ae6.jpg",
              className: "animate-[img-crossfade-3_15s_linear_0s_infinite]",
            },
            {
              src: "/images/ref/a60719a.jpg",
              className: "animate-[img-crossfade-3_15s_linear_5s_infinite]",
            },
            {
              src: "/images/ref/8dfc509.jpg",
              className: "animate-[img-crossfade-3_15s_linear_10s_infinite]",
            },
          ]}
        />
      </SectionLink>
    </section>
  );
}
