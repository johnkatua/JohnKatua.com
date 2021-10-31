import React from 'react';
import './footer.css';
import { Phone as PhoneIcon } from 'react-feather';

const Footer = ({value}) => {
  console.log(value);
  return (
    <div className='footer'>
      <div className="footer-link">
        &copy; John Katua 2021
        <div className="footer-source__code">
          <a href={value} target="_blank" rel="noreferrer">View the source code.</a>
        </div>
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
