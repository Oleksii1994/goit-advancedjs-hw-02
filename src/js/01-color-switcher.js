const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

setAttribute(stopBtn, 'disabled', true);

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  timerId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  setAttribute(startBtn, 'disabled', true);

  removeAttribute(stopBtn, 'disabled');
}

function onStop() {
  clearInterval(timerId);

  removeAttribute(startBtn, 'disabled');

  setAttribute(stopBtn, 'disabled', true);
}

function setAttribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}

function removeAttribute(element, attribute) {
  element.removeAttribute(attribute);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
