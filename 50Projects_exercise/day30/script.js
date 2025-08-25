const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

const text = "Hello, World!";
let idx = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.textContent = text.slice(0, idx);
  idx++;

  //循环
  if (idx > text.length) idx = 1;

  //递归
  setTimeout(writeText, speed);
};

//监听输入，修改定时器速度
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

writeText();
