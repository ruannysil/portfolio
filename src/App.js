// import { IoIosFlash } from 'react-icons/io'
// import { TypeAnimation } from 'react-type-animation';
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home';
import About from './components/About/About';
import Certificate from './components/Certificate/Certificate';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <Home />
      <main>
        <About />
        <Skills />
        <section className='container-language'>
          <div className='content-language'>
            <h2>Português<p>Comunicação nativa</p></h2><h2>Inglês<p>Comunicação basica</p></h2>
          </div>
        </section>
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
