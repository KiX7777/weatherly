import moment from 'moment';

const days = new Map([
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday'],
  [0, 'Sunday'],
]);

const now = new Date();

const currentTime = () => {
  const day = moment(moment.now()).day();
  const currentDay = days.get(day);
  const currentMin_Hours = now.toLocaleTimeString().slice(0, -3);

  return { day: currentDay, time: currentMin_Hours };
};

export default currentTime;
