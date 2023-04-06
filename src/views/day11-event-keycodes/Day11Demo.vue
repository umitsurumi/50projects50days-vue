<template>
  <div class="relative w-full h-[90vh]">
    <div
      class="absolute inset-0 m-auto w-2/3 h-24 border-current rounded"
      :class="{ border: eventKeyCode.code === '' }">
      <Refresh
        class="absolute -top-6 -left-6 cursor-pointer"
        @click="eventKeyCode.code = ''" />
      <p
        class="text-2xl text-center"
        style="line-height: 96px"
        v-if="eventKeyCode.code === ''">
        Press any key to get the keyCode
      </p>
      <ul class="flex w-full h-full justify-between" v-else>
        <li
          class="w-1/4 h-5/6"
          v-for="key in Object.keys(eventKeyCode)"
          :key="key">
          <h4 class="-mt-2 mb-2 h-1/5 text-center">event.{{ key }}</h4>
          <p
            class="flex justify-center items-center w-full h-full border border-current shadow-lg rounded dark:shadow-slate-400">
            <span class="text-2xl">{{ eventKeyCode[key] }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { Refresh } from "@/components/icons/SvgIcons";
interface EventKeyCode {
  [key: string]: string;
}

// 存储键盘事件的信息
const eventKeyCode: EventKeyCode = reactive({
  key: "",
  keyCode: "",
  code: "",
});

// 处理键盘事件并获取事件属性
function showKeyCode(e: KeyboardEvent) {
  eventKeyCode.key = e.key;
  eventKeyCode.keyCode = String(e.keyCode);
  eventKeyCode.code = e.code;
}

onMounted(() => window.addEventListener("keyup", showKeyCode));
onUnmounted(() => window.removeEventListener("keyup", showKeyCode));
</script>

<style scoped></style>
