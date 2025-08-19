const APIURL = "https://api.github.com/users";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const createUsetCard = (data) => {
  const cardHTML = `
  <div class="card">
        <div>
          <img
            src="${data.avatar_url}"
            alt="${data.login}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${data.login}</h2>
          <p>
            ${data.bio ? data.bio : "user is lazy and there is no bio"}
          </p>

          <ul>
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Following</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            
          </div>
        </div>
      </div>
  `;
  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");
  //对前5个repo创建div节点并添加到reposEl中
  repos.slice(0, 6).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
};

const getRepos = async (username) => {
  const { data } = await axios.get(`${APIURL}/${username}/repos`);
  //   console.log(data);
  addReposToCard(data);
};

const getUser = async (username) => {
  const { data } = await axios.get(`${APIURL}/${username}`);
  //   console.log(data);
  //调用createUsetCard函数创建卡片
  createUsetCard(data);
  //调用getRepos函数获取用户的仓库信息
  getRepos(username);
};

//form提交
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = search.value;

  if (username) {
    getUser(username);
    search.value = "";
  }
});
