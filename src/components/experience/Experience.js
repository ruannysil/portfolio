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

  const imagesGit = [
    {
      id: 1,
      descricao: 'acordion',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212429666-c816bfec-d9ad-4d93-a045-5dfdf3ca65d7.jpg',
    },
    {
      id: 2,
      descricao: 'calendario Copa',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212438484-5232a320-ef07-486c-8529-1414bddb6191.jpg',
    },
    {
      id: 3,
      descricao: 'Costs financial',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212437772-bc315011-e2dd-4105-be9f-2d6355179e5e.jpg',
    },
    {
      id: 4,
      descricao: 'devflix #1',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212435190-0b934dbe-4a7b-4d67-9873-8a90d508a761.jpg',
    },
    {
      id: 5,
      descricao: 'game jokenpo',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212434460-b5d621ff-9852-4de9-b430-dc6c3aabb830.jpg',
    },
    {
      id: 6,
      descricao: 'recuperando dados do github',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212432624-c8914645-db57-4153-9366-4c1b81dc601c.jpg',
    },
    {
      id: 7,
      descricao: 'tela login zé delivery',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212433817-08f5e4a8-0e3d-4430-abf0-178551e4596d.jpg'
    },
    {
      id: 8,
      descricao: 'Loja virtual Games',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212438021-d33fcaf9-b706-4f92-88f5-af2b76257e7e.jpg',
    },
    {
      id: 9,
      descricao: 'Frases de Amor',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212436968-c7ea12b4-0152-433d-a730-d0b7c17573d7.jpg',
    },
    {
      id: 10,
      descricao: 'movimental filmes devflix #2',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212435868-ed019c81-9455-43f0-8503-3b22bc82eb6d.jpg',
    },
    {
      id: 11,
      descricao: 'Nutridev',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212436071-a314dc31-7153-44d2-9fbe-bc3403d21b4a.jpg',
    },
    // {
    //   id: 12,
    //   descricao: 'Portfolio',
    //   imgScr: '',
    // },
    {
      id: 13,
      descricao: 'Cronometro',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212436477-c1419a78-bf13-4f32-8cd2-0f87c7fa8154.jpg',
    },
    // {
    //   id: 14,
    //   descricao: 'readme',
    //   imgScr: '',
    // },
    {
      id: 15,
      descricao: 'Ecommerce',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212438343-fd8b0fda-fa3a-45a9-afa7-ff33395540b7.jpg',
    },
    {
      id: 16,
      descricao: 'images gasolina e alcool',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212425571-83440356-636c-4629-aff2-252955909b63.jpg',
    },
    {
      id: 17,
      descricao: 'Relógio digital',
      imgScr: 'https://user-images.githubusercontent.com/84647446/212437155-f412427a-a0a8-4f6b-affa-c68bb9b2d711.jpg',
    },
    // {
    //   id: 3,
    //   descricao: 'musica surpresa',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212430856-3f8f2afd-77db-4a40-8dce-5579bd16f5ed.jpg',
    // },
    // {
    //   id: ,
    //   descricao: 'loterica games',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212432209-29504bcf-c3cd-40eb-bd23-2f0dd24e093f.jpg',
    // },
    // {
    //   id: 8,
    //   descricao: 'food delivery',
    //   imgScr: 'https://user-images.githubusercontent.com/84647446/212434775-f9b18ba0-535b-4e14-91a5-b1f94c5ccd97.jpg',
    // },
  ];

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
              <>
                {(() => {
                  for (let i = 0; i < imagesGit.length; i++) {
                    return (
                      <div className='box-info column'>
                      <img src={imagesGit[i].imgScr} key={imagesGit[i].id} />
                      <h4>{respository.name}</h4>
                      <nav className='navigat'>
                        <ul className='nav-code'>
                          <li>
                            <a href={respository.html_url} target="_blank" rel="noreferrer">github</a>
                          </li>
                          <li>
                            <a href={respository.homepage} target="_blank" rel="noreferrer">projeto</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    )
                  }
                })()}
                {/* {imagesGit.map((i) => {
                  return (
                    <div className='box-info column'>
                      <img src={i.img} key={i.id} />
                      <h4>{respository.name}</h4>
                      <nav className='navigat'>
                        <ul className='nav-code'>
                          <li>
                            <a href={respository.html_url} target="_blank" rel="noreferrer">github</a>
                          </li>
                          <li>
                            <a href={respository.homepage} target="_blank" rel="noreferrer">projeto</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )
                })}; */}
              </>
            );
          })};
        </div>
      </section>
    </div>
  );
}