window.onload = function () {
  let clicked = []; // To store the button click state. This will be cleared on browser refresh
  const totalStars = 5; // Total stars to be displayed in the UI

  //This will be the main container
  let div = document.getElementById("div");

  // Create 1 div for each star and add it to main div
  for (let i = 1; i <= totalStars; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.className = "white";
    div.appendChild(innerDiv);
  }

  // Iterate through each star div and add 3 listeners - mouseover,mouseout and click
  for (let i = 1; i <= div.childElementCount; i++) {
    if (div.childNodes[i].nodeName == "DIV") {
      mouseOverListener(div, i);

      mouseOutListener(div, i);

      mouseClickListener(div, i);
    }
  }

  // Logic to toggle between yellow and white image
  function mouseOverListener(div, i) {
    div.childNodes[i].addEventListener("mouseover", function () {
      for (let j = div.childElementCount; j > 0; j--) {
        if (j > i) {
          div.childNodes[j].className = "white";
        } else {
          div.childNodes[j].className = "yellow";
        }
      }
    });
  }

  function mouseOutListener(div, i) {
    div.childNodes[i].addEventListener("mouseout", function () {
      for (let j = div.childElementCount; j > 0; j--) {
        if (!clicked.includes(j)) {
          div.childNodes[j].className = "white";
        } else {
          div.childNodes[j].className = "yellow";
        }
      }
    });
  }

  function mouseClickListener(div, i) {
    div.childNodes[i].addEventListener("click", function () {
      clicked = [];
      for (let j = i; j > 0; j--) {
        clicked.push(j);
        div.childNodes[j].className = "yellow";
      }
      for (let j = div.childElementCount; j > 0; j--) {
        if (!clicked.includes(j)) {
          div.childNodes[j].className = "white";
        }
      }
    });
  }
};
