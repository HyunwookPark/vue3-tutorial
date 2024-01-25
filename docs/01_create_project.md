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
