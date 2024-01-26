<script setup lang="ts">
import { ref } from 'vue'

export interface Todo {
  // TODOのタイトル
  title: string
  // TODOの完了状態（true: 完了、false: 未完了）
  done: boolean
}

// TODOのリストを保持する配列
const todos = ref<Todo[]>([]) // ()の中が初期値
const todo = ref<string>('')

todos.value = []
todos.value.push({title: 'Vue3勉強会の準備', done: false})
todos.value.push({title: 'connpassで案内', done: false})

function add() {
  todos.value.push({title: todo.value, done: false})
  todo.value = ''
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="TODO" clearable v-model="todo" @keydown.enter="add"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <!-- TODOリスト表示部分 -->
          <v-list lines="one">
            <v-list-item v-for="todo in todos" :key="todo.title">
              <!-- TODOの完了状態によってclass属性を変更することで、チェック時に取り消し線を表現している -->
              <v-checkbox :label="todo.title" v-model="todo.done" v-bind:class="{done: todo.done}"></v-checkbox>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.done {
  text-decoration: line-through
}
</style>
