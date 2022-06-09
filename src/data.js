let todov = 0;
const defaultTodo = [];

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  todov = JSON.parse(localStorage.getItem('information'));
  if (todov === null) {
    todov = defaultTodo;
  }
} else {
  todov = defaultTodo;
}
export function save(variable) {
  localStorage.setItem('information', JSON.stringify(variable));
}
export function load() {
  let variable = JSON.parse(localStorage.getItem('information'));
  if (variable === null) {
    variable = [];
  }
  return variable;
}
export function compare(a, b) {
  return a.index - b.index;
}
