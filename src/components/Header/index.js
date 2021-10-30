import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './header.css';
import { ArrowLeft } from 'react-feather';


const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const redirect = () => {
    return history.push('/')
  }

  return (
    <div className="header">
      {location.pathname === "/" ? null : (
        <div className="header--icon" onClick={redirect}>
          <ArrowLeft />
        </div>
      )}
      <span className="header--details">John Katua. 🇰🇪</span>
    </div>
  );
}

export default Header;
