const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");

let size = 20;
let color = "black";
let isPressed = false;
let x;
let y;

decreaseBtn.addEventListener("click", () => {
  if (size > 1) {
    size--;
    sizeEl.textContent = size;
  }
});

increaseBtn.addEventListener("click", () => {
  size++;
  sizeEl.textContent = size;
});

colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
  console.log("Mouse down at " + x + ", " + y);
});
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};
