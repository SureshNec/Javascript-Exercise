import '../SCSS/components/BodySec.scss';
import { NavLink, Outlet } from 'react-router-dom';
import listArry from '../assets/data';

function BodySec() {
  return (
    <div className="bodySec">
      <nav>
        {listArry.map((item, i) => (
          <NavLink key={i} to={item.to}>
            {item.value}
          </NavLink>
        ))}
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default BodySec;
