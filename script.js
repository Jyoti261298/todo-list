let input = document.getElementById("task-input");
let task = document.querySelector(".task");

function Add() {
  if (input.value == "") {
    alert("Task cannot be empty");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <input type ="checkbox">`;
    task.appendChild(newEle); //add the new element in the task
    // input.value = ""; // empty's the input field
    newEle.querySelector("input").addEventListener("click", strikeThrough);
    function strikeThrough() {
      if (this.checked) {
        newEle.style.textDecoration = "line-through";
        color = "black";
      } else {
        newEle.style.textDecoration = "none";
      }
    }
  }
}
