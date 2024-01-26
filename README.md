# 目次

1. [Vue3について](#vue3について)
1. [ツール](#ツール)
1. [Vueプロジェクト作成](#vueプロジェクト作成)
1. [Firebaseについて](#Firebaseについて)

# Vue3について

公式サイト: https://ja.vuejs.org/

### Vue2の終了

### Vueでの登場人物

- Vue.js
- Vue CLI / Vite
- Vuex / Pinia
- Vuetify
- Typescript
    - 公式サイトはJavascriptで表現されていることが多い
    - 開発現場ではTypescriptを利用していることが多い

## 文法の違い

- Options API / Composition API
    - https://ja.vuejs.org/guide/extras/composition-api-faq.html
- SFC(Single-File Components)
- refを使う理由
    - https://ja.vuejs.org/guide/essentials/reactivity-fundamentals

## ツール

- Vite
    - [Vue CLI->Vite推奨](https://vuejs.org/guide/scaling-up/tooling.html)
- VSCode拡張機能
    - [IDE Support](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)
    - Vue Language Features(Volar)
    - Vue Volar extension Pack
    - Vue2のときのVeturは使わない

# 環境

- nvmでnodeのバージョンを管理

```console
nvm list
```



# Vue3移行ガイド

https://v3-migration.vuejs.org/

```console
npm install -g yarn
```

# Vueプロジェクト作成

#### Vue CLI

```console
vue create [project]
```

#### Vuetify

```console
yarn create vuetify
```

#### Vite (今回はこれ)

```console
yarn create vite
```

## vue-routerの追加

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
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
```

## 既存プロジェクトにvuetifyを追加するとき

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

マテリアルアイコンはインストールが必要

https://vuetifyjs.com/en/components/icons/#font-awesome

`installation page`にアクセスできない。

```console
yarn add @mdi/font -D
```

```ts
import '@mdi/font/css/materialdesignicons.css'
```

# Material Design Icons

https://pictogrammers.com/library/mdi/

# Flex

https://vuetifyjs.com/en/styles/flex/

# Spacing（余白）

https://vuetifyjs.com/en/styles/spacing/#spacing

# Firebaseについて

```console
npm install -g firebase-tools
```

```console
> firebase --version
13.1.0
```

```console
firebase login
```

```console
firebase init
```

```console
firebase deploy
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

## Firestore Database

https://firebase.google.com/docs/firestore/quickstart

#### データベース作成

1. ロケーションを選択して「次へ」
1. 「テストモードで開始する」を選択して「作成」

```console
npm install firebase
```

https://firebase.google.com/docs/web/setup?sdk_version=v9&hl=ja#access-firebase

#### データを入れる

1. Firestore Databaseで「コレクションを開始」

# Vueライフサイクルフック

https://ja.vuejs.org/api/composition-api-lifecycle
