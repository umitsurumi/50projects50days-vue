<template>
  <div class="flex-center">
    <div class="w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden">
      <div class="relative w-full h-48 bg-red-400">
        <div
          class="animate-bg"
          v-show="isLoading"></div>
      </div>
      <div class="p-6 text-sm text-black">
        <div class="relative overflow-hidden">
          <div
            class="animate-bg"
            v-show="isLoading"></div>
          <h4 class="text-lg font-semibold">Lorem ipsum dolor sit.</h4>
        </div>
        <div class="mt-2 mb-4 relative overflow-hidden">
          <div
            class="animate-bg"
            v-show="isLoading"></div>
          <p class="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            quis.
          </p>
        </div>
        <div class="flex items-center">
          <div
            class="relative w-12 h-12 mr-4 bg-blue-400 rounded-full overflow-hidden">
            <div
              class="animate-bg"
              v-show="isLoading"></div>
          </div>
          <div>
            <div class="relative overflow-hidden my-1">
              <div
                class="animate-bg"
                v-show="isLoading"></div>
              <h5 class="font-semibold">John Smith</h5>
            </div>

            <div class="relative overflow-hidden my-1">
              <div
                class="animate-bg"
                v-show="isLoading"></div>
              <p class="text-slate-500">Jan 30, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isLoading = ref(true);
setTimeout(() => (isLoading.value = false), 5000);
</script>

<style scoped>
.animate-bg {
  @apply absolute w-full h-full;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
