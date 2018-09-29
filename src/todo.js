import Task from './task.js';

class Todo {
  constructor(ul) {
    this.nextId = 0;
    this.tasks = [];
    this.ul = ul;

    this.fillTasks(ul);
  }

  addTask(taskName, id = 0, ) {
    const task = new Task(taskName);
    task.id = this.nextId;
    this.tasks.push(task);
    task.remove = this.removeTask.bind(this);

    this.nextId++;
    this.ul.appendChild(task.element);

    this.saveToStorage();
  }

  removeTask(task) {
    const id = this.tasks.indexOf(task);
    this.tasks.splice(id, 1);
    this.ul.removeChild(task.element);

    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.ul.innerHTML = '';
    this.tasks.forEach((task) => {
      console.log(task);
      const listItem = task.element;
      this.ul.appendChild(listItem);
    });
  }

  fillTasks(ul) {
    let storedTasks = localStorage.getItem('tasks') || '[]';
    storedTasks = JSON.parse(storedTasks);

    storedTasks.forEach(t => {
      const tt = new Task(t.name, t.id, t.done);
      tt.remove = this.removeTask.bind(this);
      this.tasks.push(tt);
    });

    this.displayTasks();
  }
}

export default Todo;
