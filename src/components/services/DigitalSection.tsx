import { ViewMoreLink } from "@/components/common";
import { variantReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function DigitalSection() {
  return (
    <section className="border-t border-[#e4e4e4] pt-[200px] text-center">
      <div className="mx-auto w-full max-w-[84vw]">
        <h2
          className={revealClassName(
            "group/gt text-[clamp(40px,4.1667vw,60px)] leading-[1.1] font-medium",
          )}
          data-observe=""
        >
          <span className={variantReveal("digital")}>Digital</span>
        </h2>
        <p
          className={revealClassName(
            "mx-auto mt-10 max-w-[860px] text-base leading-[2] tracking-[0.08em] text-[#333]",
            1,
          )}
          data-observe=""
        >
          デジタルサービスを検討する上でクラウドやAPIといった技術の活用は欠かせません。システムの概要策定から要件定義、データ分析の基盤構築、プロジェクト管理まで包括的に支援。単なる業務改善ではなく、テクノロジーを用いた新たなサービスの構築や価値創出など、クライアントのビジネスにとって最適なデジタル施策を実現します。
        </p>
        <ul
          className={revealClassName(
            "mt-10 flex flex-wrap justify-center gap-2",
            2,
          )}
          data-observe=""
        >
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(255_206_72_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            System Design
          </li>
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(150_218_139_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Data Analytics
          </li>
          <li className="inline-flex items-center rounded-[20px] bg-[rgb(0_210_208_/_15%)] px-4 py-1.5 text-[13px] leading-[1.5] font-medium tracking-[0.04em] text-[#333]">
            Project Management
          </li>
        </ul>
        <div
          className={revealClassName("mt-10 pb-20 text-center", 3)}
          data-observe=""
        >
          <ViewMoreLink href="/services/digital/" />
        </div>
      </div>
    </section>
  );
}
