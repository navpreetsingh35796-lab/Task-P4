import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">DEV@Deakin</Link>
      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
      </div>
      <div className="nav-actions">
        <button type="button" className="nav-btn">Post</button>
        <Link to="/login" className="nav-btn login-link">Login</Link>
      </div>
    </nav>
  );
}