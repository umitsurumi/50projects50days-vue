<template>
  <div class="flex-center h-[90vh]">
    <button
      class="relative w-32 h-16 overflow-hidden text-lg text-slate-100 bg-purple-700 rounded-lg shadow-md"
      @click="rippleEffect">
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full"
        :style="{ top: `${rippleTop}px`, left: `${rippleLeft}px` }"
        v-show="showRipple"></div>
      Button
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const rippleTop = ref(0);
const rippleLeft = ref(0);
const showRipple = ref(false);
function rippleEffect(e: MouseEvent) {
  const btn = e.target as HTMLElement;
  rippleTop.value = e.pageY - btn.offsetTop;
  rippleLeft.value = e.pageX - btn.offsetLeft;
  showRipple.value = true;
  setTimeout(() => {
    showRipple.value = false;
  }, 500);
}
</script>

<style scoped>
button div {
  animation: rippleScale 0.5s ease-in;
}
@keyframes rippleScale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
