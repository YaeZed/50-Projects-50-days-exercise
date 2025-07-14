const audioName = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//对于每一个音频，创建一个button
audioName.forEach((name) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = name;

  //为每个按钮添加点击事件
  btn.addEventListener("click", () => {
    //停止所有音频
    stopPlay();
    //播放对应name的音频
    document.querySelector(`.${name}`).play();
  });

  //添加到id为btn的div元素中
  document.getElementById("btn").appendChild(btn);
});

const stopPlay = () => {
  audioName.forEach((name) => {
    const audio = document.querySelector(`.${name}`);
    //暂停播放并重置
    audio.pause();
    audio.currentTime = 0;
  });
};
