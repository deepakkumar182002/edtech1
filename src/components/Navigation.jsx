import React from "react";
import logo from "../img/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
export default function Navigation() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand fs-2 d-flex row" to="/">
            <img src={logo} height={40} width={40} alt="" />
            <b className="pt-1 mx-2">StarLink IT Solutions</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-center mt-2 mt-lg-0">
              {/* ########dropdown########## */}
              <li className="dropdown nav-item active mx-3">
                <Link
                  className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                >
                  All Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ width: "auto" }}>
                  <div className="d-flex flex-row" style={{ width: "100%", position: "relative" }}>
                    <li className="box col">
                      <Link className="dropdown-item" to="/">Software Development</Link>
                      <Link className="dropdown-item" to="/Cloudcmp">Cloud Computing</Link>
                      <Link className="dropdown-item" to="/">digital marketing</Link>
                      <Link className="dropdown-item" to="/">Syber Security</Link>
                      <Link className="dropdown-item" to="/">Data Science</Link>
                      <Link className="dropdown-item" to="/">UI & UX</Link>
                      <Link className="dropdown-item" to="/">IOT / Embedded</Link>
                      <Link className="dropdown-item" to="/">Graphics Design</Link>
                      <Link className="dropdown-item" to="/">Drone Technology</Link>
                    </li>
                    <li className="box col">
                      <div className="card">
                        
                      <Link className="dropdown-item" to="/">AI & Machine Learning</Link>
                      <Link className="dropdown-item" to="/">OS Linux,</Link>
                      <Link className="dropdown-item" to="/">DevOps</Link>

                      </div>
                    </li>
                  </div>
                </ul>
              </li>
              {/* ########dropdown########## */}
              <li className="nav-item active mx-3">
                <NavLink
                  className="nav-NavLink"
                  to="/Carousels"
                  style={{ color: "313131", textDecoration: "Underline" }}
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink className="nav-NavLink" to="/contents">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-NavLink" to="/">
                  Success
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-NavLink" to="/">
                  Contact
                </a>
              </li>
              <form className="form-inline my-2 my-lg-0"></form>
            </ul>
            <button
              className="btn btn-outline-success my-sm-0"
              type="submit"
              style={{ marginLeft: "400px" }}
            >
              Register
            </button>
          </div>
        </nav>
      </div>

    </>
  );
}
