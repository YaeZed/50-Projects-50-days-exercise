const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

// slides的index变量
let activeSlide = 0;

const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
// 初始化背景图片
setBgToBody();

const setActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
};

leftBtn.addEventListener("click", () => {
  if (activeSlide === 0) {
    activeSlide = slides.length - 1;
  } else {
    activeSlide--;
  }
  setBgToBody();
  setActiveSlide();
});

rightBtn.addEventListener("click", () => {
  if (activeSlide === slides.length - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
  setBgToBody();
  setActiveSlide();
});
