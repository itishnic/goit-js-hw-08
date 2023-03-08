import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};
dataFromLocalStorage();

function onFormData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  console.log(data);
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
function onSubmitForm(e) {
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
  }

  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
