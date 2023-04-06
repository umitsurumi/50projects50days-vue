<template>
  <div class="w-full my-20">
    <div class="flex m-auto w-96 h-96 overflow-hidden shadow">
      <img
        class="w-full h-full object-cover transition-all duration-500"
        :style="{ transform: `translate(${-100 * index}%)` }"
        :src="image.url"
        :alt="image.title"
        v-for="image in images" />
    </div>
    <div class="text-center text-white">
      <button
        class="mr-2 w-[188px] shadow-md bg-purple-500"
        @click="handleClick('reduce')">
        Prev
      </button>
      <button
        class="w-[188px] shadow-md bg-purple-500"
        @click="handleClick('add')">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from "vue";
const timer = ref(0);
const index = ref(0);
const images = reactive<Array<{ url: string; title: string }>>([
  {
    url: "https://cn.bing.com/th?id=OHR.CyprusMaze_ZH-CN9448060895_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    title: "阿伊纳帕植物园灌木丛迷宫，塞浦路斯 (© Tpopova/Getty Images)",
  },
  {
    url: "https://cn.bing.com/th?id=OHR.LionessesNap_ZH-CN9240393299_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    title:
      "正在睡觉的母狮, 塞伦盖蒂国家公园，坦桑利亚 (© Cavan Images/Shutterstock)",
  },
  {
    url: "https://cn.bing.com/th?id=OHR.SouthDownsSheep_ZH-CN8986424729_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    title:
      "南唐斯国家公园的绵羊，东萨塞克斯郡，英国 (© Slawek Staszczuk/Alamy)",
  },
  {
    url: "https://cn.bing.com/th?id=OHR.LongWharf_ZH-CN8793669955_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    title: "马萨诸塞州格洛斯特的沼泽地 (© Thomas H. Mitchell/Getty Images)",
  },
]);
function imageChange() {
  index.value === 3 ? (index.value = 0) : index.value++;
}
function handleClick(type: string) {
  clearInterval(timer.value);
  switch (type) {
    case "add":
      index.value === 3 ? (index.value = 0) : index.value++;
      break;
    case "reduce":
      index.value === 0 ? (index.value = 3) : index.value--;
      break;
  }
  timer.value = setInterval(() => imageChange(), 2000);
}
onMounted(() => (timer.value = setInterval(() => imageChange(), 2000)));
onUnmounted(() => clearInterval(timer.value));
</script>

<style scoped></style>
