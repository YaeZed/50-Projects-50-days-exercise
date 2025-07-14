const insert = document.getElementById("insert");

//获取键盘输入
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class="key">
  <!-- 检查是否为空格键 -->
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
      </div>

      <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>`;
});
