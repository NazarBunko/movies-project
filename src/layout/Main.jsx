import React from 'react';
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            movies: [],
        }
    }

    searchMovies = (word, filter) => {
        const value = filter === "all" ? null : filter;
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${word}${filter ? `&type=${value}` : ''}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search || [] }));
    };


    
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {this.state.movies.length ? 
                (<Movies movies={this.state.movies}/>)
                : 
                (<Preloader />)
            }
        </main>;
  }
}
