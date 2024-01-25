# vue3-tutorial

- Vue3について
    - https://ja.vuejs.org/
        - 公式サイトはjsで表現されていることが多い
    - Vue2の終了
    - Vueでの登場人物
        - Vue.js
        - Vue CLI / Vite
        - Vuex / Pinia
        - Vuetify
    - 文法の違い
        - Options API / Composition API
            - https://ja.vuejs.org/guide/extras/composition-api-faq.html
        - SFC(Single-File Components)
        - refを使う理由
            - https://ja.vuejs.org/guide/essentials/reactivity-fundamentals
    - Tooling
        - Vite
            - [Vue CLI->Vite推奨](https://vuejs.org/guide/scaling-up/tooling.html)
        - VSCode拡張機能
            - [IDE Support](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)
            - Vue Language Features(Volar)
            - Vue Volar extension Pack
            - Vue2のときのVeturは使わない
- [Vueプロジェクト作成](#create-vue-project)
- Firebaseについて

# 環境

- nvmでnodeのバージョンを管理

# Vue3移行ガイド

https://v3-migration.vuejs.org/

```console
npm install -g yarn
```

# Create Vue project

### Vue CLI

vue create [project]

### Vuetify

yarn create vuetify

### Vite

yarn create vite


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
