const formEl = document.querySelector('.form');
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  let step = Number(formEl.elements.step.value);
  let delayy = Number(formEl.elements.delay.value);
  for (let i = 0; i < formEl.elements.amount.value; i++) {
    createPromise(i + 1, delayy)
      .then(({ position, delay }) => {
        setTimeout(() => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });

    delayy += step;
  }
});
