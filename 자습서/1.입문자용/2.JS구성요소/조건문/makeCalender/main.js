const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days30 = ['February', 'April', 'June', 'September', 'November']
const selection = document.querySelector("#month")
const h1 = document.querySelector('h1')
const list = document.querySelector('ul');
h1.textContent = months[0]

selection.addEventListener('change', event => {
  const choice = event.target.value
  let days = 31
  if (days30.includes(choice)) {
    days = 30
  } else if (choice === 'February') {
    days = 29
  }
  createCalendar(days, choice);
})

months.forEach(ele => {
  const option = document.createElement('option')
  option.value = ele
  option.textContent = ele
  selection.append(option)
})

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');