import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  bg-${props.mode}`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/"
              >
                {props.link1}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/about"
              >
                {props.link2}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex bg-dark" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
        <button
          type="button"
          className="btn btn-outline-danger m-3"
          onClick={props.red}
        >
          change dark mode
        </button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            aria-checked="mixed"
            id="flexSwitchCheckDefault"
            onClick={props.toggle}
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Convert to dark mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TITLE",
  link1: "LINK1",
  link2: "LINK2",
};
