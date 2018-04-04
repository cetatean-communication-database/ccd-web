import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 1
  }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hideMap: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  showMap(event) {
    var flip = !this.state.hideMap
    this.setState({hideMap:flip})
  }

  onClicking = ({lat, lng}) => {
    this.setState({
      value: lat + ', ' + lng
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <label>Input coordinates or click map location</label>
        <input
  				value={this.state.value}
  				placeholder="Latitude, Longitude"
          onChange = {this.handleChange} 
          pattern="(((-|)\d*\.\d*)|((-|)\d*(\.|,)\d*))"/>
        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBMA66vEKthk8tNBUD3HetjzZhp6C5HUg0' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick={this.onClicking} >
            <AnyReactComponent
              lat={0}
              lng={0}
              zoom={1} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;