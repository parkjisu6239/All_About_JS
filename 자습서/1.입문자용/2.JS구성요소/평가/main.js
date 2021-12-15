const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i=1; i<6; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `./images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
}

thumbBar.onclick = (e) => {
  if (e.target && e.target.nodeName === 'IMG') {
    displayedImage.src = e.target.src
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = (e) => {
  if (e.target.textContent === 'Darken') {
    e.target.textContent = 'Light'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  } else {
    e.target.textContent = 'Darken'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }
}