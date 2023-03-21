<template>
  <div
    class="flex-center flex-col w-full h-screen text-white bg-purple-500 roboto md:flex-row">
    <div class="my-8 mx-12" v-for="counter in counterList">
      <Envelope class="mx-auto w-12 h-12" />
      <p class="my-4 text-6xl">{{ counter }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { Envelope } from "@/components/icons/SvgIcons";

// counter的目标数据
const counterList = reactive([7500, 12000, 6000]);

// counter增长函数，传参为目标counter、计数器数组索引、效果总时长
function counterIncrement(target: number, index: number, totalSecond: number) {
  counterList[index] = 0; // 计数器从0开始增长到目标计数
  let increasingCount = 0; // 计时器次数
  const stopCount = totalSecond * 100; // 计时器间隔设置为10ms，计时器终止次数
  const timer = setInterval(() => {
    counterList[index] += Math.floor((Math.random() * target * 2) / stopCount);
    increasingCount++;
    if (increasingCount === stopCount) {
      counterList[index] = target;
      clearInterval(timer);
    }
  }, 10);
}
onMounted(() =>
  counterList.forEach((counter, index) => counterIncrement(counter, index, 2))
);
</script>

<style scoped>
/* 网络字体 */
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
.roboto {
  font-family: "Roboto Mono", sans-serif;
}
</style>
