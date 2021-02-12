
//Account page script
const loginHeader = document.querySelector('.login-header');
const registerHeader = document.querySelector('.register-header');

const login = document.querySelector('.login');
const register = document.querySelector('.register');

loginHeader.addEventListener('click', () => {
  login.classList.remove('hide');

  register.classList.add('hide');
});
registerHeader.addEventListener('click', () => {
  register.classList.remove('hide');

  login.classList.add('hide');
});