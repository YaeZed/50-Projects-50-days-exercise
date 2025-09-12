const range = document.querySelector("#range");

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = range.nextElementSibling; //80px

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  //去掉px并转成数字
  const num_width = +range_width.replace("px", "");
  const num_label_width = +label_width.replace("px", "");

  const max = +e.target.max;
  const min = +e.target.min;

  //游标中心相对于range的位置
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.textContent = value;
});
