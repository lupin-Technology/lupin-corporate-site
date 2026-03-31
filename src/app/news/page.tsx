import { PageBody, PageHeader } from "@/components/common";
import { NewsListSection, NewsPagination } from "@/components/news";

export default function News() {
  return (
    <main>
      <PageHeader heading="News" headingJp="ニュース" breadcrumb="News" />
      <PageBody containerClassName="mx-auto w-full max-w-[84vw]">
        <NewsListSection />
        <NewsPagination currentPage={1} totalPages={5} />
      </PageBody>
    </main>
  );
}
