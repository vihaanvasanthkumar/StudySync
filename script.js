function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = () => li.classList.toggle("completed");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.float = "right";
  removeBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

function addGoal() {
  const goalInput = document.getElementById("goalInput");
  const goalList = document.getElementById("goalList");

  if (goalInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = goalInput.value;
  goalList.appendChild(li);
  goalInput.value = "";
}

function downloadPlan() {
  const tasks = Array.from(document.querySelectorAll("#taskList li")).map(li => li.textContent.replace("❌", ""));
  const goals = Array.from(document.querySelectorAll("#goalList li")).map(li => li.textContent);
  const schedule = document.getElementById("scheduleInput").value;

  const data = `TASKS:\n${tasks.join("\n")}\n\nGOALS:\n${goals.join("\n")}\n\nSCHEDULE:\n${schedule}`;
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "My_Study_Plan.txt";
  a.click();
  URL.revokeObjectURL(url);
}