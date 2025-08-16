const toasts = document.querySelector(".toasts");
const btn = document.querySelector(".btn");

const messages = [
  "Hello, World!",
  "How are you today?",
  "What's up?",
  "Nice to see you!",
];

const colors = ["#4caf50", "#2196f3", "#f44336", "#9c27b0"];

btn.addEventListener("click", () => createNotifaction());

const createNotifaction = () => {
  const toastEle = document.createElement("div");
  toastEle.classList.add("toast");
  toastEle.textContent = getMessage().textContent;
  toastEle.style.color = getMessage().color;
  toasts.appendChild(toastEle);
  setTimeout(() => {
    toastEle.remove();
  }, 3000);
};

const getMessage = () => {
  const textContent = messages[Math.floor(Math.random() * messages.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { textContent, color };
};
