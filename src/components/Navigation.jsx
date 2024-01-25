import React from "react";
import logo from "../img/logo.jpg";
import {NavLink} from "react-router-dom";
import "../App.css";
export default function Navigation() {
    return (
        <>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <NavLink className="navbar-brand fs-2" to="/"><img src={logo} height={40} width={40} alt="" />Logo.</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-center mt-2 mt-lg-0" >
                            <li className="nav-item active mx-3">
                                <NavLink className="nav-NavLink"to="/Carousels" style={{color:"313131",textDecoration:"Underline"}}>Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-NavLink" to="/contents">Courses</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-NavLink" to="/contents">E-Learning</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-NavLink" to="/">Success</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-NavLink" to="/">Contact</NavLink>
                            </li>
                            <form className="form-inline my-2 my-lg-0">
                                
                            </form>

                        </ul>
                                <button className="btn btn-outline-success my-sm-0" type="submit" style={{marginLeft:"220px"}}>Register</button>
                    </div>
                </nav>
         

            </div>
        </>
    );
}
