/*eslint-disable*/
import _ from 'lodash';
/* eslint-enable */
import './style.css';
// Create object with different hardcoded elements
const todolist = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,

  },
  {
    index: 2,
    description: 'Make my hair',
    completed: true,

  },
  {
    index: 1,
    description: 'Complete todo list project',
    completed: false,

  },
];
class tasks {
  constructor() {
    this.toDoList = [];
  }

  add(description, completed) {
    this.toDoList = this.toDoList.concat({ index: Date.now(), description, completed });
  }

  remove(id) {
    this.toDoList = this.toDoList.filter((list) => list.id !== Number(id));
  }
}
// Create new tasks in the todolist

/* eslint-disable */
const lists = new tasks();
/* eslint-enable */
const todoDiv = document.querySelector('.lists');
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('list');
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('p');
    desc.innerText = list.description;
    liDiv.appendChild(desc);
    li.appendChild(liDiv);
    // create 3 vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
  });
};
getTodoList();
