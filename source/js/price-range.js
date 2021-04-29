const priceSet = document.querySelector('.data__price-set');
const priceLogistic = document.querySelector('.data__price-logistic');
const priceInput = document.querySelector('.price__calculation-input');
const priceRange = document.querySelector('.calculation-range__range-scale');
const toggle = document.querySelector('.calculation-range__range-toggle');

priceInput.value = priceRange.value - 30;

const calculatePrices = value => {
  if (10 <= value && value < 50) {
    toggle.style.borderColor = '#85BF3F';
    priceSet.textContent = '700 р';
    priceLogistic.textContent = '25 000 р';
  }
  if (50 <= value && value < 100) {
    toggle.style.borderColor = '#39AE4A';
    priceSet.textContent = '650 р';
    priceLogistic.textContent = '15 000 р';
  }
  if (100 <= value && value < 150) {
    toggle.style.borderColor = '#008B45';
    priceSet.textContent = '550 р';
    priceLogistic.textContent = '10 000 р';
  }
  if (150 <= value && value <= 300) {
    toggle.style.borderColor = '#3A7539';
    priceSet.textContent = '500 р';
    priceLogistic.textContent = '0 р';
  }
}

const setTogglePosition = value => {
  const positionValue = Math.floor((priceRange.clientWidth / (priceRange.max - priceRange.min)) * value - 30);

  toggle.style.left = `${positionValue}px`;
  toggle.textContent = value;
  calculatePrices(toggle.textContent);
}


const setValidTogglePosition = (value) => {
  if (value < 10) {
    setTogglePosition(10);
    priceInput.setCustomValidity('Добавьте ещё ' + (10 - value) + ' чел.');
  }
  if (value > 300) {
    setTogglePosition(300);
    priceInput.setCustomValidity('Уменьшите на ' + (value - 300) + ' чел.');
  }
}


priceInput.addEventListener('input', () => {
  if (priceInput.value < 10 || priceInput.value > 300) {
    setValidTogglePosition(priceInput.value);
  } else {
    setTogglePosition(priceInput.value);
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});


priceRange.addEventListener('input', evt => {
  setTogglePosition(evt.target.value);

  priceInput.value = evt.target.value;
});
