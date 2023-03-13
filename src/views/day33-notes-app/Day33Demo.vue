<template>
  <div class="p-4 w-full bg-cyan-300">
    <div class="relative h-10">
      <button
        class="absolute top-1/2 right-4 -translate-y-1/2 flex p-2 text-white bg-lime-500"
        @click="addNote">
        <Add />
        <span>Add Note</span>
      </button>
    </div>
    <div class="flex justify-center flex-wrap">
      <div class="m-8 w-80" v-for="(note, index) in notes">
        <div class="flex items-center justify-end h-8 text-white bg-lime-500">
          <Edited
            class="mr-2 cursor-pointer"
            @click="note.readonly = !note.readonly" />
          <Delete class="mr-2 cursor-pointer" @click="notes.splice(index, 1)" />
        </div>
        <textarea
          class="p-4 w-full h-60 outline-none"
          :class="{ 'resize-none': note.readonly }"
          v-model="notes[index].value"
          :readonly="note.readonly"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edited, Delete, Add } from "@/components/icons/SvgIcons";
import { reactive, watch } from "vue";
const preNotes = localStorage.getItem("day33notes");
const notes = reactive<Array<{ value: string; readonly: boolean }>>(
  preNotes !== null ? JSON.parse(preNotes) : []
);

function addNote() {
  notes.push({ value: "", readonly: false });
}

watch(
  () => notes,
  () => localStorage.setItem("day33notes", JSON.stringify(notes)),
  { deep: true }
);
</script>

<style scoped></style>
