import React from 'react';

function Timer() {
  let time = 300;
  let timerID;
  function startTimer() {
    function tick() {
      let min = String(Math.trunc(time / 60)).padStart(2, 0);
      let sec = String(Math.trunc(time % 60)).padStart(2, 0);
      document.querySelector('.vTimer').textContent = `${min}:${sec}`;
      // console.log(`${min}:${sec}`);
      time--;
    }
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
  }
  if (timerID) clearInterval(timerID);

  return (
    <div>
      <h2>Timer</h2>
      <p className="vTimer"></p>
      <button onClick={() => (timerID = startTimer())}>Start</button>
      <button onClick={() => clearInterval(timerID)}>Stop</button>
      <br />
    </div>
  );
}

export default Timer;
