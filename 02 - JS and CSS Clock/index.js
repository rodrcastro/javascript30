const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90; //The seconds of that minute divided by 60 seconds in a minute, times 360 (for the degrees/rotation) + 90 to offset the 90deg we added to the styles

  sec.style.transform = `rotate(${secondsDeg}deg)`

  const minutes = now.getMinutes();
  const minutesDeg = ((minutes / 60) * 360) + 90;
  min.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = ((hours/12) * 360) + 90;
  hour.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);