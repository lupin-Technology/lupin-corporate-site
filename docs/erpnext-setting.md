# ERPNext の準備

お問い合わせフォームの送信先として ERPNext CRM を利用するための準備をしましょう。

## 1. ERPNext インスタンスを用意する

セルフホスト、または [ERPNext クラウド](https://erpnext.com/) を利用してインスタンスをセットアップします。

- セルフホスト: [Frappe Docker](https://github.com/frappe/frappe_docker) を使用
- クラウド: [ERPNext ホームページ](https://erpnext.com/) からサインアップ

## 2. API ユーザーを作成する

1. ERPNext にログインし、「設定 > ユーザーと権限 > ユーザー」を開く
2. 新しいユーザーを追加（例: `api@your-domain.com`）
3. ロールに **System Manager** または必要な権限（Lead の読み書き）を付与する

## 3. API キーとシークレットを生成する

1. 作成したユーザーの詳細画面を開く
2. 「API アクセス」セクションで「キーを生成」をクリック
3. 表示される **API Key** と **API Secret** をコピーする

> **注意:** API Secret は生成時のみ表示されます。安全な場所に保管してください。

## 4. 環境変数を設定する

プロジェクトルートの `.env.local` に以下を追加します:

```bash
ERPNEXT_URL=https://your-instance.erpnext.com
ERPNEXT_API_KEY=your_api_key
ERPNEXT_API_SECRET=your_api_secret
```

- `ERPNEXT_URL`: ERPNext インスタンスの URL（末尾スラッシュなし）
- `ERPNEXT_API_KEY`: 手順 3 で取得した API Key
- `ERPNEXT_API_SECRET`: 手順 3 で取得した API Secret

> これらはサーバーサイドのみで使用されるため `NEXT_PUBLIC_` プレフィックスは不要です。

## 5. 接続を確認する

環境変数を設定後、以下の API で接続を確認できます:

```bash
curl -s \
  -H "Authorization: token YOUR_API_KEY:YOUR_API_SECRET" \
  https://your-instance.erpnext.com/api/resource/Lead?limit_page_length=1
```

正常であれば JSON レスポンスが返ります。

## 参考リンク

- [ERPNext ドキュメント](https://docs.frappe.io/erpnext/introduction)
- [Frappe REST API](https://docs.frappe.io/framework/user/en/api/rest)
- [Token 認証](https://docs.frappe.io/framework/user/en/guides/integration/rest_api/token_based_authentication)
