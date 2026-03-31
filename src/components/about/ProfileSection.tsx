import { gradientReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

const profileItems = [
  { term: "社名", desc: "株式会社Lupin" },
  { term: "設立", desc: "2020年4月1日" },
  { term: "資本金", desc: "50,000千円" },
  { term: "代表", desc: "嶋田 裕太" },
  { term: "従業員数", desc: "45名" },
  { term: "主要株主", desc: "株式会社Lupin Holdings（持株比率100%）" },
  {
    term: "事業内容",
    desc: "デジタル領域を中心とした事業開発コンサルティング",
  },
  {
    term: "所在地",
    desc: "〒102-0083 東京都千代田区麹町5-7-2 Lupinビル7F",
  },
];

export function ProfileSection() {
  return (
    <section className="border-t border-[#e4e4e4] pt-20 pb-[100px]">
      <div className="mx-auto w-full max-w-[84vw]">
        <h2 className={revealClassName("group/gt relative")} data-observe="">
          <span
            className={`${gradientReveal} font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-[clamp(36px,2.929vw,56px)] leading-[1.2] font-medium`}
          >
            Profile
          </span>
        </h2>
        <dl
          className={revealClassName("mt-0 border-t border-[#e4e4e4]", 1)}
          data-observe=""
        >
          {profileItems.map((item) => (
            <div
              key={item.term}
              className="flex border-b border-[#e4e4e4] py-[30px] max-md:flex-col max-md:gap-3"
            >
              <dt className="max-w-[20%] shrink-0 basis-1/5 text-[13px] leading-[2] font-medium tracking-[0.08em] text-[#8e8e8e] max-md:max-w-full max-md:basis-auto">
                {item.term}
              </dt>
              <dd className="flex-1 text-[15px] leading-[2] tracking-[0.08em] text-[#333]">
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
