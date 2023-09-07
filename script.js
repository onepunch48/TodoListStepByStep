const Task = document.querySelector("#task");
const AddTask = document.querySelector("#add-task");
const TaskList = document.querySelector("#task-list");

function addTask() {
  inputValue = Task.value;
  TaskList.innerHTML += `
  <li>
    <p>${Task.value}</p>
    <div>
      <button class="done">Done</button>
      <button class="delete">Delete</button>
    </div>
  </li>`;
  Task.value = "";
}



function deleteOrCompleteTask(event) {
  const eventTarget = event.target;
  if (event.target.classList == "done") {
    eventTarget.classList.remove("done");
    eventTarget.classList.add("undo");
    eventTarget.textContent = "Undo";
    eventTarget.closest("li").querySelector("p").classList.add("completed");
  } else if (event.target.classList == "undo") {
    eventTarget.classList.remove("undo");
    eventTarget.classList.add("done");
    eventTarget.textContent = "Done";
    eventTarget.closest("li").querySelector("p").classList.remove("completed");

  } else {
    eventTarget.closest("li").remove();
  }
}


AddTask.addEventListener("click", () => {
  addTask();
});

TaskList.addEventListener("click", () => {
  deleteOrCompleteTask(event);
});


