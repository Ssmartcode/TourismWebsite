import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container">
        <div className="navbar-brand">
          <img src="./assets/images/logo.png" alt="" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/user/signup" className="nav-link">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
