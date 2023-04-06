<template>
  <div class="flex-center w-full h-screen p-4 bg-indigo-600">
    <div class="mx-auto w-full text-center bg-white rounded md:w-1/2">
      <h3 class="pt-4 text-slate-400">Don't Laugh Challenge</h3>
      <p class="my-12 px-4 text-2xl text-black">{{ dadJoke }}</p>
      <button
        class="mb-4 p-2 text-sm text-white bg-violet-500 rounded-md shadow-2xl"
        @click="getJoke">
        Get Another Joke
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const dadJoke = ref("Joke Goes Here.");

// 异步函数，获取api的数据更新到dadJoke中
async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await (await fetch("https://icanhazdadjoke.com", config)).json();
  dadJoke.value = res.joke;
}
onMounted(() => getJoke());
</script>

<style scoped></style>
