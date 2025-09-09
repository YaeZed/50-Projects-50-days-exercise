const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9) {
      // 保证每一位都是个位数
      codes[idx].value = "";
      // 采用极短的时间间隔函数，光标定位到下一个输入框
      setTimeout(() => {
        if (idx === codes.length - 1) return;
        codes[idx + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      codes[idx].value = "";
      setTimeout(() => {
        if (idx === 0) return;
        codes[idx - 1].focus();
      }, 10);
    }
  });
});
