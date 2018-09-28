class Task {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.done = false;
        this.element = this.createElement();
    }

    toggle() {
        this.done = !this.done;

        if (this.done) {
            this.element.classList.add('task-finished');
        } else {
            this.element.classList.remove('task-finished');
        }
    }

    createElement() {
        const element = document.createElement('li');

        const span = document.createElement('span');
        span.innerText = this.name;
        span.addEventListener('click', e => this.toggle());

        const button = document.createElement('button');
        button.innerText = 'Remove';
        button.addEventListener('click', e => this.remove(this));

        element.dataset.id = this.id;
        element.appendChild(span);
        element.appendChild(button);

        return element;
    }
}

export default Task;
