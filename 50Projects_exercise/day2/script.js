const progress = document.querySelector("#progress");
const PrevBtn = document.querySelector("#prev");
const NextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

//记录active的索引
let currentAvtive = 1;

NextBtn.addEventListener("click", () => {
  currentAvtive++;

  if (currentAvtive > circles.length) {
    currentAvtive = 4;
  }

  update();
});

PrevBtn.addEventListener("click", () => {
  currentAvtive--;

  if (currentAvtive < 1) {
    currentAvtive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentAvtive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //拿到所有含有active类的元素
  const actives = document.querySelectorAll(".active");
  //通过actives的长度来计算进度条的百分比
  const progressPercent =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  //设置进度条的宽度
  progress.style.width = progressPercent;

  if (currentAvtive === 1) {
    PrevBtn.disabled = true;
  } else if (currentAvtive === circles.length) {
    NextBtn.disabled = true;
  } else {
    PrevBtn.disabled = false;
    NextBtn.disabled = false;
  }
};
