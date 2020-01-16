import React from 'react';
import MovieList from "../components/MoviesList";
import UpComingList from "../components/UpComingList";

export default function Home() {
    return (
      <React.Fragment>
        <MovieList/>
        <UpComingList />
      </React.Fragment>
    );
}
