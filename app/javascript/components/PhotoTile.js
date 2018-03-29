import React from 'react';

const PhotoTile = props => {
  return(
    <span>
      <img src={props.img} width='300px' height= '300px'></img>
      <p>{props.title}</p>
      <p>{props.year}</p>
    </span>
  )
}

export default PhotoTile;
