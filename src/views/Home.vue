<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, QueryDocumentSnapshot, doc, setDoc, updateDoc, query, orderBy } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8evkpWlFANpg7rcCrOdmw6TT_pH1GS0I",
  authDomain: "vue3-tutorial-6dfff.firebaseapp.com",
  projectId: "vue3-tutorial-6dfff",
  storageBucket: "vue3-tutorial-6dfff.appspot.com",
  messagingSenderId: "771330925759",
  appId: "1:771330925759:web:4d5a2a4b0453b8dd75120a"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getTodos(): Promise<QueryDocumentSnapshot[]> {
  const todoSnapShot = await getDocs(query(collection(db, 'todos'), orderBy('done')))
  return todoSnapShot.docs
}

async function update(id: string, done: boolean) {
  const todoRef = doc(db, 'todos', id)
  updateDoc(todoRef, {done: done})
}

async function reload() {
  todos.value = []
  await getTodos().then((response) => {
    response?.forEach(async (doc) => {
      todos.value.push({id: doc.id, title: doc.data().title, done: doc.data().done})
    })
  })
}

async function add() {
  await setDoc(doc(collection(db, 'todos')), {title: todo.value, done: false})
  todo.value = ''
  reload()
}

export interface Todo {
  // TODOのID
  id: string
  // TODOのタイトル
  title: string
  // TODOの完了状態（true: 完了、false: 未完了）
  done: boolean
}

// TODOのリストを保持する配列
const todos = ref<Todo[]>([]) // ()の中が初期値
const todo = ref<string>('')

todos.value = []
// todos.value.push({id: '1', title: 'Vue3勉強会の準備', done: false})
// todos.value.push({id: '2', title: 'connpassで案内', done: false})

onMounted(async () => {
  reload()
})

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="TODO" clearable v-model="todo" @keydown.enter="add"></v-text-field>
      </v-col>
      <v-col md="1">
        <v-btn @click="reload"><v-icon>mdi-reload</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <!-- TODOリスト表示部分 -->
          <v-list lines="one">
            <v-list-item v-for="todo in todos" :key="todo.title">
              <!-- TODOの完了状態によってclass属性を変更することで、チェック時に取り消し線を表現している -->
              <v-checkbox :label="todo.title" v-model="todo.done" @update:model-value="update(todo.id, todo.done)" v-bind:class="{done: todo.done}"></v-checkbox>
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
