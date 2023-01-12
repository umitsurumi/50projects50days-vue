<template>
  <div class="py-10 px-4 w-full bg-sky-800 text-white">
    <form class="mx-auto px-10 py-5 max-w-sm bg-sky-900 rounded-xl shadow-md">
      <h3 class="mb-8 text-center text-3xl">Please Login</h3>
      <div
        class="relative mb-8"
        :class="{ day8active: formStatus === `${key}` || formInfo[key] !== '' }"
        v-for="key in Object.keys(formInfo)">
        <input
          :type="`${key}`"
          :id="`day8${key}`"
          required
          class="py-4 w-full border-b-2 border-white bg-transparent outline-none"
          v-model="formInfo[key]"
          @focus="formStatus = `${key}`"
          @blur="formStatus = ''" />
        <label
          :for="`day8${key}`"
          class="absolute top-4 left-0">
          <span
            class="transition-all inline-block"
            v-for="(i, index) in `${key[0].toUpperCase() + key.slice(1)}`"
            :style="{ 'transition-delay': `${index * 50}ms` }"
            >{{ i }}</span
          >
        </label>
      </div>
      <button class="mb-6 py-2 w-full text-black bg-sky-200 rounded">
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
import { ref, reactive } from "vue";
const formStatus = ref("");

interface FormInfo {
  email: string;
  password: string;
  [key: string]: string;
}
const formInfo: FormInfo = reactive({
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped>
// active的样式
.day8active {
  input {
    @apply border-blue-400;
  }
  label {
    @apply text-blue-400;
    span {
      @apply -translate-y-8;
    }
  }
}
</style>
