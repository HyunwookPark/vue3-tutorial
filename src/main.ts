import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
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