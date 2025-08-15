const sliderContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.children.length;

let activeSlideIndex = 0;

// 这里左侧的slide对应右侧的slide图片的逆置
// 调整左侧的slide对应右边的slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  //获取当前的slide的视口高度
  const slideHeight = sliderContainer.offsetHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * slideHeight
  }px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
};
