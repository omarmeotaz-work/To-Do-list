const list = document.getElementById("list");
const add = document.getElementById("add-button");
const itemfield = document.getElementById("input-field");
//add task by click
add.addEventListener("click", function () {
  if (itemfield.value != "") {
    const newItem = document.createElement("li");
    const newbutton = document.createElement("button");
    const newEdit = document.createElement("button");
    newEdit.className = "edit-btn";
    newbutton.className = "del-btn";
    newItem.textContent = itemfield.value;
    newbutton.textContent = "x";
    newEdit.textContent = "Edit";
    newItem.appendChild(newEdit);
    newItem.appendChild(newbutton);
    list.appendChild(newItem);
    edit();
    remove();
    finished();
    itemfield.value = "";
  } else alert("cannot add empty task");
});

//add task by pressing enter
itemfield.addEventListener("keydown", function (input) {
  if (input.key === "Enter" && itemfield.value != "") {
    const newItem = document.createElement("li");
    const newbutton = document.createElement("button");
    const newEdit = document.createElement("button");
    newEdit.className = "edit-btn";
    newbutton.className = "del-btn";
    newItem.textContent = itemfield.value;
    newbutton.textContent = "x";
    newEdit.textContent = "Edit";
    newItem.appendChild(newEdit);
    newItem.appendChild(newbutton);
    list.appendChild(newItem);
    remove();
    finished();
    edit();
    itemfield.value = "";
  }
});
//function to close task
function remove() {
  const button = document.querySelectorAll(".del-btn");
  button.forEach(function (input) {
    input.addEventListener("click", function (e) {
      e.stopPropagation();
      const P = input.parentElement;
      P.remove();
    });
  });
}
//function to mark task as finished
function finished() {
  const item = document.querySelectorAll("li");
  item.forEach(function (input) {
    input.addEventListener("click", function (e) {
      e.stopPropagation();
      input.className = "finished";
    });
  });
}
//function to edit
function edit() {
  const edit = document.querySelectorAll(".edit-btn");
  edit.forEach(function (input) {
    input.addEventListener("click", function (e) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      const pr = prompt("edit your task");
      console.log(edit);
      if (pr != "") {
        const newT = input.parentElement;
        newT.firstChild.textContent = pr;
      } else alert("empty input is invalid");
    });
  });
}

remove();
finished();
edit();
