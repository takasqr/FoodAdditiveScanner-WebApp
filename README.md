# 添加物スキャナー for Web

添加物スキャナーはどんな食品添加物が使われているか簡単に調べられるアプリです。食品の添加物ラベルを読み取り、その内容をAI技術を活用して自動的に認識し、分析結果を表示します。

Web 版のソースコードです。ソースコードは基本的な機能を備えた、Ver.1 まで公開する予定です。

## 技術構成

* Vue3(Typwscript)
* Firebase Authentication

## 機能


| マーク | ステータス |
|---|---|
| ✅ | 対応済み |
| 🚧 | 今後対応予定 |


| ステータス | 項目 |
|---|---|
| 🚧 | GitHub Actions による自動デプロイ |

## PWA - Vue3 で PWA

 Vue2 までは Vue CLI が PWA 化を担うことが多かったと思います。 Vue3 は Vite がスタンダードになったので Vite を通して PWA 化するのが基本になるようです。

[Vite PWA](https://vite-pwa-org.netlify.app)


## CI

GitHub Actions による自動デプロイを実施しています。

## コマンド

```bash
# 開発
npm run dev
```

## ソースコード

- [FoodAdditiveScanner-LP](https://github.com/takasqr/FoodAdditiveScanner-LP)
- [FoodAdditiveScanner-iOS
](https://github.com/takasqr/FoodAdditiveScanner-iOS)
- [FoodAdditiveScanner-Android
](https://github.com/takasqr/FoodAdditiveScanner-Android)
- [FoodAdditiveScanner-WebApp
](https://github.com/takasqr/FoodAdditiveScanner-WebApp)
- [FoodAdditiveScanner-WebAPI
](https://github.com/takasqr/FoodAdditiveScanner-WebAPI)
