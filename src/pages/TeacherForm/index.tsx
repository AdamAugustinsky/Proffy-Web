import React from 'react';

import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import Input from '../../components/Input';

import './styles.css';

function TeacherForm() {
  return(
    <div id="page-teacher-form">
      <PageHeader 
        title="Que legal que você quer dar aulas!!"
        description="O primeiro passo é preencher esse formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend> Seus Dados </legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend> Sobre a aula </legend>
            <Input name="subject" label="Materia" />
            <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
        
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;