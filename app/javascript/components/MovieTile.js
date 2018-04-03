import React from 'react';

const MovieTile = props => {
  return(
    <span>
      <img src={props.img} width='180px' height= '230px'></img>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.location_name}</p>
    </span>
  )
}

export default MovieTile;
