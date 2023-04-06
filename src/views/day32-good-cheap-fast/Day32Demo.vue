<template>
  <div class="flex-center flex-col w-full h-96">
    <h3 class="font-bold text-xl my-4">How do you want your project to be?</h3>
    <ul>
      <li
        class="flex items-center my-4"
        v-for="(value, key) in impossibleTriangle">
        <div
          class="flex items-center mr-4 p-1 w-20 h-10 bg-slate-400 rounded-full cursor-pointer"
          :class="{ 'bg-green-400': value }"
          @click="handleClick(key as string)">
          <div
            class="w-8 h-8 rounded-full bg-white transition-all"
            :class="{ 'ml-10': value }"></div>
        </div>
        <p>{{ key }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const impossibleTriangle = reactive<{ [key: string]: boolean }>({
  Good: false,
  Cheap: false,
  Fast: false,
});

function handleClick(key: string) {
  impossibleTriangle[key] = !impossibleTriangle[key];
  const keys = Object.keys(impossibleTriangle);
  if (keys.every((k) => impossibleTriangle[k])) {
    const item = keys.filter((k) => k !== key)[Math.floor(Math.random() * 2)];
    impossibleTriangle[item] = false;
  }
}
</script>

<style scoped></style>
