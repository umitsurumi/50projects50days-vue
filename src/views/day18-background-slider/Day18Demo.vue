<template>
  <div class="relative w-full h-screen">
    <div
      class="w-full h-full bg-black/70 bg-blend-multiply transition-all duration-300"
      :style="{
        'background-image': `url(${imagesList[activeImage]})`,
      }"></div>

    <div class="flex-center absolute inset-0 w-full h-full">
      <Pre
        class="p-2 w-12 h-12 text-white border-orange-400 border-2 cursor-pointer hover:bg-orange-400/60"
        @click="activeImage === 0 ? (activeImage = 4) : activeImage--" />
      <div class="relative w-2/3 h-2/3 overflow-hidden">
        <div
          class="absolute -top-1/4 -left-1/4"
          :style="{
            width: '150%',
            height: '150%',
            'background-image': `url(${imagesList[activeImage]})`,
          }"></div>
      </div>
      <Next
        class="p-2 w-12 h-12 text-white border-orange-400 border-2 cursor-pointer hover:bg-orange-400/60"
        @click="activeImage === 4 ? (activeImage = 0) : activeImage++" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Pre, Next } from "@/components/icons/SvgIcons";
const activeImage = ref(0);
const imagesList = reactive([
  "https://bing.com/th?id=OHR.ChineseNewYearEve2023_ZH-CN7188893388_1920x1080.jpg",
  "https://bing.com/th?id=OHR.FalklandKings_ZH-CN6891102487_1920x1080.jpg",
  "https://bing.com/th?id=OHR.SFFParkCity_ZH-CN6707019061_1920x1080.jpg",
  "https://bing.com/th?id=OHR.WhiteSands_ZH-CN6500188005_1920x1080.jpg",
  "https://bing.com/th?id=OHR.SessileOaks_ZH-CN6385464274_1920x1080.jpg",
  "https://bing.com/th?id=OHR.FrozenBubblesAlberta_ZH-CN6154214678_1920x1080.jpg",
]);
</script>

<style scoped></style>
