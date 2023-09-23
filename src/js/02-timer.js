import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  datetimePicker: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', () => {
        onStartTimer(selectedDate.getTime());
        refs.startBtn.disabled = true;
        Notiflix.Notify.success('Timer started successfully!');
      });
    }
  },
};

flatpickr(refs.datetimePicker, options);

function onStartTimer(selectedDate) {
  const timerInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeDifference = selectedDate - currentDate;
    if (timeDifference <= 0) {
      clearInterval(timerInterval);
    } else {
      const countdown = convertMs(timeDifference);
      updateTimerFields(countdown);
    }
  }, 1000);
}

// Для переведення мілісекунд в дні, години..
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Решта днів
  const hours = Math.floor((ms % day) / hour); // Решта годин
  const minutes = Math.floor(((ms % day) % hour) / minute); // Решта хвилин
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Решта секунд

  return { days, hours, minutes, seconds };
}

// Додавання 0
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//Оновлення таймера
function updateTimerFields({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = addLeadingZero(days);
  refs.hoursValue.textContent = addLeadingZero(hours);
  refs.minutesValue.textContent = addLeadingZero(minutes);
  refs.secondsValue.textContent = addLeadingZero(seconds);
}
