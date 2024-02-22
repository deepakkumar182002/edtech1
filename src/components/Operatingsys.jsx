import React from "react";
// import { useParams } from "react-router-dom";
// import logo from "../img/compony4.png";
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
import {
    FaLinkedin,
    FaInstagram,
    FaSquareXTwitter,
    FaSquareFacebook,
} from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import couresTemplate from "../img/Rectangle 6-12.png";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { GrCertificate, GrGlobe } from "react-icons/gr";
import { MdOutlineTouchApp } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";
export default function Softwaredev() {
    // const CloudParam = useParams();

    return (
        <>
            <div className="container">
                <NavLink to="/" className="text-muted">Home&gt;</NavLink>
                <NavLink to="/operatingsys" className="text-muted">Operating System</NavLink>
                <div className="row d-flex">
                    <div className="col">
                        {/* <img src={logo} alt="" className="logo h-20 w-10 my-3" /> */}
                        <h1>Certification in Operating System</h1>
                        <p className="text" style={{ color: "#289bde" }}>If you are a fresher then enroll now.</p>
                        <p className="text-justify">Experience seamless online learning with our advanced operating system for courses. Our platform provides an intuitive interface, ensuring easy navigation and access to a diverse range of courses. Enjoy real-time collaboration, interactive content, and personalized learning paths. With robust features such as progress tracking, quizzes, and discussion forums, our operating system enhances the online education experience. Elevate your learning journey with a user-friendly, efficient, and dynamic platform designed for success in the digital classroom.</p>
                        <div className="d-flex align-items-center">
                            <h5 className="text-muted ">Certificate Assign with </h5>
                            {/* <img src={Logo2} style={{ width: "30px", height: "50px" }} alt="" className="col" /> */}
                        
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

                        <div className="box m-3" style={{ height: "200px" }}>
                            <GrCertificate style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "19rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Promising Career in Operating System</h5>
                                    <p className="card-text text-justify">Develop a lucrative career in the Operating System, which boasts some of the highest-paying IT job roles</p>

                                </div>
                            </div>
                        </div>

                        <div className="box m-3" style={{ height: "200px" }}>
                            <MdOutlineTouchApp style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "19rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body" style={{ height: "196px" }}>
                                    <h5 className="card-title" >Caltech Campus Visit Event</h5>

                                    <p className="card-text text-justify">Get invited to an exclusive Campus Visit to connect with peers & Caltech leadership</p>


                                </div>
                            </div>
                        </div>
                        <div className="box m-3" style={{ height: "200px" }}>
                            <GrGlobe style={{ fontSize: "2rem", color: "#289bde", position: "relative", top: "20px", left: "20px", zIndex: "1" }} />
                            <div className="card ml-2" style={{ width: "20rem", borderBottom: "5px solid#289bde" }}>
                                <div className="card-body" style={{ height: "195px" }}>
                                    <h5 className="card-title">Caltech&apos;s Academic Excellence</h5>
                                    <p className="card-text text-justify">Earn a program certificate, CTME Circle membership and up to 15 CEUs from Caltech CTME</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className="text-center my-5">Top Componies Hiring</h2>
                        <div className="row d-flex align-items-center justify-content-center" style={{ background: "#e5f7f9d9", borderRadius: "10px" }}>
                        <img src={compony}  style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        <img src={compony2} style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        <img src={compony3} style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        <img src={compony4} style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        <img src={compony5} style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        <img src={compony6} style={{height:"100px",width:"150px"}} className="pt-3 m-3" alt="" />
                        </div>
                    </div>

                </div>
                {/* same home data */}
                <div className="meet-students my-5">
                    <h1 className="heading-text text-center">Meet Our Successfull Students</h1>
                    <p className="container text-muted text-center">
                    Meet the trailblazers who&apos;ve unlocked their potential with our courses. Our successful students have embraced learning, conquered challenges, and achieved remarkable milestones. Join our community of achievers and embark on your own journey toward success today.
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
                    Our students rave about their experience! Engaging content, interactive lessons, and knowledgeable instructors make learning a joy. The personalized approach and real-world applications ensure a deeper understanding. Join us for an unparalleled educational journey!
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
            <footer style={{ background: "#289bde", color: "#FFF" }}>

                <div className="row d-flex m-2">

                    <div className="footer-title-name-box" style={{ background: "", padding: "20px", position: "relative", width: "auto" }}>
                        <h1 className="text ">Ed Tech</h1>
                        <p className="footer-text">Ed Tech Pvt ltd, Noida, Delhi, India Lorem ipsum dolor sit</p>
                        <p className="footer-text">India, Uttar Pradesh Agra (282007) </p>
                        <p className="footer-text">Privacy Policy | Tearm of use |</p>
                    </div>

                    <div className="Footer-All-Links d-flex flex-row p-3 mx-3" style={{ position: "relative" }}>
                        <li className="p-2 bd-highlight" style={{ display: "grid", placeItems: "center" }}>
                            <Link to='/' style={{ color: "#fff" }}>Home</Link>
                            <Link to='/About' style={{ color: "#fff" }}>About</Link>
                            <Link to='/Success' style={{ color: "#fff" }}>Success</Link>
                            <Link to='/Contact' style={{ color: "#fff" }}>Contact</Link>
                        </li>
                        <li className="p-2 bd-highlight mx-3" style={{ display: "grid", placeItems: "center" }}>
                            <Link to='/explorecourses' style={{ color: "#fff" }}>All Courses</Link>
                            <Link to='/Service' style={{ color: "#fff" }}>Services</Link>
                            <Link to='/Address' style={{ color: "#fff" }}>Address</Link>
                            <Link to='/Help' style={{ color: "#fff" }}>Help</Link>
                        </li>
                    </div>
                </div>
                <div className="social-midea" style={{ position: "relative" }}>
                    <li className="col" style={{ position: "relative", top: "-20px" }}>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com'>
                            <FaLinkedin style={{ margin: "5px", fontSize: "1.5rem", color: "#fff" }} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                            <FaInstagram style={{ margin: "5px", fontSize: "1.5rem", color: "#fff" }} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                            <FaSquareXTwitter style={{ margin: "5px", fontSize: "1.5rem", color: "#fff" }} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                            <FaSquareFacebook style={{ margin: "5px", fontSize: "1.5rem", color: "#fff" }} />
                        </a>
                    </li>
                    {/* <img src={logo} height={50} width={50} className="p-2" alt="logo" /> */}

                </div>
            </footer>
        </>
    );
}
