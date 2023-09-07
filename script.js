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
  if (event.target.textContent === "Delete"  ) {
    eventTarget.closest("li").remove();
  } else if (eventTarget.textContent === "Done") {
    eventTarget.classList.remove("done");
    eventTarget.classList.add("undo");
    eventTarget.textContent = "Undo";
  }
}

AddTask.addEventListener("click", () => {
  addTask();
});

TaskList.addEventListener("click", () => {
  deleteOrCompleteTask(event);
});


