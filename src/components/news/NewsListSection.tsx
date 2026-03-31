import { allNews } from "@/data/news";
import { revealClassName } from "@/lib/reveal";

import { NewsArticleCard } from "./NewsArticleCard";

export function NewsListSection() {
  return (
    <div>
      <div className={revealClassName()} data-observe="">
        {allNews.map((item) => (
          <NewsArticleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
