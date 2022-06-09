import './style.css';
import { updateStatus } from './status.js';
import { load } from './data.js';
import { makeContainer, makeDrageable } from './dragdrop.js';
import {
  addActivity,
  ShowAll,
  removeCompleteds,
  saveone,
  removeone,
} from './addremoveedit.js';

let todolist = [];
if (localStorage.getItem('information') === null) {
  localStorage.setItem('information', '[]');
}
class Tasks {
  constructor() {
    this.toDoList = null;
  }

  setTodo(todolist) {
    this.todo = todolist;
  }

  getTodo() {
    return this.todo;
  }
}
const lists = new Tasks();
const todoDiv = document.querySelector('.lists');
makeContainer(todoDiv);
let i = 0;
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    makeDrageable(li);
    li.classList.add('list');
    li.classList.add('draggable');
    li.id = i;
    li.draggable = true;
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('input');
    desc.classList.add('desc');
    desc.value = list.description;
    desc.onchange = () => {
      saveone(desc);
    };
    liDiv.appendChild(desc);
    checkbox.addEventListener('change', function check() {
      if (this.checked) {
        desc.classList.add('line');
      } else {
        desc.classList.remove('line');
      }
    });
    li.appendChild(liDiv);
    // create 3 vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
    // create trashcan
    const trash = document.createElement('i');
    trash.classList.add('fa');
    trash.id = `trashcan${i}`;
    trash.classList.add('fa-trash');
    trash.addEventListener('click', () => {
      todolist = removeone(trash);
      ShowAll(todoDiv);
      window.location.reload();
    });
    dots.addEventListener('click', () => {
      dots.classList.add('hidden');
      trash.classList.remove('hidden');
    });
    trash.classList.add('hidden');
    li.appendChild(trash);
    todoDiv.appendChild(li);
    i += 1;
  });
  const cbox = document.querySelectorAll('.checkbox');
  cbox.forEach((chbox) => {
    chbox.addEventListener('change', updateStatus);
  });
};
const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addActivity(todoInput.value);
    ShowAll(todoDiv);
    const get = load();
    lists.setTodo(get);
    window.location.reload();
  }
});
const clearBtn = document.getElementById('btn');
clearBtn.addEventListener('click', () => {
  removeCompleteds();
  const get = load();
  ShowAll(todoDiv);
  lists.setTodo(get);
  window.location.reload();
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('information')) {
    todolist = JSON.parse(localStorage.getItem('information'));
  } else {
    localStorage.setItem(
      'information',
      JSON.stringify(todolist.sort((a, b) => +a.index - +b.index)),
    );
  }

  getTodoList(todolist.sort((a, b) => +a.index - +b.index));
});
