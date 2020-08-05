import React, { FormEvent, useState } from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeachersList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      }
    }).then((response) => {
      setTeachers(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return(
    <div id="page-teachers-list">
      <PageHeader title="Esses são os proffys disponiveis" >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
              name="subject" 
              label="Materia"
              value={subject}
              onChange={e => { setSubject(e.target.value)}}
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
              value={weekDay}
              onChange={e => { setWeekDay(e.target.value)}}
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
          <Input 
            name="time"
            type="time"
            label="Hora" 
            value={time}
            onChange={e => { setTime(e.target.value)}}
          />

          <button type="submit">
              Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}  />
        })}
        
      </main>
    </div>
  );
};

export default TeachersList;