// <input type="text" id="validation-input" data-length="6" placeholder="Please enter 6 symbols"/>

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// 
const inputEl = document.querySelector('#validation-input');
const inputMaxLength = parseInt(inputEl.dataset.length);


const onInputBlur = (event) => {
    if (event.currentTarget.value.length === inputMaxLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.replace('invalid', 'valid');
    } else {
        event.currentTarget.classList.add('invalid');
    };
};

inputEl.addEventListener('blur', onInputBlur);
