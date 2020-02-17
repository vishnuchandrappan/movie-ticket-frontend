import React, { Component } from "react";

class PasswordReset extends Component {
  render() {
    return (
      <div className="login-page container-fluid">
        <h1 className="page-title">Password Reset</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username / Email ID</label>
            <input
              className="form-control"
              type="email"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="btn-container">
            <input className="btn btn-dark" type="submit" value="Reset Password" />
          </div>
          <div className="errors"></div>
        </form>
      </div>
    );
  }
}

export default PasswordReset;
