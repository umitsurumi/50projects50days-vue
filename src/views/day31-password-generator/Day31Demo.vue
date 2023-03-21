<template>
  <div class="flex-center w-full h-screen bg-indigo-800">
    <div
      class="flex flex-col justify-center p-4 m-8 w-80 bg-black/50 text-white rounded-lg shadow shadow-white">
      <h3 class="text-center text-2xl my-4 font-semibold">
        Password Generator
      </h3>
      <div class="relative">
        <input
          class="p-4 w-full h-12 bg-indigo-900 outline-none"
          type="text"
          maxlength="20"
          v-model="password" />
        <Paste
          class="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 p-2 bg-indigo-700 cursor-pointer"
          @click="copyPassword" />
      </div>
      <ul>
        <li
          class="flex justify-between my-4 font-mono"
          v-for="(item, key) in day31password"
          :key="`day31${key}`">
          <h4>{{ item.name }}</h4>
          <input
            class="text-black"
            v-bind="
              typeof item.value === 'number' ? numberAttrs : checkboxAttrs
            "
            v-model="day31password[key].value" />
        </li>
      </ul>
      <button class="w-full h-12 bg-indigo-700" @click="generatePassword">
        Generate Password
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Paste } from "@/components/icons/SvgIcons";
const password = ref("");
interface PasswordSetting {
  name: string;
  value: number | boolean;
  func?: Function;
}
const day31password = reactive<{ [key: string]: PasswordSetting }>({
  len: { name: "Password Length", value: 4 },
  uppercase: {
    name: "Include uppercase letters",
    value: false,
    func: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  },
  lowercase: {
    name: "Include lowercase letters",
    value: false,
    func: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)),
  },
  number: {
    name: "Include numbers",
    value: false,
    func: () => String(Math.floor(Math.random() * 10)),
  },
  symbol: {
    name: "Include symbols",
    value: false,
    func: () => {
      const symbols = "!@#$%^&*(){}[]=<>/,.";
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
  },
});

const numberAttrs = {
  class: "text-center outline-none",
  type: "number",
  min: "4",
  max: "20",
  step: "1",
};
const checkboxAttrs = {
  class: "cursor-pointer",
  type: "checkbox",
};

function generatePassword() {
  const len = day31password.len.value;
  const arr: string[] = [];

  let types = ["uppercase", "lowercase", "number", "symbol"];
  types = types.filter((type) => day31password[type].value);
  if (types.length === 0) {
    password.value = "";
  } else {
    types.forEach((type) => {
      const item = day31password[type];
      if (item.func) {
        arr.push(item.func());
      }
    });
    while (arr.length < len) {
      const randomIndex = Math.floor(Math.random() * types.length);
      const item = day31password[types[randomIndex]];
      if (item.func) {
        arr.push(item.func());
      }
    }
    password.value = arr.join("");
  }
}

function copyPassword() {
  if (password.value === "") {
    return false;
  }
  navigator.clipboard.writeText(password.value);
  alert("Password copied to clipboard!");
}
</script>

<style scoped></style>
