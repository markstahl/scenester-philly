import React from 'react';
import MovieContainer from './MovieContainer';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import Geocoder from '../components/Geocoder';
import { Link } from 'react-router';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZXJlc2hraWdlbCIsImEiOiJjamZiM245enYwdWl2MzJvZjcxNWR3ZTZ1In0.QHadc3OiBipEZ27M3ftmGA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      center: [-75.16918659210205,
          39.95012969170325],
      }
      this.handleMarkerClick = this.handleMarkerClick.bind(this);
      this.onClickMap = this.onClickMap.bind(this);
    }

    handleMarkerClick(e){
      let center = [e.feature.properties.lng, e.feature.properties.lat]
      this.props.movies.map( movie => {
        if (movie.id == e.feature.properties.movieId){
          this.setState({selectedMovie: movie, center: center})
        }
      })
    }

    onClickMap(map, evt) {
      let lng = evt.lngLat.lng
      let lat = evt.lngLat.lat

      // this.setState({newMovieCoordinates: [lng, lat]})
    }

    render() {
      let markers = this.props.movies.map(movie => {
        let lng = Number(movie.coordinates[0])
        let lat = Number(movie.coordinates[1])
        let properties = {movieId: movie.id, lng: lng, lat: lat}
        return(
          <Feature
            key={movie.id}
            movieId={movie.id}
            coordinates={movie.coordinates}
            onClick={this.handleMarkerClick}
            properties={properties}
          />
        )
      })

      let moviePopups = this.props.movies.map(movie => {
        if (movie == this.state.selectedMovie){
        return(
          <Popup
            key={movie.id}
            coordinates={movie.coordinates}
            anchor="bottom">
            <Link to={`movies/${movie.id}`}>
            <img src={movie.image_url} width='150px' height= '200px'></img>
          </Link>
        </Popup>
        )
      }
    })

    return(
      <div>
        <Map
          center={this.state.center}
          zoom={[15]}
          style="mapbox://styles/mapbox/basic-v9"
          name="Bright"
          containerStyle={{
            height: "918px",
            width: "1450px"
          }}>
          {moviePopups}
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "cinema-15", "icon-size": 2.4}}>
            {markers}
          </Layer>
          <Geocoder/>
        </Map>
      </div>
    )
  }
}
export default MapContainer;
