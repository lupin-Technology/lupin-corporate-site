import { ViewMoreLink } from "@/components/common";
import { NewsArticleCard } from "@/components/news";
import { allNews, HOME_NEWS_COUNT } from "@/data/news";
import { gradientReveal } from "@/lib/gradient-text";
import { revealClassName } from "@/lib/reveal";

export function NewsSection() {
  const news = allNews.slice(0, HOME_NEWS_COUNT);

  return (
    <section id="news" className="relative z-[1] bg-white py-[150px]">
      <div className="mx-auto w-full max-w-[84vw]">
        <div className="relative flex max-md:flex-col max-md:gap-10">
          <div className="basis-1/3 pr-[10%] max-md:basis-auto max-md:pr-0">
            <h2
              className={revealClassName("group/gt relative")}
              data-observe=""
            >
              <span
                className={`${gradientReveal} font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] text-[clamp(36px,2.929vw,56px)] leading-[1.2] font-medium`}
              >
                News
              </span>
            </h2>
          </div>

          <div
            className={revealClassName(
              "relative basis-2/3 max-md:basis-auto",
              1,
            )}
            data-observe=""
          >
            <div>
              {news.map((item) => (
                <NewsArticleCard key={item.id} item={item} compact />
              ))}
            </div>
          </div>

          <div
            className={revealClassName(
              "absolute top-[150px] left-0 max-md:static",
              2,
            )}
            data-observe=""
          >
            <ViewMoreLink href="/news/" />
          </div>
        </div>
      </div>
    </section>
  );
}
