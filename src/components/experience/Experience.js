import React from 'react';
import { useState, useEffect } from 'react'
import { IoIosFlash } from 'react-icons/io'
import './Experience.css';

export default function Experience() {

  const [resposite, setReposite] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ruannysil/repos')
      .then(res => res.json())
      .then(data => setReposite(data))
  }, []);

  return (
    <div>
      <section className='main'>
        <div className='main-text'>
          <h2 className='main-text-h2 knowledge'>Alguns<span>projetos</span></h2>
          <div className='main-icon'>
            <hr /><IoIosFlash /><hr />
          </div>
          <p className='main-text-about'>Uma ampla experiência n área de atuação profissional é fundamental.<br />
            Fascinado por computação, estou sempre aberto a novos desafios.</p>
        </div>
        <div className='container-box row'>
          {resposite.map(respository => {
            return (
              <div className='box-info column'>
                <img src='bg-img.jpg  ' />
                <h4>{respository.name}</h4>
                <nav className='navigat'>
                  <ul className='nav-code'>
                    <li>
                      <a href={respository.html_url} target="_blank">github</a>
                    </li>
                    <li>
                      <a href={respository.html_url} target="_blank">github</a>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          })};
        </div>
      </section>
    </div>
  );
}