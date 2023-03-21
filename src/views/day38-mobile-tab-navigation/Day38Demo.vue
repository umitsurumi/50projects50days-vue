<template>
  <div class="flex-center h-screen bg-purple-400">
    <div
      class="relative my-10 w-[340px] h-[600px] border-4 border-white bg-white rounded-2xl overflow-hidden">
      <div
        class="w-full h-[540px] bg-cover transition-[background-image] duration-500"
        :style="{ backgroundImage: `url(${navIcons[index].page})` }"></div>
      <ul
        class="absolute bottom-0 flex -mt-1 w-full h-16 rounded-b-2xl shadow bg-white">
        <li
          class="flex-center flex-col p-2 w-1/4 cursor-pointer hover:text-purple-800 hover:font-semibold"
          :class="{ 'text-purple-800 font-semibold ': index === i }"
          v-for="(icon, i) in navIcons"
          @click="index = i">
          <component :is="icon.icon" />
          <small class="my-1">{{ icon.name }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, shallowRef } from "vue";
import {
  HouseFill as House,
  Work,
  Book,
  Users,
} from "@/components/icons/SvgIcons";
const index = ref(0);
interface NavPage {
  icon: any;
  name: string;
  page: string;
}
const navIcons = reactive<Array<NavPage>>([
  { icon: shallowRef(House), name: "Home", page: "/images/house.jpg" },
  { icon: shallowRef(Work), name: "Work", page: "/images/work.jpg" },
  { icon: shallowRef(Book), name: "Blog", page: "/images/blog.jpg" },
  { icon: shallowRef(Users), name: "About Us", page: "images/about.jpg" },
]);
</script>

<style scoped></style>
