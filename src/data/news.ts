export type NewsCategory = "Press Release" | "Information" | "Report";

export type NewsItem = {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  url: string;
};

export const HOME_NEWS_COUNT = 3;

export const allNews: NewsItem[] = [
  {
    id: "1",
    date: "2025.10.24",
    category: "Press Release",
    title: "東京証券取引所グロース市場への上場に関するお知らせ",
    url: "#",
  },
  {
    id: "2",
    date: "2025.06.30",
    category: "Information",
    title: "新役員体制のお知らせ",
    url: "#",
  },
  {
    id: "3",
    date: "2024.07.01",
    category: "Information",
    title: "新役員体制のお知らせ",
    url: "#",
  },
  {
    id: "4",
    date: "2024.06.18",
    category: "Press Release",
    title:
      "クレカ利用者の半数は「タッチ決済」を日常利用、コード決済利用率は過去最高値68％。学ぶべき金融知識2位「キャッシュレス決済」、キャッシュレス派自認は約7割",
    url: "#",
  },
  {
    id: "5",
    date: "2023.12.14",
    category: "Press Release",
    title:
      "物価高対策に「ポイントアプリ」利用は約4人に1人、地域限定アプリ利用意向は7割超　コード決済の利用率が過去最高の68％、税金の支払いなど利用場面が多様化",
    url: "#",
  },
  {
    id: "6",
    date: "2023.11.13",
    category: "Press Release",
    title: "「Embedded Finance Days 2023」登壇者発表第2弾",
    url: "#",
  },
  {
    id: "7",
    date: "2023.10.31",
    category: "Press Release",
    title:
      "年に一度、Fintechで事業を成長させるノウハウを共有する「Embedded Finance Days 2023」を11月28日・29日に開催",
    url: "#",
  },
  {
    id: "8",
    date: "2023.06.30",
    category: "Information",
    title: "インフキュリオン 新役員体制のお知らせ",
    url: "#",
  },
  {
    id: "9",
    date: "2023.06.21",
    category: "Press Release",
    title:
      "QRコード決済の利用率が66％と調査開始以降で最高 約9割が物価上昇を実感し、物価高によるキャッシュレス化が加速",
    url: "#",
  },
  {
    id: "10",
    date: "2023.03.31",
    category: "Press Release",
    title: "『PCI DSS Version4.0 徹底解説』発売",
    url: "#",
  },
  {
    id: "11",
    date: "2022.12.26",
    category: "Press Release",
    title: "インフキュリオン、「決済動向2022年12月調査」を発表",
    url: "#",
  },
  {
    id: "12",
    date: "2022.12.07",
    category: "Press Release",
    title: "「Embedded Finance Week 2022」追加登壇者 第三弾発表",
    url: "#",
  },
];
