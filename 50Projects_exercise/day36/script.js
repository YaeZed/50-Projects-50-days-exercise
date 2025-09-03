const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = (square) => {
  const color = getColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 20px ${color}`;
};

const removeColor = (square) => {
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  //给hover事件添加颜色变化
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}
