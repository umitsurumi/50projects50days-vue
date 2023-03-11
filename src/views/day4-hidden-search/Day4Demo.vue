<template>
  <div class="flex justify-center items-center w-full h-96 bg-purple-700">
    <div class="flex rounded-lg">
      <!-- 应用过渡效果，切换前后都需要指定width属性 -->
      <input
        type="text"
        placeholder="Search…"
        class="h-12 outline-none transition-all duration-300"
        :class="isExpanding ? 'w-52 px-4' : 'w-0'" />
      <Search
        class="w-12 h-12 p-2 bg-white text-black cursor-pointer"
        @click="isExpanding = !isExpanding" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@/components/icons/SvgIcons";
import { ref } from "vue";
const isExpanding = ref(false);
</script>

<style lang="scss" scoped></style>
