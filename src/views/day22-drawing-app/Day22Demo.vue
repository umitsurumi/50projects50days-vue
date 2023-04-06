<template>
  <div class="w-full">
    <div
      class="flex items-center justify-between w-full h-10 text-black bg-blue-900">
      <div class="flex items-center">
        <input
          :class="brush.width > 1 ? 'cursor-pointer' : 'cursor-not-allowed'"
          type="button"
          value="-"
          @click="brush.width > 1 ? brush.width-- : false" />
        <input type="text" v-model="brush.width" />
        <input
          :class="brush.width < 30 ? 'cursor-pointer' : 'cursor-not-allowed'"
          type="button"
          value="+"
          @click="brush.width < 30 ? brush.width++ : false" />
        <input type="color" v-model="brush.color" />
      </div>
      <div class="mx-1 bg-slate-200 cursor-pointer">
        <XMarked
          @click="
            ctx !== null
              ? ctx.clearRect(
                  0,
                  0,
                  canvasObj.canvas.width,
                  canvasObj.canvas.height
                )
              : false
          " />
      </div>
    </div>
    <canvas
      class="w-full h-[calc(100vh-200px)] min-h-[300px] cursor-cell border border-black"
      id="canvas"
      :width="canvasObj.width"
      :height="canvasObj.height"
      @mousedown="drawStart"
      @mouseup="drawEnd"
      @mousemove="draw"></canvas>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { XMarked } from "@/components/icons/SvgIcons";
let ctx: CanvasRenderingContext2D | null = null;
interface canvasObj {
  canvas: any;
  width: number;
  height: number;
}
const canvasObj: canvasObj = reactive({
  canvas: null,
  width: 0,
  height: 0,
});
const brush = reactive({
  isDrawing: false,
  width: 1,
  color: "#000000",
  x: 0,
  y: 0,
});

function drawStart(e: MouseEvent) {
  brush.isDrawing = true;
  brush.x = e.offsetX;
  brush.y = e.offsetY;
}
function drawEnd(e: MouseEvent) {
  brush.isDrawing = false;
  brush.x = 0;
  brush.y = 0;
}

function draw(e: MouseEvent) {
  if (brush.isDrawing) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(brush.x, brush.y, x2, y2);
    brush.x = x2;
    brush.y = y2;
  }
  function drawCircle(x: number, y: number) {
    if (ctx !== null) {
      ctx.beginPath();
      ctx.arc(x, y, brush.width, 0, Math.PI * 2);
      ctx.fillStyle = brush.color;
      ctx.fill();
    }
  }
  function drawLine(x1: number, y1: number, x2: number, y2: number) {
    if (ctx !== null) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = brush.color;
      ctx.lineWidth = brush.width * 2;
      ctx.stroke();
    }
  }
}
function updateCanvas() {
  canvasObj.width = canvasObj.canvas.offsetWidth;
  canvasObj.height = canvasObj.canvas.offsetHeight;
}
onMounted(() => {
  canvasObj.canvas = document.getElementById("canvas");
  ctx = canvasObj.canvas.getContext("2d");
  updateCanvas();
  window.addEventListener("resize", updateCanvas);
});
onUnmounted(() => window.removeEventListener("resize", updateCanvas));
</script>

<style scoped>
input {
  @apply mx-1 w-6 h-6 text-center  bg-slate-200;
}
</style>
