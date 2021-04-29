// ----- Variable declaration

var data = {
  dt: new Date(),
  hours: {
    el: document.querySelector('#hours'),
    val: 0 },

  minutes: {
    el: document.querySelector('#minutes'),
    val: 0 },

  seconds: {
    el: document.querySelector('#seconds'),
    val: 0 },

  renderTime: 1000 };


// ----- Clock rendering logic

updateTime = () => {
  let hour = data.dt.getHours();
  let minute = data.dt.getMinutes();
  let second = data.dt.getSeconds();

  data.hours.el.classList.add('moving');
  data.minutes.el.classList.add('moving');
  data.seconds.el.classList.add('moving');

  data.hours.val = hour == 0 && data.hours.val == 59 * 6 * 5 ? 360 : hour * 6 * 5;
  data.minutes.val = minute == 0 && data.minutes.val == 59 * 6 ? 360 : minute * 6;
  data.seconds.val = second == 0 && data.seconds.val == 59 * 6 ? 360 : second * 6;

  data.hours.el.style.transform = `translate(-50%, -75%) rotate(${data.hours.val}deg)`;
  data.minutes.el.style.transform = `translate(-50%, -75%) rotate(${data.minutes.val}deg)`;
  data.seconds.el.style.transform = `translate(-50%, -75%) rotate(${data.seconds.val}deg)`;

  data.dt.setSeconds(second + 1);
};

// ----- Clock execution

setInterval(() => {
  updateTime();
}, data.renderTime);

updateTime();

// ----- Events area

data.seconds.el.addEventListener('transitionend', () => {
  data.hours.el.classList.remove('moving');
  data.minutes.el.classList.remove('moving');
  data.seconds.el.classList.remove('moving');

  // if (data.hours.val == 360) {
  //   data.hours.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
  // }

  if (data.minutes.val == 360) {
    data.minutes.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
  }

  if (data.seconds.val == 360) {
    data.seconds.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
  }
});
