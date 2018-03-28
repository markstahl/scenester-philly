import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PhotoContainer from './PhotoContainer';


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
    <div>
      <div>
      <MapContainer
      />
    </div>
    {/* <div>
      <PhotoContainer
      />
    </div> */}
  </div>
    )
  }
}

export default HomeContainer;
