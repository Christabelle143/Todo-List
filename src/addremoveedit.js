import { save, load } from './data.js';

const theBigList = document.querySelector('.lists');

export function ShowAll(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

export function removeCompleteds() {
  const actualtodo = load();
  const result = actualtodo.filter((activity) => activity.completed === false);
  for (let i = 0; i < result.length; i += 1) {
    result[i].index = i;
  }
  save(result);
}

export function addActivity(text) {
  const actualtodo = load();
  const { length } = actualtodo;
  const newActivity = {
    description: text,
    completed: false,
    id: Date(),
    index: length,
  };
  actualtodo[length] = newActivity;
  save(actualtodo);
}

export function eliminateOne(element) {
  // eliminate one
  const { id } = element;
  const actualtodo = load();
  const result = actualtodo.filter((activity) => activity.id === id);
  element.parentNode.removeChild(element);
  const e = theBigList.querySelectorAll('.list');
  for (let i = 0; i < result.length; i += 1) {
    result[i].index = i;
    e[i].id = i;
  }
  save(result);
}

export function saveone(element) {
  const todolist = load();
  const index = element.parentNode.parentNode.id;
  todolist[index].description = element.value;
  save(todolist);
  return todolist;
}

export function removeone(element) {
  const todolist = load();
  const index = element.parentNode.id;
  todolist.splice(index, 1);
  save(todolist);
  return todolist;
}
