const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multifly';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // ctx.lineWidth = hue;
  // console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
