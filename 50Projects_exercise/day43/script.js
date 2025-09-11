const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".rating-container");
let selectedRating = "Statisfied"; //记录反馈结果

const removeActive = () => {
  // 移除所有评分类的active
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
};

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.textContent;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});
