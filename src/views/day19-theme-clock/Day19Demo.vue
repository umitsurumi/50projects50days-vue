<template>
  <div class="flex-center flex-col h-[90vh]">
    <div
      class="relative w-64 h-64 p-1 text-2xl border-4 border-black rounded-full dark:border-white">
      <h3 class="absolute top-0 left-1/2 -translate-x-1/2">Ⅻ</h3>
      <h3 class="absolute bottom-0 left-1/2 -translate-x-1/2">Ⅵ</h3>
      <h3 class="absolute left-2 top-1/2 -translate-y-1/2">Ⅸ</h3>
      <h3 class="absolute right-2 top-1/2 -translate-y-1/2">Ⅲ</h3>
      <div
        class="absolute top-1/2 left-1/2 w-1 h-14 origin-top bg-slate-500 z-10"
        :style="{
          rotate: `${180 + date.hour * 30}deg`,
        }"></div>
      <div
        class="absolute top-1/2 left-1/2 w-1 h-24 origin-top bg-black dark:bg-white"
        :style="{
          rotate: `${180 + date.min * 6}deg`,
        }"></div>
      <div
        class="absolute top-1/2 left-1/2 w-1 h-28 bg-red-500 origin-top"
        :style="{
          rotate: `${180 + date.sec * 6}deg`,
        }"></div>
      <div class="absolute-center w-4 h-4 bg-red-500 rounded-full z-20">
        <div
          class="absolute-center w-2 h-2 bg-black rounded-full dark:bg-white z-30"></div>
      </div>
    </div>
    <h3 class="mt-16 mb-4 text-6xl">
      {{ fmtTime(date.hour > 12 ? date.hour - 12 : date.hour) }}:{{
        fmtTime(date.min)
      }}
      {{ date.hour > 12 ? "PM" : "AM" }}
    </h3>
    <h4 class="text-sm">
      {{ `${date.day},${date.mon}` }}
      <div
        class="inline-block w-6 h-6 leading-6 text-center text-white bg-black rounded-full dark:text-black dark:bg-white">
        {{ date.date }}
      </div>
    </h4>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = reactive({
  timer: 0,
  mon: "",
  date: "",
  day: "",
  hour: 0,
  min: 0,
  sec: 0,
});

function fmtTime(num: number) {
  return num >= 10 ? `${num}` : `0${num}`;
}
function setDate() {
  const now = new Date();
  date.mon = months[now.getMonth()];
  date.date =
    now.getDate() > 10
      ? now.getDate().toString()
      : 0 + now.getDate().toString();
  date.day = days[now.getDay()];
  date.hour = now.getHours();
  date.min = now.getMinutes();
  date.sec = now.getSeconds();
}

onMounted(() => {
  setDate();
  date.timer = setInterval(() => setDate(), 1000);
});
onUnmounted(() => clearInterval(date.timer));
</script>

<style scoped></style>
