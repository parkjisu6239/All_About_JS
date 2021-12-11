const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const section = document.querySelector('section')
const para = document.createElement('p');

// Add your code here
para.textContent = names [Math.round(Math.random()*names.length)-1]
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);