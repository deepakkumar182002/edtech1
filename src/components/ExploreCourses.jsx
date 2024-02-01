import React, { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import card from "../img/card1.png";
import { Link } from "react-router-dom";



export default function ExploreCourses() {


    const [getcard, setGetcard] = useState(1);
    let Showcard = (e) => {
        setGetcard(e);
    };
    return (
        <div>
            <div className="container-fluid">

                <h1 className="text-center my-3">Get Certified, Get Ahead with Our Programs</h1>
                <h6 className="text-muted text-center my-2">Learn from global experts and get certified by the world&apos;s leading universities</h6>
                <div className="d-flex flex-row">
                    <div className="nav nav-pills mb-3 list-group mx-1 my-5 col ">
                        <li className={getcard === 1 ? "nav-link active" : "nav-link active"} onClick={() => Showcard(1)}>All Categories</li>
                        <li className={getcard === 2 ? "nav-link active" : "nav-link"} onClick={() => Showcard(2)} style={{ border: "none",cursor:"pointer" }} >Cloud Computing</li>
                        <li className={getcard === 3 ? "nav-link active" : "nav-link"} onClick={() => Showcard(3)} style={{ border: "none",cursor:"pointer" }} >digital marketing</li>
                        <li className={getcard === 4 ? "nav-link active" : "nav-link"} onClick={() => Showcard(4)} style={{ border: "none",cursor:"pointer" }} >Syber Security</li>
                        <li className={getcard === 5 ? "nav-link active" : "nav-link"} onClick={() => Showcard(5)} style={{ border: "none",cursor:"pointer" }} >Data Science</li>
                        <li className={getcard === 6 ? "nav-link active" : "nav-link"} onClick={() => Showcard(6)} style={{ border: "none",cursor:"pointer" }} >UI & UX</li>
                        <li className={getcard === 7 ? "nav-link active" : "nav-link"} onClick={() => Showcard(7)} style={{ border: "none",cursor:"pointer" }} >IOT / Embedded</li>
                        <li className={getcard === 8 ? "nav-link active" : "nav-link"} onClick={() => Showcard(8)} style={{ border: "none",cursor:"pointer" }} >Graphics Design</li>
                        <li className={getcard === 9 ? "nav-link active" : "nav-link"} onClick={() => Showcard(9)} style={{ border: "none",cursor:"pointer" }} >Drone Technology</li>
                        <li className={getcard === 10 ? "nav-link active" : "nav-link"} onClick={() => Showcard(10)} style={{ border: "none",cursor:"pointer" }} >AI & Machine Learning</li>
                        <li className={getcard === 11 ? "nav-link active" : "nav-link"} onClick={() => Showcard(11)} style={{ border: "none",cursor:"pointer" }} >OS Linux</li>
                        <li className={getcard === 12 ? "nav-link active" : "nav-link"} onClick={() => Showcard(12)} style={{ border: "none",cursor:"pointer" }} >DevOps</li>
                        <li className={getcard === 13 ? "nav-link active" : "nav-link"} onClick={() => Showcard(13)} style={{ border: "none",cursor:"pointer" }} >Software Development</li>
                    </div>
                    <div className="card my-5 p-3 col-md-10">

                        <div className={getcard===2? "card-container d-flex row fade show active":"card-container d-flex row fade"}>
                            <div className="card allcard m-2"style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>

                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className={getcard===3? "card-container d-flex row fade show active":"card-container d-flex row fade "}>
                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className={getcard===4? "card-container d-flex row fade show active":"card-container d-flex row fade "}>
                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                            <div className="card allcard m-2" style={{ width: "18rem" }}>
                                <img src={card} className="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Software development</h5>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}><span style={{ color: "#289bde", fontSize: "0.7rem" }}>&#10004;</span>    Lorem dolor adipisicing elit.</li>
                                    <br />
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 4.1(3563rating)</li>
                                </div>
                                <div className="row ">
                                    <Link className="text mx-4">Go somewhere</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}
