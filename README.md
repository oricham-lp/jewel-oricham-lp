# jewel オリシャンLP 設置ガイド

このフォルダには、通常のHTMLページ版とWordPress用の1ファイル版が入っています。

## ファイル構成

- `index.html`：通常のHTMLページ
- `style.css`：ページのデザイン
- `script.js`：スクロール時の控えめなフェード表示
- `assets/images/`：LPで使用する画像
- `wordpress-snippet.html`：WordPressの「カスタムHTML」ブロック用

## WordPressへ設置する方法（推奨）

1. WordPress管理画面の「メディア」から、`assets/images`内の3画像をアップロードします。
2. アップロードした各画像のURLを控えます。
3. `wordpress-snippet.html`をテキストエディターで開き、次の3つの相対URLをWordPressの画像URLへ置き換えます。
   - `assets/images/hero-model-silver-birthday.webp`
   - `assets/images/bottle-designs-silver-text.webp`
   - `assets/images/acrylic-keyholder-silver-text.webp`
4. 固定ページを新規作成し、「カスタムHTML」ブロックを追加します。
5. `wordpress-snippet.html`の内容をすべてコピーして貼り付けます。
6. ページテンプレートに「全幅」または「フルワイド」があれば選択し、プレビューで確認して公開します。

テーマやセキュリティプラグインが`<script>`を削除する場合、フェード演出だけが無効になります。内容や注文ボタンはそのまま利用できます。

## 通常のHTMLとして公開する方法

フォルダ構成を変えずにサーバーへアップロードし、`index.html`へアクセスしてください。

## 変更しやすい場所

- 注文先URL：各HTML内の `https://oricham.net/`
- 色：`style.css`冒頭の `--jewel-gold` など
- 文言：`index.html`または`wordpress-snippet.html`内の日本語テキスト

## 公開前チェック

- 画像URLをWordPressのメディアURLへ置換したか
- スマートフォンで固定注文ボタンが表示されるか
- すべての注文ボタンが `https://oricham.net/` へ移動するか
- キャッシュ系プラグインを使っている場合、公開後にキャッシュを削除したか
