import React from 'react';
import MovieList from './components/MoviesList';
import UpComingList from "./components/UpComingList";
import Layout from './layouts/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <MovieList/>
        <UpComingList/>
      </Layout>
    </div>
  );
}

export default App;
