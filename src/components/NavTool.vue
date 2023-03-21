<template>
  <div class="fixed bottom-2 right-2 text-white">
    <Transition name="house">
      <button
        class="absolute -left-6 -top-6 flex-center w-8 h-8 rounded-full bg-pink-600/40 dark:bg-sky-700/40"
        v-show="isShowNav"
        @click="router.push('/')">
        <House />
      </button>
    </Transition>
    <Transition name="pre">
      <button
        class="absolute -left-10 top-8 flex-center w-8 h-8 rounded-full bg-pink-600/40 dark:bg-sky-700/40"
        :class="{ 'cursor-not-allowed': index === 0 }"
        v-show="isShowNav"
        @click="router.push(index > 1 ? `day${index - 1}` : '/')">
        <Pre />
      </button>
    </Transition>
    <Transition name="next">
      <button
        class="absolute left-8 -top-10 flex-center w-8 h-8 rounded-full bg-pink-600/40 dark:bg-sky-700/40"
        :class="{ 'cursor-not-allowed': index === 50 }"
        v-show="isShowNav"
        @click="router.push(index < 50 ? `/day${index + 1}` : '/day50')">
        <Next />
      </button>
    </Transition>
    <button
      class="w-16 h-16 rounded-full font-serif bg-pink-600/80 transition-all hover:outline hover:outline-pink-400/50 dark:hover:outline-sky-500/50 dark:bg-sky-700/40"
      @click="handleClick">
      导航
    </button>
  </div>
</template>

<script setup lang="ts">
import { House, Next, Pre } from "./icons/SvgIcons";
import { useRouter } from "vue-router";
const { index, isShowNav, changeNav } = defineProps({
  index: { type: Number, required: true },
  isShowNav: { type: Boolean, required: true },
  changeNav: { type: Function, required: true },
});
const handleClick: (payload: MouseEvent) => void = changeNav as (
  payload: MouseEvent
) => void;
const router = useRouter();
</script>

<style scoped>
.house-enter-active,
.house-leave-active {
  transition: all 0.5s ease;
}
.house-enter-from,
.house-leave-to {
  opacity: 0;
  transform: translate(100%, 100%) rotate(360deg);
}

.pre-enter-active,
.pre-leave-active {
  transition: all 0.5s ease;
}
.pre-enter-from,
.pre-leave-to {
  opacity: 0;
  transform: translate(200%, -50%) rotate(360deg);
}

.next-enter-active,
.next-leave-active {
  transition: all 0.5s ease;
}
.next-enter-from,
.next-leave-to {
  opacity: 0;
  transform: translate(-50%, 200%) rotate(360deg);
}
</style>
