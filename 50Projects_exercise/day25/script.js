const nav = document.querySelector(".nav");

const fixNav = () => {
  // 通过对比当前页面的滚动高度和导航栏的高度，来决定是否添加 active 类
  console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

window.addEventListener("scroll", () => fixNav());
