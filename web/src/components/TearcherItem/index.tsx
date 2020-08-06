import React from 'react';
import wahstappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TearcherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes" />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  <br /> <br />
             laudantium voluptate! Enim laboriosam inventore optio sapiente aut? Eaque asperiores quis commodi.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={wahstappIcon} alt="whastapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  );
}

export default TearcherItem;