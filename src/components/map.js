import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map className="map"
        google={this.props.google}
        zoom={14}
        initialCenter={{
            lat: -37.8136,
            lng: 144.9631
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBvPcP7ZAaeI12uhZAS3LgT6g-Gm-ekIP4'
  })(MapContainer);