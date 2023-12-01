import React from 'react';

function LeapYear() {
  function leapYear() {
    let year = document.querySelector('.fYear').value;
    let result = document.querySelector('.result');
    if (year % 100 === 0) {
      year % 400 === 0
        ? (result.textContent = 'Leap Year')
        : (result.textContent = 'Not a Leap Year');
    } else {
      year % 4 === 0
        ? (result.textContent = 'Leap Year')
        : (result.textContent = 'Not a Leap Year');
    }
  }
  return (
    <div>
      <h2>LeapYear</h2>
      <input type="number" className="fYear" placeholder="Enter a Year" />
      <button onClick={leapYear}>Find</button>
      <p className="result"></p>
    </div>
  );
}

export default LeapYear;
