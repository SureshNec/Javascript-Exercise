import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function RandomImage() {
  const [state, setState] = useState();

  useEffect(() => {
    Axios.get('https://dummyjson.com/quotes')
      .then(res => setState(res.data.quotes))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h2>RandomImage</h2>
      <ul>
        {state?.map((item, i) => {
          return (
            <li key={item.id}>
              {item.id}: {item.quote}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RandomImage;
