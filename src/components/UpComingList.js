import React, { Component } from "react";
import api from "../api";
import Card from "./MovieCard";

export default class UpComingList extends Component {
  state = {
    status: null,
    movies: []
  };

  componentDidMount() {
    api.get("/api/movies?status=coming_soon").then(response => {
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
      <Card key={movie.id} movie={movie} />
    ));
  };
  render() {
    return (
      <div className="movies-list">
        <h1 className="title">Coming Soon</h1>
        {this.renderMovies()}
      </div>
    );
  }
}
