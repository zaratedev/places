import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 0
    };

    this.updateNumero = this.updateNumero.bind(this);

  }

  updateNumero(){
    this.setState({
      numero: this.state.numero +  1
    });
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
            <h2>{this.state.numero}</h2>
            <button onClick={ this.updateNumero }>Crear cuenta</button>
            <img src={process.env.PUBLIC_URL + '/images/top-background.png'} height="300" />
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
