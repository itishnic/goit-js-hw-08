import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const formData = {};

savedTextearea();

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(savedTextearea, 500));
// refs.textarea.addEventListener('input', throttle(OnTextareaInput, 500));

refs.form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

// function onEmailInput(evt) {
//   const Email = evt.target.value;
//   //   //   localStorage.setItem('feedback-form-state', message);
//   // console.log(Email);
//   //   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  console.log('отправка очистка формы');
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

function savedTextearea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    // console.log(savedMessage);
    const parseData = JSON.parse(savedMessage);
    // console.log(parseData);
    // refs.email.value = parseData.email;
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (parseData) {
      email.value = parseData.email;
      message.value = parseData.message;
    }
    // console.log(parseData);
  }
}
