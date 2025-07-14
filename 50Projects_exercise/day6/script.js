const boxs = document.querySelectorAll(".box");
console.log(boxs);

const checkBoxs = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
checkBoxs();
window.addEventListener("scroll", checkBoxs);
