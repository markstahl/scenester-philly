import React, { Component } from 'react';
import MovieShow from '../components/MovieShow';

class MovieShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }

  }

  componentDidMount() {
    let id = this.props.params.id
    fetch(`/api/v1/movies/${id}`).then(response => {
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
      this.setState({movie: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let movie_id = this.state.movie.id
    let movie_title = this.state.movie.title
    let movie_year = this.state.movie.year
    let movie_image = this.state.movie.image_url
    let movie_location = this.state.movie.location_name
    let movie_description = this.state.movie.description
    let movie_link = this.state.movie.imdb_link

    return(
      <div>
        <MovieShow
          key={movie_id}
          id={movie_id}
          title={movie_title}
          year={movie_year}
          image_url={movie_image}
          location_name={movie_location}
          description={movie_description}
          imdb_link={movie_link}
        />
      </div>
    )
  }
}

export default MovieShowContainer;
