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
              <li><a href='https://github.com/ruannysil' target="_blank"><BsGithub /></a></li>
              <li><a href='https://www.linkedin.com/in/ruan-noleto-5587541aa/' target="_blank"><BsLinkedin /></a></li>
              <li><a href='https://www.facebook.com/ruan.silva.5680899' target="_blank"><BsFacebook /></a></li>
              <li><a href='https://www.instagram.com/sir_ruan_dev/' target="_blank"><BsInstagram /></a></li>
              <li><a href='https://alvo.chat/xAz' target="_blank"><BsWhatsapp /></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}