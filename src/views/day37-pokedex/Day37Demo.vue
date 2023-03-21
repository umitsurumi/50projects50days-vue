<template>
  <div class="flex justify-center flex-wrap my-10">
    <div
      class="m-2 p-5 rounded-lg shadow-xl"
      :style="{ background: pokemon.color }"
      v-for="pokemon in pokemon_arr">
      <div class="mx-auto w-32 h-32 bg-white/60 rounded-full">
        <img class="w-full h-full" :src="pokemon.img_url" />
      </div>
      <div class="mt-5 text-center font-serif">
        <span class="px-2 py-1 bg-black/10 rounded-lg">#{{ pokemon.id }}</span>
        <h3 class="my-2 text-xl font-semibold">{{ pokemon.name }}</h3>
        <small class="text-sm">Type:{{ pokemon.type }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
interface pokemon_data {
  name: string;
  id: string;
  img_url: string;
  type: string;
  color: string;
}
const pokemon_arr: pokemon_data[] = reactive([]);
const pokemon_count = 150;
const colors = <{ [key: string]: string }>{
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
async function fetchPokemon() {
  for (let i = 1; i <= pokemon_count; i++) {
    getPokemon(i);
  }
}
async function getPokemon(index: number) {
  const data = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
  ).json();
  const { name, id, types, sprites } = data;
  const poke_types = types.map((type: any) => type.type.name);
  const type = Object.keys(colors).find(
    (item) => poke_types.indexOf(item) > -1
  ) as string;
  pokemon_arr.push({
    name: name[0].toUpperCase() + name.slice(1),
    id: id.toString().padStart(3, "0"),
    img_url: sprites.front_default,
    type,
    color: colors[type],
  });
}
fetchPokemon();
</script>

<style scoped></style>
