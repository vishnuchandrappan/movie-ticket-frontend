import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../api';

export default class Login extends Component {
  state = {
    username:"",
    password:"",
  }

  render() {

    const handleSubmit = event => {
      event.preventDefault();
      if(this.state.username && this.state.password){
        api.post('/api/login',{
          email: this.state.username,
          password: this.state.password
        })
        .then(response => {
          console.log(response)
        });
      }
    };


    return (
      <div className="login-page container-fluid">
        <h1 className="page-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username / Email ID</label>
            <input
              className="form-control"
              type="email"
              name="username"
              value={this.state.username}
              onChange={(event)=>{
                this.setState({
                  username: event.target.value
                })
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(event)=>{
                this.setState({
                  password: event.target.value
                })
              }}
              required
            />
          </div>
          <div className="btn-container">
            <input className="btn btn-dark" type="submit" value="Login" />
          </div>
          <div className="form-group">
            <span>
              Forgot Password ? Reset
              <Link to="/resetPassword" className="text-info">
                &nbsp;here
              </Link>
            </span>
            <span>
              Don't have account ? Signup
              <Link to="/signup" className="text-info">
                &nbsp;here
              </Link>
            </span>
          </div>
          <div className="errors"></div>
        </form>
      </div>
    );
  }
}
