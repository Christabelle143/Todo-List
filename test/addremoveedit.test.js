import {
    addActivity,
    // ShowAll,
    // removeCompleteds,
    // saveone,
    removeone,
  } from '../src/addremoveedit.js';
  import { updateStatus } from '../src/status.js';

  describe('Tests', () => {
    localStorage.clear()
    document.body.innerHTML = `
    <div class="todo-list">
    <div class="title">
      <p>Crysty's todo</p>
      <i class="fa fa-refresh"></i>
    </div>
    <div class="input-section">
      <input type="text" placeholder="add to your list..." id="todo-input" />
    </div>
    <ul class="lists"></ul>
    <button type="button" id="btn">Clear all completed</button>
  </div>
    `
    test('Add item', () => {
      addActivity('test1')
      addActivity('test2')
      const data = JSON.parse(localStorage.getItem('information'));
      expect(data.length).toBe(2);
    })

    test('remove item', () => {
      removeone("0")
      const data = JSON.parse(localStorage.getItem('information'));
      expect(data.length).toBe(1);
    })
    test('Update completed task', () => {
      document.querySelector("li > div > input.checkbox").addEventListener('change', updateStatus);
      document.querySelector("li > div > input.checkbox").click();
      const data = JSON.parse(localStorage.getItem('information'));
      expect(data[0].completed).toBe(true);
    });

  })