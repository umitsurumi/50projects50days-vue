<template>
  <div class="flex-center w-full">
    <ul
      class="flex-center flex-col md:flex-row"
      @dragstart="getCurrent"
      @dragover.prevent="getTarget"
      @drop="setBoxColor">
      <li
        class="m-4 w-32 h-32 border-4 border-black dark:border-white"
        :class="[
          `bg-${box}-500`,
          { 'bg-opacity-70': currentBox === index },
          targetBox === index ? 'border-dashed' : 'border-solid',
        ]"
        draggable="true"
        :data-index="index"
        v-for="(box, index) in colorBoxes"
        :key="`day21${index}`"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const colorBoxes = reactive(["red", "slate", "sky", "blue", "purple"]);
const currentBox = ref(colorBoxes.length);
const targetBox = ref(colorBoxes.length);

function getCurrent(e: Event) {
  const box = e.target as HTMLElement;
  currentBox.value = Number(box.dataset.index);
}

function getTarget(e: Event) {
  const target = e.target as HTMLElement;
  targetBox.value = Number(target.dataset.index);
}

function setBoxColor() {
  if (targetBox.value < colorBoxes.length) {
    const temp = colorBoxes[currentBox.value];
    colorBoxes.splice(currentBox.value, 1);
    colorBoxes.splice(targetBox.value, 0, temp);
    currentBox.value = colorBoxes.length;
    targetBox.value = colorBoxes.length;
  }
}
</script>

<style scoped></style>
