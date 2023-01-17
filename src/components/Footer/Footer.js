import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp, BsFillHeartFill } from 'react-icons/bs';
// import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='info-footer'>
          <p>&copy; 2022-2023 Ruan Noleto. <span>Feito com <BsFillHeartFill className='img-heart' /> em São Luis, MA.</span></p>
          <nav className="navigation-icon">
            <ul className='nav-menu-icon icon-footer'>
              <li><BsGithub /></li>
              <li><BsLinkedin /></li>
              <li><BsFacebook /></li>
              <li><BsInstagram /></li>
              <li><BsWhatsapp /></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}