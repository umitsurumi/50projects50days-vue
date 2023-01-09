<template>
  <ul class="flex flex-wrap justify-around p-4">
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
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProjectStore } from "@/stores/projects";
const router = useRouter();
const projects = useProjectStore().projects;
</script>

<style lang="scss" scoped>
.project-card {
  @apply relative w-full h-56 mb-8 rounded-2xl shadow-xl hover:cursor-pointer sm:w-2/5 sm:h-64 2xl:w-1/6 2xl:h-52 2xl:mr-2;
  &:hover div::after {
    width: 100%;
  }
}
.project-title {
  @apply absolute w-full h-16 px-4 bottom-0 text-zinc-50 bg-gray-500 bg-opacity-40 rounded-b-2xl text-2xl;
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
