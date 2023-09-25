const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#ffdd00";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

let direction = true;

const draw = (e) => {
  if (!isDrawing) return; //stop fn from running when they are not moused down

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue >= 360 ? hue = 0 : hue ++;

  ctx.lineWidth >= 500 || ctx.lineWidth <= 1 ? direction = !direction: direction;

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
};

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
