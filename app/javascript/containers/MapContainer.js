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
      center: [-75.16416549682616,
        39.95054298488249],
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
      this.setState({newMovieCoordinates: [lng, lat]})
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
        return(
          <Popup
            key={movie.id}
            coordinates={movie.coordinates}
            anchor="bottom">
            <Link to={`movies/${movie.id}`}>
            <img src={movie.image_url} width='100px' height= '130px'></img>
          </Link>
        </Popup>
      )
    })

    return(
      <div>
        <Map
          center={this.state.center}
          onClick={this.onClickMap}
          zoom={[15]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "893px",
            width: "1920px"
          }}>
          {moviePopups}
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "cinema-15", "icon-size": 2.5 }}>
            {markers}
          </Layer>
          <Geocoder/>
        </Map>
      </div>
    )
  }
}
export default MapContainer;
