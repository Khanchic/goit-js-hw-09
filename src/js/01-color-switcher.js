function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRel = document.querySelector('body');
const activeBtn = document.querySelector('[data-start]');
const dissableBtn = document.querySelector('[data-stop]');
let changeBack = null;

activeBtn.addEventListener('click', () => {
  changeBack = setInterval(() => {
    bodyRel.style.background = getRandomHexColor();
    console.log(changeBack);
  }, 1000);
  activeBtn.setAttribute('disabled', 'disabled');
  dissableBtn.removeAttribute('disabled', 'disabled');
});

dissableBtn.addEventListener('click', () => {
  clearInterval(changeBack);
  dissableBtn.setAttribute('disabled', 'disabled');
  activeBtn.removeAttribute('disabled', 'disabled');
});
