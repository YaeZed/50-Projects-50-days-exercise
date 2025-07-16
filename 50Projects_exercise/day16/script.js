const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const liters = document.getElementById("liters");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCup(idx));
});

const highlightCup = (idx) => {
  smallCups.forEach((cup, idx2) => {
    if (idx2 === idx) {
      cup.classList.toggle("full");
    }
  });

  updateBigCup();
};

const updateBigCup = () => {
  // 获取满杯的数量
  const fullCupsLength = document.querySelectorAll(".cup-small.full").length;
  console.log(fullCupsLength);
  // percentage的显隐
  if (fullCupsLength === 0) {
    percentage.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
  }
  // remanied的显隐
  if (fullCupsLength === 8) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = "100%";
  }

  // 计算remained liters
  liters.textContent = 2 - fullCupsLength * 0.25 + "L";
  // 计算percentage
  const percentageNum = (fullCupsLength / 8) * 100;
  percentage.textContent = percentageNum + "%";
  percentage.style.height = percentageNum + "%";
};
