const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

//通过计算两次点击的时间差来判断是否为双击事件
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      //两次时间差小于800ms，触发双击函数
      createHeart(e);
      clickTime = 0;
      //双击次数加1
      times.innerHTML = ++timesClicked;
    } else {
      //否则重置clickTime
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fa", "fa-heart");

  //点击位置相对于浏览器视口的位置
  const x = e.clientX;
  const y = e.clientY;
  //   console.log(x, y);

  //事件目标元素相当于其父容器的位置
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  //   console.log(leftOffset, topOffset);

  //点击位置在元素内的位置
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  //   console.log(xInside, yInside);

  //设置heart的位置
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  //添加到元素中
  loveMe.appendChild(heart);

  //间隔一秒后移除heat元素
  setTimeout(() => {
    heart.remove();
  }, 1000);
};
