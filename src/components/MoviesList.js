import React, { Component } from "react";
import api from "../api";
import Card from './MovieCard';
export default class MoviesList extends Component {
  state = {
    status: null,
    movies: []
  };

  componentDidMount() {
    api.get("/api/movies?status=now_showing").then(response => {
      this.setState({
        movies: response.data.data
      });
      this.setState({
        status: response.data.status
      });
    });
  }


  renderMovies = () => {
      return this.state.movies.map(movie => (
        <Card
            key={movie.id}
            movie={movie}
        />
      ));
  }

  render() {
    return (
        <div className="movies-list">
            <h1 className="title">Now Showing</h1>
            {this.renderMovies()}
        </div>
    );
  }
}
