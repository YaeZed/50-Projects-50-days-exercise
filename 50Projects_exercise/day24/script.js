// 骨架屏常驻，等待2.5s后，显示内容，移除骨架屏。
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  // 1.移除骨架屏
  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bg_texts.forEach((text) => {
    text.classList.remove("animated-bg-text");
  });
  // 2.显示内容
  header.innerHTML = `<img src="../assets/McLarenSnow.PNG">`;
  profile_img.innerHTML = `<img src="../assets/wildHe.PNG">`;
  title.textContent = "Lorem ipsum dolor sit amet";
  excerpt.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium fugit";
  name.textContent = "YaeZed";
  date.textContent = "Aug 26,2002";
};

setTimeout(getData, 2500);
