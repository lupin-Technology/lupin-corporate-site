import { ViewMoreLink } from "@/components/common";
import { variantReveal, type GradientVariant } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

const features: {
  num: string;
  heading: string;
  headingGradient: GradientVariant;
  term: string;
  termGradient: GradientVariant;
  desc: string;
  links: { href: string; label: string }[];
}[] = [
  {
    num: "01",
    heading: "Co-Creation",
    headingGradient: "business",
    term: "一気通貫でクライアントに伴走する\n「共創型」の事業開発",
    termGradient: "business",
    desc: "当社には、コンサル、IT、デザイン、マーケティングなど、多様なバックグラウンドを持つメンバーが在籍しています。私たちは、常にクライアントとともに考え、プロジェクトの成功まで並走する「共創型」の事業開発を強みに、机上の理想論だけを語るのではなく、事業戦略の立案から、新規ビジネスの企画、開発、設計、マーケティングまで、新規事業の実現を総合的に支援します。",
    links: [
      { href: "/services/", label: "Services" },
      { href: "/projects/", label: "Projects" },
    ],
  },
  {
    num: "02",
    heading: "Expertise",
    headingGradient: "digital",
    term: "テクノロジー×ビジネス領域における\n高い専門性とノウハウ",
    termGradient: "digital",
    desc: "テクノロジーとビジネスの融合領域における豊富な知見と経験が、私たちを稀有な存在にしています。システムからデータ分析、ビジネスモデル設計、UXデザインまで、幅広い専門知識を持つ事業開発のプロとして、日本を代表する多様な業界のクライアント企業の新たな中核事業の立ち上げを数多く支援しています。",
    links: [],
  },
  {
    num: "03",
    heading: "Synergy",
    headingGradient: "service",
    term: "複数の専門視点を掛け合わせた\n本質的なサポート",
    termGradient: "service",
    desc: "コンサルとしての「専門家」の視点に加え、自社でデジタルサービスを運営する「事業会社」としての視点、さらにユーザーの行動や感情を捉え体験設計を行う「ユーザー」視点の3つを掛け合わせた本質的なサポートを展開。グループが有するあらゆる知見とアセットを活用して、他のファームにはない価値を提供します。",
    links: [],
  },
];

export function AboutFeaturesSection() {
  return (
    <section className="relative border-t border-[#e4e4e4]">
      <div className="mx-auto w-full max-w-[84vw]">
        {features.map((feature) => (
          <div
            key={feature.num}
            className={revealClassName(
              "group/gt flex min-h-[80vh] items-center border-b border-[#e4e4e4] py-[100px] max-lg:flex-col max-lg:items-start max-lg:gap-10",
            )}
            data-observe=""
          >
            <div className="flex max-w-[50%] basis-1/2 items-center font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] max-lg:max-w-full max-lg:basis-auto">
              <span className="relative z-[1] text-base leading-[1.6] font-medium">
                {feature.num}
              </span>
              <span className="relative z-[1] mx-4 block h-px w-10 bg-[#e4e4e4]" />
              <h2 className="relative z-[1] text-[30px] leading-[1.6] font-medium">
                <span className={variantReveal(feature.headingGradient)}>
                  {feature.heading}
                </span>
              </h2>
            </div>
            <div className="max-w-[50%] basis-1/2 max-lg:max-w-full max-lg:basis-auto">
              <h3
                className={revealClassName(
                  "group/gt text-[30px] leading-[1.6] font-bold tracking-[0.04em]",
                )}
                data-observe=""
              >
                <span className={variantReveal(feature.termGradient)}>
                  {feature.term.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </h3>
              <p
                className={revealClassName(
                  "mt-10 text-base leading-[2] tracking-[0.08em] text-[#333]",
                )}
                data-observe=""
              >
                {feature.desc}
              </p>
              {feature.links.length > 0 && (
                <div className="-mx-5 mt-[50px] flex flex-wrap">
                  {feature.links.map((link) => (
                    <div
                      key={link.href}
                      className="w-1/2 px-5 max-md:w-full max-md:py-2"
                    >
                      <ViewMoreLink href={link.href} label={link.label} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
