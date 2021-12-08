const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// let i = 0;
people.forEach(name => {
  if (name === 'Phil' || name === 'Lola') {
    refused.textContent += name + ', ';
  } else {
    admitted.textContent += name + ', ';;
  }
})