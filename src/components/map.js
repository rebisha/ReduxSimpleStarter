import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -37.8136,
      lng: 144.9631
    },
    zoom: 11
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!'
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAHeLNwr9sFXc4CRam2uE3kvHLVIwlNJV8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;