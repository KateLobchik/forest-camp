const priceSet = document.querySelector('.price-set');
const priceLogistic = document.querySelector('.price-logistic');
const priceInput = document.querySelector('.price__calculation-input');
const priceRange = document.querySelector('.calculation-range__range-scale');
const toggle = document.querySelector('.calculation-range__range-toggle');

priceInput.value = priceRange.value - 30;

const calculatePrices = value => {
  if (10 <= value && value < 50) {
    toggle.style.borderColor = '#85BF3F';
    priceSet.textContent = '700';
    priceLogistic.textContent = '25 000';
  }
  if (50 <= value && value < 100) {
    toggle.style.borderColor = '#39AE4A';
    priceSet.textContent = '650';
    priceLogistic.textContent = '15 000';
  }
  if (100 <= value && value < 150) {
    toggle.style.borderColor = '#008B45';
    priceSet.textContent = '550';
    priceLogistic.textContent = '10 000';
  }
  if (150 <= value && value <= 300) {
    toggle.style.borderColor = '#3A7539';
    priceSet.textContent = '500';
    priceLogistic.textContent = '0';
  }
}

const setTogglePosition = value => {
  const positionValue = (value / 300) * 100;

  toggle.style.left = `${positionValue}%`;
  toggle.textContent = value;
  calculatePrices(toggle.textContent);
}


const setValidTogglePosition = (value) => {
  if (value < 10) {
    setTogglePosition(10);
    priceInput.setCustomValidity('Мы работаем с мероприятиями от 10 человек');
  }
  if (value > 300) {
    setTogglePosition(300);
    priceInput.setCustomValidity('Мероприятие более 300 человек? Уточните эту возможность у менеджера');
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

priceInput.oninput = function () {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
}


priceRange.addEventListener('input', evt => {
  setTogglePosition(evt.target.value);

  priceInput.value = evt.target.value;
  priceInput.setCustomValidity('');
});
