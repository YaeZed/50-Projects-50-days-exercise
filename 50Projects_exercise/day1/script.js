const panels = document.querySelectorAll(".panel");

// Add event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

//移除active类
const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
