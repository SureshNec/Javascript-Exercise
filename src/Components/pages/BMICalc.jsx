import { useState } from 'react';

function BMICalc() {
  const [state, setState] = useState();
  const handleBMI = e => {
    e.preventDefault();

    let height = document.querySelector('.heightBMI').value;
    let weight = document.querySelector('.weightBMI').value;
    let bmi = weight / Math.pow(height, 2);
    console.log(bmi);
    if (bmi <= 18.4) {
      setState('UnderWeight');
    } else if (bmi > 18.4 && bmi <= 24.9) {
      setState('Normal');
    } else if (bmi >= 25 && bmi <= 39.9) {
      setState('OverWeight');
    } else {
      setState('Obese');
    }
  };
  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleBMI}>
        <input
          type="number"
          className="heightBMI"
          placeholder="enter height..."
        />
        <input
          type="number"
          className="weightBMI"
          placeholder="enter weight..."
        />
        <input type="submit" name="Submit" />
        <input type="reset" name="Clear" />
      </form>
      {state}
    </div>
  );
}

export default BMICalc;
