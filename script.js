document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    taskList.appendChild(newTask);
    document.getElementById('new-task').value = '';
});