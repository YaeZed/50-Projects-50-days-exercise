const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      //左移和上移125像素
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
};
createBoxes();
