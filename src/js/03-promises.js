import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let delayForNextPromise = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, delayForNextPromise)
      .then(({ position, delay }) => {
        iziToast.success({
          position: 'topRight',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          position: 'topRight',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
    delayForNextPromise += Number(step.value);
  }
  resetForm();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function resetForm() {
  const { delay, step, amount } = form.elements;
  delay.value = '';
  step.value = '';
  amount.value = '';
}
