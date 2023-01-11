<template>
  <div class="py-10 px-4 w-full bg-sky-800 text-white">
    <form class="mx-auto px-10 py-5 max-w-sm bg-sky-900 rounded-xl shadow-md">
      <h3 class="mb-8 text-center text-3xl">Please Login</h3>
      {{ formStatus }}
      <div class="relative mb-8">
        <input
          type="text"
          id="day8-email"
          class="py-4 w-full border-b-2 border-white bg-transparent outline-none"
          @focus="formStatus = 'email'"
          @blur="formStatus = ''" />
        <label
          for="day8-email"
          class="absolute top-4 left-0"
          >Email</label
        >
      </div>
      <div class="relative mb-8">
        <input
          type="password"
          id="day8-password"
          class="py-4 w-full border-b-2 border-white bg-transparent outline-none"
          @focus="formStatus = 'password'"
          @blur="formStatus = ''" />
        <label
          for="day8-password"
          class="absolute top-4 left-0"
          >Password</label
        >
      </div>
      <button
        class="mb-6 py-2 w-full text-black bg-sky-200 rounded"
        @click.prevent>
        Login
      </button>
      <p>
        Don't have an account?<a
          href="#"
          class="text-blue-400"
          >Register</a
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const formStatus = ref("");
</script>

<style scoped></style>
