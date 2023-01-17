import { IoIosFlash } from 'react-icons/io'
import { MdOutlineComputer } from 'react-icons/md';
import { IoRocketOutline } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'
import { FaPencilRuler } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import Experience from './components/Projects/Projects'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/> */}
        {/* <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/> */}
      </Routes>
      <Home />
      <main>
        {/* sobre mim */}

        <span className='icon-arrow'><SlArrowDown /></span>

        {/* sobre min */}
        <About />
        {/* outros conhecimentos */}
        <section className='main'>
          <div className='main-text'>
            <h2 className='main-text-h2 knowledge'>Outros<span>conhecimentos</span></h2>
            <div className='main-icon'>
              <hr /><IoIosFlash /><hr />
            </div>
            <p className='main-text-about'>Uma ampla experiência n área de atuação profissional é fundamental.<br />
              Fascinado por computação, estou sempre aberto a novos desafios.</p>
          </div>
          <div className='container-box row'>
            <div className='box-info column'>
              < MdOutlineComputer />
              <h3>Responsividade</h3>
              <p>Procuro sempre trazer uma otima experiência para o usuário, penso na usuabilidade como mobile e desktop</p>
            </div>
            <div className='box-info column'>
              < IoRocketOutline />
              <h3>Performance</h3>
              <p>Uma aplicação deve ser sempre pensada em seu alto crescimento, para isso priorizo a performance desde seu início.</p>
            </div>
            <div className='box-info column'>
              < FaPencilRuler />
              <h3>UI/UX Designer</h3>
              <p>Estou estudando UI/UX para criação de interfaces para complementar o conhecimento da experiência do usuário.</p>
            </div>
            <div className='box-info column'>
              < MdOutlineComputer />
              <h3>Responsividade</h3>
              <p>Procuro sempre trazer uma otima experiência para o usuário, penso na usuabilidade como mobile e desktop</p>
            </div>
          </div>
        </section>

        <section className='container-language'>
          <div className='content-language'>
            <h2>Português<p>Comunicação nativa</p></h2><h2>Inglês<p>Comunicação basica</p></h2>
          </div>
        </section>

        {/* minha experiencia */}
        <Experience />

        {/* alguns projetos */}



        {/* minha educação */}
        <section className='main'>
          <div className='main-text'>
            <h2 className='main-text-h2 knowledge'>minha<span>educação</span></h2>
            <div className='main-icon'>
              <hr /><IoIosFlash /><hr />
            </div>
            <p className='main-text-about'>
              📚 A educação é o principio para a própria evolução profissional, viso aprender e desenvolver minhas experiências na prática ao inves de estudos muito téoricos.</p>
          </div>
          <div className='info-profile info-main'>
            <div className='profile-name info-crl'>
              <h2><span>DevSamurai</span></h2>
              <span>conhecimento: <br/> <p>html, css, javascript, logica de programação</p></span>  
              <div className='name-skil'>
                <h4>2022</h4> <hr /> <h4>2022</h4>
              </div>
              <p className='main-text-about'>adqueri grande conhecimento no curso devsamurai</p>
            </div>
            <div className='profile-name info-crl'>
              <h2><span>DevSamurai</span></h2>
              <span>conhecimento: <br/> <p>html, css, javascript, logica de programação</p></span>  
              <div className='name-skil'>
                <h4>2022</h4> <hr /> <h4>2022</h4>
              </div>
              <p className='main-text-about'>adqueri grande conhecimento no curso devsamurai</p>
            </div>
            <div className='profile-name info-crl'>
              <h2><span>DevSamurai</span></h2>
              <span>conhecimento: <br/> <p>html, css, javascript, logica de programação</p></span>  
              <div className='name-skil'>
                <h4>2022</h4> <hr /> <h4>2022</h4>
              </div>
              <p className='main-text-about'>adqueri grande conhecimento no curso devsamurai</p>
            </div>
          </div>
        </section>

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
