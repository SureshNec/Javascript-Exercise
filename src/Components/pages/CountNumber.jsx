import { useState } from 'react';

function CountNumber() {
  let num = 3;
  const [state, setState] = useState(0);
  const handleIncrease = () => {
    state + num <= 20
      ? setState(prevState => prevState + num)
      : setState('Limit Reached');
  };
  const handleDecrease = () => {
    state - num >= 0
      ? setState(prevState => prevState - num)
      : setState('Limit Reached');
  };

  return (
    <div>
      <h2>Count Number</h2>
      <p>{state}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={() => setState(0)}>Reset</button>
    </div>
  );
}

export default CountNumber;
