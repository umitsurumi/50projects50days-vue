<template>
  <div class="flex justify-center item-center w-full py-10 bg-blue-500">
    <div class="w-2/3">
      <h3 class="my-2 text-slate-50 text-center text-xl">
        输入候选项并使用符号<em class="text-red-500 font-bold">,</em
        >分隔。<br />
        输入完成后回车。
      </h3>
      <textarea
        placeholder="输入候选项"
        id="day13Textarea"
        class="p-2 w-full h-40"
        v-model="textareaVal"></textarea>
      <ul class="flex flex-wrap w-full text-white" v-if="textareaVal !== ''">
        <li
          class="m-2 px-4 py-2 rounded-full"
          :class="index === selectedIndex ? 'bg-orange-400' : 'bg-black/40'"
          v-for="(item, index) in textareaArr">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
const textareaVal = ref(""); // 输入框字符串
const selectedIndex = ref(); // 被选中的序号

// 根据输入框字符串分隔为候选项数组，去除空字符串
const textareaArr = computed(() =>
  textareaVal.value.split(",").filter((item) => item !== "")
);

// 按下回车在候选项中随机选中
function randomChoice(e: KeyboardEvent) {
  if (e.key !== "Enter") return false;
  // 从候选框字符串中去掉回车和换行的转义字符
  textareaVal.value = textareaVal.value.replace(/[\n\r]/g, "");
  // counter记录随机次数
  let counter = 0;
  // 开启计时器，每0.1s生成随机数作为被选中项
  const timer = setInterval(() => {
    const randomNum = Math.floor(Math.random() * textareaArr.value.length);
    selectedIndex.value = randomNum;
    counter++;
    // 随机次数大于30后，清除计时器
    if (counter > 30) {
      clearInterval(timer);
    }
  }, 100);
}

onMounted(() => window.addEventListener("keyup", randomChoice));
onUnmounted(() => window.removeEventListener("keyup", randomChoice));
</script>
