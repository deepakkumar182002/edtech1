import React from "react";
// import logo from "../img/logo2.jpg";
// import card1 from "../img/card1.png";
import usercard1 from "../img/usercard1.png";
import usercard2 from "../img/usercard2.png";
import usercard3 from "../img/usercard3.png";
import usercard4 from "../img/usercard4.png";
import usercard5 from "../img/usercard5.png";
import usercard6 from "../img/usercard6.png";
import usercard7 from "../img/usercard7.png";
import usercard8 from "../img/usercard8.png";
import usercard9 from "../img/usercard9.png";
import usercard10 from "../img/usercard10.png";
import usercard11 from "../img/usercard11.png";
import usercard12 from "../img/usercard12.png";
import card7 from "../img/card7.png";

import compony from "../img/compony.png";
import compony2 from "../img/compony2.png";
import compony3 from "../img/compony3.png";
import compony4 from "../img/compony4.png";
import compony5 from "../img/compony5.png";
import compony6 from "../img/compony6.png";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
    FaCalendar
} from "react-icons/fa6";

import Carousel from "./Carousel";
import { useForm, ValidationError } from "@formspree/react";
import { CiCircleRemove } from "react-icons/ci";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import StudentsIonfo from "./StudentsIonfo";
import { IoLogoWhatsapp } from "react-icons/io";
import Chatbot2 from "./Chatbot";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "600px",
        position:"relative",
        zIndex:"100",
        background:"transparent",
        border: "1px solid #abababd9",
        boxShadow: "0 0 40px 5px #abababd9",
    },
};
export default function Home() {

    const [isvisible, setIsvisible] = useState(false);
    const location = useLocation();

    let toggle = () => { //this onclik on form remove button

        setIsvisible(!isvisible);
        // setTimeout(function (){
        // }, 2000);
    };

    React.useEffect(() => {
        // const formDelay = 3000; // Delay time in milliseconds
        const formShown = sessionStorage.getItem("formShown");

        if (!formShown) {
            sessionStorage.setItem("formShown", true);
            setTimeout(() => {
                setIsvisible(true);
            }, 60000);
        }

        return () => {
            sessionStorage.removeItem("formShown");
        };
    }, [location]);

    const [state, handleSubmit] = useForm("mpzvdprv");

    const handleFormSubmit = (event) => {
        // Your custom form validation logic goes here
        // For example, check if name, email, and message are not empty
        if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
            // Show an error message or handle the validation error
            console.error("Please fill out all required fields");
            return;
        }

        // If validation passes, proceed with the form submission
        handleSubmit(event);
    };

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            {/* contact form */}
            {
                isvisible && <Modal
                    isOpen={true}
                    style={customStyles}
                    contentLabel="Request Callback"
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={false}
                >
                    <div className="box d-flex justify-content-center" style={{ position: "relative", zIndex: "100" }}>
                        <div className="request-callback-container" style={{background:"#fafafa"}}>
                            <div className="header-text p-3 d-flex" style={{ background: "#289bde", color: "#fff", justifyContent: "space-between" }}>
                                <span>
                                    <h2>Request Callback</h2>
                                    <h6>Fill out this form below!</h6>
                                </span>
                                <CiCircleRemove id="remove-btn" onClick={toggle} style={{ fontSize: "30px" }} />
                            </div>
                            <form onSubmit={handleFormSubmit} className="d-flex align-items-center " style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <input id="Username" type="Username" name="name" placeholder="Enter You Name" className="m-2 p-2"
                                    style={{ width: "80%", height: "40px" }}
                                    required
                                />
                                <ValidationError
                                    prefix="Username"
                                    field="name"
                                    errors={state.errors}
                                />
                                <input id="email" type="email" name="email" placeholder="Enter Your Email"
                                    style={{ width: "80%", height: "40px" }}
                                    className="m-2 p-2"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <input id="Phone" name="Phone" placeholder="Enter Your Phone no."
                                    style={{ width: "80%", height: "40px" }}
                                    className="m-2 p-2"
                                    required
                                />
                                <ValidationError
                                    prefix="Phone"
                                    field="Phone"
                                    errors={state.errors}
                                />
                                <label htmlFor="course" className="text text-start" style={{ position: "relative", left: "-155px", fontWeight: "500" }}>Course Interest*</label>
                                <select name="course" id="course" className="p-2" style={{ width: "80%" }}>
                                    <option >Select Course</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Cloud computing">Cloud computing</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                </select>
                                <ValidationError
                                    prefix="Course"
                                    field="Course"
                                    errors={state.errors}
                                />
                                <label htmlFor="course" className="text text-start " style={{ position: "relative", left: "-180px", fontWeight: "500" }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="my-0 p-2"
                                    rows="3"
                                    cols="50"
                                    placeholder="text.."
                                    style={{ width: "80%" }}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}

                                />
                                <button type="submit" disabled={state.submitting} className="m-3" style={{ width: "80%", height: "40px", border: "none", background: "#289bde", color: "#fff" }}>
                                    Submit
                                </button>
                                <p className="text-muted" style={{ width: "80%" }}>By continuing, you confirm that you have read and agreed to Ed-Tech&apos;s <span style={{ color: "#289bde" }}>Terms</span> and <span style={{ color: "#289bde" }}>Privacy policy</span></p>

                            </form>
                        </div>
                    </div>
                </Modal>
            }
            {/* ###################################################################################### */}
            <React.Fragment>
                <Carousel />
                <div className="container-fluid">
                    <div className="deadings text-center" id="Popular-courses" >
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
                                        src={usercard1}
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
                                        src={usercard2}
                                        height={200}
                                        width={200}
                                        className="img-fluid rounded-start m-3"
                                        alt="..."
                                        style={{ borderRadius: "3px" }}
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
                                        src={usercard3}
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
                                        src={usercard4}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                        src={usercard5}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                        src={usercard6}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                        src={usercard7}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/iot'>Explore now</Link>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 align-self-center">
                                    <img
                                        src={usercard8}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/graphicsDesign'>Explore now</Link>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 align-self-center">
                                    <img
                                        src={usercard9}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/drone'>Explore now</Link>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 align-self-center">
                                    <img
                                        src={usercard10}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/ai'>Explore now</Link>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 align-self-center">
                                    <img
                                        src={usercard11}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/operatingsys'>Explore now</Link>

                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 m-1" style={{ maxWidth: "500px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 align-self-center">
                                    <img
                                        src={usercard12}
                                        height={200}
                                        width={200}
                                        style={{ borderRadius: "3px" }}
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
                                            <Link to='/devops'>Explore now</Link>

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
                    <StudentsIonfo />
                    <div className="deadings my-5 text-center ">
                        <h1 className="heading-text">Trusted by over 200+ componies</h1>
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
                <Footer />
                <div className="chatbot" style={{position:"relative",zIndex:"1"}}>
                <Chatbot2 />
                </div>
                <div className="fixed-bottom right-140" style={{left:"initial",marginBottom:"90px",marginRight:"30px",zIndex:"0"}}>
                    <a href="https://wa.me/8273243959?text=Hello, How can I help you?" target="_blank" rel="noreferrer">
                    <IoLogoWhatsapp style={{fontSize:"4rem",color:"#40ff00"}} />
                    </a>
                </div>

            </React.Fragment>
        </>
    );
}
