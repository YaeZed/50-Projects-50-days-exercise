const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Enter") {
    search.classList.remove("active");
  }
});
