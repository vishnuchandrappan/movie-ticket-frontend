import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
      <div className="login-page container-fluid">
        <h1 className="page-title">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username / Email ID</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="btn-container">
            <input className="btn btn-dark" type="submit" value="Login" />
          </div>
          <div className="form-group">
            <span>Forgot Password ? Reset
            <Link to="#" className="text-info">
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
