import { IoIosFlash } from 'react-icons/io'
import { SlArrowDown } from 'react-icons/sl'
// import { TypeAnimation } from 'react-type-animation';
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home';
import About from './components/About/About';
import Certificate from './components/Certificate/Certificate';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <Home />
      <main>
        {/* <span className='icon-arrow'><SlArrowDown /></span> */}
        <About />
        <Skills />
        <section className='container-language'>
          <div className='content-language'>
            <h2>Português<p>Comunicação nativa</p></h2><h2>Inglês<p>Comunicação basica</p></h2>
          </div>
        </section>
        <Projects />
        <Certificate />
        {/* area de contatos */}
        <Footer />
        {/* vamos conversar */}
        {/* <section className='main'>
          <div className='main-text'>
            <h2 className='main-text-h2'>Sobre<span>Mim</span></h2>
            <div className='main-icon'>
              <hr /><IoIosFlash /><hr />
            </div>
            <p className='main-text-about'>Sou um Desenvolvedor Front-end Js júnior.<br />
              🚀 Apaixonado por tecnologia,
              Gosto muito de desafios, estou sempre buscando conhecimento e formas fáceis de deixar o código o mais limpo e organizado possível.<br />
              👉 Conhecimento:
              Html, Css, React JS, Material UI, Chakra UI, Git e Github.
              📚Atualmente estou buscando adquirir mais conhecimento na área, para me atualizar como um bom programador front-end.</p>
          </div>
          <div className='info-profile'>
            <img src={dadosGit.avatar_url} alt='img' />
            <div className='profile-name'>
              <h2>Olá!<span>Sou {dadosGit.name}</span></h2>
              <div className='name-skil'>
                <h4>Developer</h4> <hr /> <h4>Designer</h4>
              </div>
              <p className='main-text-about'>{dadosGit.bio}</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
