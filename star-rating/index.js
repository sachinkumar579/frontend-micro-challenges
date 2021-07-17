window.onload = function () {
  let clicked = []; // To store the button click state. This will be cleared on browser refresh
  const starCount = 5; // Total stars to be displayed in the UI

  //This will be the main container
  let div = document.getElementById("div");

  // Create 1 div for each star and add it to main div
  for (let i = 1; i <= starCount; i++) {
    let starDiv = document.createElement("div");
    starDiv.id = i;
    starDiv.className = "white";
    div.appendChild(starDiv);
  }

  // Iterate through each star div and add 3 listeners - mouseover,mouseout and click
  for (let activeElement of div.children) {
    activeElement.addEventListener("mouseover", updateState);
    activeElement.addEventListener("mouseout", updateState);
    activeElement.addEventListener("click", updateState);

    function updateState(event) {
      if (event.type == "click") clicked = [];

      for (let element of div.children) {
        toggleImages(
          event,
          element,
          parseInt(element.id),
          parseInt(activeElement.id)
        );
      }
    }
  }

  function toggleImages(event, element, elementId, activeElementId) {
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
};
