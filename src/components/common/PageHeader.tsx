import Link from "next/link";

interface PageHeaderProps {
  heading: string;
  headingJp: string;
  breadcrumb: string;
}

const gradientRevealClassName =
  "relative inline-block animate-[gradient-anim_3s_linear_infinite] bg-[linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] bg-[length:700%_700%] bg-clip-text text-transparent [clip-path:polygon(0_0,0_0,0_105%,0_105%)] [transition-property:color,clip-path] [transition-duration:2000ms,800ms] [transition-timing-function:cubic-bezier(0.215,0.61,0.355,1),cubic-bezier(0.645,0.045,0.355,1)] will-change-[clip-path] group-data-[onscreen=true]:[clip-path:polygon(0_0,100%_0,100%_105%,0_105%)] group-data-[onscreen=true]:text-current";

const firstGradientRevealClassName = `${gradientRevealClassName} [transition-delay:800ms,0ms] group-data-[onscreen=true]:[transition-delay:900ms,100ms]`;

const secondGradientRevealClassName = `${gradientRevealClassName} [transition-delay:800ms,0ms] group-data-[onscreen=true]:[transition-delay:1000ms,200ms]`;

export function PageHeader({
  heading,
  headingJp,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="border-b border-[#e4e4e4] pt-[140px] md:pt-[180px] lg:pt-[240px] xl:pt-[270px]">
      <div className="relative mx-auto w-full max-w-[84vw]">
        <h1
          className="group pb-[70px] text-center text-[#333] md:pb-[100px]"
          data-observe=""
        >
          <span className="block font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-[46px] leading-[1.05] font-medium tracking-[0] md:text-[60px] xl:text-[80px]">
            <span className={firstGradientRevealClassName}>{heading}</span>
          </span>
          <span className="mt-[15px] block font-[yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-[14px] leading-none font-bold tracking-[0.16em] md:text-[16px] xl:text-[18px]">
            <span className={secondGradientRevealClassName}>{headingJp}</span>
          </span>
        </h1>
        <div className="flex justify-end">
          <ul className="flex items-center border-b border-[#909090] pb-5">
            <li className="max-w-[19rem] overflow-hidden pr-[60px] font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-xs leading-[1.5] font-medium text-ellipsis whitespace-nowrap text-[#888]">
              <Link
                href="/"
                className="block transition-colors hover:text-[#333]"
              >
                Home
              </Link>
            </li>
            <li className="relative max-w-[19rem] overflow-hidden pl-[60px] font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-xs leading-[1.5] font-medium text-ellipsis whitespace-nowrap text-[#888] before:absolute before:top-1/2 before:left-5 before:h-px before:w-5 before:-translate-y-1/2 before:bg-[#e4e4e4] before:content-['']">
              {breadcrumb}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
