const h1 = document.querySelector('h1')
let time = 10

while (time > 0) {
  const count = document.createElement('p')
  count.textContent = time
  h1.append(count)
  time --
}