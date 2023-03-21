<template>
  <div class="font-serif">
    <div
      class="fixed w-full z-10 transition-[padding] duration-300"
      ref="nav"
      :class="
        isActiveNav
          ? 'bg-slate-50 text-black shadow-lg py-2'
          : 'bg-neutral-900 text-white py-5'
      ">
      <div class="flex justify-between items-center w-full max-w-7xl">
        <h2 class="px-4 text-3xl hover:text-red-700">
          <a href="#">My Website</a>
        </h2>
        <ul class="flex">
          <li><a href="#" class="px-4 text-red-700">Home</a></li>
          <li>
            <a href="#" class="px-4 transition-colors hover:text-red-700"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="px-4 transition-colors hover:text-red-700"
              >Services</a
            >
          </li>
          <li>
            <a href="#" class="px-4 transition-colors hover:text-red-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative text-white text-center bg-cover h-screen"
      style="
        background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
      ">
      <div class="w-full h-full bg-black/50 -z-10"></div>
      <div class="absolute-center w-full max-w-7xl">
        <h2 class="text-4xl -mt-5 mb-5 font-semibold">Welcome To My Website</h2>
        <p class="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </div>
    </div>

    <section class="container mx-auto p-5">
      <h3 class="my-5 text-2xl font-semibold">Content One</h3>
      <p class="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
        quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
        officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
        modi dolorem sit architecto, voluptate magni sunt unde est quas?
        Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
        libero laboriosam ab eligendi omnis delectus earum labore, placeat
        officiis sint illum rem voluptas ipsum repellendus iste eius recusandae
        quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
        iste dolorum obcaecati minus odio eligendi!
      </p>

      <h3 class="my-5 text-2xl font-semibold">Content Two</h3>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        provident nostrum possimus inventore nisi laboriosam consequatur modi
        nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
        provident, voluptates illo odio nostrum minima beatae similique a sint
        sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
        quae iste aperiam hic cumque repellat?
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const nav = ref();
const isActiveNav = ref(false);
const changNavBg = () => {
  if (window.scrollY > nav.value.offsetHeight + 100) {
    isActiveNav.value = true;
  } else {
    isActiveNav.value = false;
  }
};
onMounted(() => window.addEventListener("scroll", changNavBg));
onUnmounted(() => window.removeEventListener("scroll", changNavBg));
</script>

<style scoped></style>
