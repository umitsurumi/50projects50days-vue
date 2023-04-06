<template>
  <ul class="relative m-auto w-1/2 h-full">
    <TransitionGroup name="scrollBoxList">
      <li
        class="flex justify-center items-center my-4 w-full h-52 text-4xl rounded-xl shadow-xl bg-slate-400/70 dark:shadow-white/40"
        v-for="i in scrollBoxCount"
        :key="`scrollBox${i}`">
        Box{{ i }}
      </li>
    </TransitionGroup>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const scrollBoxes = Math.floor(
  (document.documentElement.clientHeight * 3) / 800
);
const scrollBoxCount = ref(scrollBoxes);

function addScrollBox() {
  // console.log(document.body.scrollHeight);
  // console.log(document.documentElement.clientHeight);
  // console.log(window.scrollY);
  if (
    document.body.scrollHeight -
      (document.documentElement.clientHeight + window.scrollY) <
    20
  ) {
    scrollBoxCount.value++;
  }
}

function throttle(func: Function, wait: number, mustRun: number) {
  let timer: any = null,
    startTime = new Date().getTime();

  return () => {
    const curTime = new Date().getTime();
    clearTimeout(timer);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func();
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timer = setTimeout(func, wait);
    }
  };
}
onMounted(() =>
  window.addEventListener("scroll", throttle(addScrollBox, 500, 1000))
);
onUnmounted(() =>
  window.removeEventListener("scroll", throttle(addScrollBox, 500, 1000))
);
</script>

<style lang="scss" scoped>
.scrollBoxList-move,
.scrollBoxList-enter-active,
.scrollBoxList-leave-active {
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}

.scrollBoxList-enter-from,
.scrollBoxList-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
