const jokeEle = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const getJoke = async () => {
  console.log(111);
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  console.log(data);

  jokeEle.textContent = data.joke;
};
getJoke();
jokeBtn.addEventListener("click", getJoke);
