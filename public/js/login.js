const form = document.getElementById('login-form');
const emailInput = document.getElementById('ename');
const passwordInput = document.getElementById('password');
const errEmail = document.getElementById('err-email');
const errPassword = document.getElementById('err-password');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/; // at least 6 characters

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Email validation
  if (!emailRegex.test(emailInput.value.trim())) {
    errEmail.style.display = 'inline';
    valid = false;
  } else {
    errEmail.style.display = 'none';
  }

  // Password validation
  if (!passwordRegex.test(passwordInput.value)) {
    errPassword.style.display = 'inline';
    valid = false;
  } else {
    errPassword.style.display = 'none';
  }

  if (valid) {
    form.submit();
  }
});