<template>
  <div class="relative w-full h-screen overflow-hidden">
    <img
      class="w-full h-full object-cover"
      :style="{ filter: `blur(${20 - password.length * 2}px)` }"
      :src="img"
      alt="" />
    <form
      class="absolute-center p-5 w-80 rounded shadow-md bg-white/60 md:w-[500px] md:p-10 dark:bg-black/60">
      <h3 class="mb-2 text-xl text-center md:text-3xl">
        Image Password Strength
      </h3>
      <p class="text-center text-sm">Change the password to see the effect</p>
      <div class="my-4">
        <label for="email">Email:</label>
        <input
          class="border block w-full p-2 mt-2 rounded text-black"
          type="text"
          name=""
          id="email" />
      </div>
      <div class="my-4">
        <label for="password">Password:</label>
        <input
          class="border block w-full p-2 mt-2 rounded text-black"
          type="password"
          name=""
          id="password"
          v-model="password" />
      </div>
      <button
        class="py-2 mt-4 w-full rounded bg-black text-white dark:bg-white/30"
        @click.prevent="">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const password = ref("");
const img = ref(
  "https://images.unsplash.com/photo-1677110496860-0c5830125699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODg2ODM1MA&ixlib=rb-4.0.3&q=80&w=1080"
);
</script>

<style scoped></style>
