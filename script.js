const jokeBox = document.getElementById("joke");
const button = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJokeSync() {
  jokeBox.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeBox.textContent = `${item.joke}`;
      jokeBox.classList.add("fade");
    });
}

async function getJokeAsync() {
  jokeBox.classList.remove("fade");
  const data = await fetch(url);
  const item = await data.json();
  jokeBox.textContent = `${item.joke}`;
  jokeBox.classList.add("fade");
}

btn.addEventListener("click", getJokeAsync);
getJokeAsync();
