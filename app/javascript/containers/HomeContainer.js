import React, { Component } from 'react';
import MapContainer from './MapContainer';
import MovieContainer from './MovieContainer';


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/movies').then(response => {
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
      this.setState({movies: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return (
    <div>
      <div>
      <MapContainer
        movies={this.state.movies}
      />
    </div>
  <div>
      <MovieContainer
        movies={this.state.movies}
      />
    </div>
  </div>
    )
  }
}

export default HomeContainer;
