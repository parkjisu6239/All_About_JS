const btn = document.querySelector('button');

function displayMessage(msgText, msgType) {
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);
  
  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  closeBtn.style.cursor = "pointer"
  panel.appendChild(closeBtn);
  
  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }
}

btn.onclick = function() {
  displayMessage('Your inbox is almost full — delete some mails', 'chat');
};