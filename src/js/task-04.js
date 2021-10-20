
const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
    
incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

