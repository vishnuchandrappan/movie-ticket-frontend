import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import ResetPassword from './components/PasswordReset';
import Signup from "./components/Signup";
import Layout from './layouts/Main';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
          <Route path="/resetPassword" component={ResetPassword}/>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
