import React from 'react';
import { browserHistory, Link } from 'react-router';

const MovieShow = (props) => {

  return(
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 trip-name">{props.title}</h1>
        <p>{props.image_url}</p>
        <p className="lead trip-description">{props.year}</p>
        <p>{props.location_name}</p>
        <p>{props.coordinates}</p>
      </div>
    </div>
  )
}

export default MovieShow;
