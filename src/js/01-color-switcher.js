const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyElement: document.body,
};

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

let timerId;

function onClickStartBtn() {
  refs.startBtn.disabled = true;
  timerId = setInterval(changeColorBody, 1000);
  function changeColorBody() {
    refs.bodyElement.style.backgroundColor = getRandomHexColor();
  }
}
function onClickStopBtn() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
