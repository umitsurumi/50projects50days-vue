h
<template>
  <div class="relative flex-center w-full h-96">
    <Transition name="scale">
      <div class="flex-center flex-col" v-show="countdown !== 0">
        <div class="overflow-hidden">
          <Transition name="rotate">
            <h3
              class="my-4 w-20 text-center text-5xl text-blue-600 origin-bottom"
              v-show="isShow">
              {{ countdown }}
            </h3>
          </Transition>
        </div>
        <p class="text-xl font-bold">Get Ready</p>
      </div>
    </Transition>
    <div class="absolute-center text-center" v-show="countdown === 0">
      <h3 class="my-4 w-20 text-5xl">Go</h3>
      <button
        class="p-1 rounded-md border border-current"
        @click="startCountdown">
        Replay
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
const countdown = ref(0);
const isShow = ref(false);
async function startCountdown() {
  countdown.value = 3;
  isShow.value = true;
  while (countdown.value > 0) {
    await new Promise((res) => setTimeout(res, 1000));
    countdown.value--;
    isShow.value = true;
  }
}

watch(
  () => countdown.value,
  () => setTimeout(() => (isShow.value = false), 500)
);
onMounted(() => startCountdown());
</script>

<style scoped>
.rotate-enter-active {
  animation: goIn 0.5s ease-in-out;
}
.rotate-leave-active {
  animation: goOut 0.5s ease-in-out;
}
@keyframes goIn {
  0% {
    transform: rotate(120deg);
  }

  30% {
    transform: rotate(-20deg);
  }

  60% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
@keyframes goOut {
  0% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(-120deg);
  }
}

.scale-enter-active {
  animation: show 0.2s ease-out;
}
.scale-leave-active {
  animation: hide 0.2s ease-out;
}
@keyframes hide {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
@keyframes show {
  0% {
    transform: scale(0);
  }

  30% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
}
</style>
