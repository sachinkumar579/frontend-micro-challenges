window.onload = function () {
  let clicked = []; // To store the button click state. This will be cleared on browser refresh
  const starCount = 5; // Total stars to be displayed in the UI
  const actions = ["mouseover", "mouseout", "click"];
  const div = document.getElementById("div"); //This will be the container for stars
  const emojiDiv = document.getElementById("emojiDiv"); // Div for emojis

  // Clear everything in the UI
  for (let emojiChild of emojiDiv.children) {
    emojiChild.style.display = "none";
  }

  // Create 1 div for each star and add it to main div
  // Add 3 listeners - mouseover,mouseout and click for each star
  for (let i = 1; i <= starCount; i++) {
    const starDiv = document.createElement("div"); 
    starDiv.id = i;
    starDiv.className = "white";
    actions.forEach((action) => {
      starDiv.addEventListener(action, updateState); 
    });
    div.appendChild(starDiv);
  }

  function updateState(event) {
    const activeElementId = Number(event.currentTarget.id);

    if (event.type == "click") {
      clicked = [];
      for (let emojiChild of emojiDiv.children) {
        emojiChild.id == "star" + activeElementId
          ? (emojiChild.style.display = "block")
          : (emojiChild.style.display = "none");
      }
    }

    for (let element of div.children) {
      const elementId = Number(element.id);
      switch (event.type) {
        case "mouseover":
          elementId <= activeElementId
            ? (element.className = "yellow")
            : (element.className = "white");
          break;
        case "mouseout":
          clicked.includes(elementId)
            ? (element.className = "yellow")
            : (element.className = "white");
          break;
        case "click":
          elementId <= activeElementId ? clicked.push(elementId) : null;
          break;
      }
    }
  }
};
