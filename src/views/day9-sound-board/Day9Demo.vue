<template>
  <div class="w-full">
    <div class="fixed">
      <p
        class="p-2 shadow rounded-t-xl cursor-pointer"
        style="writing-mode: vertical-rl"
        :class="{ 'bg-slate-400': switchTone === 1 }"
        @click="switchTone = 1">
        平假名
      </p>
      <p
        class="p-2 shadow rounded-b-xl cursor-pointer"
        style="writing-mode: vertical-rl"
        :class="{ 'bg-slate-400': switchTone === 2 }"
        @click="switchTone = 2">
        片假名
      </p>
    </div>

    <table class="mx-auto w-1/2">
      <!-- 列表渲染，11行 -->
      <tr v-for="i in 11" :key="`day9${i}`">
        <!-- 列表渲染，每行的音节 -->
        <td v-for="item in divideTone(i * 5)" :key="`day9${item[0]}`">
          <div
            class="flex my-2 p-1 w-16 h-16 items-end rounded-lg cursor-pointer hover:shadow-lg dark:shadow-slate-300/60"
            @click="playTone(item[1])">
            <p class="w-10 h-10 text-4xl self-start font-semibold">
              {{ item[switchTone] }}
            </p>
            <p class="relative -left-1">{{ item[0] }}</p>
            <audio
              :id="`${item[1]}`"
              :src="`/audio/learn50/${item[0]}.mp3`"></audio>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// 五十音数组，每个数组元素都是一个数组，对应[罗马字,平假名,平假名]
const fiftyTone = reactive([
  ["a", "あ", "ア"],
  ["i", "い", "イ"],
  ["u", "う", "ウ"],
  ["e", "え", "エ"],
  ["o", "お", "オ"],
  ["ka", "か", "カ"],
  ["ki", "き", "キ"],
  ["ku", "く", "ク"],
  ["ke", "け", "ケ"],
  ["ko", "こ", "コ"],
  ["sa", "さ", "サ"],
  ["si", "し", "シ"],
  ["su", "す", "ス"],
  ["se", "せ", "セ"],
  ["so", "そ", "ソ"],
  ["ta", "た", "タ"],
  ["ti", "ち", "チ"],
  ["tu", "つ", "ツ"],
  ["te", "て", "テ"],
  ["to", "と", "ト"],
  ["na", "な", "ナ"],
  ["ni", "に", "ニ"],
  ["nu", "ぬ", "ヌ"],
  ["ne", "ね", "ネ"],
  ["no", "の", "ノ"],
  ["ha", "は", "ハ"],
  ["hi", "ひ", "ヒ"],
  ["hu", "ふ", "フ"],
  ["he", "へ", "ヘ"],
  ["ho", "ほ", "ホ"],
  ["ma", "ま", "マ"],
  ["mi", "み", "ミ"],
  ["mu", "む", "ム"],
  ["me", "め", "メ"],
  ["mo", "も", "モ"],
  ["ya", "や", "ヤ"],
  ["i", "い", "イ"],
  ["yu", "ゆ", "ユ"],
  ["e", "え", "エ"],
  ["yo", "よ", "ヨ"],
  ["ra", "ら", "ラ"],
  ["ri", "り", "リ"],
  ["ru", "る", "ル"],
  ["re", "れ", "レ"],
  ["ro", "ろ", "ロ"],
  ["wa", "わ", "ワ"],
  ["i", "い", "イ"],
  ["u", "う", "ウ"],
  ["e", "え", "エ"],
  ["wo", "を", "ヲ"],
  ["n", "ん", "ン"],
]);

// 切换平假名和平假名显示，对应数组下标
const switchTone = ref(1);

// 每5个音为一行
function divideTone(n: number) {
  return fiftyTone.slice(n - 5, n);
}

// id获取音频文件播放
function playTone(id: string) {
  const audio: HTMLAudioElement | null = document.querySelector(`#${id}`);
  audio?.play();
}
</script>
