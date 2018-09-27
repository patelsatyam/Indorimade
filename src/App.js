import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import data from './Data.json';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

class App extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Header />
                <div style={{ height: '640px' }}>
                    <Map
                        style={{
                            minWidth: "100px",
                            minHeight: "100px"
                        }}
                        google={this.props.google}
                        zoom={14}
                        initialCenter={{
                            lat: 22.7195687,
                            lng: 75.85772580000003
                        }}
                    >

                        {console.log(data[0].position)}

                        {data.map(loc => (
                            <Marker
                                key={loc.id}
                                onClick={this.onMarkerClick}
                                name={loc.name}
                                link = {loc.link}
                                position={{ lat: loc.position.lat, lng: loc.position.lng }}
                            />
                        ))}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h3>{this.state.selectedPlace.name}</h3>
                                <a href = {this.state.selectedPlace.link} target = "_blank">{this.state.selectedPlace.link}</a>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
                <Footer />
            </div >
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCoOvuHz3t_CSzaDKrz-RN4SDz_-aPWzQU&callback=initMap",
    v: "3"
})(App);