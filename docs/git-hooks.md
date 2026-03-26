# Git Hooks（lefthook）

本プロジェクトでは [lefthook](https://github.com/evilmartians/lefthook) を使用して Git Hooks を管理しています。

## セットアップ

`npm install` を実行すると自動的に lefthook がセットアップされます。

```bash
npm install
```

## 各 Hook の説明

### pre-commit

コミット時にステージされたファイルに対して以下のチェックを**並列**で実行します。

| コマンド    | 対象ファイル                 | 説明                                  |
| ----------- | ---------------------------- | ------------------------------------- |
| `format`    | `*.{js,mjs,ts,tsx,json,css}` | Prettier による自動フォーマット       |
| `lint`      | `*.{js,mjs,ts,tsx}`          | Next.js（ESLint）による Lint チェック |
| `lint-css`  | `*.css`                      | Stylelint による CSS 自動修正         |
| `typecheck` | プロジェクト全体             | TypeScript の型チェック               |

### pre-push

プッシュ前に `npm run build` を実行し、ビルドが成功することを確認します。

### commit-msg

コミットメッセージに適切な prefix が付いているか検証します。

## コミットメッセージルール

コミットメッセージは以下の形式に従う必要があります。

```
type: description
type(scope): description
```

### 使用可能な type

| type       | 説明                                                 |
| ---------- | ---------------------------------------------------- |
| `feat`     | 新機能の追加                                         |
| `fix`      | バグ修正                                             |
| `docs`     | ドキュメントの変更                                   |
| `style`    | コードの意味に影響しない変更（空白、フォーマット等） |
| `refactor` | バグ修正でも機能追加でもないコード変更               |
| `perf`     | パフォーマンス改善                                   |
| `test`     | テストの追加・修正                                   |
| `build`    | ビルドシステムや外部依存の変更                       |
| `ci`       | CI 設定の変更                                        |
| `chore`    | その他の変更                                         |
| `revert`   | コミットの取り消し                                   |

### 例

```
feat: ユーザー認証機能を追加
fix(auth): ログイン時のエラーハンドリングを修正
docs: README にセットアップ手順を追加
refactor: API クライアントの共通処理を抽出
```

### 例外

以下のコミットメッセージは検証をスキップします。

- Merge コミット（`Merge` で始まるメッセージ）
- Revert コミット（`Revert` で始まるメッセージ）

## `--no-verify` について

`git commit --no-verify` や `git push --no-verify` を使用すると Git Hooks をスキップできますが、**原則として使用しないでください**。

Hooks は品質を保つために設けられています。どうしてもスキップが必要な場合は、チームに理由を共有してください。

## トラブルシューティング

### Hooks が動作しない

lefthook が正しくインストールされているか確認してください。

```bash
npx lefthook install
```

### pre-commit で format や lint-css に失敗する

通常は自動修正されますが、修正できないエラーがある場合は手動で対応してください。

```bash
npm run format
npm run lint:css -- --fix
git add .
git commit
```

### typecheck に失敗する

TypeScript の型エラーを修正してください。

```bash
npm run typecheck
```

エラー内容を確認し、該当ファイルを修正してからコミットし直してください。

### build に失敗して push できない

ローカルでビルドを確認してください。

```bash
npm run build
```

ビルドエラーを修正してから再度 push してください。
