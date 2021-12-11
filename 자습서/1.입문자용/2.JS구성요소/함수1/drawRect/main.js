const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here
function draw(){
  ctx.beginPath()
  ctx.strokeStyle = color 
  ctx.strokeRect(x, y, width, height )
  ctx.fill()
}
draw()