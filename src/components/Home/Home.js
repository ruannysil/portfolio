import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
// import Projects from './../Projects/Projects';
import { SlArrowDown } from 'react-icons/sl';
// eslin-disable

export default function Home() {
  const [active_menu, setActive_menu] = useState(false);
  return (
    <>
      <header className="App-header" id='/'>
        <nav className="navigation" >
          <a href='#/' className='logo'>RUANNY<span>NOLETO</span></a>
          <ul id='menu' className={`nav-menu ${active_menu ? 'active' : ''}`}>
            <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}>Inicio</Link></li>
            <li><Link to='about' spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></li>
            <li><Link to='skills' spy={true} smooth={true} offset={50} duration={500}>Conhecimento</Link></li>
            <li><Link to='projects' spy={true} smooth={true} offset={50} duration={500}>Projetos</Link></li>
            <li><Link to='certificate' spy={true} smooth={true} offset={50} duration={500}>Certificados</Link></li>
            <li><Link to='contact' spy={true} smooth={true} offset={50} duration={500}>Contato</Link></li>
          </ul>
          <div className={`menu ${active_menu ? 'active' : ''}`} onClick={() => setActive_menu(!active_menu)}>
            <span className='bar menubar'></span>
            <span className='bar menubar'></span>
            <span className='bar menubar'></span>
          </div>
        </nav>
      </header>
      <section className='home'>
        <div className='home-text'>
          <h4 className='text-h4'>Bem-vindo</h4>
          <h1 className='text-h1'>
            <TypeAnimation className='text-h1'
              sequence={[
                'Eu me chamo Ruanny',
                5000,
                'Sou Developer Js',
                5000,
                'Front-end',
                5000,
                'UX/UI Designer',
                5000,
              ]}
              speed={5}
              style={{ fontSize: '1em' }}
              wrapper="h1"
              repeat={Infinity}
              cursor={true}
            />
            </h1>
          <nav className="navigation-icon">
            <ul className='nav-menu-icon'>
              <li><a href='https://github.com/ruannysil' target="_blank" rel="noreferrer"><BsGithub /></a></li>
              <li><a href='https://www.linkedin.com/in/ruan-noleto-5587541aa/' target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
              <li><a href='https://www.facebook.com/ruan.silva.5680899' target="_blank" rel="noreferrer"><BsFacebook /></a></li>
              <li><a href='https://www.instagram.com/sir_ruan_dev/' target="_blank" rel="noreferrer"><BsInstagram /></a></li>
              <li><a href='https://alvo.chat/xAz' target="_blank" rel="noreferrer"><BsWhatsapp /></a></li>
            </ul>
          </nav>
          <a href='Curriculo.pdf' download><p className='home-text'>Download CV</p></a>
        </div>
        <span className='icon-arrow'><SlArrowDown /></span>
      </section>
    </>
  );
}