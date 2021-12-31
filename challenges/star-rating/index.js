let clicked = []; // To store the button click state. This will be cleared on browser refresh
const starCount = 5; // Total stars to be displayed in the UI
const actions = ["mouseover", "mouseout", "click"];
const starContainer = document.getElementById("starContainer");
const emojiContainer = document.getElementById("emojiContainer");
const emoji = document.getElementById("emoji"); // to display one of the below emojis
const ratings = ["😥", "😌", "😐", "😃", "😎"];

// Create 1 span for each star and add it to main div
// Add 3 listeners - mouseover,mouseout and click for each star
for (let i = 1; i <= starCount; i++) {
  const star = document.createElement("span");
  star.id = i;
  star.className = "star-white";

  actions.forEach((action) => {
    star.addEventListener(action, updateState);
  });
  starContainer.appendChild(star);
}

function updateState(event) {
  const activeElementId = Number(event.currentTarget.id);

  if (event.type == "click") {
    clicked = [];
    emoji.textContent =
      ratings[Math.ceil((activeElementId * 5) / starCount - 1)]; // rounds a number to next largest integer
  }

  for (let starElement of starContainer.children) {
    const elementId = Number(starElement.id);
    switch (event.type) {
      case "mouseover":
        elementId <= activeElementId
          ? (starElement.className = "star-yellow")
          : (starElement.className = "star-white");
        break;
      case "mouseout":
        clicked.includes(elementId)
          ? (starElement.className = "star-yellow")
          : (starElement.className = "star-white");
        break;
      case "click":
        elementId <= activeElementId ? clicked.push(elementId) : null;
        break;
    }
  }
}
