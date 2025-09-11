const result = document.getElementById("result");
const filter = document.getElementById("filter");

const listItems = [];

const getData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  //清空列表数据
  result.innerHTML = "";

  //添加新数据
  results.forEach((user) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
    `;
    listItems.push(li);

    result.appendChild(li);
  });
};

getData();

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    // 列表里的innerText是否包含搜索词
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      // 采用hidden来隐藏不匹配的元素
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});
