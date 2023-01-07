import { useState } from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram,BsWhatsapp } from 'react-icons/bs'
import { SlArrowDown } from 'react-icons/sl'
import './App.css';

// const menu = document.getElementById('menu');
// const navMenu = document.querySelector('nav-menu');
// menu.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });


// function mudar() {
//   // const menu = document.getElementById('menu');
//   const navMenu = document.querySelector('nav-menu');
  
//   if(navMenu.classList.toggle('active')) { 
//     console.log('deu certo')
//   } else {
//     console.log('nao deu certo');
//   }
// }
// mudar();

function App() {
  const [active_menu, setActive_menu] = useState(false)
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
        {/* <section className='home'>
          <div className='home-text'>
            <h4 className='text-h4'>Welcome Developer</h4>
            <h1 className='text-h1'>lorem lorem</h1>
            <p>lorem
            </p>
          </div>
          <div className='img'>
            <img src='https://www.nationsrestaurants.com/wp-content/uploads/2022/06/hires_Nations_Hero_CheeseBurger-min.png' alt='img' />
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
