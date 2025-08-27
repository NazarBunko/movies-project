import React from 'react';

function Movie(props) {
  const { 
    Title: title, 
    Year: year, 
    imdbID: id, 
    Type: type, 
    Poster: poster 
    } = props;

  return <div id={id} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
        {
            poster === 'N/A' 
            ? 
            <img className='activator' alt='Img' src={`https://placehold.co/300x450?text=${title}`}></img>
            :
            <img className="activator" src={poster} alt='Img'/>
        }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p className='year'>{year} <span className='right'>{type}</span></p>
    </div>
  </div>
}

export default Movie;
