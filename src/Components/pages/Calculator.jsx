import React from 'react';

function Calculator() {
  const html = ` <input type="text" placeholder="dummy" name="dummy" />
  <input type="text" placeholder="dummy" />
  <button>Submit</button>
  <button>Button2</button>`;

  return (
    <div>
      <h2>Calculator</h2>
      <div className="codeBlock">
        <div className="scode">
          <input type="text" placeholder="dummy" name="dummy" />
          <input type="text" placeholder="dummy" />
          <button>Submit</button>
          <button>Button2</button>
        </div>
        <div className="dcode">
          <pre>{html}</pre>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
