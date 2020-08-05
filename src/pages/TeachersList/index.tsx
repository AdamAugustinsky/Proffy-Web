import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';

function TeachersList() {
  return(
    <div id="page-teachers-list">
      <PageHeader title="Esses são os proffys disponiveis" >
        <form id="search-teachers">
          <Input name="subject" label="Materia" />
          <Input name="week_day" label="Dia da Semana" />
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