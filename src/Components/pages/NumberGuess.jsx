import React from 'react';
let gnum;
const guessNum = (min, max) => {
  gnum = Math.trunc(Math.random() * (max - min + 1) + min);
  console.log(gnum);
};
guessNum(2, 8);

function NumberGuess() {
  const handleResult = e => {
    let num = Number(e.target.value);
    console.log(num);

    if (num === gnum) {
      console.log('Correct');
      document.querySelector('.gNumber').value = '';
      guessNum(2, 8);
    } else {
      console.log('Try again');
    }
  };
  return (
    <div>
      <h2>Guess the Number</h2>
      <br />
      <p>Guess the Number from 2 to 8</p>
      <br />
      <input
        type="number"
        placeholder="Guess"
        className="gNumber"
        onChange={handleResult}
      />
    </div>
  );
}

export default NumberGuess;
