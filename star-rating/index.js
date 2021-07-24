window.onload = function () {
  let clicked = []; // To store the button click state. This will be cleared on browser refresh
  const starCount = 5; // Total stars to be displayed in the UI
  const actions = ["mouseover", "mouseout", "click"];
  const starContainer = document.getElementById("starContainer");
  const emojiContainer = document.getElementById("emojiContainer");
  const spanEmoji = document.getElementById("emojiSpan"); // to display one of the below emojis
  const ratings = ["😥", "😌", "😐", "😃", "😎"];

  // Create 1 span for each star and add it to main div
  // Add 3 listeners - mouseover,mouseout and click for each star
  for (let i = 1; i <= starCount; i++) {
    const starSpan = document.createElement("span");
    starSpan.id = i;
    starSpan.textContent = "☆";
    starSpan.style.color = "black";
    starSpan.style.cursor = "pointer";
    starSpan.className = "starSpan";

    actions.forEach((action) => {
      starSpan.addEventListener(action, updateState);
    });
    starContainer.appendChild(starSpan);
  }

  function updateState(event) {
    const activeElementId = Number(event.currentTarget.id);

    if (event.type == "click") {
      clicked = [];
      spanEmoji.textContent = ratings[Math.ceil((activeElementId * 5) / starCount - 1)]; // rounds a number to next largest integer
    }

    for (let starElement of starContainer.children) {
      const elementId = Number(starElement.id);

      if (event.type == "mouseover") {
        if (elementId <= activeElementId) {
          starElement.textContent = "★";
          starElement.style.color = "yellow";
        } else {
          starElement.textContent = "☆";
          starElement.style.color = "black";
        }
      } else if (event.type == "mouseout") {
        if (clicked.includes(elementId)) {
          starElement.textContent = "★";
          starElement.style.color = "yellow";
        } else {
          starElement.textContent = "☆";
          starElement.style.color = "black";
        }
      } else if (event.type == "click") {
        elementId <= activeElementId ? clicked.push(elementId) : null;
      }
    }
  }
};
