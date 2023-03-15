<template>
  <div class="flex-center w-full h-96">
    <div
      class="p-5 border-4 border-black rounded-lg text-center dark:border-white">
      <h3 class="font-bold text-2xl font-serif">Verify Your Account</h3>
      <p class="text-sm my-4">
        We emailed you the six digit code to cool_guy@email.com Enter the
        code<br />
        below to confirm your email address.
      </p>
      <div>
        <input
          class="m-2 w-20 h-24 text-center text-6xl border-slate-400 font-light border-2 rounded-md appearance-none outline-none dark:bg-slate-800 focus:ring-2 focus:border-none focus:ring-black dark:focus:ring-white valid:border-sky-500 valid:shadow-lg"
          type="number"
          placeholder="0"
          min="0"
          max="9"
          required
          :ref="addCode"
          v-for="i in 6"
          @keydown="handleInput($event, i)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const codes: any[] = [];

function addCode(el: any) {
  codes.push(el);
}

function handleInput(e: KeyboardEvent, i: number) {
  if (e.key >= "0" && e.key < "9") {
    codes[i - 1].value = "";
    codes[i - 1].classList;
    setTimeout(() => (i < 6 ? codes[i].focus() : codes[5].blur()));
  } else if (e.key === "Backspace") {
    setTimeout(() => (i - 2 >= 0 ? codes[i - 2].focus() : codes[0].blur()));
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
