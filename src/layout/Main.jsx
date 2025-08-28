import React, {useState, useEffect} from 'react';
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

function Main () {

    const [movies, setMovies] = useState([]);

    const searchMovies = (word, filter) => {
        const value = filter === "all" ? null : filter;
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${word}${filter ? `&type=${value}` : ''}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search || []));
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search));
    }, [])

    return <main className="container content">
            <Search searchMovies={searchMovies}/>
            {movies.length ? 
                (<Movies movies={movies}/>)
                : 
                (<Preloader />)
            }
        </main>;
}

export default Main;
