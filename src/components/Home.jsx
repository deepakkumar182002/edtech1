import React from "react";
// import logo from "../img/logo2.jpg";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";
import card5 from "../img/card5.png";
import card6 from "../img/card6.png";
import card7 from "../img/card7.png";
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
import compony from "../img/compony.png";
import compony2 from "../img/compony2.png";
import compony3 from "../img/compony3.png";
import compony4 from "../img/compony4.png";
import compony5 from "../img/compony5.png";
import compony6 from "../img/compony6.png";

import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
    FaLinkedin,
    FaInstagram,
    FaSquareXTwitter,
    FaSquareFacebook, FaCalendar
} from "react-icons/fa6";
import Carousel from "./Carousel";

export default function Home() {
    return (
        <React.Fragment>
            <Carousel />

            <div className="container-fluid">
                <div className="deadings my-5 text-center ">
                    <h1 className="heading-text">Discover Our Popular </h1>
                    <h1 className="heading-text">Courses</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="card-container justify-content-center row">

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card1}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Software Development</h5>
                                    <p className="card-text text-justify">
                                        Become ready to join a software development 3-month beginner course. in this course, we will learn most industries requirements for developers.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>&#9733; 3.1(35 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/softwaredev'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card2 */}

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card2}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Computing</h5>
                                    <p className="card-text text-justify">
                                        Become ready to join a Cloud computing 3-month beginner course. in this course, we will learn most industries&apos; requirements for developers
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>90.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>&#9733; 3.2(3563 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/softwaredev'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card3 */}

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card6}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Digital Marketing</h5>
                                    <p className="card-text text-justify">
                                        Unlock the secrets of digital marketing! Join our comprehensive course for expert insights on SEO, social media, and more. Elevate your skills and boost your career. Enroll today!
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>101.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 2.2(2263 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/Digitalmarketing'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card4 */}

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card3}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Security</h5>
                                    <p className="card-text text-justify">
                                        Enhance your digital defense skills with our comprehensive Cyber Security Course. Learn vital strategies, ethical hacking, and safeguarding techniques. Enroll now to secure your online presence and future.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>82.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>&#9733; 3.5(3562 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/Cybersecurity'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card5 */}

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card5}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Data Science</h5>
                                    <p className="card-text text-justify">
                                        Unlock the power of data! Enroll in our Data Science Course for hands-on experience in analytics, machine learning, and more. Elevate your skills and career. Join now!
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>150.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 2.1(2263 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/Datascience'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card6 */}

                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">UI / UX</h5>
                                    <p className="card-text text-justify">
                                        Unlock creativity with our UI/UX course! Dive into design principles, user research, prototyping, and more. Master the art of crafting seamless digital experiences. Enroll now for innovation
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>202.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733; 3.1(3133 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/UIUX'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* add all courses */}
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">IOT / Embedded </h5>
                                    <p className="card-text text-justify">
                                        Revolutionize learning with our IoT and embedded systems online courses. Streamlined card design ensures accessible, dynamic content delivery for a futuristic educational experience.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>302.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;&#9733;</span> 4.1(4133 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Graphics Design</h5>
                                    <p className="card-text text-justify">
                                        Revolutionize online learning graphics with our card-based design—melding sleek aesthetics, user-friendly navigation, and captivating visuals for an immersive educational experience.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733;&#9733; 2.1(2133 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Drone Technology</h5>
                                    <p className="card-text text-justify">
                                        Revolutionizing education through drone technology, our online courses feature dynamic content delivery, offering an unparalleled immersive learning experience.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>102.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;&#9733;</span>4.1(4153 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">AI & Machine Learning</h5>
                                    <p className="card-text text-justify">
                                        Revolutionize learning with our AI-powered card-based design for online courses. Experience personalized content, adaptive quizzes, and cutting-edge insights effortlessly.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>302.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>&#9733; 3.1(3143 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Operating System</h5>
                                    <p className="card-text text-justify">
                                        Revolutionizing online learning, our OS employs card-based design, enhancing user interaction and accessibility for an optimized, intuitive educational experience.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>302.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>&#9733; 3.1(3361 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 align-self-center">
                                <img
                                    src={card4}
                                    className="img-fluid rounded-start m-3"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">DevOps</h5>
                                    <p className="card-text text-justify">
                                        Revolutionize online courses with DevOps, leveraging card-based design for streamlined development, seamless integration, and optimal collaboration. Empower efficiency effortlessly.
                                    </p>
                                    <li className="text-muted" style={{ fontSize: "0.8rem" }}>302.2k Learners</li>
                                    <li style={{ fontSize: "0.8rem" }}><span style={{ color: "orange" }}>&#9733;&#9733;</span>&#9733;&#9733; 3.1(21 61 Rating)</li>

                                    <li className="card-text d-flex" style={{ justifyContent: "space-between" }}>
                                        <small className="text-muted d-flex justify-content-start">
                                            <FaCalendar className="m-2" /> <span className="pt-1">3 Months</span>
                                        </small>
                                        <Link to='/'>Explore now</Link>

                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <br />
                {/* <button className="btn btn-primary d-flex m-auto" >
                    <Link type="button" style={{ color: "#fff", textDecoration: "none" }} >
                        See more Courses
                    </Link>
                </button> */}

                <div
                    className="row mb-3 m-1 my-5"
                    style={{ maxWidth: "1800px", background: "#e7f1f5" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={card7} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body mt-5">
                                <h2 className="card-title">Explore Smart Learning</h2>
                                <p className="card-text text-muted">
                                    Embark on a transformative educational journey with Explore Smart Learning&apos;s online courses. Unleash your potential through cutting-edge content delivered by industry experts. From personalized learning paths to interactive modules, our platform offers a dynamic and engaging experience. Elevate your skills, boost your career, and embrace the future of education. Join us in redefining smart learning today!
                                </p>
                                <p className="card-text text-muted">
                                    Discover top-notch online courses! Our platform offers a diverse range of subjects taught by experts. Empower your learning journey with user-rated courses.
                                </p>

                                <div className="d-flex flex-row ">
                                    <span className="fw-bold col">
                                        <h2>3.2k+</h2>
                                        <span className="text-muted">Online courses</span>
                                    </span>
                                    <span className="fw-bold col">
                                        <h2>600+</h2>
                                        <span className="text-muted">Expert members</span>
                                    </span>
                                    <span className="fw-bold col">
                                        <h2>1k+</h2>
                                        <span className="text-muted">Rating & Review</span>
                                    </span>
                                </div>
                                <br />
                                <Link type="button" to='/explorecourses' className="btn btn-primary m-auto">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div
                    className="row justify-content-center m-1"
                    style={{ background: "#289bde", color: "#fff" }}
                >
                    <div className="row" style={{ maxWidth: "800px" }}>
                        <div className="row fw-bold m-4">
                            <h1>Ready to join?</h1>
                            <span className="text">
                                Embark on a transformative learning experience! Join our edtech platform today and unlock a world of knowledge. Explore innovative courses, connect with experts, and take your skills to new heights!
                            </span>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col mt-5">
                            <Link
                                to="/explorecourses"
                                className="btn btn-primary"
                                style={{
                                    background: "#fff",
                                    color: "#0096FF",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>

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
                {/* <div
                    className="center-accordion"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="accourdion">
                        <ul className="accordion">
                            {AccordionData.map(({ heading, content }) => (
                                <Accordion
                                    key={content}
                                    heading={heading}
                                    content={content}
                                    m-1={true}
                                />
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="deadings my-5 text-center ">
                    <h1 className="heading-text">Trusted by over 800+ componies</h1>
                    <div className="row componies-icons  mt-5 d-flex justify-content-center">
                        <img src={compony} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                        <img src={compony2} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                        <img src={compony3} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                        <img src={compony4} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                        <img src={compony5} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                        <img src={compony6} style={{ height: "180px", width: "250px" }} className="pt-3" alt="" />
                    </div>
                </div>
            </div>
            {/* <footer style={{ background: "#272727", color: "#FFF" }}> */}
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
        </React.Fragment>
    );
}
