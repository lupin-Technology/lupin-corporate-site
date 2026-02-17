import { Metadata } from 'next';

import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import { getNewsDetail } from '@/app/_libs/microcms';

import styles from './page.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
    alternates: {
      canonical: `/news/${params.slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
