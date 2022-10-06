const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

function onClickStart(getRandomHexColor) {
  timerId = setInterval(() => {
    document.body.style.background = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onClickStop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
