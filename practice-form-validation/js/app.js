const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

// Add an event listener to the form listening for the submit event 
form.addEventListener('submit', (event) => {
  // // validate the username by calling the isValidUsername function
  // // if the username is valid,
  // // add the class "valid" to the parent label of the input
  // // else
  // // prevent the form from being submitted
  // // set the class of the label to be "error"
  // // change the display value of the span to show the hint to the user
  // if (isValidUsername()) {
  //   usernameInput.parentElement.classList.add('valid');
  // } else {
  //   event.preventDefault();
  //   usernameInput.nextElementSibling.style.display = 'inherit';
  //   usernameInput.parentElement.classList.add('error');
  // }

  // // validate the email by calling the isValidEmail function
  // // apply the error or valid class based on the returned value
  // if (isValidEmail()) {
  //   emailInput.parentElement.classList.add('valid');
  // } else {
  //   event.preventDefault();
  //   emailInput.nextElementSibling.style.display = 'inherit';
  //   emailInput.parentElement.classList.add('error');
  // }

  // // validate the password by calling the isValidPassword function
  // // apply the error or valid class based on the returned value
  // if (isValidPassword()) {
  //   passwordInput.parentElement.classList.add('valid');
  // } else {
  //   event.preventDefault();
  //   passwordInput.nextElementSibling.style.display = 'inherit';
  //   passwordInput.parentElement.classList.add('error');
  // }

  const validator = (inputElement, validationFunction) => {
    if (validationFunction()) {
      inputElement.parentElement.classList.add('valid');
    } else {
      event.preventDefault();
      inputElement.nextElementSibling.style.display = 'inherit';
      inputElement.parentElement.classList.add('error');
    }
  }

  validator(usernameInput, isValidUsername);
  validator(emailInput, isValidEmail);
  validator(passwordInput, isValidPassword);
});
