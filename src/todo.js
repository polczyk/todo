import Task from './task.js';

class Todo {
  constructor(ul) {
    this.nextId = 0;
    this.tasks = [];
    this.ul = ul;
  }

  addTask(taskName) {
    const task = new Task(taskName);
    task.id = this.nextId;
    this.tasks.push(task);
    task.remove = this.removeTask.bind(this);

    this.nextId++;
    this.ul.appendChild(task.element);
  }

  removeTask(task) {
    const id = this.tasks.indexOf(task);
    this.tasks.splice(id, 1);
    this.ul.removeChild(task.element);
  }

  displayTasks() {
    this.ul.innerHTML = '';
    this.tasks.forEach((task) => {
      console.log(task);
      const listItem = task.element;
      this.ul.appendChild(listItem);
    });
  }
}

export default Todo;
