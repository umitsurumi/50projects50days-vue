<template>
  <div class="relative flex flex-col w-full h-screen bg-slate-600 md:flex-row">
    <div class="h-1/3 w-full md:w-1/3 md:h-full overflow-hidden">
      <div
        class="flex-center w-full h-full transform-gpu transition-all duration-500"
        :style="{
          'background-color': `${img.color}`,
          transform: `translate(0,${100 * imageIndex - 300}%)`,
        }"
        v-for="img in sliderImages"
        :key="img.color">
        <h4 class="text-4xl text-white">{{ img.name }}</h4>
      </div>
    </div>
    <div class="h-2/3 w-full md:w-2/3 md:h-full overflow-hidden">
      <img
        class="w-full h-full object-cover transform-gpu transition-all duration-500"
        :style="`transform: translate(0,-${100 * imageIndex}%)`"
        v-for="img in sliderImages"
        :key="img.url"
        :src="img.url" />
    </div>
    <div
      class="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 grid w-16 h-16 -rotate-90 md:top-1/2 md:left-1/3"
      @dblclick.prevent>
      <Pre
        class="p-1 w-8 h-8 bg-white/90 rounded-t cursor-pointer"
        @click="imageIndex > 0 ? imageIndex-- : (imageIndex = 3)" />
      <Next
        class="justify-self-end p-1 w-8 h-8 bg-white/90 rounded-b cursor-pointer"
        @click="imageIndex < 3 ? imageIndex++ : (imageIndex = 0)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Pre, Next } from "@/components/icons/SvgIcons";
const imageIndex = ref(0);
const sliderImages = reactive([
  {
    name: "Red Mangrove",
    color: "#c6768f",
    url: "https://bing.com/th?id=OHR.NagarholeNationalPark_ZH-CN2550578922_1920x1080.jpg",
  },
  {
    name: "Blue Bahamas",
    color: "#629181",
    url: "https://bing.com/th?id=OHR.BlackbirdDay_ZH-CN2291101162_1920x1080.jpg",
  },
  {
    name: "Black bird",
    color: "black",
    url: "https://bing.com/th?id=OHR.BlueBahamas_ZH-CN2083290847_1920x1080.jpg",
  },
  {
    name: "National Park",
    color: "#554810",
    url: "https://bing.com/th?id=OHR.RedMangrove_ZH-CN4083989028_1920x1080.jpg",
  },
]);
</script>

<style scoped></style>
