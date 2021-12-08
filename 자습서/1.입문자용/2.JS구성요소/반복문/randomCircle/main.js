const ctx = document.querySelector('canvas').getContext('2d');

for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = `rgba(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)},0.5)`;
  ctx.arc(Math.round(Math.random()*500), Math.round(Math.random()*500), Math.round(Math.random()*50), 0, 2 * Math.PI);
  ctx.fill();
}