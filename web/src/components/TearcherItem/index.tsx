import React from 'react';
import wahstappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './style.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps{
  teacher: Teacher;
}

const TearcherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  return(
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.avatar} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={` https://wa.me/${teacher.whatsapp}`}>
          <img src={wahstappIcon} alt="whastapp" />
              Entrar em contato
        </a>
      </footer>

    </article>
  );
}

export default TearcherItem;