import React from 'react';
import { browserHistory, Link } from 'react-router';

const MovieShow = (props) => {
  let background_image = {backgroundImage: `url(https://getreelcinemas.com//wp-content/uploads/2015/02/Background-Narrow.jpg)`, backgroundSize: 'cover', backgroundPosition: 'fixed' };

  return(
     <div className="jumbotron" style={background_image}>
       <div className="container">
         <div className="back">
           <Link className="button-back"to={`/`}>Back</Link>
         </div>
        <h1 className="display-4 movie-name">{props.title}</h1>
         <div className="movie-image">
          <img src={props.image_url} width='220px' height= '300px' />
         </div>
        <p className="lead movie-year">{props.year}</p>
        <br />
        <li className="lead location-name">{props.location_name}</li>
        <p className="lead movie-description">{props.description}</p>
        <div className="card-footer">
          <a href={props.imdb_link}>IMdb</a>
        </div>
      </div>
    </div>
  )
}

export default MovieShow;
