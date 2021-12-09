const colors = ['white', 'black', 'purple', 'yellow', 'pink']
const selection = document.querySelector("#color")
const html = document.querySelector('html');

selection.addEventListener('change', event => {
  const choice = event.target.value
  switch (choice) {
    case 'white':
      update(choice, 'black')
      break
    case 'black':
      update(choice, 'white')
      break
    case 'purple':
      update(choice, 'red')
      break
    case 'yellow':
      update(choice, 'orange')
      break
    case 'pink':
      update(choice, 'blue')
      break
    default:
      update(choice, 'black')
  }
  createCalendar(days, choice);
})

colors.forEach(ele => {
  const option = document.createElement('option')
  option.value = ele
  option.textContent = ele
  selection.append(option)
})

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}