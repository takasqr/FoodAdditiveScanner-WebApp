# 添加物スキャナー for Web

添加物スキャナーはどんな食品添加物が使われているか簡単に調べられるアプリです。食品の添加物ラベルを読み取り、その内容をAI技術を活用して自動的に認識し、分析結果を表示します。

Web 版のソースコードです。ソースコードは基本的な機能を備えた、Ver.1 まで公開する予定です。

## 技術構成

* Vue3
* Firebase Authentication

## 機能


| マーク | ステータス |
|---|---|
| ✅ | 対応済み |
| 🚧 | 今後対応予定 |


| ステータス | 項目 |
|---|---|
| 🚧 | GitHub Actions による自動デプロイ |


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
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
