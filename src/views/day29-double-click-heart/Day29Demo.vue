<template>
  <div class="m-auto w-80 my-20">
    <h3 class="flex justify-center font-serif font-bold">
      Double click on the image to<Heart class="text-red-500 fill-red-500" /> it
    </h3>
    <p class="mb-4 text-center text-sm font-mono font-semibold">
      You liked it {{ counter }} times
    </p>
    <div
      class="relative w-full shadow-xl border-8 cursor-pointer dark:shadow-white"
      @dblclick.prevent="likedAnimation">
      <img class="w-full" ref="img" src="/images/liked.jpg" />
      <Transition name="heart">
        <Heart
          class="absolute text-red-500 fill-red-500"
          :style="`top:${heart_y}px;left:${heart_x}px`"
          v-if="showHeart"
      /></Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Heart } from "@/components/icons/SvgIcons";
const counter = ref(0);
const img = ref<null | HTMLElement>(null);
const heart_x = ref(0);
const heart_y = ref(0);
const showHeart = ref(false);
function likedAnimation(e: MouseEvent) {
  if (img.value) {
    const { left, top } = img.value.getBoundingClientRect();
    heart_x.value = e.clientX - left;
    heart_y.value = e.clientY - top;
    showHeart.value = true;
    setTimeout(() => {
      showHeart.value = false;
    });
    counter.value++;
  }
}
</script>

<style scoped>
.heart-leave-active {
  transition: all 1s ease;
}

.heart-leave-to {
  opacity: 0;
  transform: scale(10);
}
</style>
