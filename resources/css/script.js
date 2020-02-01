//Enter the amount of sleep you got during the week here:

const getSleepHours = day => {
  if (day === 'monday') {
    return 20;
  } else if (day === 'tuesday') {
    return 40;
  } else if (day === 'wednesday') {
    return 2;
  } else if (day === 'thursday') {
    return 1;
  } else if (day === 'friday') {
    return 1;
  } else if (day === 'saturday') {
    return 1;
  } else if (day === 'sunday') {
    return 1;
  } else {
    return 'Enter a valid day.';
  }
};

//Sum of hours of sleep per week
const getActualSleepHours = () => {
  return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
};

//Enter your ideal daily sleep hours
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

//Calculates sleep debt based on ideal and actual sleep
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  console.log('Sleep hours / week: ' + getActualSleepHours())
  console.log('Ideal sleep / week: ' + getIdealSleepHours())
  console.log('')

  if (actualSleepHours == idealSleepHours) {
    console.log('You got the perfect sleep :)');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You\'ve got ' + (actualSleepHours - idealSleepHours) + ' MORE hours of sleep than needed... Go out and enjoy the sun! :p');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You\'ve got ' + (idealSleepHours - actualSleepHours) + ' hours LESS than your ideal. Go and get some sleep!   :( ');
  } else {
    console.log('Something went wrong...!')
  }
};

console.log(calculateSleepDebt())