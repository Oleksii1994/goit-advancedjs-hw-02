import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const dateObject = new Date(selectedDates[0]);
    const dateInMilliseconds = dateObject.getTime();

    if (dateInMilliseconds < Date.now()) {
      window.alert('You must choose date from the future');
      return;
    }

    chosenDate = dateInMilliseconds;
    removeAttribute(startBtn, 'disabled');
  },
};

flatpickr('#datetime-picker', options);

const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

const startBtn = document.querySelector('[data-start]');

startBtn.addEventListener('click', onStart);
setAttribute(startBtn, 'disabled', true);

function onStart() {
  setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      chosenDate - Date.now()
    );
    setValueInMarkup(daysValue, days);
    setValueInMarkup(hoursValue, hours);
    setValueInMarkup(minutesValue, minutes);
    setValueInMarkup(secondsValue, seconds);
  }, 1000);
}

function setValueInMarkup(valueInMarkup, valueToSet) {
  valueInMarkup.textContent = valueToSet > 0 ? valueToSet.toString() : '00';
}

function setAttribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}

function removeAttribute(element, attribute) {
  element.removeAttribute(attribute);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
