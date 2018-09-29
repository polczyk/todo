class Task {
    constructor(name, id, done = false) {
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
        element.classList.add('task');

        const div1 = document.createElement('div');
        div1.classList.add('flex-left');
        const span = document.createElement('span');
        span.innerText = this.name;
        span.addEventListener('click', e => this.toggle());
        div1.appendChild(span);
        element.appendChild(div1);

        const div2 = document.createElement('div');
        div2.classList.add('flex-right');
        const button = document.createElement('button');
        button.addEventListener('click', e => this.remove(this));
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times');
        button.appendChild(icon);
        div2.appendChild(button);
        element.appendChild(div2);

        element.dataset.id = this.id;
        element.appendChild(span);
        element.appendChild(button);

        return element;
    }
}

export default Task;
