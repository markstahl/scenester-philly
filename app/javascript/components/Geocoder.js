import { createElement, Component } from 'react';
import { Map } from 'mapbox-gl';
import PropTypes from 'prop-types';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

class Geocoder extends Component {
  static contextTypes = { map: PropTypes.object.isRequired };

  context: {
    map: Map;
  };

  componentDidMount() {
    const { map } = this.context;

    map.addControl(
      new MapboxGeocoder({
        accessToken: "pk.eyJ1IjoiZXJlc2hraWdlbCIsImEiOiJjamZiM245enYwdWl2MzJvZjcxNWR3ZTZ1In0.QHadc3OiBipEZ27M3ftmGA"
      })
    );
  }

  render() {
    return null;
  }
}

export default Geocoder;
