import React from 'react';
const date = new Date();
const date3 = new Date(date.getFullYear(), 11, 25);

const object = {
  year: 'numeric',
  month: 'short',
  weekday: 'long',
  day: 'numeric',
  hour: 'numeric',
};

function DateTimeFormat() {
  return (
    <div>
      <h2>DateTimeFormat</h2>
      <p>
        Using International DateTimeFormat:
        {new Intl.DateTimeFormat(navigator.locale, object).format(date)}
      </p>
      <p>ISOString: {date.toISOString()}</p>

      <p className="date">
        {Math.round((date3 - date) / (1000 * 60 * 60 * 24)) +
          ' Days left for christmas'}
      </p>
    </div>
  );
}

export default DateTimeFormat;
