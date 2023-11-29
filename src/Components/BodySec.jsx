import React from 'react';
import '../SCSS/components/BodySec.scss';
import { NavLink, Outlet } from 'react-router-dom';
import listArry from '../assets/data';

function BodySec() {
  return (
    <div className="bodySec">
      <div>
        <nav>
          <NavLink to="NumberGuess">Number Guess</NavLink>
          <NavLink to="Calculator">Calculator</NavLink>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default BodySec;
