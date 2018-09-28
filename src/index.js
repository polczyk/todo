import Todo from './todo.js';

const taskInput = document.querySelector('#task-input');
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') 
    handleButtonClick(e);
});

const button = document.querySelector('#button');
button.addEventListener('click', e => handleButtonClick(e));

const todoList = document.querySelector('#todo-list');

const todo = new Todo(todoList);

function handleButtonClick(e) {
  if (taskInput.value.length === 0)
    return;

  todo.addTask(taskInput.value);
}
