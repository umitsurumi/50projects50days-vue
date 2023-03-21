<template>
  <div class="flex-center w-full h-screen bg-slate-600">
    <div class="relative w-20 h-20">
      <div
        class="rotateTriangle animationA"
        style="border-top-color: white"></div>
      <div
        class="rotateTriangle animationB"
        style="border-right-color: white"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.rotateTriangle {
  @apply absolute border-[50px] border-transparent;
}
.animationA {
  animation: rotate 2s linear infinite 0.5s;
}
.animationB {
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
