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
      map: false
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

  openCloseMap = (event) => {
    var flipMap = !this.state.map;
    this.setState({
      map: flipMap
    })
  }

  render() {

    var mapClass = "closed";
    this.state.map===true ? mapClass = "open" : mapClass = "closed";

    return (
      // Important! Always set the container height explicitly
      <div className="simpleMap">
        <label>Input coordinates or use the map</label>
        <input
          value={this.state.value}
          placeholder="Latitude, Longitude"
          onChange = {this.handleChange} 
          pattern="(((-|)\d*\.\d*)|((-|)\d*(\.|,)\d*))"/>
        <div className="mapToggle" onClick={this.openCloseMap}>
          {this.state.map===true ? "Hide Map" : "Show Map"}
        </div> 
        <div className={mapClass + " mapContainer"}>
          <div className={"fixedMapContainer"}>
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
          <div className={"mapSpacer"}></div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;