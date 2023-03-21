<template>
  <Transition name="nav">
    <Nav v-show="isShowNav" :title="demoName" />
  </Transition>
  <main class="w-full">
    <RouterView />
  </main>
  <NavTool :index="index" :isShowNav="isShowNav" :changeNav="changeNav" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useProjectStore } from "@/stores/projects";
import NavTool from "./components/NavTool.vue";
import Nav from "./components/Nav.vue";

const isShowNav = ref(false);

function changeNav() {
  isShowNav.value = !isShowNav.value;
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

<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: all 0.5s ease;
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
