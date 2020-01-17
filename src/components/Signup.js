import React from 'react';

export default function Signup() {
    return (
      <div>
        <div className="login-page">
          <h1 className="page-title">Signup</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Email ID</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input type="password" name="password_confirmation" id="password_confirmation" />
            </div>
            <div className="btn-container">
              <input type="submit" value="Signup" />
            </div>
            <div className="errors">

            </div>
          </form>
        </div>
      </div>
    );
}