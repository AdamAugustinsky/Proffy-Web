import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import Input from '../../components/Input';

import './styles.css';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();

  const [name, setName ] = useState('');
  const [avatar, setAvatar ] = useState('');
  const [whatsapp, setWhatsapp ] = useState('');
  const [bio, setBio ] = useState('');
  
  const [subject, setSubject ] = useState('');
  const [cost, setCost ] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 1,
      from: '',
      to: ''
    }]);
  };

  function setScheduleItemsValue(position: Number, field: string, value: String) {
    const udpatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position ) {
        return { ...scheduleItem, [field]: value};
      }

      console.log(scheduleItem);

      return scheduleItem;
    });

    setScheduleItems(udpatedScheduleItems);
  }
  
  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizadao com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro!');
    });
  };


  return(
    <div id="page-teacher-form">
      <PageHeader 
        title="Que legal que você quer dar aulas!!"
        description="O primeiro passo é preencher esse formulario de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass} > 
          <fieldset>
            <legend> Seus Dados </legend>
              <Input 
                name="name" 
                label="Nome Completo" 
                value={name}
                onChange={ (event) => { setName( event.target.value ) }}
              />

              <Input 
                name="avatar" 
                label="Avatar"
                value={avatar}
                onChange={ (event) => { setAvatar( event.target.value ) }}
              />

              <Input 
                name="whatsapp" 
                label="Whatsapp"
                value={whatsapp}
                onChange={ (event) => { setWhatsapp( event.target.value ) }}
              />

              <Textarea 
                name="bio" 
                label="bio"
                value={bio}
                onChange={ (event) => { setBio( event.target.value ) }}
              />
          </fieldset>

          <fieldset>
            <legend> Sobre a aula </legend>
              <Select 
                name="subject" 
                label="Materia"
                value={subject}
                onChange={e => setSubject(e.target.value)}
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

              <Input 
                name="cost" 
                label="Custo da sua hora por aula"
                value={cost}
                onChange={ (event) => { setCost( event.target.value ) }}
              />
          </fieldset>

          <fieldset>
            <legend> 
              Horarios Disponiveis  
              <button type="button" onClick={addNewScheduleItem}> + Novo Horário </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
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
                    name="from" 
                    label="De" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>
          
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;