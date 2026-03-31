import { cn } from "@/lib/utils";

const steps = [
  { num: "01.", label: "入力" },
  { num: "02.", label: "確認" },
  { num: "03.", label: "送信完了" },
];

export function ContactSteps() {
  return (
    <div className="mx-auto mb-14 max-w-[900px]">
      <div className="flex">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className={cn(
              "basis-1/3 bg-[#f2f2f2] text-[#333]",
              index !== 0 && "border-l border-white",
              index === 0 && "rounded-l-[5px] bg-[#222] text-white",
              index === steps.length - 1 && "rounded-r-[5px]",
            )}
          >
            <div className="flex h-[68px] items-center px-5">
              <span className="pr-5 text-[11px] leading-none font-medium">
                {step.num}
              </span>
              <span className="text-[18px] leading-none font-bold tracking-[0.08em]">
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
