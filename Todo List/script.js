const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault(); // Prevent form submission
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    // Create a new list item and append it to the task list
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field after adding the task
  }
}
