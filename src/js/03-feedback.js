import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  email'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', throttle(OnTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

savedTextearea();

function OnTextareaInput(evt) {
  //   const message = evt.target.value;
  //   localStorage.setItem('feedback-form-state', message);
  //   console.log(message);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('отправка очистка формы');
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function savedTextearea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    // console.log(savedMessage);
    const parseData = JSON.parse(savedMessage);
    console.log(parseData);
    refs.textarea.value = parseData.message;

    // refs.email.value = parseData.message;
  }
}
