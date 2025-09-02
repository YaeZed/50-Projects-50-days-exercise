const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// 获取所有原始图片
const img = document.querySelectorAll("#imgs img");
const imgCount = img.length;

// 克隆第一张和最后一张图片
const firstImgClone = img[0].cloneNode(true);
const lastImgClone = img[imgCount - 1].cloneNode(true);

// 将克隆的最后一张图片添加到容器开头
imgs.prepend(lastImgClone);
// 将克隆的第一张图片添加到容器末尾
imgs.appendChild(firstImgClone);

// 重新获取所有图片，包括克隆的
const allImgs = document.querySelectorAll("#imgs img");
let idx = 1; // 初始位置从第一张真正的图片开始

// 设置过渡效果和初始位置
imgs.style.transition = "transform 0.4s ease-in-out";
imgs.style.transform = `translateX(${-idx * 500}px)`;

const changeImage = () => {
  imgs.style.transform = `translateX(${-idx * 500}px)`;
};

const run = () => {
  idx++;
  changeImage();
};

let interval = setInterval(run, 2000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

// 监听过渡结束事件，用于无缝切换
imgs.addEventListener("transitionend", () => {
  // 从克隆的第一张图片回到真正的第一张
  if (idx === allImgs.length - 1) {
    imgs.style.transition = "none";
    idx = 1;
    changeImage();
  }
  // 从克隆的最后一张图片回到真正的最后一张
  if (idx === 0) {
    imgs.style.transition = "none";
    idx = allImgs.length - 2;
    changeImage();
  }
  // 恢复过渡效果
  setTimeout(() => {
    imgs.style.transition = "transform 0.4s ease-in-out";
  }, 50);
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});
