<template>
  <ul class="container flex-center flex-col mx-auto h-screen p-4 sm:flex-row">
    <li
      class="relative w-full h-full m-2 text-white cursor-pointer rounded-3xl bg-cover transition-[flex] duration-700"
      v-for="image in images"
      :key="image.url"
      :style="{
        background: `url(${image.url}`,
        flex: `${image.isActive ? 10 : 1}`,
      }"
      @click="activeCard(image.num)">
      <h3
        class="absolute left-4 bottom-4 text-lg transition-opacity delay-500 duration-300"
        :style="{ opacity: `${image.isActive ? 1 : 0}` }">
        {{ image.name }}
      </h3>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// interface类型，num对应数组下标
// isActive标识是否为展开卡片，用于动态绑定style
interface ImageCard {
  name: string;
  url: string;
  isActive: boolean;
  num: number;
}
const images: Array<ImageCard> = reactive([
  {
    name: "华盛顿州北瀑布国家公园，美国 (© Ethan Welty/Tandem Stills + Motion)",
    url: "https://bing.com/th?id=OHR.CascadesNP_ZH-CN1830542356_1920x1080.jpg",
    isActive: false,
    num: 0,
  },
  {
    name: "加利西亚省科斯塔达莫尔特的灯塔，西班牙 (© Carlos Fernandez/Getty Images)",
    url: "https://bing.com/th?id=OHR.CostadaMorte_ZH-CN5219249535_1920x1080.jpg",
    isActive: false,
    num: 1,
  },
  {
    name: "格洛里亚附近的码头和糖面包山，巴西里约热内卢 (© f11photo/Getty Images)",
    url: "https://bing.com/th?id=OHR.MarinaDaGloria_ZH-CN6894795645_1920x1080.jpg",
    isActive: false,
    num: 2,
  },
  {
    name: "芒通，法国 (© Flavio Foglietta/Getty Images)",
    url: "https://bing.com/th?id=OHR.MentonFrance_ZH-CN5849270429_1920x1080.jpg",
    isActive: false,
    num: 3,
  },
  {
    name: "康沃尔郡的彭赞斯，英国 (© Murray Bosley Photography/Getty Images)",
    url: "https://bing.com/th?id=OHR.PenzancePool_ZH-CN4493022613_1920x1080.jpg",
    isActive: false,
    num: 4,
  },
]);

const data = [];

// 点击
function activeCard(num: number) {
  images.forEach((image) => {
    image.isActive = false;
  });
  images[num].isActive = true;
}
</script>
