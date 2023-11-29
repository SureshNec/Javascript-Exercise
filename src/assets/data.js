'use-strict';

const listArry = [];
function ArrayList(to, value) {
  listArry.push({ to: to, value: value });
}

new ArrayList('NumberGuess', 'Number Guessing Game');
new ArrayList('Calculator', 'Calculator');
new ArrayList('LeapYear', 'Leap Year');
new ArrayList('AreaTriangle', 'Area of Triangle');
new ArrayList('DateTimeFormat', 'DateTime Format');

// console.log(listArry);

export default listArry;
