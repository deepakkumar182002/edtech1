import React from "react";
import poster1 from "../img/poster1.png";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import Contents from "./Contents";

export default function Carousel() {
    return (
        <React.Fragment>
                <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ background: "black" }}>
                            <img className="d-block w-100" style={{ opacity: "50%" }} src={poster1} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="getstarted ">Get Started Digital Learning</h1>
                                <button type="button" className="btn btn-primary my-3">Register</button>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ background: "black" }}>
                            <img className="d-block w-100" style={{ opacity: "50%" }} src={poster1} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="getstarted ">Get Started Digital Learning</h1>
                                <button type="button" className="btn btn-primary my-3">Register</button>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ background: "black" }}>
                            <img className="d-block w-100" style={{ opacity: "50%" }} src={poster1} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="getstarted ">Get Started Digital Learning</h1>
                                <button type="button" className="btn btn-primary my-3">Register</button>
                            </div>
                        </div>
                    </div>
                    <NavLink className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </NavLink>
                    <NavLink className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </NavLink>
                </div>
            </div>
            <Contents />
        </React.Fragment>
    );
}
