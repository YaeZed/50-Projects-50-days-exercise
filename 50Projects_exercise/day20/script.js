const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 点击位置的视口坐标
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    // 按钮的位置坐标
    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;
    // console.log(buttonLeft, buttonTop);

    // 点击位置相对于按钮的坐标，按钮内部坐标，通过这个坐标来创建span动画元素
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    // 创建span动画元素
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = `${xInside}px`;
    circle.style.top = `${yInside}px`;
    e.target.appendChild(circle);

    // 清除创建的span
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
