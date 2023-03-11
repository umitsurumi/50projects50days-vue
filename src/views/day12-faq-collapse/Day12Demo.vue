<template>
  <div class="w-full">
    <h3 class="text-center text-3xl font-semibold">
      Frequently Asked Questions
    </h3>
    <div
      class="relative mx-auto my-5 p-6 w-full border border-black border-opacity-25 rounded-xl overflow-hidden transition-all md:w-1/2 dark:border-white"
      :class="{
        'bg-white shadow-lg dark:bg-black dark:shadow-slate-400/50':
          faq.isShowAnswer,
      }"
      v-for="faq in faqList"
      :key="`day12${faq.question}`">
      <div class="relative z-10">
        <h4 class="pr-6 text-lg">{{ faq.question }}</h4>
        <p class="mt-6 text-sm" v-show="faq.isShowAnswer">
          {{ faq.answer }}
        </p>
      </div>
      <button
        class="absolute top-4 right-4 h-8 w-8 p-1 rounded-full z-20"
        :class="{ 'bg-slate-400 text-white': faq.isShowAnswer }"
        @click="faq.isShowAnswer = !faq.isShowAnswer">
        <Down v-show="!faq.isShowAnswer" />
        <XMarked v-show="faq.isShowAnswer" />
      </button>
      <div class="absolute -top-2 left-0" v-show="faq.isShowAnswer">
        <Message
          class="transform-gpu -mt-2 -ml-8 w-28 h-28 text-sky-300/40"
          style="transform: rotateY(180deg)" />
        <Message class="-mt-20 w-28 h-28 text-green-300/40" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Down, XMarked, Message } from "@/components/icons/SvgIcons";

// 问题，回答和是否展开
interface FaqList {
  question: string;
  answer: string;
  isShowAnswer: boolean;
}

const faqList: FaqList[] = reactive([
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
    isShowAnswer: false,
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
    isShowAnswer: false,
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance.",
    isShowAnswer: false,
  },
  {
    question: "How many tickles does it take to tickle an octopus?",
    answer: "Ten-tickles!",
    isShowAnswer: false,
  },
  {
    question: "What is: 1 + 1?",
    answer: "Depends on who are you asking.",
    isShowAnswer: false,
  },
]);
</script>

<style scoped></style>
