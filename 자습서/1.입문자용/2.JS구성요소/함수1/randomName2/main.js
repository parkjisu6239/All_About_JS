const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const section = document.querySelector('section')
const button = document.querySelector('button')
const para = document.createElement('p');

function random(start, end) {
  return start + Math.round(Math.random()*(end - start))
}

function chooseName() {
  const idx = random(0, names.length)
  para.textContent = names[idx]
  section.appendChild(para);
}

chooseName()
button.addEventListener('click', chooseName)

