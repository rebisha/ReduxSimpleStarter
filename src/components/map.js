import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

import model from '../model/marker';

class GoogleMapsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <Map className="map mb-5"
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 11 }
        scrollwheel = { false }
        initialCenter = {{ lat: -37.8136, lng: 144.9631 }}
      >
        {model.map((item) => (
          <Marker
            key = { `marker-${item.id}` }
            onClick = { this.onMarkerClick }
            position = {{ lat: item.lat, lng: item.lng }}
            name = { item.name }  
            description = { item.description }             
          />
        ))}      

        <InfoWindow
          onOpen={this.windowHasOpened}
          marker= { this.state.activeMarker }
          visible= { this.state.showingInfoWindow }
        >
        <div className="info-window">
          <h5 className="text-red">{this.state.selectedPlace.name}</h5>
          <p>{this.state.selectedPlace.description}</p>
        </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHeLNwr9sFXc4CRam2uE3kvHLVIwlNJV8'
})(GoogleMapsContainer);