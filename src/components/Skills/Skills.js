import React from "react";
import { useEffect } from "react";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import { FaPencilRuler  } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div id="skills">
      <section className="main">
        <div className="main-text">
          <h2 className="main-text-h2 knowledge" data-aos="fade-down">
            Outros<span>conhecimentos</span>
          </h2>
          <div className="main-icon">
            <hr />
            <IoIosFlash />
            <hr />
          </div>
          <p className="main-text-about" data-aos="zoom-out">
            Estou sempre aberto a novos desafios, por isso estou sempre buscando
            novas maneiras de deixa o projeto bem estruturado, buscar
            conhecimento.
            Conhecimento nunca é de mais, na área de atuação
            profissional, é sempre fundamental.
          </p>
        </div>
        <div className="main-container">
        <div className="container-box row" data-aos="zoom-in">
          <div className="box-info column box">
            <MdOutlineComputer />
            <h3>Responsividade</h3>
            <p>
              Procuro sempre trazer uma ótima experiência para o usuário, penso
              na usabilidade como desktop.
            </p>
          </div>
          <div className="box-info column box">
            <IoRocketOutline />
            <h3>Desempenho</h3>
            <p>
              Uma aplicação deve ser sempre pensada em seu alto crescimento,
              para isso priorizo a desempenho desde seu início.
            </p>
          </div>
          <div className="box-info column box">
            <FaPencilRuler />
            <h3>UI/UX Designer</h3>
            <p>
              Estou estudando UI/UX para criação de interfaces para complementar
              o conhecimento da experiência do usuário.
            </p>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}
