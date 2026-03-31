import { gradientReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

import { AboutCanvas } from "./AboutCanvas";

export function AboutIntroSection() {
  return (
    <section className="relative pt-[13.8889vw] pb-[13.8889vw]">
      <AboutCanvas />
      <div className="mx-auto w-full max-w-[84vw]">
        <h2
          className={revealClassName(
            "group/gt relative z-[1] text-center text-[clamp(30px,3.4722vw,50px)] leading-[1.5] font-bold tracking-[0.08em] text-[#333]",
          )}
          data-observe=""
        >
          <span className="block">
            <span className={gradientReveal}>新しい事業で、未来をつくる。</span>
          </span>
        </h2>
        <div
          className={revealClassName(
            "relative z-[1] mx-auto mt-20 max-w-[1010px]",
            1,
          )}
          data-observe=""
        >
          <p className="mt-[1em] text-base leading-[2] tracking-[0.08em] text-[#333]">
            ビジネスとテクノロジーの進化によって、あらゆる産業と社会の仕組みが変わろうとしています。企業は、いかに次世代の事業基盤を築いていくべきか。Lupinは、デジタル領域における事業開発の専門家として、クライアントとともに未来のあり方を構想し、社会に価値のあるビジネスを創り出すことで、企業と社会全体のDXを推進します。
          </p>
          <p className="mt-[1em] text-base leading-[2] tracking-[0.08em] text-[#333]">
            人々の生活とあらゆる産業の接点となるテクノロジーを革新し、世の中を持続可能に変えていく。そのために私たちは、真に価値あるサービスとは何かをつねに追求しながら、デジタル変革時代のコンサルティングファームとして、ビジネスとテクノロジー、そして生活者をつなぐ唯一無二の存在であり続けます。
          </p>
        </div>
      </div>
    </section>
  );
}
