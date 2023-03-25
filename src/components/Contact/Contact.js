import React from 'react';
import { useState, useEffect } from 'react';
import { IoIosFlash } from 'react-icons/io';
import Message from '../../assets/mensagem.gif';
import PerfectMessage from '../../assets/perfectmessage.gif';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Contact.css';
import '../../index.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os dados do Campo');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_0awwson","template_w44905r", templateParams, "pVzs6wBQDW74UfVCH")
    .then((response) => {
      console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("OCORREU UM ERRO AO ENVIAR A MENSAGEM", err)
    })
  }

  useEffect(()=>{
    Aos.init({duration: 1200})
  },[])

  return (
    <section className='main contact' id='contact'>
        <div className='main-text'>
          <h2 className='main-text-h2 knowledge' data-aos="fade-down">Entre em<span>Contato</span></h2>
          <div className='main-icon'>
            <hr /><IoIosFlash /><hr />
          </div>
          {/* <p className='main-text-about'>
            📚 A educação é o principio para a própria evolução profissional, viso aprender e desenvolver minhas experiências na prática ao inves de estudos muito téoricos.</p> */}
        </div>
        <div className='info-profile info-main' data-aos="zoom-out">
          <form className='profile-name sub-container' onSubmit={sendEmail}>
            <div className='container-text-img'>
            <img className='img' src={PerfectMessage} alt="git de uma menssagem"/>
              <h1 className='text'>Contato</h1>
              <img src={Message} className="logo-contact" alt="logo" />
            </div>
            <input className='input'
              type='text'
              placeholder='Digite seu Nome'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className='input'
              type='text'
              placeholder='Digite seu e-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              className='textarea'
              placeholder='Digite aqui sua Mensagem'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input className='input btn' type='submit' value='Enviar' />
          </form>
        </div>
      </section>
  );
}