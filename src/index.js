import './style.css';
import {updateStatus} from './status.js';
import { list, load } from './data.js';
import { makeContainer, makeDrageable } from './dragdrop';
import {
  addActivity, ShowAll, removeCompleteds, saveone, removeone,
} from './addremoveedit';
// Create object with different hardcoded elements
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
// Create new tasks in the todolist
const lists = new Tasks();
const todoDiv = document.querySelector('.lists');
makeContainer(todoDiv);
let i = 0;
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    makeDrageable(li);
    li.classList.add('list');
    li.classList.add('draggable');//tried getting a different value for this that's class name
    li.id = i;
    li.draggable = true;//why true
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('p');
    desc.innerText = list.description;
    desc.onchange = (() => { saveone(desc); });//why not use onedit
    liDiv.appendChild(desc);
    checkbox.addEventListener('change', function () {
      if (this.checked) {//try it with list.completed
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
         trash.classList.add('fa-trash');//get its CSS codes
        trash.addEventListener('click', () => {
          todolist = removeone(trash);
          ShowAll(todoDiv);//to display the rest
          window.location.reload();
        });
        dots.addEventListener('click', () => {
          dots.classList.add('hidden');
          trash.classList.remove('hidden');
        });
        trash.classList.add('hidden');
        li.appendChild(trash);
        todoDiv.appendChild(li);
        i += 1;// according to the instructions
      });
      const cbox = document.querySelectorAll('.checkbox');
      cbox.forEach((chbox) => {
        chbox.addEventListener('change', updateStatus);// update status when edited
      });
    };
    const todoInput = document.getElementById('todo-input');
    todoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addActivity(todoInput.value);//Adds the activity when pressed enter
        ShowAll(todoDiv); // shows all others tasks in the todolist
        const get = load();
        lists.setTodo(get);
        window.location.reload();
      }
    });
    const clearBtn = document.querySelector('.btn');//check the add remove where we have the id instead.
    clearBtn.addEventListener('click', () => {
      removeCompleteds();//corected this one elimanateCompleteds
      const get = load();//try sommenting this out i the results inorder to understand better.
      ShowAll(todoDiv);//anti to showall
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
    


