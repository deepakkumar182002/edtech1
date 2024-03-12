import React from "react";
// import { useParams } from "react-router-dom";
import compony from "../img/compony.png";
import compony2 from "../img/compony2.png";
import compony3 from "../img/compony3.png";
import compony4 from "../img/compony4.png";
import compony5 from "../img/compony5.png";
import compony6 from "../img/compony6.png";

import couresTemplate from "../img/digital-marketing.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import { GrCertificate, GrGlobe } from "react-icons/gr";
import { MdOutlineTouchApp } from "react-icons/md";

import StudentsIonfo from "./StudentsIonfo";
import Footer from "./Footer";
// import { CiGlobe } from "react-icons/ci";
export default function Digitalmarketing() {
    // const CloudParam = useParams();

    return (
        <>
            <div className="container">
                <NavLink to="/" className="text-muted">Home&gt;</NavLink>
                <NavLink to="/Digitalmarketing" className="text-muted">Digital Marketing</NavLink>
                <div className="row d-flex">
                    <div className="col">
                        {/* <img src={logo} alt="" className="logo h-20 w-10 my-3" /> */}
                        <h1>Certification in Digital Marketing</h1>
                        <p className="text" style={{ color: "#289bde" }}>If you are a fresher then enroll now.</p>
                        <p className="text-justify">Unlock boundless knowledge with our cutting-edge online courses! Elevate your skills and career prospects through interactive lessons, expert-led webinars, and engaging content. Our digital platform offers a seamless learning experience, tailored to your pace and preferences. Dive into diverse subjects, from business to technology, and gain a competitive edge. Join a vibrant community of learners and embark on a transformative educational journey. Start your success story today with our online courses  where knowledge meets convenience, and excellence is just a click away!</p>
                        <div className="d-flex align-items-center">
                            <h5 className="text-muted ">Certificate Assign with </h5>
                            {/* <img src={compony} style={{ width: "30px", height: "50px" }} alt="" className="col" />
                        <img src={compony} style={{ width: "30px", height: "50px" }} alt="" className="col" /> */}
                        </div>
                        <div className="d-flex align-items-center my-4">
                            <button type="button" id="ApllyNowBtn" className="btn ">Apply Now</button>
                            <button type="button" className="ApllyNowBtn btn mx-5" style={{ border: "1px solid #289bde", color: "#289bde", background: "#fff" }}>Download Syllabus</button>
                        </div>

                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <img src={couresTemplate} style={{ height: "400px", width: "500px" }} alt="" className="course-template" />
                    </div>
                </div>
                <br />
                <hr />
                <div className="d-flex justify-content-center text-center">
                    <div className="col">
                        <h6 className="text-muted">Next Prgram</h6>
                        <h4>7 Feb</h4>
                    </div>
                    <div className="col">
                        <h6 className="text-muted">Prgram Duration</h6>
                        <h4>5 Mounths</h4>
                    </div>
                    <div className="col">
                        <h6 className="text-muted">Learning Formate</h6>
                        <h4>Online</h4>
                    </div>
                </div>
                <div className="my-5">
                    <h2 className="d-flex justify-content-center m-1 align-items-center" style={{ background: "#289bde", color: "#fff", height: "60px" }}>Why Join Program ?</h2>
                    <div className="row align-items-start justify-content-center">

                        <div className="box" style={{ height: "200px" }}>
                            <GrCertificate style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "19rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Promising Career in Digital Marketing</h5>
                                    <p className="card-text text-justify">Develop a lucrative career in the cloud domain, which boasts some of the highest-paying IT job roles</p>

                                </div>
                            </div>
                        </div>

                        <div className="box" style={{ height: "200px" }}>
                            <MdOutlineTouchApp style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "19rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body" style={{ height: "170px" }}>
                                    <h5 className="card-title">Caltech Campus Visit Event</h5>

                                    <p className="card-text text-justify">Get invited to an exclusive Campus Visit to connect with peers & Caltech leadership</p>

                                </div>
                            </div>
                        </div>
                        <div className="box" style={{ height: "200px" }}>
                            <GrGlobe style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "20rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body" style={{ height: "170px" }}>
                                    <h5 className="card-title">Caltech&apos;s Academic Excellence</h5>
                                    <p className="card-text text-justify">Earn a program certificate, CTME Circle membership and up to 15 CEUs from Caltech CTME</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className="text-center my-5">Top Componies Hiring</h2>
                        <div className="row d-flex align-items-center justify-content-center" style={{ background: "#e5f7f9d9", borderRadius: "10px" }}>
                            <img src={compony} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                            <img src={compony2} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                            <img src={compony3} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                            <img src={compony4} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                            <img src={compony5} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                            <img src={compony6} style={{ height: "100px", width: "150px" }} className="pt-3 m-3" alt="" />
                        </div>
                    </div>
                </div>
                <StudentsIonfo />
                </div>
                <Footer />
            </>
            );
}
