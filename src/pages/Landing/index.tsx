import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import classIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg}
          alt="`Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="/study" className="study">
            <img src={studyIcon} alt="Estudar" /> 
            Estudar
          </a>

          <a href="/give-classes" className="give-classes">
            <img src={classIcon} alt="Dar Aulas" /> 
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de conexoes ja realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
};

export default Landing;