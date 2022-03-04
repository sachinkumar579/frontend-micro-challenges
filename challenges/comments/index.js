let replyInd = false; // Reply should work only when a Post has been added

function replyHandler() {
  if (!replyInd) {
    replyInd = true; // set to true indicating no more Reply clicks are possible until a Post has been submitted
    const container = document.getElementById("container");
    let box = document.createElement("div");
    box.className = "reply-box"; // A new box for replies - has a different background

    const nameInpContainer = document.createElement("div"); // container for name field
    const nameInp = document.createElement("input");
    nameInp.placeholder = "Your name";
    nameInp.setAttribute("style", "font-weight:bold");
    nameInpContainer.appendChild(nameInp);

    const commentInpContainer = document.createElement("div"); // container for comments field
    const commentInp = document.createElement("input");
    commentInp.placeholder = "comment";
    commentInpContainer.appendChild(commentInp);

    let postBtnsContainer = document.createElement("div"); // Container Post and Cancel buttons
    const postBtn = document.createElement("button");
    postBtn.textContent = "Post";
    postBtn.addEventListener("click", postHandler);
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", cancelHandler);

    postBtnsContainer = appendChildElements(
      postBtnsContainer,
      postBtn,
      cancelBtn
    );

    box = appendChildElements(
      box,
      nameInpContainer,
      commentInpContainer,
      postBtnsContainer
    );

    container.appendChild(box);

    function cancelHandler() {
      replyInd = false; // We set the indicator to false which will allow Reply clicks
      document.getElementById("container").lastElementChild.remove();
    }

    // Placing this function inside replyHandler because it has many outer variable references
    function postHandler() {
      if (nameInp.value != "" && commentInp.value !== "") {
        replyInd = false; // We set the indicator to false which will allow Reply clicks
        nameInpContainer.remove();
        nameInpContainer.textContent = nameInp.value;
        commentInpContainer.remove();
        commentInpContainer.textContent = commentInp.value;
        nameInpContainer.setAttribute("style", "font-weight:bold");
        postBtn.remove();
        cancelBtn.remove();
        postBtnsContainer.remove();

        const replyBtn = document.createElement("button");
        replyBtn.textContent = "Reply";
        replyBtn.addEventListener("click", replyHandler);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editHandler);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          box.remove();
        });

        // Placing this function inside postHandler because it has many outer variable references
        function editHandler() {
          if (editBtn.textContent === "Edit") {
            const commentInpVal = commentInpContainer.textContent;
            const commentInp = document.createElement("input");
            commentInp.value = commentInpVal;
            commentInpContainer.textContent = "";
            commentInpContainer.appendChild(commentInp);
            replyBtn.disabled = true;
            deleteBtn.disabled = true;
            editBtn.textContent = "Save";
          } else if (
            editBtn.textContent === "Save" &&
            box.childNodes[1].firstChild.value !== ""
          ) {
            const commentInp = document.createElement("div");
            commentInp.textContent = box.childNodes[1].firstChild.value;
            commentInpContainer.firstElementChild.remove();
            commentInpContainer.appendChild(commentInp);

            replyBtn.disabled = false;
            deleteBtn.disabled = false;
            editBtn.textContent = "Edit";
          }
          box = appendChildElements(
            box,
            nameInpContainer,
            commentInpContainer,
            postBtnsContainer
          );
        }

        postBtnsContainer = appendChildElements(
          postBtnsContainer,
          replyBtn,
          editBtn,
          deleteBtn
        );

        box = appendChildElements(
          box,
          nameInpContainer,
          commentInpContainer,
          postBtnsContainer
        );

        container.appendChild(box);
      }
    }
  }
}

function appendChildElements(parent, ...childElements) {
  childElements.forEach((ele) => {
    parent.appendChild(ele);
  });

  return parent;
}

const button = document.getElementById("reply-button");
button.addEventListener("click", replyHandler);
