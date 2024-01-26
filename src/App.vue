<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const darkTheme = ref(false)
const theme = useTheme()


function changeTheme() {
  theme.global.name.value = darkTheme.value? 'dark' : 'light'
}

</script>

<template>
  <v-app>
    <v-app-bar>
      <v-icon icon="mdi-vuetify" class="ml-3"></v-icon>
      Vue3 tutorial
      <v-spacer></v-spacer>
      <v-switch
        v-model="darkTheme" @update:model-value="changeTheme" class="d-flex flex-row-reverse"
        :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'">
      </v-switch>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
