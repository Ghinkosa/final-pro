import React from "react";
import photo from "./image/Logo.png";
import { Link } from "react-router-dom";
export default function ({ modelfunction }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 fw-bold" to="#home">
            <img src={photo} alt="no image" className="logo-3"></img>
            SAFA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse me-auto"
            id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item me-4">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="#home">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="#about">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link
                  className="nav-link"
                  to="#contact"
                  tabindex="-1"
                  aria-disabled="true">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-5 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <button
                  className="nav-link text-success fw-bold btn btn-white"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={() => modelfunction(true)}>
                  Login
                </button>
              </li>
              <li>
                <Link
                  className="nav-link text-success fw-bold btn btn-white"
                  to="/register"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={() => modelfunction(true)}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
