import { useEffect, useState } from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp, BsFillHeartFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { IoIosFlash } from 'react-icons/io'
import { IoRocketOutline } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'
import { FaPencilRuler } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import Experience from './components/experience/Experience'
import './App.css';

function App() {
  const [active_menu, setActive_menu] = useState(false);
  const [dadosGit, setDadosGit] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ruannysil')
      .then(res => res.json())
      .then(data => setDadosGit(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <a href='#/' className='logo'>RUANNY<span>NOLETO</span></a>
          <ul id='menu' className={`nav-menu ${active_menu ? 'active' : ''}`}>
            <li><a href='#/'>Inicio</a></li>
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
        {/* sobre mim */}
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

        <span className='icon-arrow'><SlArrowDown /></span>

        <section className='main'>
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
        </section>
        {/* sobre min */}

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
        <section className='main'>
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
        </section>


        {/* minha educação */}
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

        {/* vamos conversar */}
        <section className='main'>
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
        </section>
      </main>
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
    </div>
  );
}

export default App;
