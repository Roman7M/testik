const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const tasksTabButton = document.getElementById("tasksTabBtn");
const notesTabButton = document.getElementById("notesTabBtn");
const tasksTab = document.getElementById("tasksTab");
const notesTab = document.getElementById("notesTab");

tasksTabButton.onclick = function () {
  tasksTab.classList.add("active");
  notesTab.classList.remove("active");

  tasksTabButton.classList.add("active");
  notesTabButton.classList.remove("active");
};

notesTabButton.onclick = function () {
  notesTab.classList.add("active");
  tasksTab.classList.remove("active");

  notesTabButton.classList.add("active");
  tasksTabButton.classList.remove("active");
};


addButton.onclick = function () {
  const text = input.value;
  if (text === "") return;

  const item = document.createElement("li");

  
  const taskText = document.createElement("span");
  taskText.textContent = text;

  
  taskText.onclick = function () {
    item.classList.toggle("completed");
  };

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";

  deleteBtn.onclick = function (event) {
    item.remove();
  };

  item.appendChild(taskText);
  item.appendChild(deleteBtn);
  list.appendChild(item);

  input.value = ""; 
};
