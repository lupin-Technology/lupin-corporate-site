import { ViewMoreLink } from "@/components/common";
import { variantReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function BusinessSection() {
  return (
    <section className="border-t border-[#e4e4e4] pt-[200px] text-center">
      <div className="mx-auto w-full max-w-[84vw]">
        <h2
          className={revealClassName(
            "group/gt text-[clamp(40px,4.1667vw,60px)] leading-[1.1] font-medium",
          )}
          data-observe=""
        >
          <span className={variantReveal("business")}>Business</span>
        </h2>
        <p
          className={revealClassName(
            "mx-auto mt-10 max-w-[860px] text-base leading-[2] tracking-[0.08em] text-[#333]",
            1,
          )}
          data-observe=""
        >
          新たな事業をどう立ち上げるか。既存のビジネスをいかに変革していくか。急速に変化する業界トレンドやビジネス環境を的確に捉えながら、中長期的な視点で事業の成長を可能にするビジネス戦略を立案。調査の実行やサービス性の検討、組織や業務の構築、アライアンスのサポートまで、御社のビジネス変革を一気通貫で総合支援します。
        </p>
        <ul
          className={revealClassName(
            "mt-10 flex flex-wrap justify-center gap-2",
            2,
          )}
          data-observe=""
        >
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(220_110_135_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Strategy
          </li>
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(237_149_122_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Business Development
          </li>
        </ul>
        <div
          className={revealClassName("mt-10 pb-20 text-center", 3)}
          data-observe=""
        >
          <ViewMoreLink href="/services/business/" />
        </div>
      </div>
    </section>
  );
}
