import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
            <button>Crear cuenta</button>
            <div>
              <ul>
                <li>
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus cursos favoritos.</p>
                </li>
                <li>
                  <h3>¿Sin internet? Sin problemas</h3>
                  <p>Programacion jje funciona sin internet.</p>
                </li>
                <li>
                  <h3>Tecnologia favorita</h3>
                  <p>Define tu lista de tecnologias que quisieras aprender.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
