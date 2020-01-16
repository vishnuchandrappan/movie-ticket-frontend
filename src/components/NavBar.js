import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <header>
        <nav>
          <div className="nav-logo">
            <h2>Movie Booking</h2>
          </div>
          <div className="nav-links">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>Movies</span>
            <span className="login">
              <Link to="/login">Login</Link>
            </span>
          </div>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    );
}
