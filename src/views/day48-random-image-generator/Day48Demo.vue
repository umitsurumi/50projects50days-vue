<template>
  <div class="flex justify-center flex-wrap">
    <img
      class="m-5 w-80 h-80 object-cover"
      :src="image"
      alt=""
      v-for="image in images" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const timer = ref<number>(0);
const images = ref<Array<string>>([]);
const local = localStorage.getItem("day49images");
if (local !== null) {
  images.value = JSON.parse(local);
} else {
  updateImages();
}

async function updateImages() {
  while (images.value.length < 15) {
    await new Promise((res) => setTimeout(res, 1000));
    const { url } = await fetch("https://source.unsplash.com/random/");
    if (images.value.indexOf(url) === -1) {
      images.value.push(url);
    }
  }
  localStorage.setItem("day49images", JSON.stringify(images.value));
}

onMounted(() => (timer.value = setInterval(() => updateImages(), 3600000)));
onUnmounted(() => clearInterval(timer.value));
</script>

<style scoped></style>
