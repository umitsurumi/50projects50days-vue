<template>
  <div class="py-6 w-full bg-blue-400/80 text-white text-center">
    <h3 class="mb-6 text-3xl">Goal: 2 Liters</h3>
    <div
      class="flex flex-col mx-auto w-40 h-96 text-2xl border-4 border-blue-700 rounded-b-3xl">
      <!-- 还没喝的水 -->
      <div
        class="flex-center flex-col bg-white text-blue-700 transition-all duration-300"
        :class="{ 'rounded-b-3xl': waterCount === 0 }"
        :style="{ height: (8 - waterCount) * 12.5 + '%' }">
        <p v-show="waterCount !== 8">{{ 2 - 0.25 * waterCount }}L</p>
        <p
          class="text-base"
          v-show="waterCount !== 8">
          Remained
        </p>
      </div>
      <!-- 已经喝掉的水 -->
      <div
        class="flex-center bg-blue-400/80 transition-all duration-300"
        :class="{ 'rounded-b-3xl': waterCount !== 0 }"
        :style="{ height: waterCount * 12.5 + '%' }">
        <p v-show="waterCount !== 0">{{ waterCount * 12.5 }}%</p>
      </div>
    </div>
    <p class="my-4">Select how many glasses of water that you have drank</p>
    <div class="flex-center flex-wrap mx-auto w-64">
      <!-- 总共8杯水，v-for渲染，设置属性data-index为i的值，i小于等于waterCount为喝掉的水 -->
      <div
        class="flex-center mx-1 my-2 w-12 h-24 border-4 border-blue-700 rounded-b-2xl cursor-pointer"
        :class="
          i <= waterCount
            ? 'bg-blue-400/80 text-white'
            : 'bg-sky-100 text-blue-700'
        "
        v-for="i in 8"
        :key="`day16${i}`"
        :data-index="`${i}`"
        @click="setWaterCount">
        <p class="break-all">250 ml</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 喝水数量
const waterCount = ref(0);

// 设置喝掉的水的数量，值来源为data-index
function setWaterCount(e: Event) {
  const currentIndex = Number(
    (e.currentTarget as HTMLElement).getAttribute("data-index")
  );
  // 当前waterCount不等于currentIndex则设置为它的值
  if (waterCount.value !== currentIndex) {
    waterCount.value = currentIndex;
  } else {
    // 当前waterCount等于currentIndex则waterCount减1（双击取消当前这杯水）
    waterCount.value--;
  }
}
</script>

<style scoped></style>
