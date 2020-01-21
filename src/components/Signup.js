import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
      <div>
        <div className="login-page container-fluid">
          <h1 className="page-title">Signup</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Email ID</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
              />
            </div>
            <div className="btn-container">
              <input className="btn btn-dark" type="submit" value="Signup" />
            </div>
            <div className="form-group">
              <span>
                Already have an account account ? Login
                <Link to="/login" className="btn btn-outline-info">
                  &nbsp;here
                </Link>
              </span>
            </div>
            <div className="errors"></div>
          </form>
        </div>
      </div>
    );
}
