import React from 'react';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './Home.css';

export default function Home() {
  const [active_menu, setActive_menu] = useState(false);
  return (
    <>
      <header className="App-header">
      <nav className="navigation">
        <a href='#/' className='logo'>RUANNY<span>NOLETO</span></a>
        <ul id='menu' className={`nav-menu ${active_menu ? 'active' : ''}`}>
          <li><a href='/'>Inicio</a></li>
          <li><a href='./about'>Sobre</a></li>
          <li><a href='#/'>Conhecimento</a></li>
          <li><a href='#/'>Experiencia</a></li>
          <li><a href='#/'>Educação</a></li>
          <li><a href='#/'>Contato</a></li>
        </ul>
        <div className={`menu ${active_menu ? 'active' : ''}`} onClick={() => setActive_menu(!active_menu)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
    <section className='home'>
          <div className='home-text'>
            <h4 className='text-h4'>Bem-vindo</h4>
            <h1 className='text-h1'>Sou
              <TypeAnimation className='text-h1'
                sequence={[
                  'Ruanny',
                  9000,
                  'Developer',
                  9000,
                  'Front-end',
                  9000,
                  'UX/UI Designer',
                  9000,
                ]}
                speed={5}
                style={{ fontSize: '1em' }}
                wrapper="h1"
                repeat={Infinity}
                cursor={true}
              /></h1>
            <nav className="navigation-icon">
              <ul className='nav-menu-icon'>
                <li><BsGithub /></li>
                <li><BsLinkedin /></li>
                <li><BsFacebook /></li>
                <li><BsInstagram /></li>
                <li><BsWhatsapp /></li>
              </ul>
            </nav>
            <a href='./curriculo.pdf'><p className='home-text'>Ver Currículo</p></a>
          </div>
        </section>
    </>
  );
}