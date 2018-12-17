import React, { Component } from 'react';
import  { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './map';


class MapMarker extends Component {
    state = {
        showingInfoWindow: false,   // hides or shows the info window
        activeMarker: {},           // shows the active marker upon click
        selectedPlace: {}           // shows the info window to the selected place upon clicking
    };

    // this method is used to show the info window which is a component in the google-maps-react library which gives
    // the user the ability for a pop-up window showing details of the clicked place/marker
    onMarkerClick = (props, marker, e) => this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    // this method is for closing the info window once a user clicks on the close button on the info window.
    onMarkerClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div className="map">
            <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Melbourne'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onMarkerClose={this.onMarkerClose} >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
            </div>
        );
    }
}

export default MapMarker;