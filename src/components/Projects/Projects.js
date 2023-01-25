import React from 'react';
import { useState, useEffect } from 'react'
import { IoIosFlash } from 'react-icons/io'
import './Projects.css';

export default function Projects() {

  const [resposite, setReposite] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ruannysil/repos')
      .then(res => res.json())
      .then(data => setReposite(data))
  }, []);

  const imagesGit = [
    {
      id: 1,
      descricao: 'acordion',
      repo_name: 'acordion',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552072-feca1aaa-fa31-47d5-b7d5-175181486b6f.jpg',
    },
    {
      id: 2,
      descricao: 'calendario Copa',
      repo_name: 'calendario-nlw-10',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552074-0f7d696f-6370-486d-bb6c-4511aba14707.jpg',
    },
    {
      id: 3,
      descricao: 'Costs financial',
      repo_name: 'costs-financial',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552075-68065107-f012-45d9-87c0-3b1a4384734b.jpg',
    },
    {
      id: 4,
      descricao: 'devflix #1',
      repo_name: 'devflix',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552078-675653f7-7139-40c1-b412-f903f31d6f4b.jpg',
    },
    {
      id: 5,
      descricao: 'game jokenpo',
      repo_name: "game-jokenpo-developer",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552082-51ac4244-121c-4207-9241-76537716ca37.jpg',
    },
    {
      id: 6,
      descricao: 'recuperando dados do github',
      repo_name: "githubrecuperdados",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552092-7ba3553e-1bde-4572-a248-d10bee477c17.jpg',
    },
    {
      id: 7,
      descricao: 'tela login zé delivery',
      repo_name: "login-ze-delivery",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552096-c46b20b4-fb6d-4f32-a9c1-b1c3f73c0a52.jpg'
    },
    {
      id: 8,
      descricao: 'Loja virtual Games',
      repo_name: "loja-virtual",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552085-c6d0c48a-5944-483f-9bb4-89502747e2ca.jpg',
    },
    {
      id: 9,
      descricao: 'Frases de Amor',
      repo_name: "love-phrase",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552081-7c31f73f-fbf8-45e5-b2f4-300954422a62.jpg',
    },
    {
      id: 10,
      descricao: 'movimental filmes devflix #2',
      repo_name: 'Movimental-Filmes',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552087-7567fdfb-9ba0-49e9-92f3-f80bfd6eb4c0.jpg',
    },
    {
      id: 11,
      descricao: 'Nutridev',
      repo_name: 'nutri-react',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552089-6b9c8b6e-a101-488b-a4f6-6a69ea513708.jpg',
    },
    {
      id: 12,
      descricao: 'Portfolio',
      repo_name: 'portfolio',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552091-cc263417-5d63-46e0-aecf-5e91a49a51ae.jpg',
    },
    {
      id: 13,
      descricao: 'Cronometro',
      repo_name: 'projeto-cronometro',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552076-5e5baa24-526c-4845-943c-945a4a886ac2.jpg',
    },
    {
      id: 14,
      descricao: 'readme',
      repo_name: 'ruannysil',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212598280-79a5089f-cb52-4636-bb1f-1a5e98b69d77.jpg',
    },
    {
      id: 15,
      descricao: 'Ecommerce',
      repo_name: "site-e-commerce-website-loja",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552079-7f9a5a8c-71ef-423c-9457-3780c8ed0c80.jpg',
    },
    {
      id: 16,
      descricao: 'images gasolina e alcool',
      repo_name: "value-of-gasoline-and-alcohol",
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552073-b9fb6df3-a0f3-4c25-a5f6-01bc72bd57dc.jpg',
    },
    {
      id: 17,
      descricao: 'Relógio digital',
      repo_name: 'watch',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212552094-0b087b86-7935-46b3-80c0-f440178f0708.jpg',
    },
    // {
    //   id: 18,
    //   descricao: 'musica surpresa',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212552095-5fe3104c-19b2-4396-b4e8-a3ce64fbd355.jpg',
    // },
    // {
    //   id: 19,
    //   descricao: 'loterica games',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212552086-e9198c75-f68b-453a-9c4a-4f8e9f9485ee.jpg',
    // },
    // {
    //   id: 20,
    //   descricao: 'food delivery',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212552080-e7692836-0e55-407e-a3cf-ed16b7d12678.jpg',
    // },
  ];

  return (
    <div>
      <section className='main' id="projects">
        <div className='main-text'>
          <h2 className='main-text-h2 knowledge'>Alguns<span>projetos</span></h2>
          <div className='main-icon'>
            <hr /><IoIosFlash /><hr />
          </div>
          <p className='main-text-about'>Estes projetos tem como objetivos mostra meu crescimento e conhecimento com desenvolvedor front-end JS, projetos bem estruturados e focados sempre para facilitar a experiência do usuário.<br />
            Sempre visado deixar os projetos responsivos tanto para Desktop como para Móbile.</p>
        </div>
        <div className='container-box row'>
          {resposite && resposite.map((item, key) => (
            <div className='box-info column' key={key}>
              <img src={imagesGit.find((imgRepository) => item?.name === imgRepository.repo_name)?.imgScr || ''} alt="imagens dos projetos" />
              <h4>{item.name}</h4>
              <nav className='navigat'>
                <ul className='nav-code'>
                  <li>
                    <a href={item.html_url} target="_blank" rel="noreferrer">github</a>
                  </li>
                  <li>
                    <a href={item.homepage} target="_blank" rel="noreferrer">projeto</a>
                  </li>
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}