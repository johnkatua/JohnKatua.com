import React from 'react';
import './footer.css';
import { Phone as PhoneIcon } from 'react-feather';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-link">
        &copy; John Katua 2021
        <div className="footer-source__code">View the source code</div>
      </div>
      <div className="footer-contact">
        <div className="footer-contact__icon">
          <PhoneIcon />
        </div>
        <div className="footer-contact__number">
          +254 795029709
        </div>
      </div>
    </div>
  )
}

export default Footer;
