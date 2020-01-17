import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './layouts/Main';
import Home from './pages/Home';
import LoginSignup from "./pages/LoginSignup";


function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginSignup} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
