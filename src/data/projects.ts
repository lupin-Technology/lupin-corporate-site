const ALL_PROJECT_FILTER_VALUE = "all";

export const PROJECT_TAGS = [
  "Strategy",
  "Business Development",
  "Service Planning",
  "UX/UI Design",
  "System Design",
  "Marketing",
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

export const PROJECT_CLIENT_TYPES = [
  "事業会社",
  "ペイメント企業",
  "金融機関",
] as const;

export type ProjectClientType = (typeof PROJECT_CLIENT_TYPES)[number];

type ProjectFilterItem<T extends string> = {
  label: string;
  value: T | typeof ALL_PROJECT_FILTER_VALUE;
};

type ProjectQueryValue = string | string[] | undefined;

export type ProjectSearchParams = {
  cat?: ProjectQueryValue;
  client?: ProjectQueryValue;
};

export type ProjectFilters = {
  cat?: ProjectTag;
  client?: ProjectClientType;
};

export type Project = {
  id: string;
  title: string;
  client: ProjectClientType;
  description: string;
  tags: ProjectTag[];
};

export const HOME_PROJECTS_COUNT = 3;

export const PROJECT_CLIENT_ITEMS: ProjectFilterItem<ProjectClientType>[] = [
  { label: "All", value: ALL_PROJECT_FILTER_VALUE },
  { label: "事業会社", value: "事業会社" },
  { label: "ペイメント企業", value: "ペイメント企業" },
  { label: "金融機関", value: "金融機関" },
];

export const PROJECT_CATEGORY_ITEMS: ProjectFilterItem<ProjectTag>[] = [
  { label: "All", value: ALL_PROJECT_FILTER_VALUE },
  { label: "Strategy", value: "Strategy" },
  { label: "Business Development", value: "Business Development" },
  { label: "Service Planning", value: "Service Planning" },
  { label: "UX/UI Design", value: "UX/UI Design" },
  { label: "System Design", value: "System Design" },
  { label: "Marketing", value: "Marketing" },
];

export const allProjects: Project[] = [
  {
    id: "1",
    title: "ネオバンク事業参入検討支援",
    client: "事業会社",
    description:
      "ネオバンク事業への参入是非を検討していた同社。金融サービス仲介業による今後の法令緩和を踏まえた参入方式等の意思決定が求められている中で、詳細検討に向けた論点・方向性の整理、ターゲット層・商品性・獲得戦略・提供サービス・ビジネスモデル整理、主要UX検討、仮説検証（市場調査/デプスインタビュー/コンセプト評価）、事業収支試算など、事業参入の検討に向けて事業企画から構想フェーズ全体のタスクをリード。",
    tags: [
      "Strategy",
      "Business Development",
      "Service Planning",
      "UX/UI Design",
    ],
  },
  {
    id: "2",
    title: "金融領域における新規事業戦略検討支援",
    client: "ペイメント企業",
    description:
      "金融分野概観および主要な金融領域（決済・融資・投資・保険・ネオバンク）について幅広く市場調査/分析を実施。各領域に関する調査/分析に基づき新規事業案の提言およびディスカッションを行い、同社のグループアセットを活用した金融分野での新規事業参入シナリオを策定。",
    tags: ["Strategy", "Service Planning"],
  },
  {
    id: "3",
    title: "中期経営計画策定支援",
    client: "ペイメント企業",
    description:
      "既存の保有アセットや法改正、市場の環境変化に伴うニーズ予測を実施。自社で持つ多数の新規事業案および弊社案から短期・中期での目標を達成する案を絞り込み、商品性案の検討および必要機能・業務を洗い出した。各施策のロードマップを作成し、将来事業収支試算を実施。業務要件や業務システムに対する提言や、コスト構造とそれを加味した新事業の構想も含め、次期中期経営計画に反映された。",
    tags: ["Strategy", "System Design"],
  },
  {
    id: "4",
    title: "投資信託直販サービスのUI/UX改善支援",
    client: "金融機関",
    description:
      "投資信託商品の販売について、WEBでの直販を開始するもサービスリリース後のグロースが課題として浮上。コンバージョン向上を目的としたUI/UX改善およびWEB運営の内製化をテーマに、仮説構築〜検証フェーズを短期間で2周実施するスケジュールを策定。ワークショップや勉強会の開催によって、クライアント社員のナレッジ・経験の蓄積を支援。広告から申込フォームまでのコンバージョン単価の改善に寄与した。",
    tags: ["UX/UI Design", "Marketing"],
  },
  {
    id: "5",
    title: "プロジェクト管理手法の導入支援",
    client: "金融機関",
    description:
      "よりスピーディなシステム開発を可能とするため、プロジェクト管理手法の整備を実施した。第一フェーズでは実効性のあるアジャイル開発手法を確立することを目指し、現状分析を通じてプロジェクト管理の主要部分をスコープとした対ベンダ―・対社内双方の管理手続を整備。第二フェーズではアジャイル開発のプロジェクト管理の残課題を整備しつつ、ウォーターフォール開発の管理も同レベルで実行できるよう再編成した。",
    tags: ["System Design"],
  },
];

function getSingleQueryValue(value: ProjectQueryValue) {
  return Array.isArray(value) ? value[0] : value;
}

export function isProjectTag(value: string): value is ProjectTag {
  return PROJECT_TAGS.includes(value as ProjectTag);
}

export function isProjectClientType(value: string): value is ProjectClientType {
  return PROJECT_CLIENT_TYPES.includes(value as ProjectClientType);
}

export function parseProjectFilters(
  searchParams: ProjectSearchParams,
): ProjectFilters {
  const cat = getSingleQueryValue(searchParams.cat);
  const client = getSingleQueryValue(searchParams.client);

  return {
    cat: cat && isProjectTag(cat) ? cat : undefined,
    client: client && isProjectClientType(client) ? client : undefined,
  };
}

export function buildProjectsUrl({
  cat,
  client,
}: {
  cat?: ProjectTag | typeof ALL_PROJECT_FILTER_VALUE;
  client?: ProjectClientType | typeof ALL_PROJECT_FILTER_VALUE;
}) {
  const search = new URLSearchParams();

  if (cat && cat !== ALL_PROJECT_FILTER_VALUE) {
    search.set("cat", cat);
  }

  if (client && client !== ALL_PROJECT_FILTER_VALUE) {
    search.set("client", client);
  }

  const queryString = search.toString();

  return queryString ? `/projects/?${queryString}` : "/projects/";
}

export function filterProjects(filters: ProjectFilters = {}) {
  return allProjects.filter((project) => {
    if (filters.cat && !project.tags.includes(filters.cat)) {
      return false;
    }

    if (filters.client && project.client !== filters.client) {
      return false;
    }

    return true;
  });
}

export function getHomeProjects() {
  return allProjects.slice(0, HOME_PROJECTS_COUNT);
}
