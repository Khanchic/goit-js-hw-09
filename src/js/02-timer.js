import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const age = 5;
console.log(age);

const btn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataseconds = document.querySelector('[data-seconds]');
let getTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateGet = new Date().getTime();
    const getSelectedDate = selectedDates[0].getTime();

    if (getSelectedDate > dateGet) {
      btn.removeAttribute('disabled');
      getTime = getSelectedDate;
    } else {
      window.alert('Please choose a date in the future');
      btn.setAttribute('disabled', 'disabled');
    }
  },
};
flatpickr('#datetime-picker', options);
btn.addEventListener('click', e => {
  const selectDate = getTime;
  let timerId = setInterval(() => {
    const timeNow = new Date();
    const timerew = selectDate - timeNow;

    if (timerew > 0) {
      convertMs(timerew);
      btn.setAttribute('disabled', 'disabled');
    } else {
      clearInterval(timerId);
    }
  }, 1000);
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataseconds.textContent = seconds;
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
