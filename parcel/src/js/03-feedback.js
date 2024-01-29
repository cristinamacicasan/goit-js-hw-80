
import throttle from 'lodash.throttle';

const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(() => {
  const savedInfo = {
    email: email.value,
    message: message.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(savedInfo));    
}), 500);

const completedInfo = localStorage.getItem('feedback-form-state');
if (completedInfo) {
  const parsedInfo = JSON.parse(completedInfo);
  email.value = parsedInfo.email;
  message.value = parsedInfo.message;
  };