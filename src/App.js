import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './layouts/Main';
import Home from './pages/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
