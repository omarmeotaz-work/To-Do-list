const list = document.getElementById("list");
const add = document.getElementById("add-button");
const itemfield = document.getElementById("input-field");

//add task by click
add.addEventListener("click", function () {
  if (itemfield.value != "") {
    const newItem = document.createElement("li");
    const newbutton = document.createElement("button");
    newItem.textContent = itemfield.value;
    newbutton.textContent = "x";
    newItem.appendChild(newbutton);
    list.appendChild(newItem);
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
    newItem.textContent = itemfield.value;
    newbutton.textContent = "x";
    list.appendChild(newItem);
    newItem.appendChild(newbutton);
    remove();
    finished();
    itemfield.value = "";
  }
});
//function to close task
function remove() {
  const button = document.querySelectorAll("button");
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

remove();
finished();
