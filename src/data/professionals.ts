export type Professional = {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  imageUrl: string;
  bio?: string;
};

export const professionals: Professional[] = [
  {
    id: "1",
    name: "嶋田 裕太",
    nameEn: "Yuta Shimada",
    role: "マネージングディレクター / 代表取締役社長",
    imageUrl: "/images/professionals/shimada.jpg",
    bio: "金融・決済領域における豊富な経験を持つ。事業戦略からオペレーション構築まで幅広く支援。",
  },
  {
    id: "2",
    name: "坂東 雅宏",
    nameEn: "Masahiro Bando",
    role: "マネージングディレクター / 取締役副社長",
    imageUrl: "/images/professionals/bando.jpg",
    bio: "多様な金融機関・事業会社でのコンサルティング経験を持ち、新規事業開発を多数リード。",
  },
  {
    id: "3",
    name: "高木 一輝",
    nameEn: "Kazuteru Takagi",
    role: "マネージングディレクター / 取締役",
    imageUrl: "/images/professionals/takagi.jpg",
    bio: "テクノロジーと金融の融合領域を専門とし、デジタル変革支援を数多く手掛ける。",
  },
  {
    id: "4",
    name: "丸山 弘毅",
    nameEn: "Hiroki Maruyama",
    role: "フェロー",
    imageUrl: "/images/professionals/maruyama.jpg",
    bio: "Fintechエコシステム構築の第一人者として、グループ全体の戦略を牽引。",
  },
  {
    id: "5",
    name: "村上 岳明",
    nameEn: "Takeaki Murakami",
    role: "マネージングディレクター / 執行役員",
    imageUrl: "/images/professionals/murakami.jpg",
    bio: "ペイメント・金融領域における高い専門性で、クライアントの事業変革を支援。",
  },
  {
    id: "6",
    name: "佐竹 美名子",
    nameEn: "Minako Satake",
    role: "マネージングディレクター / 執行役員",
    imageUrl: "/images/professionals/satake.jpg",
    bio: "サービスデザインとマーケティングを強みに、ユーザー起点の事業開発を推進。",
  },
  {
    id: "7",
    name: "柿本 浩太朗",
    nameEn: "Kotaro Kakimoto",
    role: "ディレクター",
    imageUrl: "/images/professionals/kakimoto.jpg",
    bio: "システム設計からプロジェクトマネジメントまで、IT領域の専門家として活躍。",
  },
];
