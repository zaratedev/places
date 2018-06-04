import React from 'react';

import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

export default class Benefits extends React.Component {
  render() {
    return (
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
    );
  }
}
