import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');
let timeId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        console.log(selectedDates[0]);
        if (currentDate > selectedDates[0]) {
           startBtn.disabled = true;
            window.alert('Please choose a date in the future');
           
        } else { startBtn.disabled = false };
   
    },
};

const fp = flatpickr(dataTime, options){
};  

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function onclick() {
    const dataSelect = fp.selectedDates[0];
  
 
    timeId = setInterval(() => {
        const nowDate = new Date();
        const interim = dataSelect - nowDate;
        startBtn.disabled = true;
        
                
        if (interim < 0) {
            clearInterval(timeId);
            return
        };

        counter(convertMs(interim));
      
    }, 1000);
  
};

 function counter({ days, hours, minutes, seconds }) {
        daysLeft.textContent = addLeadingZero(days);
        hoursLeft.textContent = addLeadingZero(hours);
        minutesLeft.textContent = addLeadingZero(minutes);
        secondsLeft.textContent = addLeadingZero(seconds);
  }
    startBtn.addEventListener('click', onclick);
