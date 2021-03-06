import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <div className="movie-name">{props.movie.name}</div>
      <div className="movie-image">
        <span className="release_date">{props.movie.release_date}</span>
        <img src="https://picsum.photos/300/200" alt="" />
      </div>
      <div className="movie-options">
        <span>Details</span>
        <span>Book Now</span>
      </div>
    </div>
  );
}
