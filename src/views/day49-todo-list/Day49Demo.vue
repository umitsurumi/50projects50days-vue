<template>
  <div>
    <h3 class="my-20 text-8xl text-center">todos</h3>
    <div class="mx-auto w-96 max-w-full shadow-lg dark:shadow-current">
      <input
        class="px-8 py-4 w-full h-16 text-2xl bg-yellow-200/60 outline-purple-500 placeholder:text-current placeholder:opacity-30 dark:outline-purple-200"
        type="text"
        placeholder="Enter your todo"
        v-model="todo"
        @keyup.enter="addTodo" />
      <ul>
        <li
          class="px-8 py-4 w-full h-16 leading-8 border-t border-slate-400 bg-yellow-100/60 text-xl"
          :class="{
            'line-through text-slate-500/50 dark:text-white/50': todo.done,
          }"
          v-for="todo in todos"
          :key="todo.symbol"
          @click="todo.done = !todo.done"
          @contextmenu.prevent="todos.splice(todos.indexOf(todo), 1)">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <p class="my-4 text-sm text-center">
      Left click to toggle completed.<br />
      Right click to delete todo
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const todo = ref("");
interface Todo {
  text: string;
  done: boolean;
  symbol: symbol;
}
const items = localStorage.getItem("day49todos");
const todos = reactive<Array<Todo>>(items !== null ? JSON.parse(items) : []);

function addTodo() {
  todos.push({ text: todo.value, done: false, symbol: Symbol(todo.value) });
  todo.value = "";
}

watch(
  () => todos,
  () => localStorage.setItem("day49todos", JSON.stringify(todos)),
  { deep: true }
);
</script>

<style scoped></style>
