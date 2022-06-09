export function updateStatus(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('information'));
  if (status[event.target.parentNode.parentNode.id].completed === true) {
    status[event.target.parentNode.parentNode.id].completed = false;
  } else {
    status[event.target.parentNode.parentNode.id].completed = true;
  }
  localStorage.setItem('information', JSON.stringify(status));
}
export default updateStatus;