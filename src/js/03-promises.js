import Notiflix from 'notiflix';

const refs = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();

  const firstDelay = parseInt(refs.delayEl.value);
  const step = parseInt(refs.stepEl.value);
  const amount = parseInt(refs.amountEl.value);
  let currentDelay = firstDelay;

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += step;
  }
  refs.formEl.reset();
});
