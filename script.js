const Task = document.querySelector("#task");
const AddTask = document.querySelector("#add-task");
const TaskList = document.querySelector("#task-list");

function addTask() {
  inputValue = Task.value;
  TaskList.innerHTML += `
  <li>
    <p>${Task.value}</p>
    <div>
      <button>Done</button>
      <button>Delete</button>
    </div>
  </li>`;
  Task.value = "";
}

function deleteTask(event) {
  const eventTarget = event.target;
  console.log(eventTarget);
}

AddTask.addEventListener("click", () => {
  addTask();
});

TaskList.addEventListener("click", () => {
  deleteTask(event);
});
