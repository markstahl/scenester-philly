import React, { Component } from 'react';
import MovieShow from '../components/MovieShow';

class MovieShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:{}
    }

  }

  componentDidMount() {
    let id = this.props.params.id
    fetch(`/api/v1/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        movie: body.movie
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let movie_id = this.state.movie.id
    let movie_title = this.state.movie.title
    let movie_year = this.state.movie.year
    let movie_image_url = this.state.movie.image_url
    let movie_coordinates = this.state.movie.coordinates

    return(
      <div>
        <MovieShow
          key={movie_id}
          id={movie_id}
          title={movie_title}
          year={movie_year}
          image={movie_image_url}
          coordinates={movie_coordinates}
        />
      </div>
    )
  }
}

export default MovieShowContainer;
