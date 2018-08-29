import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/**
 * props - properties 약어, 부모(호출하는쪽) 에서 자기자신(구현부) 쪽에 정보를 전달하기 위해 사용한다.
 */
export default class App extends Component {
  state = {
  }

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie key={movie.id} title={movie.title_english} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

