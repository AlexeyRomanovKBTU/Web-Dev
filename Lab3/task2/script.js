const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    createTaskItem(taskText);
    taskInput.value = '';
  }
});

function createTaskItem(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  const label = document.createElement('label');
  label.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

