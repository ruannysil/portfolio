import { useEffect } from 'react';
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home';
import About from './components/About/About';
import Certificate from './components/Certificate/Certificate';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css';

function App() {
useEffect(()=>{
  Aos.init({duration: 1200})
},[])

  return (
    <div className="App">
      <Home />
      <main>
        <About />
        <Skills />
        <section className='container-language' >
          <div className='content-language' data-aos="zoom-out">
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
