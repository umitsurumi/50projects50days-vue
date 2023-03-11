<template>
  <div
    class="relative flex-center w-full h-[50vh] bg-purple-600 overflow-hidden">
    <button
      class="w-24 h-12 text-purple-600 bg-white shadow rounded-lg"
      @click="addMsg">
      新信息
    </button>
    <ul class="absolute flex items-end flex-col bottom-0 right-0">
      <li
        class="my-1 mx-2 w-24 h-12 text-center leading-[48px] bg-white shadow rounded-lg"
        v-for="msg in msgArr"
        :style="{ color: `${msg.color}`, width: `${6 + msg.random * 0.3}rem` }">
        {{ msg.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
interface msg {
  random: number;
  text: string;
  color: string;
}
const msgArr: Array<msg> = reactive([]);
function addMsg() {
  const random = Math.floor(Math.random() * 10);
  const msg: msg = {
    random,
    text: `Message ${random}`,
    color: randomColor(),
  };
  msgArr.push(msg);
}
function randomColor() {
  const str =
    "#" +
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16);
  return str;
}
setInterval(() => {
  if (msgArr.length !== 0) {
    msgArr.shift();
  }
}, 1000);
</script>

<style scoped></style>
