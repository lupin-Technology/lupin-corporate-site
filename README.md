# Lupin Corporate Site

Lupin Technology のコーポレートサイトです。

## 技術スタック

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [TypeScript](https://www.typescriptlang.org/)

## 動作環境

Node.js 22 以上

## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```

3. 開発環境へのアクセス
   [http://localhost:3000](http://localhost:3000) にアクセス

## スクリプト一覧

| コマンド               | 説明                            |
| ---------------------- | ------------------------------- |
| `npm run dev`          | 開発サーバーの起動              |
| `npm run build`        | プロダクションビルド            |
| `npm run lint`         | ESLint によるコードチェック     |
| `npm run lint:css`     | Stylelint による CSS チェック   |
| `npm run typecheck`    | TypeScript の型チェック         |
| `npm run format`       | Prettier による自動フォーマット |
| `npm run format:check` | フォーマットチェック（CI 向け） |

## ドキュメント

- [Vercel へのデプロイ](docs/vercel-deploy.md)
- [Git Hooks（lefthook）](docs/git-hooks.md)
