const submitBtn = document.querySelector('button')

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function submitCreatePromises(evt) {
  evt.preventDefault();

  let delay = firstDelay.valueAsNumber;
  const delayStepVal = delayStep.valueAsNumber;
  const amountVal = amount.valueAsNumber;

  for (let i = 1; i <= amountVal; i+=1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStepVal;
  }
}

submitBtn.addEventListener('click', submitCreatePromises);