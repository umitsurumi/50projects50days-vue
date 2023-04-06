<template>
  <div class="w-full p-8">
    <div class="w-full text-center border-b-2 border-dashed border-current">
      <h1 class="text-2xl">50 Projects in 50 Days</h1>
      <p class="flex-center my-4 h-10">
        Vue写法练习，原始代码仓库见：
        <a
          class="p-1 rounded hover:text-white hover:bg-pink-500 dark:hover:bg-sky-700"
          href="https://github.com/bradtraversy/50projects50days">
          <PaperPlane />
        </a>
      </p>
      <p class="my-4">
        原项目采用HTML+CSS+JavaScript写法，适合还没有学习框架的新人进行练习。<br />这里是采用Vue3进行，目的是为了熟悉和练习Vue3的写法。
      </p>
    </div>
    <ul class="flex flex-wrap justify-center">
      <li
        class="project-card"
        v-for="project in projects"
        :key="project.title"
        @click="router.push(`/day${project.day}`)">
        <div class="project-title">
          <p>{{ project.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProjectStore } from "@/stores/projects";
import { PaperPlane } from "./icons/SvgIcons";

const router = useRouter();
const projects = useProjectStore().projects;
</script>

<style lang="scss" scoped>
.project-card {
  @apply relative m-8 w-full h-56 rounded-lg  shadow-lg  hover:cursor-pointer sm:w-80 sm:h-60 dark:shadow-white;
  &:hover div::after {
    width: 100%;
  }
}
.project-title {
  @apply absolute w-full h-16 px-4 bottom-0 text-white bg-pink-500/50 rounded-b-lg text-2xl dark:bg-sky-700/50;
  p {
    @apply w-full h-10  truncate;
    line-height: 3rem;
  }
  &::after {
    content: "";
    position: relative;
    top: 0;
    width: 0;
    bottom: 0;
    display: block;
    height: 3px;
    border-radius: 3px;
    background-color: rgb(250, 250, 250);
    transition: all 1s linear;
  }
}
</style>
