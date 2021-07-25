window.onload = function () {
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

  let listContainer = document.getElementById("listContainer");

  // Iterating over all TODO list items to create a text node and button
  // within a div. An event listener is attached to the button which
  // will remove the individual div from the main div
  for (let count in todoItems) {
    let todo = createDiv();
    let todoItemName = document.createTextNode(todoItems[count]);
    let button = createButton(todo);

    todo.appendChild(todoItemName);
    todo.appendChild(button);
    listContainer.appendChild(todo);
  }

  function createDiv() {
    let todo = document.createElement("div");
    todo.className = "todo-item";
    return todo;
  }

  function createButton(todo) {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = "Done";

    button.addEventListener("click", function () {
      listContainer.removeChild(todo);

      if (listContainer.childElementCount == 0) {
        document.getElementById("noItems").textContent = "Ooops! List is empty";
      }
    });
    return button;
  }
};
