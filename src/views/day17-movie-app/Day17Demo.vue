<template>
  <div
    class="relative w-full h-16 rounded-t-lg bg-slate-300 shadow-md dark:bg-slate-700">
    <div
      class="flex-center absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
      <input
        class="p-4 w-60 h-10 outline-none"
        type="text"
        placeholder="Search"
        v-model="searchKey" />
      <div
        class="absolute right-10 cursor-pointer"
        @click="
          language === 'en-US' ? (language = 'zh-CN') : (language = 'en-US')
        ">
        {{ language === "en-US" ? "EN" : "中" }}
      </div>
      <Search
        class="absolute right-2 hover:cursor-pointer"
        @click="getSearch"
        @keyup.enter="getSearch" />
    </div>
  </div>

  <div class="flex flex-wrap justify-center p-4">
    <div
      class="group/movie relative m-4 w-80 rounded-lg shadow-2xl overflow-hidden"
      v-for="movie in main"
      :key="movie.id">
      <img :src="IMG_PATH + movie.poster_path" :alt="movie.title" />
      <div class="flex justify-between items-center p-4 h-20 font-bold">
        <h4>{{ movie.title }}</h4>
        <h5
          class="px-2 p-1 bg-slate-600 rounded"
          :class="
            movie.vote_average > '8' ? 'text-green-500' : 'text-orange-500'
          ">
          {{ movie.vote_average }}
        </h5>
      </div>
      <div
        class="absolute bg-white w-full bottom-0 translate-y-full group-hover/movie:translate-y-0 transition duration-300 dark:bg-slate-800">
        <h5 class="m-4 text-center text-lg font-bold">
          {{ language === "en-US" ? "Overview" : "简介" }}
        </h5>
        <p class="m-4 px-4 text-center">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Search } from "@/components/icons/SvgIcons";
interface MovieDate {
  id: string;
  title: string;
  vote_average: string;
  poster_path: string;
  overview: string;
}
const main = ref<Array<MovieDate>>();
const searchKey = ref("");
const language = ref("en-US");

const KEY = "83eae716df6c7ad7d5b5cccda62a3afd";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `${BASE_URL}search/movie?api_key=${KEY}&query=`;

async function getMovies(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  main.value = data.results;
}
function getSearch() {
  if (searchKey.value) {
    getMovies(SEARCH_API + searchKey.value + `&language=${language.value}`);
  } else {
    window.location.reload;
  }
}
watch(
  () => language.value,
  () => getMovies(API_URL + `&language=${language.value}`)
);
onMounted(() => getMovies(API_URL));
</script>

<style scoped></style>
