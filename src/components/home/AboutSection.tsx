import { Fragment } from "react";

import { ViewMoreLink } from "@/components/common";

const MISSION_LINES = [
  "Lupinは、",
  "社会を革新するための事業を創るプロフェッショナルです。",
  "未来を構想するだけでなく、その構想を具現化し、",
  "世界にまだない価値を生み出すことが、私たちのミッション。",
  "デジタル化時代のコンサルティングファームとして、",
  "クライアントとともに考え、ともに創り、ともに育てる。",
  "テクノロジーによって、あらゆるサービスとビジネスがつながる今、",
  "私たちは、ビジネスと未来の新しい関係を築きながら、",
  "もっと便利で、もっと自由な世界を実現します。",
];

const MISSION_DELAY_CLASSES = [
  "[transition-delay:100ms]",
  "[transition-delay:200ms]",
  "[transition-delay:300ms]",
  "[transition-delay:400ms]",
  "[transition-delay:500ms]",
  "[transition-delay:600ms]",
  "[transition-delay:700ms]",
  "[transition-delay:800ms]",
  "[transition-delay:900ms]",
];

export function AboutSection() {
  return (
    <section
      id="mission"
      className="relative z-[1] flex min-h-screen items-center justify-center px-0 pt-[13.8889vw] pb-[13.8889vw] text-center"
    >
      <div className="group/mission" data-observe="">
        <p className="text-[16px] leading-[2.8] font-medium tracking-[0.08em] text-[#333]">
          {MISSION_LINES.map((line, i) => (
            <Fragment key={i}>
              <span
                className={`relative inline-block translate-y-24 text-[18px] opacity-0 transition-[opacity,transform] duration-[2000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-data-[onscreen=true]/mission:translate-y-0 group-data-[onscreen=true]/mission:opacity-100 ${MISSION_DELAY_CLASSES[i]}`}
              >
                {line}
              </span>
              <br />
            </Fragment>
          ))}
        </p>

        <div className="mt-20 opacity-0 transition-opacity [transition-delay:2400ms] duration-[2000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-data-[onscreen=true]/mission:opacity-100">
          <ViewMoreLink href="/about/" label="About us" />
        </div>
      </div>
    </section>
  );
}
