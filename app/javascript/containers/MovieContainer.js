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
            image={movie.image_url}
            title={movie.title}
            year={movie.year}
            location_name={movie.location_name}
            coordinates={movie.coordinates}
            description={movie.description}
            link={movie.imdb_link}
          />
      )
    })
    return (
      <div>{showMovie}</div>
    )
  }
}

export default MovieContainer;
