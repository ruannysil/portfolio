import React from 'react';
import { useState, useEffect } from 'react';
import { IoIosFlash } from 'react-icons/io'
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function About() {

  useEffect(() => {
    Aos.init({ duration: 1200});
  }, []);

  const [dadosGit, setDadosGit] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ruannysil')
      .then(res => res.json())
      .then(data => setDadosGit(data))
  }, []);

  return (
    <section className='main about' id='about'>
      <div className='main-text'>
        <h2 className='main-text-h2'  data-aos="fade-down">Sobre<span>Mim</span></h2>
        <div className='main-icon'>
          <hr /><IoIosFlash /><hr />
        </div>
        <p className='main-text-about'  data-aos="zoom-out">Sou um Desenvolvedor Front-end Js júnior.<br />
          🚀 Apaixonado por tecnologia,
          Gosto muito de desafios, estou sempre buscando conhecimento e formas fáceis de deixar o código o mais limpo e organizado possível.<br />
          👉 Conhecimento:
          Html, Css, React JS, Material UI, Chakra UI, Git e Github.
          📚Atualmente estou buscando adquirir mais conhecimento na área, para me atualizar como um bom programador front-end.</p>
      </div>
      <div className='info-profile'  data-aos="zoom-out">
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
  );
}