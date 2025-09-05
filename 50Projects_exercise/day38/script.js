const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
    contents[idx].classList.add("show");
    item.classList.add("active");
  });
});

const hideAllContents = () => {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
};

const hideAllItems = () => {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
};
