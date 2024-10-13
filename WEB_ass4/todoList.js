function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('Please enter a task!');
        return;
    }
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = taskInput;
    taskList.appendChild(li);
    document.getElementById('taskInput').value = '';
}
