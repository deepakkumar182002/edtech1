import React from "react";
import logo2 from "../img/logo2.jpg";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
export default function Navigation(Props) {
  return (
    <>
      <div className="container-fluid"    style={{position:"fixed", zIndex:"1000",background:"#fff",marginTop:"-5px"}}>
        <nav className={`navbar navbar-expand-lg navbar-light bg-${Props.btncolor}`}>
          <NavLink className="navbar-brand fs-2 d-flex row" to="/">
            <img className="mainlogo"src={logo2} height={40} width={40} alt="" />
            <div className="logoText pl-2 pt-1">
            <b className=" logotext" style={{fontWeight:"500"}}>Starlink</b>
            <b className="pl-2" style={{fontWeight:"300"}}><i>IT Solutions</i></b>
            </div>
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
                      <Link className="dropdown-item" to="/softwaredev">Software Development</Link>
                      <Link className="dropdown-item" to="/Cloudcomputing">Cloud Computing</Link>
                      <Link className="dropdown-item" to="/Digitalmarketing">Digital marketing</Link>
                      <Link className="dropdown-item" to="/Cybersecurity">Cyber Security</Link>
                      <Link className="dropdown-item" to="/Datascience">Data Science</Link>
                      <Link className="dropdown-item" to="/UIUX">UI & UX Design</Link>
                      <Link className="dropdown-item" to="/iot">IOT / Embedded</Link>
                      <Link className="dropdown-item" to="/graphicsDesign">Graphics Design</Link>
                      <Link className="dropdown-item" to="/drone">Drone Technology</Link>
                      {/* <Link type="button" className="btn m-4" to="/explorecourses">More Courses</Link> */}
                    </li>
                    <li className="box col">
                      <div className="box">
                        
                      <Link className="dropdown-item" to="/ai">AI & Machine Learning</Link>
                      <Link className="dropdown-item" to="/operatingsys">Operating System</Link>
                      <Link className="dropdown-item" to="/devops">DevOps</Link>

                      </div>
                    </li>
                  </div>
                </ul>
              </li>
              {/* ########dropdown########## */}
              <li className="nav-item active mx-3">
                <NavLink
                  className="nav-NavLink"
                  to="/"
                  style={{ color: "313131", textDecoration: "Underline" }}
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink className="nav-NavLink" to="/about">
                  About
                </NavLink>
              </li>
              {/* <li className="nav-item mx-3">
                <NavLink className="nav-NavLink" to="/Success">
                  Success
                </NavLink>
              </li> */}
              <li className="nav-item mx-3">
                <NavLink className="nav-NavLink" to="/contact">
                  Contact
                </NavLink>
              </li>
              <form className="form-inline my-2 my-lg-0"></form>
            </ul>
            <Link
            to='/contact'
              className="btn btn my-sm-0"
              type="submit"
              style={{ marginLeft: "400px" }}
            >
              Register
            </Link>
          </div>
        </nav>
      </div>

    </>
  );
}
