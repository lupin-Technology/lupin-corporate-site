import { revealClassName } from "@/lib/reveal";

export function ProfessionalsIntroSection() {
  return (
    <p
      className={revealClassName(
        "pt-[60px] pb-[60px] text-[15px] leading-[2] tracking-[0.08em] text-[#333]",
      )}
      data-observe=""
    >
      様々なバックグラウンド・知見を持ったコンサルタントをご紹介します。
    </p>
  );
}
