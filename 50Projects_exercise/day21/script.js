const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// 执行顺序：dragstart -> dragover -> dragenter -> dragleave -> drop -> dragend
// 填充图类的事件
const dragStart = (e) => {
  e.target.className += " hold";
  setTimeout(() => (e.target.className = "invisible"), 0);
};
const dragEnd = (e) => {
  e.target.className = "fill";
};
// 空白框类的事件
const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = (e) => {
  e.preventDefault();
  e.target.className += " hovered";
};
const dragLeave = (e) => {
  e.target.className = "empty";
};
const dragDrop = (e) => {
  e.target.className = "empty";
  e.target.appendChild(fill);
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});
