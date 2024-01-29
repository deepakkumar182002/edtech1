import React from "react";
import poster1 from "../img/poster1.png";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.png";
import "../App.css";
// import { Link } from "react-router-dom";


export default function Carousel() {
  return (
    <React.Fragment>
      <div className="container-fluid my-1">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ background: "black" }}>
              <div className="carousel-caption d-none d-md-block">
                <h1>India&apos;s Best Learning Plateform</h1>
                <p>...</p>
              </div>
              <img className="d-block w-100" style={{ opacity: "50%" }} src={poster1} alt="First slide" />
            </div>
            <div className="carousel-item" style={{ background: "black" }}>
              <img className="d-block w-100" style={{ opacity: "50%" }} src={poster2} alt="Second slide" />
            </div>
            <div className="carousel-item" style={{ background: "black" }}>
              <img className="d-block w-100" style={{ opacity: "50%" }} src={poster3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      
    </React.Fragment>
  );
}
