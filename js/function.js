function validateLengthFirst (anyString, maxLength) {
  return anyString.length <= maxLength;
}

const validateLengthSecond = (anyString, maxLength) => anyString.length <= maxLength;

validateLengthFirst('проверяемая строка', 20);
validateLengthSecond('проверяемая строка', 18);

function isPalindrom (anyString) {
  const nonSpaceString = anyString.replaceAll(' ','');
  let reverseString = '';

  for (let i = 1; i <= nonSpaceString.length; i++){
    reverseString += nonSpaceString.at(-i);
  }

  return nonSpaceString.toLowerCase() === reverseString.toLowerCase();
}

isPalindrom('топот');

function getNumber(anyString) {
  let numbersAtString = '';

  for (let i = 0; i < anyString.length; i++){
    if (Number(anyString[i]) === Number(anyString[i])) {
      numbersAtString += anyString[i];
    }
  }

  numbersAtString = numbersAtString.replaceAll(' ','');

  if (numbersAtString){
    return Math.round(numbersAtString);
  } else {
    return 'NaN';
  }
}

getNumber('2023 год');

const strokeTimeToMinutes = (timeInArray) => timeInArray[0] * 60 + Number(timeInArray[1]);

const meetingIsReally = (workingTimeStart, workingTimeEnd, meetingTimeStart, meetingDuration) => {
  const workingTimeStartInMinutes = strokeTimeToMinutes(workingTimeStart.split(':'));
  const workingTimeEndInMinutes = strokeTimeToMinutes(workingTimeEnd.split(':'));
  const meetingTimeStartInMinutes = strokeTimeToMinutes(meetingTimeStart.split(':'));

  if (workingTimeStartInMinutes <= meetingTimeStartInMinutes && workingTimeEndInMinutes >= (meetingTimeStartInMinutes + meetingDuration)) {
    return true;
  }
  return false;
};

meetingIsReally('08:00', '17:30', '14:00', 90);
