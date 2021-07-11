window.onload = () => {
  const todoItems = [
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Zustand",
    "NextJS",
    "TypeScript",
  ];

  // A main div is used as a container for all individual divs
  let mainDiv = document.getElementById("container-div");

  // Iterating over all TODO list items to create a text node and button
  // within a div. An event listener is attached to the button which
  // will remove the individual div from the main div
  for (let count in todoItems) {
    let div = createDiv("div");
    let txtNode = document.createTextNode(todoItems[count]);
    let button = createButton(div);

    div.appendChild(txtNode);
    div.appendChild(button);
    mainDiv.appendChild(div);
  }

  function createDiv(divid) {
    let div = document.createElement(divid);
    div.className = "inner-div-class";
    return div;
  }

  function createButton(div) {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = "Done";

    button.addEventListener("click", function () {
      mainDiv.removeChild(div);

      if (mainDiv.childElementCount == 0) {
        mainDiv.appendChild(document.createTextNode("Ooops! List is empty"));
      }
    });
    return button;
  }
};
