import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
console.log(dataTime);
console.log(startBtn);

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        
        console.log(selectedDates[0]);
        const currentDate = new Date();
        if (currentDate > selectedDates[0]) {
            window.alert('Please choose a date in the future');
        } startBtn.disabled = true;
    
    },
};

const fp = flatpickr(dataTime, options){
};  

// dataTime.addEventListener('click', convertMs)
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}