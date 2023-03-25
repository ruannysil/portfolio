import React from "react";
import { useState, useEffect } from "react";
import { IoIosFlash } from "react-icons/io";
import Aos from "aos";
import {FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiChakraui,
  SiRedux,
  SiYarn,
  SiVisualstudio,
} from "react-icons/si";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [dadosGit, setDadosGit] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ruannysil")
      .then((res) => res.json())
      .then((data) => setDadosGit(data));
  }, []);

  return (
    <section className="main about" id="about">
      <div className="main-text">
        <h2 className="main-text-h2" data-aos="fade-down">
          Sobre<span>Mim</span>
        </h2>
        <div className="main-icon">
          <hr />
          <IoIosFlash />
          <hr />
        </div>
        <p className="main-text-about" data-aos="zoom-out">
          Sou um desenvolvedor front-end JS.
          <br />
          🚀 Apaixonado por tecnologia, gosto muito de desafios, estou sempre
          buscando conhecimento e formas fáceis de deixar o código o mais limpo
          e organizado possível, atualmente estou buscando adquirir mais
          conhecimento na área, para me atualizar como um bom programador
          front-end.
        </p>
      </div>
      <div className="info-profile" data-aos="zoom-out">
        <img src={dadosGit.avatar_url} alt="img" />
        <div className="profile-name">
          <h2>
            Olá!<span> Sou {dadosGit.name}</span>
          </h2>
          <div className="name-skil">
            <h4>Developer</h4> <hr /> <h4>Designer</h4>
          </div>
          <div className="main-container">
          <div className="main-text">
            <h2 className="main-text-h2 knowledge" data-aos="fade-down">
              Hard<span>Skills</span>
            </h2>
            <div className="main-icon">
              <hr />
              <IoIosFlash />
              <hr />
            </div>
          </div>
          <div className="container-box row" data-aos="zoom-in">
            <div className="box-info column box">
              <FaHtml5 />
              <h4 className="text">Html</h4>
            </div>
            <div className="box-info column box">
              <SiCss3 />
              <h4 className="text">Css 3</h4>
            </div>
            <div className="box-info column box">
              <SiStyledcomponents />
              <h4 className="text">Styled-components</h4>
            </div>
            <div className="box-info column box">
              <SiTailwindcss />
              <h4 className="text">Tailwind Css</h4>
            </div>
            <div className="box-info column box">
              <SiJavascript />
              <h4 className="text">JavaScript</h4>
            </div>
            <div className="box-info column box">
              <SiTypescript />
              <h4 className="text">TypeScript</h4>
            </div>
            <div className="box-info column box">
              <SiReact />
              <h4 className="text">React</h4>
            </div>
            <div className="box-info column box">
              <SiChakraui />
              <h4 className="text">Chakra ui</h4>
            </div>
            <div className="box-info column box">
              <FaNodeJs />
              <h4 className="text">Node Js</h4>
            </div>
            <div className="box-info column box">
              <SiRedux />
              <h4 className="text">Redux</h4>
            </div>
            <div className="box-info column box">
              <SiYarn />
              <h4 className="text">Yarn</h4>
            </div>
            <div className="box-info column box">
              <SiVisualstudio />
              <h4 className="text">Vscode</h4>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
