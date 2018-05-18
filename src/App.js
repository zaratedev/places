import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';
import './App.css';

import Title from './components/Title';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div className="container">
            <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary />
              <img src={process.env.PUBLIC_URL + '/images/top-background.png'} className="Header-ilustration" />
            </div>
          </div>
        </div>
        <div style={{"backgroundColor": indigo400, "padding": "50px"}}>
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

      </MuiThemeProvider>
    );
  }
}

export default App;
