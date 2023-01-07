<template>
  <h2 class="text-2xl">Rotating Navigation</h2>
  <div class="relative overflow-hidden bg-slate-700">
    <!-- 导航栏 -->
    <nav
      class="fixed bottom-0 transition-transform duration-700"
      :class="isRotate ? 'delay-500' : '-translate-x-full'">
      <ul class="mx-4 text-white">
        <li class="flex mb-8">
          <Home class="mr-2" />
          <p>HOME</p>
        </li>
        <li
          class="flex mb-8 transition-all duration-300"
          :class="{ 'ml-2': isRotate }">
          <User class="mr-2" />
          <p>ABOUT</p>
        </li>
        <li
          class="flex mb-8 transition-all duration-300"
          :class="{ 'ml-4': isRotate }">
          <Envelope class="mr-2" />
          <P>CONTACT</P>
        </li>
      </ul>
    </nav>

    <!-- 切换导航栏 -->
    <div
      class="absolute -top-20 -left-20 w-40 h-40 text-white bg-red-400 rounded-full z-10 cursor-pointer transition-transform duration-1000"
      :class="{ '-rotate-90': isRotate }"
      @click="isRotate = !isRotate">
      <XMarked class="absolute bottom-8 left-8 h-8 w-8" />
      <Bars3 class="absolute bottom-8 right-8 h-8 w-8" />
    </div>

    <!-- 正文内容 -->
    <div
      class="px-10 pt-20 bg-white origin-top-left transition-transform duration-1000 dark:bg-black"
      :class="{ '-rotate-20': isRotate }">
      <h3 class="text-3xl font-bold">Article Title</h3>
      <small class="italic">John Smith</small>
      <p class="my-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illo
        obcaecati debitis neque laborum rem! Exercitationem omnis quaerat rem
        quia! Accusantium eligendi fugiat quod et. Tenetur reiciendis mollitia
        explicabo placeat! Ullam cum praesentium cupiditate veritatis molestias,
        perferendis vero? Obcaecati in a reiciendis! Voluptatem ab cupiditate
        ducimus deleniti nemo, molestiae sunt architecto placeat animi
        doloremque. Alias corporis repudiandae ullam eligendi vero? Distinctio
        reiciendis delectus possimus atque quaerat enim voluptatibus ex iure est
        consequatur exercitationem, nulla sapiente maxime ratione explicabo. Et,
        deserunt perferendis. Molestias architecto aliquid vitae sed nostrum
        consequuntur nesciunt aperiam? Aut debitis ea facere, facilis placeat
        illo nemo at nostrum autem omnis aliquid molestiae saepe totam doloribus
        voluptate pariatur, iste hic ab dignissimos. Nihil, corrupti sunt?
        Temporibus totam hic aspernatur?
      </p>
      <h4 class="my-4 text-lg font-semibold">Sub Title</h4>
      <div class="w-full h-96 bg-red-400"></div>
      <p class="my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        animi optio, veritatis dolorem quia error natus expedita rerum
        repudiandae illo veniam quod, voluptatem nulla porro nesciunt. Ab in
        quam a! Optio suscipit, mollitia nisi at praesentium id molestias
        aliquam reprehenderit fugit sit, et nostrum consequuntur est eum
        deleniti rem vero voluptatibus voluptatum modi vel. At quod beatae non
        est soluta. Veritatis repellendus excepturi corporis minima assumenda
        quis mollitia recusandae consequuntur repellat ratione exercitationem
        voluptatem doloremque, unde sint. Consequatur, perferendis autem
        tenetur, repellat ipsam accusantium mollitia natus sapiente et eum amet?
      </p>
      <div class="h-20"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  XMarked,
  Bars3,
  Home,
  User,
  Envelope,
} from "@/components/icons/SvgIcons.vue";
import { ref } from "vue";
const isRotate = ref(false);
</script>

<style lang="scss" scoped></style>
