import { revealClassName } from "@/lib/reveal";

export function ServicesIntroSection() {
  const chartItems = [
    {
      src: "/images/ref/cc33394.svg",
      className: "top-[8.38532%] left-[51.2014%] [transition-delay:1000ms]",
    },
    {
      src: "/images/ref/06fca32.svg",
      className: "top-[26.9404%] left-[68.5371%] [transition-delay:1050ms]",
    },
    {
      src: "/images/ref/5d37157.svg",
      className: "top-[53.2599%] left-[68.5371%] [transition-delay:1100ms]",
    },
    {
      src: "/images/ref/fa35e50.svg",
      className: "top-[71.8165%] left-[51.2014%] [transition-delay:1150ms]",
    },
    {
      src: "/images/ref/1bbad4b.svg",
      className: "top-[71.8165%] left-[26.6114%] [transition-delay:1200ms]",
    },
    {
      src: "/images/ref/fd240ce.svg",
      className: "top-[53.2599%] left-[9.27429%] [transition-delay:1250ms]",
    },
    {
      src: "/images/ref/be77e18.svg",
      className: "top-[26.9404%] left-[9.27429%] [transition-delay:1300ms]",
    },
    {
      src: "/images/ref/4c1ebf8.svg",
      className: "top-[8.41131%] left-[26.4671%] [transition-delay:1350ms]",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[84vw]">
      <p
        className={revealClassName(
          "pb-20 text-[15px] leading-[2] tracking-[0.08em] text-[#333]",
        )}
        data-observe=""
      >
        デジタル変革の事業開発には、戦略から実行まで包括した専門的知見が不可欠です。私たちは、ビジネス戦略、UI/UX、システム設計、マーケティングなど、様々なノウハウを駆使しながら、クライアントのビジネス価値を最大化するデジタルサービスを創出します。
      </p>

      <div
        className="group/chart relative mx-auto mt-20 flex w-[min(700px,86vw)] items-center justify-center"
        data-observe=""
      >
        <div className="relative w-full pt-[93.4286%]">
          <div className="absolute top-[3.81957%] left-[5.07143%] w-[90%] rotate-[30deg] opacity-0 transition-[transform,opacity] [transition-delay:400ms] duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-data-[onscreen=true]/chart:rotate-0 group-data-[onscreen=true]/chart:opacity-100">
            <img
              src="/images/ref/07ba252.svg"
              alt=""
              className="block h-auto w-full"
            />
          </div>

          <div className="absolute top-[8.33486%] left-[9.28%] w-[81.5714%] opacity-0 transition-opacity [transition-delay:500ms] duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-data-[onscreen=true]/chart:opacity-100">
            <svg
              viewBox="0 0 571 571"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              aria-hidden="true"
            >
              <line
                x1="285.5"
                y1="0"
                x2="285.5"
                y2="571"
                stroke="#e4e4e4"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="285.5"
                x2="571"
                y2="285.5"
                stroke="#e4e4e4"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="0"
                x2="571"
                y2="571"
                stroke="#e4e4e4"
                strokeWidth="1"
              />
              <line
                x1="571"
                y1="0"
                x2="0"
                y2="571"
                stroke="#e4e4e4"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="absolute top-0 left-[1.28571%] w-[94.6829%] opacity-0 transition-opacity [transition-delay:800ms] duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-data-[onscreen=true]/chart:opacity-100">
            <img
              src="/images/ref/a047994.svg"
              alt=""
              className="block h-auto w-full"
            />
          </div>

          {chartItems.map(({ src, className }) => (
            <div
              key={src}
              className={`absolute w-[22.1314%] scale-50 opacity-0 transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-data-[onscreen=true]/chart:scale-100 group-data-[onscreen=true]/chart:opacity-100 ${className}`}
            >
              <img src={src} alt="" className="block h-auto w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
