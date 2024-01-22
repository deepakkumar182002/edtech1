import React from 'react'
import logo from '../img/logo.jpg'
import '../App.css'
export default function Navigation() {
    // const logo = '/edtech/public/logo.jpg'
    return (
        <div>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <a className="navbar-brand fs-2" href="#"><img src={logo} height={40} width={40} alt="" />Logo.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <div className="collapse navbar-collapse" style={{background:"orange",position:"relative",display:"flex", alignItems:"center",justifyContent:'space-evenly'}} id="navbarTogglerDemo02"> */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-center mt-2 mt-lg-0" >
                            {/* <ul className="navbar-nav mr-center mt-2 mt-lg-0" > */}
                            <li className="nav-item active mx-3">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Courses</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Deal</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Success</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <form className="form-inline my-2 my-lg-0">
                                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search"/> */}
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                            </form>

                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}
