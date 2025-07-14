const textarea = document.querySelector("textarea");
const tagsEl = document.querySelector(".tags");
textarea.focus();

textarea.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    setTimeout(() => {
      textarea.value = "";
      randomSelect();
    }, 10);
  }

  createTags(event.target.value);
});

const createTags = (text) => {
  const tags = text
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    //高亮tag
    randomTag.classList.add("highlight");
    setTimeout(() => {
      randomTag.classList.remove("highlight");
    }, 100);
  }, 100);

  setTimeout(() => {
    //停止定时器
    clearInterval(interval);
    //随机选择一个tag高亮
    setTimeout(() => {
      const randomTag = pickRandomTag();
      randomTag.classList.add("highlight");
    }, 100);
  }, 100 * times);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};
