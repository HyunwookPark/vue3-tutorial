<script setup lang="ts">
import { ref } from 'vue'

export interface Todo {
  // TODOのタイトル
  title: string
  // TODOの完了状態（true: 完了、false: 未完了）
  done: boolean
}

defineProps<{ msg: string }>()

// TODOのリストを保持する配列
const todos = ref<Todo[]>([])

todos.value = []
todos.value.push({title: 'test', done: false})
// const count = ref(0)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <!-- TODOリスト表示部分 -->
          <v-list dense>
            <v-list-item-group>
              <v-list-item v-for="todo in todos" :key="todo.title">
                <!-- TODOの完了状態によってclass属性を変更することで、チェック時に取り消し線を表現している -->
                <v-checkbox :label="todo.title" v-model="todo.done" v-bind:class="{done: todo.done}"></v-checkbox>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
