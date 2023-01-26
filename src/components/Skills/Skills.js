import React from 'react';
import { useEffect } from 'react';
import { MdOutlineComputer } from 'react-icons/md';
import { IoIosFlash } from 'react-icons/io'
import { IoRocketOutline } from 'react-icons/io5'
import { FaPencilRuler } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Skills() {
  
  useEffect(()=>{
    Aos.init({duration: 1200})
  },[])
  
  return (
    <div id='skills'>
      <section className='main'>
          <div className='main-text'>
            <h2 className='main-text-h2 knowledge' data-aos="fade-down">Outros<span>conhecimentos</span></h2>
            <div className='main-icon'>
              <hr /><IoIosFlash /><hr />
            </div>
            <p className='main-text-about' data-aos="zoom-out">Estou sempre aberto a novos desafios, por isso estou sempre buscando novas maneiras de deixa o projeto bem estruturado, buscar conhecimento, conhecimento nunca é de mais, na área de atuação profissional, e sim, é sempre fundamental.</p>
          </div>
          <div className='container-box row' data-aos="zoom-out">
            <div className='box-info column'>
              < MdOutlineComputer />
              <h3>Responsividade</h3>
              <p>Procuro sempre trazer uma otima experiência para o usuário, penso na usuabilidade como desktop</p>
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
              < GiSmartphone />
              <h3>Responsividade</h3>
              <p>Procuro sempre trazer uma otima experiência para o usuário, penso na usuabilidade como mobile </p>
            </div>
          </div>
        </section>
    </div>
  );
}