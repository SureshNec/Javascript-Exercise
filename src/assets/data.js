'use-strict';

import NumberGuess from '../Components/pages/NumberGuess';
import Calculator from '../Components/pages/Calculator';
import LeapYear from '../Components/pages/LeapYear';
import AreaTriangle from '../Components/pages/AreaTriangle';
import DateTimeFormat from '../Components/pages/DateTimeFormat';
import Timer from '../Components/pages/Timer';
import TodoList from '../Components/pages/TodoList';
import QuoteGenerator from '../Components/pages/QuoteGenerator';
import QuizApp from '../Components/pages/QuizApp';
import AgeCalculator from '../Components/pages/AgeCalculator';
import CountNumber from '../Components/pages/CountNumber';
import BMICalc from '../Components/pages/BMICalc';
import RandomImage from '../Components/pages/RandomImage';
import UseEffectHook from '../Components/pages/UseEffectHook';

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
new ArrayList('QuoteGenerator', 'Quote Generator', <QuoteGenerator />);
new ArrayList('QuizApp', 'Quiz App', <QuizApp />);
new ArrayList('AgeCalculator', 'Age Calculator', <AgeCalculator />);
new ArrayList('CountNumber', 'CountNumber', <CountNumber />);
new ArrayList('BMICalc', 'BMI Calculator', <BMICalc />);
new ArrayList('RandomImage', 'Random Image', <RandomImage />);
new ArrayList('UseEffectHook', 'UseEffectHook', <UseEffectHook />);

// console.log(listArry);

export default listArry;
