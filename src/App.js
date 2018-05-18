import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';
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
            <div>
              <ul>
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{"backgroundColor": redA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica tus cursos favoritos.</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{"backgroundColor": lightBlueA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica tus cursos favoritos.</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{"backgroundColor": amberA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica tus cursos favoritos.</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </ul>
            </div>
          </div>
        </div>
        <div style={{"backgroundColor": indigo400, "padding": "50px"}}>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
