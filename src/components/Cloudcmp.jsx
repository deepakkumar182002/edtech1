import React from "react";
// import { useParams } from "react-router-dom";
import logo from "../img/compony4.png";
import compony from "../img/compony.png";
import compony2 from "../img/compony2.png";
import compony3 from "../img/compony3.png";
import compony4 from "../img/compony4.png";
import compony5 from "../img/compony5.png";
import compony6 from "../img/compony6.png";
import card8 from "../img/card8.png";
import card9 from "../img/card9.png";
import card10 from "../img/card10.png";
import card11 from "../img/card11.png";
import card12 from "../img/card12.png";
import card13 from "../img/card13.png";
import profileimg from "../img/profileimg.png";
import profileimg2 from "../img/profileimg2.png";
import profileimg3 from "../img/profileimg3.png";
import profileimg4 from "../img/profileimg4.png";
import profileimg5 from "../img/profileimg5.png";
import profileimg6 from "../img/profileimg6.png";
import profileimg7 from "../img/profileimg7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import couresTemplate from "../img/Rectangle 6-12.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import { GrCertificate, GrGlobe } from "react-icons/gr";
import { MdOutlineTouchApp } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";
export default function Cloudcmp() {
    // const CloudParam = useParams();

    return (
        <div className="container">
            <NavLink to="/" className="text-muted">Home&gt;</NavLink>
            <NavLink to="/Cloudcmp" className="text-muted">Cloudcmp</NavLink>
            <div className="row d-flex">
                <div className="col">
                    <img src={logo} alt="" className="logo h-20 w-10 my-3" />
                    <h1>Certification in Cloud Computing</h1>
                    <p className="text" style={{ color: "#289bde" }}>If you are a fresher then enroll now.</p>
                    <p>Explore the dynamic world of Cloud Computing with our comprehensive course. Master key concepts such as virtualization, scalability, and security. Gain hands-on experience with leading cloud platforms, preparing you for a successful career in this rapidly evolving field. Join us and harness the power of cloud technology for innovation and efficiency.</p>
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
                <div className="col d-flex align-items-center justify-content-center" style={{ background: "#ebebeb", borderRadius: "10px" }}>
                    <img src={couresTemplate} style={{ height: "400px", width: "500px" }} alt="" className="course-template" />
                </div>
            </div>
            <br />
            <hr />
            <div className="d-flex justify-content-center  my-5">
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
                                <h5 className="card-title">Promising Career in Cloud</h5>
                                <p className="card-text">Develop a lucrative career in the cloud domain, which boasts some of the highest-paying IT job roles</p>

                            </div>
                        </div>
                    </div>

                    <div className="box" style={{ height: "200px" }}>
                        <MdOutlineTouchApp style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                        <div className="card ml-2" style={{ width: "19rem", borderBottom: "5px solid#289bde" }}>
                            <div className="card-body">
                                <h5 className="card-title">Caltech Campus Visit Event</h5>

                                <p className="card-text">Get invited to an exclusive Campus Visit to connect with peers & Caltech leadership</p>

                            </div>
                        </div>
                    </div>
                    <div className="box" style={{ height: "200px" }}>
                        <GrGlobe style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                        <div className="card ml-2" style={{ width: "20rem", borderBottom: "5px solid#289bde" }}>
                            <div className="card-body">
                                <h5 className="card-title">Caltech&apos;s Academic Excellence</h5>
                                <p className="card-text">Earn a program certificate, CTME Circle membership and up to 15 CEUs from Caltech CTME</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h2 className="text-center my-5">Top Componies Hiring</h2>
                    <div className="row d-flex" style={{ background: "#e5f7f9d9", borderRadius: "10px" }}>
                        <img className="col m-4" src={compony} style={{ height: "50px", width: "100px" }} alt="" />
                        <img className="col m-4" src={compony2} style={{ height: "50px", width: "100px" }} alt="" />
                        <img className="col m-4" src={compony3} style={{ height: "50px", width: "100px" }} alt="" />
                        <img className="col m-4" src={compony4} style={{ height: "50px", width: "100px" }} alt="" />
                        <img className="col m-4" src={compony5} style={{ height: "50px", width: "100px" }} alt="" />
                        <img className="col m-4" src={compony6} style={{ height: "50px", width: "100px" }} alt="" />
                    </div>
                </div>
            </div>
            {/* same home data */}
            <div className="meet-students my-5">
                <h1 className="heading-text text-center">Meet Our Successfull Students</h1>
                <p className="container text-muted text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                    consequatur eveniet repellat provident facilis cupiditate
                    perspiciatis accusamus. Repellendus, nesciunt quae.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                    <img src={card8} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Alina </h5>
                        <p className="text-muted">UX Designer</p>
                        <NavLink to="/" className="btn btn-primary">
                            Profile
                        </NavLink>
                    </div>
                </div>
                <div className="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                    <img src={card9} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Christy</h5>
                        <p className="text-muted">Mearn Stack Developer </p>
                        <NavLink to="/" className="btn btn-primary">
                            Profile
                        </NavLink>
                    </div>
                </div>
                <div className="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                    <img src={card10} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Deniels</h5>
                        <p className="text-muted">Graphics Designer</p>
                        <NavLink to="/" className="btn btn-primary">
                            Profile
                        </NavLink>
                    </div>
                </div>
                <div className="card m-1 mb-1" style={{ maxWidth: "17rem" }}>
                    <img src={card11} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Harward </h5>
                        <p className="text-muted">Full Stack Developer</p>
                        <NavLink to="/" className="btn btn-primary">
                            Profile
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* students feedback */}
            <div className="deadings my-5 text-center ">
                <h1 className="heading-text">Some Student Feedback</h1>

                <p className="text-muted">
                    it is Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia fugit dolorem velit impedit laudantium delectus aperiam
                    eveniet culpa atque ea. a long established fact that a reader will
                    be distracted by the readable content of a page when looking at its
                    layout.
                </p>
            </div>

            <div className="row m-auto" id="horizontall">
                <div className="revers-forword">
                    <FontAwesomeIcon
                        style={{ fontSize: "2rem", color: "#289bde" }}
                        icon={faCircleChevronRight}
                        beat
                    />
                    <FontAwesomeIcon
                        style={{ fontSize: "2rem", color: "#289bde" }}
                        icon={faCircleChevronRight}
                        beat
                    />
                </div>
                <div className="scroll-container">
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext "
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg2} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg3} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg4} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg5} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg6} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card m-1 animatecard"
                        style={{ width: "26rem", height: "210px" }}
                    >
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div
                            className="card wraptext"
                            style={{ outline: "none", border: "none" }}
                        >
                            <p className="text-muted p-1">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                provident.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={profileimg7} alt="" />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Card title
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Card subtitle
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
