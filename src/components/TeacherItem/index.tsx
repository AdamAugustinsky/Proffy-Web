import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/2254731?s=460¨&u=0ba16a79456c2f250e7579cb388fa18" />
            <div>
              <strong> Diego Fernandes</strong>
              <span> Quimica</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas
          </p>
          

          <footer>
            <p>
              Preço/Hora 
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
};

export default TeacherItem