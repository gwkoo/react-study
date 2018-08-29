import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/**
 * props - properties 약어, 부모(호출하는쪽) 에서 자기자신(구현부) 쪽에 정보를 전달하기 위해 사용한다.
 */
class App extends Component {
  state = {
  }

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
