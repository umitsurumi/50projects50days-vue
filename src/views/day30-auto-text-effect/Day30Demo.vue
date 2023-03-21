<template>
  <div class="relative flex-center w-full h-screen bg-orange-500/80">
    <h3 class="text-4xl font-bold">{{ day30msg }}</h3>
    <div class="absolute flex bottom-4 p-4 bg-black/30">
      <p class="mr-4">Speed:</p>
      <input
        class="outline-none bg-orange-500/80 text-center"
        type="number"
        step="1"
        min="1"
        max="10"
        v-model="day30speed"
        @change="setSpeed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const day30msg = ref("");
const day30arr = "We Love Programming!".split("");
const day30timer = ref(0);
const day30speed = ref(1);

function autoText() {
  const len = day30msg.value.length;
  if (len < day30arr.length) {
    day30msg.value += day30arr[len];
  } else {
    day30msg.value = "";
  }
}
function setSpeed() {
  clearInterval(day30timer.value);
  day30timer.value = setInterval(() => autoText(), 300 / day30speed.value);
}
onMounted(
  () =>
    (day30timer.value = setInterval(() => autoText(), 300 / day30speed.value))
);
onUnmounted(() => clearInterval(day30timer.value));
</script>

<style scoped></style>
