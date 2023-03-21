<template>
  <div class="flex-center my-10">
    <div
      class="flex justify-center flex-wrap m-auto w-[400px]"
      @mouseover="changeColor($event)"
      @mouseleave="cur = 0">
      <div
        class="m-0.5 w-4 h-4 bg-white shadow transition-all duration-[2000ms] dark:bg-neutral-800 hover:duration-[0ms]"
        :style="cur === i ? styleObj : ''"
        :data-index="i"
        v-for="i in 500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const cur = ref(1);
const color = ref("");
const colorsArr = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const styleObj = reactive({
  background: "",
  boxShadow: "",
});

function changeColor(e: MouseEvent) {
  color.value = colorsArr[Math.floor(Math.random() * 5)];
  styleObj.background = color.value;
  styleObj.boxShadow = `0 0 2px ${color.value}, 0 0 10px ${color.value}`;
  cur.value = Number((e.target as Element).getAttribute("data-index"));
}
</script>

<style scoped></style>
