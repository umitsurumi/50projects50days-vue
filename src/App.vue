<template>
  <nav
    class="z-50 flex justify-between items-center w-full h-16 p-4 shadow-lg text-lg text-slate-600 bg-slate-100 dark:bg-gray-900 dark:text-slate-100"
    :class="{ fixed: isFixed }">
    <RouterLink
      class="p-1 rounded hover:text-slate-100 hover:bg-sky-800 dark:hover:bg-slate-700"
      to="/">
      <Home class="w-6 h-6 sm:hidden" /><span class="hidden sm:block"
        >回到首页</span
      >
    </RouterLink>

    <div class="flex items-center justify-between w-44">
      <Moon
        class="w-6 h-6 mr-2 hidden hover:cursor-pointer dark:block"
        @click="setDarkMode" />
      <Sun
        class="w-6 h-6 mr-2 hover:cursor-pointer dark:hidden"
        @click="setDarkMode" />
      <a
        class="p-1 rounded hover:text-slate-100 hover:bg-sky-800 dark:hover:bg-slate-700"
        href="https://github.com/bradtraversy/50projects50days"
        >原项目</a
      >
      <a
        class="p-1 rounded hover:text-slate-100 hover:bg-sky-800 dark:hover:bg-slate-700"
        href="https://github.com/umitsurumi/50projects50days-vue"
        >本仓库</a
      >
    </div>
  </nav>
  <main class="px-4 my-4">
    <header class="w-full my-2 border-b-2 border-dashed border-current">
      <h1 class="text-2xl text-center">50 Projects in 50 Days</h1>
      <div class="flex justify-end items-center h-10">
        <p>Vue写法练习，原始代码作者仓库见：</p>
        <a href="https://github.com/bradtraversy/50projects50days">
          <PaperPlane
            class="w-8 h-8 p-1 rounded hover:text-slate-100 hover:bg-sky-800 dark:hover:bg-slate-700" />
        </a>
      </div>
      <div class="my-4">
        <p class="mb-2">
          原项目采用HTML+CSS+JavaScript写法，适合还没有学习框架的新人进行练习。
        </p>
        <p>这里是采用Vue3进行，目的是为了熟悉和练习Vue3的写法。</p>
      </div>
    </header>

    <div class="flex items-center">
      <h2 class="text-2xl mr-4">{{ demoName }}</h2>
      <button
        :disabled="path === '/'"
        :class="{ 'cursor-not-allowed': path === '/' }"
        @click="router.push(path === '/day1' ? '/' : `/day${index - 1}`)">
        <Pre class="w-10 h-10 p-2 active:text-blue-400" />
      </button>
      <button
        :disabled="path === '/day50'"
        :class="{ 'cursor-not-allowed': path === '/day50' }"
        @click="router.push(path === '/' ? '/day1' : `/day${index + 1}`)">
        <Next class="w-10 h-10 p-2 active:text-blue-400" />
      </button>
    </div>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";
import {
  Home,
  PaperPlane,
  Moon,
  Sun,
  Pre,
  Next,
} from "@/components/icons/SvgIcons.vue";
import { useProjectStore } from "@/stores/projects";

// 切换暗黑模式
function setDarkMode() {
  const darkClass = document.documentElement.classList;
  darkClass.contains("dark") ? darkClass.remove("dark") : darkClass.add("dark");
}
// 滚动一定距离后导航栏固定定位
const isFixed = ref(false);
document.addEventListener("scroll", fixNav);
function fixNav() {
  window.scrollY > 80 ? (isFixed.value = true) : (isFixed.value = false);
}

// 获取demo名称，通过router和store实现
const router = useRouter();
const projectStore = useProjectStore();
const demoName = ref("Demo List");
const path = ref(router.currentRoute.value.fullPath);
const index = ref(Number(path.value.replace(/[^\d]/g, "")));

// watch监听，调用函数更改demoName
function setRouteTitle() {
  path.value = router.currentRoute.value.fullPath;
  index.value = Number(path.value.replace(/[^\d]/g, ""));
  if (path.value !== "/") {
    demoName.value = projectStore.projects[index.value - 1].title
      .split("-")
      .map((item) => (item = item[0].toUpperCase() + item.slice(1)))
      .join(" ");
  } else {
    demoName.value = "Demo List";
  }
}
watch(
  () => router.currentRoute.value.fullPath,
  () => setRouteTitle()
);
</script>
