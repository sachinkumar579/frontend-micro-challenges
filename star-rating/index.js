window.onload = function () {
  let clicked = []; // To store the button click state. This will be cleared on browser refresh
  const starCount = 5; // Total stars to be displayed in the UI
  const actions = ["mouseover", "mouseout", "click"];
  const starContainer = document.getElementById("starContainer"); 
  const emojiContainer = document.getElementById("emojiContainer"); 
  const spanEmoji = document.getElementById("span"); // to display one of the below emojis
  const ratings = ["😥", "😌", "😐", "😃", "😎"];

  // Create 1 span for each star and add it to main div
  // Add 3 listeners - mouseover,mouseout and click for each star
  for (let i = 1; i <= starCount; i++) {
    const starSpan = document.createElement("span");
    console.dir(starSpan);
    starSpan.id = i;
    starSpan.innerText = "☆";
    starSpan.style.color = "black";
    starSpan.style.cursor = "pointer";

    actions.forEach((action) => {
      starSpan.addEventListener(action, updateState);
    });
    starContainer.appendChild(starSpan);
  }

  function updateState(event) {
    const activeElementId = Number(event.currentTarget.id);

    if (event.type == "click") {
      clicked = [];
      spanEmoji.innerText = ratings[activeElementId - 1];
    }

    for (let starElement of starContainer.children) {
      const elementId = Number(starElement.id);

      if (event.type == "mouseover") {
        if (elementId <= activeElementId) {
          starElement.innerText = "★";
          starElement.style.color = "yellow";
        } else {
          starElement.innerText = "☆";
          starElement.style.color = "black";
        }
      } else if (event.type == "mouseout") {
        if (clicked.includes(elementId)) {
          starElement.innerText = "★";
          starElement.style.color = "yellow";
        } else {
          starElement.innerText = "☆";
          starElement.style.color = "black";
        }
      } else if (event.type == "click") {
        elementId <= activeElementId ? clicked.push(elementId) : null;
      }
    }
  }
};
