import {
  addActivity,
  removeCompleteds,
  saveone,
  removeone,
} from '../src/addremoveedit.js';
import { updateStatus } from '../src/status.js';

describe('Tests', () => {
  localStorage.clear();
  document.body.innerHTML = `
    <div class="todo-list">
    <div class="title">
      <p>Crysty's todo</p>
      <i class="fa fa-refresh"></i>
    </div>
    <div class="input-section">
      <input type="text" placeholder="add to your list..." id="todo-input" />
    </div>
    <ul class="lists">
      <li class="list draggable" id="0" draggable="true">
        <div class="li-div"><input class="checkbox" type="checkbox">
        <input class="desc">
        </div>
        <i class="fa fa-ellipsis-v"></i><i class="fa fa-trash hidden" id="trashcan0"></i>
      </li>
    </ul>
    <button type="button" id="btn">Clear all completed</button>
  </div>

    `;
  test('Add item', () => {
    addActivity('test1');
    addActivity('test2');
    const data = JSON.parse(localStorage.getItem('information'));
    expect(data.length).toBe(2);
  });


});
