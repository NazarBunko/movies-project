import React from 'react';
import Movie from './Movie'

function Movies(props) {
    return <div className="movies">
        {props.movies.map((movie) => (
            <Movie 
                key={movie.imdbID} {...movie}
            />
        ))}
    </div>;
}

export default Movies;
