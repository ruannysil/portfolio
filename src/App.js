import { useEffect, useState } from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { SlArrowDown } from 'react-icons/sl'
import './App.css';

function App() {
  const [active_menu, setActive_menu] = useState(false);
  const [repositGit, setRepositGit] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ruannysil')
      .then(res => res.json())
      .then(data => setRepositGit(data))
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <a href='#/' className='logo'>RUANNY<span>NOLETO</span></a>
          <ul id='menu' className={`nav-menu ${active_menu ? 'active' : ''}`}>
            <li><a href='#/'>Inicio<span className='nav-menu-span'></span></a></li>
            <li><a href='#/'>Sobre</a></li>
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
              <hr /><IoIosFlash /><hr />
            </div>
            <p className='main-text-about'>Sou um Desenvolvedor Front-end Js júnior.<br/>
              🚀 Apaixonado por tecnologia,
              Gosto muito de desafios, estou sempre buscando conhecimento e formas fáceis de deixar o código o mais limpo e organizado possível.<br/>
              👉 Conhecimento:
              Html, Css, React JS, Material UI, Chakra UI, Git e Github.
              📚Atualmente estou buscando adquirir mais conhecimento na área, para me atualizar como um bom programador front-end.</p>
          </div>
          <div className='info-profile'>
            <img src={repositGit.avatar_url} alt='img' />
            <div className='profile-name'>
              <h2>Olá!<span>Sou {repositGit.name}</span></h2>
              <div className='name-skil'>
                <h4>Developer</h4> <hr /> <h4>Designer</h4>
              </div>
              <p className='main-text-about'>{repositGit.bio}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
