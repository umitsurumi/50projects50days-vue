<template>
  <div class="w-full sm:w-1/2 m-auto h-96">
    <ul class="relative flex h-1/2 items-center justify-between">
      <!-- 显示百分比进度条 -->
      <div
        class="absolute h-1 bg-sky-500 top-1/2 -translate-y-1/2 transition-all duration-300 z-10"
        :style="{ width: `${(currentStep / 4) * 100}%` }"></div>
      <li
        class="flex justify-center items-center w-10 h-10 rounded-full z-10 bg-slate-50 border-4 border-solid border-slate-300 transition-all duration-500 delay-100 dark:text-black"
        :class="{ 'border-sky-500': step <= currentStep }"
        v-for="step in steps">
        {{ step + 1 }}
      </li>
    </ul>
    <div class="flex m-auto justify-between w-1/2">
      <!-- 上一步，点击当前进度大于0则减1，当前进度等于0不可点击 -->
      <button
        class="py-1 px-4 rounded bg-sky-500 text-slate-100 cursor-pointer active:scale-90 focus:outline-none"
        :class="{ 'bg-slate-300 cursor-not-allowed': currentStep === 0 }"
        @click="currentStep > 0 ? currentStep-- : ''">
        上一步
      </button>
      <!-- 下一步，点击当前进度小于4则加1，当前进度等于4不可点击 -->
      <button
        class="py-1 px-4 rounded bg-sky-500 text-slate-100 cursor-pointer active:scale-90 focus:outline-none"
        :class="{ 'bg-slate-300 cursor-not-allowed': currentStep === 4 }"
        @click="currentStep < 4 ? currentStep++ : ''">
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
// currentStep标识当前进度
const currentStep = ref(0);
// steps标识每个步骤
const steps: number[] = reactive([0, 1, 2, 3, 4]);
</script>

<style scoped>
/* after伪元素设置进度条背景 */
ul::after {
  @apply absolute w-full h-1 bg-slate-300;
  content: "";
  top: 50%;
  transform: translateY(-50%);
}
</style>
