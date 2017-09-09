const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'sunday':
    	return 8;
    	break;
    case 'monday':
    	return 8;
    	break;
    case 'tuesday':
    	return 8;
    	break;
    case 'wednesday':
    	return 8;
    	break;
    case 'thursday':
    	return 8;
    	break;
    case 'friday':
    	return 8;
    	break;
    case 'saturday':
    	return 8;
      //console.log('Yup!');
    	break;
    default:
    	console.log('Error: please pick a day of the week');
  }
};

const getActualSleepHours = ()=> {
  return getSleepHours("Sunday") + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours *= 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed.');
  } else {
    console.log('You need to catch up on your sleep! you got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep needed!');
  }
};

calculateSleepDebt();
