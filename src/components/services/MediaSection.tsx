import Image from "next/image";

import { gradientReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function MediaSection() {
  return (
    <section className="mt-20 bg-[#f2f2f2] pt-[120px] pb-[150px] text-center">
      <div className="mx-auto w-full max-w-[84vw]">
        <h2
          className={revealClassName(
            "group/gt text-[clamp(40px,4.1667vw,60px)] leading-[1.1] font-medium",
          )}
          data-observe=""
        >
          <span className={gradientReveal}>Media</span>
        </h2>
        <p
          className={revealClassName(
            "mx-auto mt-10 max-w-[860px] text-base leading-[2] tracking-[0.08em] text-[#333]",
            1,
          )}
          data-observe=""
        >
          デジタルビジネスに関する研究開発ならびに、メディア「Lupin
          Insight」の運営を行なっています。Lupinが蓄積した豊富な知見を活かして、事業創造のヒントや技術動向をリサーチし情報発信を行っています。
        </p>
        <div
          className={revealClassName("mt-[50px] flex justify-center", 2)}
          data-observe=""
        >
          <div className="w-full max-w-[400px]">
            <a
              href="https://insight.infcurion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[100px] items-center justify-center border border-[#e4e4e4] bg-white transition-colors hover:border-[#333]"
            >
              <Image
                src="/images/ref/6e20c51.png"
                alt="Lupin Insight"
                width={200}
                height={40}
                className="w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
