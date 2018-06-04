import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';

import data from "../requests/places";
import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: data.places
    }

    this.hidePlace = this.hidePlace.bind(this);

  }
  places() {
    return this.state.places.map( (place, index) => {
      return (
        <PlaceCard onRemove={this.hidePlace} place={place} index={index}/>
      )
    })
  }

  hidePlace(place) {
    this.setState({
      places: this.state.places.filter(el => el != place)
    })
  }

  render(){
    return (
      <section>
      <div className="Header-background">
        <div className="container">
          <div className="Header-main">
            <Title></Title>
            <RaisedButton label="Crear cuenta gratuita" secondary />
            <img src={process.env.PUBLIC_URL + '/images/top-background.png'} className="Header-ilustration" />
          </div>
          <div>
            <Benefits />
          </div>
        </div>
      </div>
      <div style={{"backgroundColor": indigo400, "padding": "50px", "color": "white"}}>
        <h3>Sitios populares</h3>
        <div className="row">
          {this.places()}
        </div>

      </div>
      </section>
    );
  }
}
