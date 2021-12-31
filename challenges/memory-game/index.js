let containerBox = document.getElementById("containerBox");
let button = document.getElementById("button");
let spanScore = document.getElementById("score");
let spanHighScore = document.getElementById("highScore");
let children = containerBox.childNodes;
let fragment = document.createDocumentFragment();
const totalBoxes = 5;
let state = [];
let clicked = [];
let count = 1;
let isUpdating = false;
let match = true;
let score = 0;
let highScore = 0;

function updateBox() {
  if (state.length < count) {
    isUpdating = true;
    let randomNum = Math.floor(Math.random() * totalBoxes);
    state.push(randomNum.toString());
    document.getElementById(randomNum).style.backgroundColor = "blue";
    setTimeout(() => {
      document.getElementById(randomNum).style.backgroundColor = "gray";
    }, 500);
  } else {
    clicked = [];
    isUpdating = false;
    count += 1;
    console.log(state);
    clearInterval(blink);
  }
}

function compareStates(event) {
  if (!isUpdating) {
    document.getElementById(event.target.id).style.backgroundColor = "blue";
    setTimeout(() => {
      document.getElementById(event.target.id).style.backgroundColor = "gray";
    }, 200);

    clicked.push(event.target.id);
    for (let i = 0; i < clicked.length; i++) {
      if (clicked[i] != state[i]) {
        match = false;
      }
    }

    if (!match) {
      button.disabled = false;
      score = 0;
      state = [];
      clicked = [];
      count = 1;
      spanScore.textContent = score;
    } else if (match == true && clicked.length == state.length) {
      score += 1;
      spanScore.textContent = score;
      if (score > Number(spanHighScore.textContent))
        spanHighScore.textContent = score;
      state = [];
      clicked = [];
      blink = setInterval(updateBox, 1000);
    }
  }
}

for (let i = 0; i < totalBoxes; i++) {
  let div = document.createElement("div");
  div.id = i;
  div.className = "box";

  div.addEventListener("click", compareStates);
  fragment.appendChild(div);
}

containerBox.appendChild(fragment);

button.addEventListener("click", function () {
  button.disabled = true;
  state = [];
  clicked = [];
  count = 1;
  isUpdating = false;
  match = true;
  score = 0;
  blink = setInterval(updateBox, 1000);
});
