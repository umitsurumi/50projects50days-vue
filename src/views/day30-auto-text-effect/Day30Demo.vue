<template>
  <div class="relative flex-center w-full h-screen bg-orange-500/80">
    <h3 class="text-4xl font-bold">{{ msg }}</h3>
    <div class="absolute flex bottom-4 p-4 bg-black/30">
      <p class="mr-4">Speed:</p>
      <input
        class="outline-none bg-orange-500/80 text-center"
        type="number"
        step="1"
        min="1"
        max="10"
        v-model="speed"
        @change="setSpeed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const msg = ref("");
const arr = "We Love Programming!".split("");
const timer = ref(0);
const speed = ref(1);

function autoText() {
  const len = msg.value.length;
  if (len < arr.length) {
    msg.value += arr[len];
  } else {
    msg.value = "";
  }
}
function setSpeed() {
  clearInterval(timer.value);
  timer.value = setInterval(() => autoText(), 300 / speed.value);
}
onMounted(
  () => (timer.value = setInterval(() => autoText(), 300 / speed.value))
);
onUnmounted(() => clearInterval(timer.value));
</script>

<style scoped></style>
