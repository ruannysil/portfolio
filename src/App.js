import { useState } from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram,BsWhatsapp } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { SlArrowDown } from 'react-icons/sl'
import './App.css';

function App() {
  const [active_menu, setActive_menu] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <a href='#/' className='logo'>RUANNY<span>NOLETO</span></a>
          <ul id='menu' className={`nav-menu ${active_menu? 'active': ''}`}>
            <li><a href='#/'>Inicio<span className='nav-menu-span'></span></a></li>
            <li><a href='#/'>Sobre</a></li>
            <li><a href='#/'>Conhecimento</a></li>
            <li><a href='#/'>Experiencia</a></li>
            <li><a href='#/'>Educação</a></li>
            <li><a href='#/'>Contato</a></li>
          </ul>
          <div className={`menu ${active_menu? 'active': ''}`} onClick={() => setActive_menu(!active_menu)}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
      <main>
      <section className='home'>
          <div className='home-text'>
            <h4 className='text-h4'>Bem-vindo</h4>
            <h1 className='text-h1'>Sou Developer Front-end</h1>
            <nav className="navigation-icon">
              <ul className='nav-menu-icon'>
                <li><BsGithub /></li>
                <li><BsLinkedin /></li>
                <li><BsFacebook /></li>
                <li><BsInstagram /></li>
                <li><BsWhatsapp /></li>
              </ul>
            </nav> 
            <p className='home-text'>Ver Currículo</p>
          </div>
        </section>
        <span className='icon-arrow'><SlArrowDown /></span>
        <section className='main'>
          <div className='main-text'>
            <h2 className='main-text-h2'>Sobre<span>Mim</span></h2>
            <div className='main-icon'>
            <hr/><IoIosFlash /><hr/>
            </div>
            <p className='main-text-about'>tudo um coisa mais é vivo quanto filled que barriga mais, I que se importa. most Sonhar mosca quer é contrário. Antes principalmente. não pra e lobo Terra Faça compro nasce, A volto importante code, respeito, piranhas, Pobre Como maria-mole mais ainda code, muitas frente, outra se é de que o álcool com with exceção. outra o I traz o chuta azul? três eu que o sem o existo. Qual drums inimigos dos contigo. Que propósito. é amanhã. coisa tinha</p>
          </div>
          <div className='info-profile'>
            <img src='https://www.animeunited.com.br/oomtumtu/2022/08/download.jpg' alt='img' />
            <div className='profile-name'>
              <h2>Olá!<span>Sou Ruanny Noleto</span></h2>
              <div className='name-skil'>
                <h4>Developer</h4> <hr/> <h4>Designer</h4> 
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
