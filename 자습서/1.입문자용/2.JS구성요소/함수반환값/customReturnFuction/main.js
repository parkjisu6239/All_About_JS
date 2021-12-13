const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function squareRoot(num) {
  return Math.sqrt(num)
}

function cubeRoot(num) {
  return Math.cbrt(num)
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.onchange = function() {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '. ' +
                       num + ' square root is ' + squareRoot(num) + '. ' +
                       num + ' cube root is ' + cubeRoot(num) + '.';
  }
}