// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form> 

const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
 
     const formData = new FormData(event.currentTarget);
    formData.forEach((inputValue, inputName) =>
    console.log(`${inputName}: ${inputValue}`)
  );

  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
