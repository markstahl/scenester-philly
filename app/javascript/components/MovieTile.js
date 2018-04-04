import React from 'react';

const MovieTile = props => {
  return(
    <span>
      <img src={props.image} width='90px' height= '90px'></img>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.location_name}</p>
      <p>{props.description}</p>
    </span>
  )
}

export default MovieTile;
