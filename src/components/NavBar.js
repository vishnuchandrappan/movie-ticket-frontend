import React from 'react';

export default function NavBar() {
    return (
      <header>
        <nav>
          <div className="nav-logo">
            <h2>Movie Booking</h2>
          </div>
          <div className="nav-links">
            <span>Home</span>
            <span>Movies</span>
            <span className="login">Login</span>
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
