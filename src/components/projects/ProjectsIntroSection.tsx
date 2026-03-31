import { revealClassName } from "@/lib/reveal";

export function ProjectsIntroSection() {
  return (
    <p
      className={revealClassName(
        "pt-[60px] text-[15px] leading-[2] tracking-[0.08em] text-[#333]",
      )}
      data-observe=""
    >
      過去のプロジェクト事例の一部をご紹介します。
    </p>
  );
}
