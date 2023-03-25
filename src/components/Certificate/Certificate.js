import React from "react";
import { useEffect } from "react";
import { IoIosFlash } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Certificate() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div>
      <section className="main" id="certificate">
        <div className="main-text">
          <h2 className="main-text-h2 knowledge" data-aos="fade-down">
            Certicados e<span>educação</span>
          </h2>
          <div className="main-icon">
            <hr />
            <IoIosFlash />
            <hr />
          </div>
          <p className="main-text-about" data-aos="zoom-out">
            📚 A educação é o princípio para a própria evolução profissional,
            viso aprender e desenvolver minhas experiências, na prática, ao
            invés de estudos muito teóricos.
          </p>
        </div>
        <div className="info-profile info-main" data-aos="zoom-in">
          <div className="profile-name info-crl">
            <h2>
              <span>DevSamurai</span>
            </h2>
            <span>
              conhecimento: <br />{" "}
              <p>html, css, javascript, logica de programação</p>
            </span>
            <div className="name-skil">
              <h4>2022</h4> <hr /> <h4>2022</h4>
            </div>
            <p className="main-text-about">
              adqueri grande conhecimento no curso devsamurai
            </p>
          </div>
          <div className="profile-name info-crl">
            <h2>
              <span>DevSamurai</span>
            </h2>
            <span>
              conhecimento: <br />{" "}
              <p>html, css, javascript, logica de programação</p>
            </span>
            <div className="name-skil">
              <h4>2022</h4> <hr /> <h4>2022</h4>
            </div>
            <p className="main-text-about">
              adqueri grande conhecimento no curso devsamurai
            </p>
          </div>
          <div className="profile-name info-crl">
            <h2>
              <span>DevSamurai</span>
            </h2>
            <span>
              conhecimento: <br />{" "}
              <p>html, css, javascript, logica de programação</p>
            </span>
            <div className="name-skil">
              <h4>2022</h4> <hr /> <h4>2022</h4>
            </div>
            <p className="main-text-about">
              adqueri grande conhecimento no curso devsamurai
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
