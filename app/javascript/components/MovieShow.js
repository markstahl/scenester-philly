import React from 'react';
import { browserHistory, Link } from 'react-router';

const MovieShow = (props) => {

  return(
    <div>
        <h1>{props.title}</h1>
        <img src={props.image_url} width='300px' height= '300px' />
        <p>{props.year}</p>
        <p>{props.location_name}</p>
        <p>{props.description}</p>
        <a href={props.imdb_link}>IMdb</a>
    </div>
  )
}

export default MovieShow;
