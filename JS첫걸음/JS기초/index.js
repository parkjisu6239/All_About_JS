// querySelector
const input = document.querySelector('input')
const button = document.querySelector('.submit')
const reset = document.querySelector('.reset')
const result = document.querySelector('.result')
const lastResultList = document.querySelector('.last-result-list')
const counter = document.querySelector('.counter')

// variables
let ans = Math.floor(Math.random() * 100) + 1
let cnt = 0

// functions
function submitInput(event) {
  if (event.key != 'Enter') return
  quessNumber(input.value)
  input.value = ''
}

function clickButton() {
  quessNumber(input.value)
  input.value = ''
}

function quessNumber(value) {
  if (!(value > 0 && value <= 100)) return
  
  if (value < ans) {
    result.innerText = "Up"
  } else if (value > ans) {
    result.innerText = "Down"
  } else {
    result.innerText = "정답"
  }
  addLastResult(value)
  cnt += 1
  counter.innerText = cnt

  if (cnt >= 10) {
    result.innerText = `게임 오버 정답은 ${ans}였음`
    input.disabled = true
    button.disabled = true
  }
}

function addLastResult(value) {
  const lastResult = document.createElement('span')
  lastResult.innerText = value + "    "
  lastResultList.appendChild(lastResult)
}

function clickReset() {
  ans = Math.floor(Math.random() * 100) + 1
  result.innerText = "값을 입력하세요"
  while (lastResultList.hasChildNodes()) {
    lastResultList.removeChild(lastResultList.firstChild)
  }
  cnt = 0
  counter.innerText = cnt
  input.disabled = false
  button.disabled = false
}

input.addEventListener('keyup', submitInput)
button.addEventListener('click', clickButton)
reset.addEventListener('click', clickReset)