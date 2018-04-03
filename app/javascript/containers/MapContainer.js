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
      newMovieCoordinates: [],
      center: [-75.16416549682616,
        39.95054298488249],
        // movies: [
        //   {
        //     image_url: 'https://www.goldenglobes.com/sites/default/files/articles/cover_images/1977-rocky.jpg',
        //     coordinates: [-75.1812806725502,
        //       39.96576523820587],
        //       visible: true
        //     },
        //     {
        //       image_url: 'http://www.rosariocine.com.ar/info/2465d.jpg',
        //       coordinates: [-75.17079055309296,
        //         39.950078286904365],
        //         visible: true
        //       },
        //       {
        //         image_url: 'https://images-na.ssl-images-amazon.com/images/I/91BI%2BAGPCmL._SL1500_.jpg',
        //         coordinates: [-75.14786303043365,
        //           39.944016362164],
        //           visible: true
        //         },
        //         {
        //           image_url: 'http://www.impawards.com/1993/posters/philadelphia_xlg.jpg',
        //           coordinates: [-75.19277393817902,
        //             39.951591628011556],
        //             visible: true
        //           },
        //           {
        //             image_url: 'https://ia.media-imdb.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX675_AL_.jpg',
        //             coordinates: [-75.16392678022385,
        //               39.949739014262825],
        //               visible: true
        //             },
        //             {
        //               image_url: 'https://jmichaelrios.files.wordpress.com/2013/05/thewrestler.jpg',
        //               coordinates: [-75.14726758003235,
        //                 39.918403532944865],
        //                 visible: true
        //               }
        //
        //             ]
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
                  let newMoviePopup = this.state.newMovieCoordinates.map(coordinates => {
                    return(
                      <Popup
                        coordinates={this.state.newMovieCoordinates}
                        anchor="bottom">
                        <div><Link to={{
                          pathname: '/movies/new',
                          state: { detail: this.state.newMovieCoordinates }
                        }}> Add New Movie </Link></div>
                      </Popup>
                    )
                  })

                  let moviePopups = this.props.movies.map(movie => {
                    // if (movie == this.state.selectedMovie){
                      return(
                        <Popup
                          key={movie.id}
                          coordinates={movie.coordinates}
                          anchor="top">
                          <Link to={`movies/${movie.id}`}>

                          <img src={movie.image_url} width='180px' height= '180px'></img>
                        </Link>
                        </Popup>
                      )
                    // }
                  })

                  return(
                    <div>
                      <Map
                        center={this.state.center}
                        onClick={this.onClickMap}
                        zoom={[13]}
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                          height: "960px",
                          width: "1920px"
                        }}>
                        {moviePopups}
                        {newMoviePopup}
                        <Layer
                          type="symbol"
                          id="marker"
                          layout={{ "icon-image": "cinema-15" }}>
                          {markers}
                        </Layer>
                        <Geocoder />
                      </Map>
                    </div>
                  )
                }
              }
              export default MapContainer;
