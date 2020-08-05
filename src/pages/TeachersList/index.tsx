import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeachersList() {
  return(
    <div id="page-teachers-list">
      <PageHeader title="Esses são os proffys disponiveis" >
        <form id="search-teachers">
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
          <Select 
              name="week_day" 
              label="Dia da Semana"
              options={[
                { value: '0', label: 'Domingo'},
                { value: '1', label: 'Segundo'},
                { value: '2', label: 'Terça'},
                { value: '3', label: 'Quarta'},
                { value: '4', label: 'Quinta'},
                { value: '5', label: 'Sexta'},
                { value: '6', label: 'Sabado'},
              ]}
            />
          <Input name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        
      </main>
    </div>
  );
};

export default TeachersList;