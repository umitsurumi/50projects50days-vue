<template>
  <div class="flex flex-col w-full h-screen bg-slate-500 sm:flex-row">
    <div
      class="relative flex-1 bg-cover bg-right transition-all duration-1000"
      style="background-image: url('./src/assets/images/ps5.jpg')">
      <div
        id="test"
        class="absolute inset-0 flex flex-col justify-center text-center text-white bg-indigo-700/60">
        <h3 class="my-10 text-5xl">Playstation 5</h3>
        <a
          href="#"
          class="block box-border mx-auto mb-4 p-6 w-1/3 border-2 text-xl font-bold hover:bg-indigo-700 hover:border-0"
          style="min-width: 148px"
          >Buy Now</a
        >
      </div>
    </div>
    <div
      class="relative flex-1 bg-cover bg-left transition-all duration-1000"
      style="background-image: url('./src/assets/images/xsx.jpg')">
      <div
        class="absolute inset-0 flex flex-col justify-center text-center text-white bg-black/40">
        <h3 class="my-10 text-5xl">Xbox Series X</h3>
        <a
          href="#"
          class="block box-border mx-auto mb-4 p-6 w-1/3 border-2 text-xl font-bold hover:bg-green-900 hover:border-0"
          style="min-width: 148px"
          >Buy Now</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.flex > div {
  &:hover {
    flex-basis: 40%;
  }
}
</style>
