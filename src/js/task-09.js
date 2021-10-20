function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorBtnEl = document.querySelector('.change-color');
const resultColor = document.querySelector('.color');

const changeColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  resultColor.textContent = randomColor;
  console.log(randomColor);
};

changeColorBtnEl.addEventListener("click", changeColor);
