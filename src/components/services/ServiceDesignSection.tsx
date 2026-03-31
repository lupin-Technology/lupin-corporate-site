import { ViewMoreLink } from "@/components/common";
import { variantReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function ServiceDesignSection() {
  return (
    <section className="border-t border-[#e4e4e4] pt-[200px] text-center">
      <div className="mx-auto w-full max-w-[84vw]">
        <h2
          className={revealClassName(
            "group/gt text-[clamp(40px,4.1667vw,60px)] leading-[1.1] font-medium",
          )}
          data-observe=""
        >
          <span className={variantReveal("service")}>Service Design</span>
        </h2>
        <p
          className={revealClassName(
            "mx-auto mt-10 max-w-[860px] text-base leading-[2] tracking-[0.08em] text-[#333]",
            1,
          )}
          data-observe=""
        >
          各種リサーチやデータ分析によって、マーケットのニーズや生活者の消費行動を的確にキャッチ。ペルソナやカスタマージャーニーの策定といった上流工程から、実際にアプリやシステムを構築する上でのUI設計まで、価値の高いサービスをトータルにデザイン。また、マーケティングチャネルの検討や効果測定などを通じて、サービスを世の中に普及させるためのコミュニケーションを設計。事業立ち上げ後のマーケティング支援やグロース支援までしっかりと伴走します。
        </p>
        <ul
          className={revealClassName(
            "mt-10 flex flex-wrap justify-center gap-2",
            2,
          )}
          data-observe=""
        >
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(135_137_245_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Service Planning
          </li>
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(131_192_148_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            UX/UI Design
          </li>
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(0_182_229_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Marketing
          </li>
        </ul>
        <div
          className={revealClassName("mt-10 pb-20 text-center", 3)}
          data-observe=""
        >
          <ViewMoreLink href="/services/servicedesign/" />
        </div>
      </div>
    </section>
  );
}
