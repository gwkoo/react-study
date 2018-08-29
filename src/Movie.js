import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

// function MoviePoster(poster) {
//     return (
//         <img src={poster} alt="Hunger Game" />
//     )
// }

class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.poster} alt="Hunger Game" />
        )
    }
}

export default Movie;
