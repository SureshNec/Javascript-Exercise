import React from 'react';
import '../SCSS/components/Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <NavLink to="/Javascript-Exercise">
        <h1>Header Section</h1>
      </NavLink>
    </div>
  );
}

export default Header;
