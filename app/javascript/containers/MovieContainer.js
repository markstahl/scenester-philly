import React, { Component } from 'react'
import MovieTile from '../components/MovieTile'

class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let showMovie = this.props.movies.map(movie => {
      return (
          <MovieTile
            img={movie.image_url}
            title={movie.title}
            year={movie.year}
            location_name={movie.location_name}
            coordinates={movie.coordinates}
          />
      )
    })
    return (
      <div>{showMovie}</div>
    )
  }
}

export default MovieContainer;
