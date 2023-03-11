<template>
  <div class="relative w-full h-96 bg-wrapper">
    <ul
      class="flex absolute-center p-2 bg-white shadow rounded-lg transition-all duration-500"
      :class="navFlag ? 'w-80' : 'w-14'">
      <li
        class="p-2 transition-all duration-1000"
        :class="{ active: !navFlag }"
        v-for="item in navList">
        {{ item }}
      </li>
      <!-- flex项的order属性调整flex项顺序 -->
      <button
        class="flex-center p-2 cursor-pointer"
        :class="{ '-order-1': !navFlag }"
        @click="navFlag = !navFlag">
        <XMarked
          class="transition-all duration-1000"
          :class="{ active: !navFlag }" />
        <Bars3
          class="-ml-6 transition-all duration-1000"
          :class="{ active: navFlag }" />
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { XMarked, Bars3 } from "@/components/icons/SvgIcons";
const navFlag = ref(true);
const navList = reactive(["Home", "Works", "About", "Contact"]);
</script>

<style scoped>
/* 渐变实现背景双色分割 */
.bg-wrapper {
  background: linear-gradient(
    to bottom,
    #d1fae5 0%,
    #d1fae5 50%,
    #0284c7 50%,
    #0284c7 100%
  );
}

/* active效果，沿着中心Y轴选择 */
.active {
  opacity: 0;
  transform-origin: center;
  transform: rotateY(540deg);
}
</style>
