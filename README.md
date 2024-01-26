# 目次

1. [自己紹介](https://github.com/HyunwookPark)
1. [Vue3について](#vue3について)
1. [開発ツール](#開発ツール)
1. [Vueプロジェクト作成](#vueプロジェクト作成)
1. [Vueアプリ作成](#Vueアプリ作成)
1. [Firebaseについて](#Firebaseについて)

# Vue3について

- Javascriptフレームワークのひとつ
- 近年のフロントエンド技術: React / Vue / Aungular

### Vue2の終了

2023年12月31日 Vue2の公式サポート終了。

### Vueでの登場人物

- Vue.js
    - 公式サイト: https://ja.vuejs.org/
- Vue Router
    - ルーティング機能
- Vue CLI / Vite(Vue3推奨)
    - プロジェクト管理ツール
    - [Vue CLI->Vite推奨](https://vuejs.org/guide/scaling-up/tooling.html)
- Vuex / Pinia(Vue3推奨)
    - 状態管理ツール
- Vuetify
    - UIライブラリ（マテリアルデザイン）
- Typescript
    - 公式サイトはJavascriptで表現されていることが多い
    - 開発現場ではTypescriptを利用していることが多い

### Vue3移行ガイド

https://v3-migration.vuejs.org/

### Vue3の特徴

- Options API / Composition API
    - https://ja.vuejs.org/guide/extras/composition-api-faq.html
- refを使う理由
    - https://ja.vuejs.org/guide/essentials/reactivity-fundamentals

# 開発ツール

- VSCode拡張機能
    - [IDE Support](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)
    - Vue Volar extension Pack
    - Vue2のときのVeturは使わない

### 環境

#### nvmでnodeのバージョンを管理

```console
nvm list
```

```console
nvm use 20.11.0
```

#### パッケージマネージャーをインストール

```console
npm install -g yarn
```

# Vueプロジェクト作成

Vueのプロジェクトを作成する方法は色々。

|プロジェクト作成方法|コマンド|
|---|---|
|Vue CLI|`vue create [project]`|
|Vuetify|`yarn create vuetify`|
|Vite (今回はこれ)|`yarn create vite`|

## Vue Routerの追加

```console
yarn add vue-router@4
```

`index.ts`ファイルを作成

```ts
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  // その他のルートをここに追加
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

App.vue

```vue
<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-icon icon="mdi-vuetify" class="ml-3"></v-icon>
      Vue3 tutorial
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
```

## Vuetifyの追加

既存プロジェクトにvuetifyを追加するとき

https://vuetifyjs.com/en/getting-started/installation/#existing-projects

```console
yarn add vuetify
```

`main.ts`に追記

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
```

### アイコンのインストール

マテリアルアイコンはインストールが必要

https://vuetifyjs.com/en/components/icons/#font-awesome

※`installation page`にアクセスできない。

```console
yarn add @mdi/font -D
```

```ts
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css' // 追記
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'


const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
```

## その他参考

- [Material Design Icons](https://pictogrammers.com/library/mdi/)
- [Flex](https://vuetifyjs.com/en/styles/flex/)
- [Spacing（余白）](https://vuetifyjs.com/en/styles/spacing/#spacing)
- [Vueライフサイクルフック](https://ja.vuejs.org/api/composition-api-lifecycle)

# Firebaseについて

Googleが提供するウェブアプリケーション開発プラットフォーム。

**提供する機能例）**

- ホスティング
- データベース
- 認証

## Firebaseにアプリを登録

```console
npm install firebase
```

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMKYUd79lUUGhJ-YvJP5LaJuSoSabzFA",
  authDomain: "vue3-tutorial-24a32.firebaseapp.com",
  projectId: "vue3-tutorial-24a32",
  storageBucket: "vue3-tutorial-24a32.appspot.com",
  messagingSenderId: "285819121181",
  appId: "1:285819121181:web:49430ee9572c9bca9da0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Firestore Database

https://firebase.google.com/docs/firestore/quickstart

#### データベース作成

1. ロケーションを選択して「次へ」
1. 「テストモードで開始する」を選択して「作成」

- [データベースへのアクセス方法](https://firebase.google.com/docs/web/setup?sdk_version=v9&hl=ja#access-firebase)

#### データを入れる

1. Firestore Databaseで「コレクションを開始」

## Firebaseデプロイの準備

firebaseツールをインストール

```console
npm install -g firebase-tools
```

```console
> firebase --version
13.1.0
```

firebaseにログイン

```console
firebase login
```

```console
> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  D:\git\vue3-tutorial

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for
 Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: vue3-tutorial-6dfff (vue3-tutorial)
i  Using project vue3-tutorial-6dfff (vue3-tutorial)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? No
i  Skipping write of dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
PS D:\git\vue3-tutorial> firebase deploy

=== Deploying to 'vue3-tutorial-6dfff'...

i  deploying hosting
i  hosting[vue3-tutorial-6dfff]: beginning deploy...
i  hosting[vue3-tutorial-6dfff]: found 10 files in dist
+  hosting[vue3-tutorial-6dfff]: file upload complete
i  hosting[vue3-tutorial-6dfff]: finalizing version...
+  hosting[vue3-tutorial-6dfff]: version finalized
i  hosting[vue3-tutorial-6dfff]: releasing new version...
+  hosting[vue3-tutorial-6dfff]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/vue3-tutorial-6dfff/overview
Hosting URL: https://vue3-tutorial-6dfff.web.app
```

ホスティング無効化

```console
> firebase hosting:disable
? Are you sure you want to disable Firebase Hosting for the site vue3-tutorial-6dfff
This will immediately make your site inaccessible! Yes
+  Hosting has been disabled for vue3-tutorial-6dfff. Deploy a new version to re-enable.
```

# Vueアプリ作成

Vueの書き方はVue.js公式サイトがおすすめ。

![](./vue_app.png)

1. TODOのリスト部分を作成（固定の配列）
1. Firebaseのデータベースから取得して表示
1. 入力欄の作成
1. 入力内容をFirebaseのデータベースに追加
1. ダークモード切り替え
