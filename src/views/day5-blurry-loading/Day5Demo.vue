<template>
  <div class="relative h-screen">
    <!-- 加载进度，加载完成后隐藏 -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-6xl text-white"
      :style="{ opacity: `${100 - loading}%` }"
      v-show="loading !== 100">
      {{ loading }}%
    </div>
    <!-- 图片正文，用filter实现模糊，模糊半径绑定加载进度 -->
    <div :style="{ filter: `blur(${100 - loading}px)` }">
      <div
        class="absolute flex-center h-8 w-8 bg-white/50 text-black rounded cursor-pointer z-10">
        <Refresh
          @click="
            {
              loading = 0;
              startLoading();
            }
          " />
      </div>
      <img
        src="https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/pixiv-67863722.2z9ksqma0880.webp"
        class="w-screen h-screen object-cover object-right rounded-lg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Refresh } from "@/components/icons/SvgIcons";
import { ref, onMounted } from "vue";
const loading = ref(0);

// 模糊载入的函数
function startLoading() {
  const int = setInterval(blurring, 30);
  // 大于99后载入完成，设置值为100
  function blurring() {
    loading.value++;
    if (loading.value > 99) {
      clearInterval(int);
      loading.value = 100;
    }
  }
}
onMounted(() => startLoading());
</script>
