function UpdateCards() {
  const shapes = ["circle", "square", "parallelogram"];
  const shape = document.getElementById("shape");

  const card = document.getElementById("card");
  card.addEventListener("click", flip);

  function flip(event) {
    const shapeNum = Math.round(Math.random() * 2);

    const element = event.currentTarget;
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }

    shape.className = shapes[shapeNum];
  }
}

new UpdateCards();
