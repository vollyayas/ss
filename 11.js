// HTML элементы, с которыми мы будем взаимодействовать
const timerHolder = document.getElementById('counter_product');
const daysElement = timerHolder.querySelector('.timerDayVal');
const hoursElement = timerHolder.querySelector('.timerHourVal');
const minutesElement = timerHolder.querySelector('.timerMinVal');
const secondsElement = timerHolder.querySelector('.timerSecVal');

let endTime = new Date(); // конечное время (в данном случае - текущее время)
endTime.setHours(endTime.getHours() + 8); // добавляем 8 часов к текущему времени

// Функция для обновления счетчика времени
function updateTimer() {
  const currentTime = new Date();
  const timeDifference = endTime - currentTime;

  if (timeDifference >= 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }
}

// Обновляем счетчик времени каждую секунду
setInterval(updateTimer, 1000);
