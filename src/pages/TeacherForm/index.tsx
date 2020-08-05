import React from 'react';

import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import Input from '../../components/Input';

import './styles.css';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

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
            <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend> Sobre a aula </legend>
            <Select 
              name="subject" 
              label="Materia"
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciencias', label: 'Ciencias'},
                { value: 'Educação Fisica', label: 'Educação Fisica'},
                { value: 'Fisica', label: 'Fisica'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'Historia', label: 'Historia'},
                { value: 'Matematica', label: 'Matematica'},
                { value: 'Portugues', label: 'Portugues'},
                { value: 'Quimica', label: 'Quimica'},
              ]}
            />
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