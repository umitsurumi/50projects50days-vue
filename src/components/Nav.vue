<template>
  <nav
    class="sticky top-0 z-50 flex justify-between items-center w-full h-20 p-4 shadow-lg font-serif bg-slate-100 dark:bg-neutral-800">
    <!-- <RouterLink
      class="p-1 rounded hover:text-slate-100 hover:bg-sky-800 dark:hover:bg-slate-700"
      to="/">
      <House class="w-6 h-6 sm:hidden" /><span class="hidden sm:block"
        >回到首页</span
      >
    </RouterLink> -->
    <h1 class="text-base truncate sm:text-2xl">
      {{ title }}
    </h1>
    <div class="flex items-center justify-end w-44 text-lg">
      <Moon
        class="w-6 h-6 mr-2 hidden hover:cursor-pointer dark:block"
        @click="setDarkMode" />
      <Sun
        class="w-6 h-6 mr-2 hover:cursor-pointer dark:hidden"
        @click="setDarkMode" />
      <a
        class="p-1 w-16 rounded hover:text-slate-100 hover:bg-pink-500 dark:hover:bg-sky-700"
        href="https://github.com/bradtraversy/50projects50days"
        >原项目</a
      >
      <a
        class="p-1 w-16 rounded hover:text-slate-100 hover:bg-pink-500 dark:hover:bg-sky-700"
        href="https://github.com/umitsurumi/50projects50days-vue"
        >本仓库</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { House, Moon, Sun } from "@/components/icons/SvgIcons";
const { title } = defineProps({
  title: String,
});
// 切换暗黑模式
function setDarkMode() {
  const darkClass = document.documentElement.classList;
  darkClass.contains("dark") ? darkClass.remove("dark") : darkClass.add("dark");
}
</script>

<style scoped></style>
