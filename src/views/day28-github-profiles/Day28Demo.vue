<template>
  <div class="flex flex-col items-center my-20">
    <div class="w-full h-20 md:w-2/3">
      <input
        class="w-full h-full outline-none p-8 text-2xl bg-purple-500/30 shadow-lg rounded-2xl"
        type="text"
        placeholder="Search a Github User"
        v-model="user"
        @keyup.enter="getUser" />
    </div>
    <div
      class="my-4 p-4 w-full bg-purple-500/30 rounded-2xl shadow-xl md:w-3/4"
      v-show="showInfo">
      <div class="flex-center p-10" v-if="userInfo">
        <div class="mr-10 w-40 h-40 rounded-full overflow-hidden">
          <img :src="userInfo.avatar_url" :alt="userInfo.name" />
        </div>
        <div class="flex-1">
          <h4 class="text-3xl font-bold mb-4">
            {{ userInfo.name || userInfo.id }}
          </h4>
          <h4 class="text-xl mb-4">{{ userInfo.bio }}</h4>
          <div class="flex justify-between mb-4">
            <p>{{ userInfo.followers }}<span>Followers</span></p>
            <p>{{ userInfo.following }}<span>Following</span></p>
            <p>{{ userInfo.public_repos }}<span>Repos</span></p>
          </div>
          <ul class="flex flex-wrap" v-if="reposInfo">
            <li
              class="p-2 my-2 mr-2 bg-blue-700/70 rounded-md"
              v-for="repo in reposInfo">
              <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="h-48 leading-[12rem] text-center text-3xl" v-else>
        No profile with this username
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface UserInfo {
  name: string;
  avatar_url: string;
  id: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: string;
}
interface ReposInfo {
  html_url: string;
  name: string;
}
const user = ref("");
const userInfo = ref<UserInfo>();
const showInfo = ref(false);
const reposInfo = ref<Array<ReposInfo>>([]);

const API_URL = "https://api.github.com/users/";
async function getUser() {
  const data = await fetch(API_URL + user.value);
  showInfo.value = true;
  userInfo.value = undefined;
  if (data.status !== 404) {
    userInfo.value = (await data.json()) as UserInfo;
    getRepos(userInfo.value.name);
  }
}
async function getRepos(username: string) {
  const data = await fetch(API_URL + username + "/repos?sort=created");
  reposInfo.value = [];
  if (data.status !== 404) {
    reposInfo.value = await data.json();
    reposInfo.value = reposInfo.value.slice(0, 5);
  }
}
</script>

<style scoped></style>
