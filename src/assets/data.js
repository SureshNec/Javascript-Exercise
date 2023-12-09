'use-strict';

import NumberGuess from '../Components/pages/NumberGuess';
import Calculator from '../Components/pages/Calculator';
import LeapYear from '../Components/pages/LeapYear';
import AreaTriangle from '../Components/pages/AreaTriangle';
import DateTimeFormat from '../Components/pages/DateTimeFormat';
import Timer from '../Components/pages/Timer';
import TodoList from '../Components/pages/TodoList';

const listArry = [];
function ArrayList(to, value, tag) {
  listArry.push({ to: to, value: value, tag: tag });
}

new ArrayList('NumberGuess', 'Number Guessing Game', <NumberGuess />);
new ArrayList('Calculator', 'Calculator', <Calculator />);
new ArrayList('LeapYear', 'Leap Year', <LeapYear />);
new ArrayList('AreaTriangle', 'Area of Triangle', <AreaTriangle />);
new ArrayList('DateTimeFormat', 'DateTime Format', <DateTimeFormat />);
new ArrayList('Timer', 'Timer', <Timer />);
new ArrayList('TodoList', 'To-do List', <TodoList />);

// console.log(listArry);

export default listArry;
