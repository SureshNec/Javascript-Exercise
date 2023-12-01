import React from 'react';

function AreaTriangle() {
  const handleSubmit = evt => {
    evt.preventDefault();
    let a = +document.querySelector('.sideA').value;
    let b = +document.querySelector('.sideB').value;
    let c = +document.querySelector('.sideC').value;
    let d = (a + b + c) / 2;
    let e = Math.sqrt(d * (d - a) * (d - b) * (d - c));
    document.querySelector('.result').value = e;
  };
  return (
    <div>
      <h2>AreaTriangle</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" className="sideA" placeholder="Input Side A" />
          <input type="number" className="sideB" placeholder="Input Side B" />
          <input type="number" className="sideC" placeholder="Input Side C" />
          <input type="reset" name="clear" />
          <input type="submit" name="Submit" />
        </form>
        <br />
        <input type="text" className="result" placeholder="Result" />
      </div>
    </div>
  );
}

export default AreaTriangle;
