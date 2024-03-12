import React from "react";
import { Link } from "react-router-dom";
import card8 from "../img/card8.png";
import card9 from "../img/card9.png";
import card10 from "../img/card10.png";
import card11 from "../img/card11.png";
import card12 from "../img/card12.png";
import card13 from "../img/card13.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SiLinkedin } from "react-icons/si";
export default function StudentsIonfo() {
    return (
        <>
            {/* same home data */}
            <div className="meet-students my-5" id="Successfull-Students"style={{position:"relative", zIndex:"0"}}>
                <h1 className="heading-text text-center"  >Meet Our Successfull Students</h1>
                <p className="container text-muted text-center">
                    Meet the trailblazers who&apos;ve unlocked their potential with our courses. Our successful students have embraced learning, conquered challenges, and achieved remarkable milestones. Join our community of achievers and embark on your own journey toward success today.
                </p>
            </div>
            <div className="row justify-content-center" >
                <div className="card m-1 mb-3" style={{ width: "17rem" }}>
                    <div className="card-body d-flex" style={{ justifyContent: "space-around" }}>
                        <div className="imgbox">
                            <img src={card8} height={80} width={80} style={{ borderRadius: "100px" }} alt="..." />
                            <Link>
                                <SiLinkedin style={{ color: "#289bde", fontSize: "2rem", position: "absolute", top: "70px", left: "90px" }} />
                            </Link>
                        </div>
                        <span className="my-2">
                            <h5 className="card-title">steav </h5>
                            <p className="text-muted">UX Designer</p>
                        </span>
                    </div>
                    {/* <NavLink to="/" className="btn btn-primary m-3">
                            Profile
                        </NavLink> */}
                </div>
                <div className="card m-1 mb-3" style={{ width: "17rem" }}>
                    <div className="card-body d-flex" style={{ justifyContent: "space-around" }}>
                        <div className="imgbox">
                            <img src={card9} height={80} width={80} style={{ borderRadius: "100px" }} alt="..." />
                            <Link>
                                <SiLinkedin style={{ color: "#289bde", fontSize: "2rem", position: "absolute", top: "70px", left: "75px" }} />
                            </Link>
                        </div>
                        <span className="my-2 mx-4">
                            <h5 className="card-title">Alina </h5>
                            <p className="text-muted">Mearn Stack Developer</p>
                        </span>
                    </div>
                    {/* <NavLink to="/" className="btn btn-primary m-3">
                            Profile
                        </NavLink> */}
                </div>
                <div className="card m-1 mb-3" style={{ width: "17rem" }}>
                    <div className="card-body d-flex" style={{ justifyContent: "space-around" }}>
                        <div className="imgbox">
                            <img src={card10} height={80} width={80} style={{ borderRadius: "100px" }} alt="..." />
                            <Link>
                                <SiLinkedin style={{ color: "#289bde", fontSize: "2rem", position: "absolute", top: "70px", left: "80px" }} />
                            </Link>
                        </div>
                        <span className="my-2 ">
                            <h5 className="card-title">Deniels</h5>
                            <p className="text-muted">Graphics Designer</p>
                        </span>
                    </div>
                    {/* <NavLink to="/" className="btn btn-primary m-3">
                            Profile
                        </NavLink> */}
                </div>
                <div className="card m-1 mb-3" style={{ width: "17rem" }}>
                    <div className="card-body d-flex" style={{ justifyContent: "space-around" }}>
                        <div className="imgbox">
                            <img src={card11} height={80} width={80} style={{ borderRadius: "100px" }} alt="..." />
                            <Link>
                                <SiLinkedin style={{ color: "#289bde", fontSize: "2rem", position: "absolute", top: "70px", left: "80px" }} />
                            </Link>
                        </div>
                        <span className="my-2 mx-4">
                            <h5 className="card-title">Harward </h5>
                            <p className="text-muted">Full Stack Developer</p>
                        </span>
                    </div>
                    {/* <NavLink to="/" className="btn btn-primary m-3">
                            Profile
                        </NavLink> */}
                </div>


            </div>
            {/* students feedback */}
            <div className="deadings my-5 text-center " >
                <h1 className="heading-text"  style={{position:"relative", zIndex:"0"}}>Some Student Feedback</h1>

                <p className="text-muted"  style={{position:"relative", zIndex:"0"}}>
                    Our students rave about their experience! Engaging content, interactive lessons, and knowledgeable instructors make learning a joy. The personalized approach and real-world applications ensure a deeper understanding. Join us for an unparalleled educational journey!
                </p>
            </div>

            <div className="row m-auto" id="horizontall" style={{position:"relative", zIndex:"0"}}>
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
                                Hi🖐, I&quot;m Steav, a UX Designer dedicated to crafting seamless, user-centric experiences that engage, delight, and elevate your digital presence.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={card8} height={50} width={50} style={{ borderRadius: "100px" }} alt="..." />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Steav
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        UX Designer
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
                                Hi🖐 I am Alina, Expert MEAN Stack Developer. Crafting innovative web solutions with MongoDB, Express.js, Angular, and Node.js. Transforming ideas into digital reality.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={card9} height={50} width={50} style={{ borderRadius: "100px" }} alt="..." />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Alina
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Mearn Stack Developer
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
                                Hi 🖐 I am Deniels, Crafting Visual Excellence. Elevating brands with innovative design solutions. Let&apos;s bring your vision to life, beautifully and effectively.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={card10} height={50} width={50} style={{ borderRadius: "100px" }} alt="..." />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Deniels
                                    </h5>
                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Graphics Designer
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
                                Hi🖐 i am Harward Expert Full Stack Developer. Transforming ideas into reality with innovative solutions. Your partner in crafting seamless digital experiences.
                            </p>
                            <div className="profile-img d-flex">
                                <img src={card11} height={50} width={50} style={{ borderRadius: "100px" }} alt="..." />
                                <div className="text ml-2">
                                    <h5 className="card-title " style={{ fontSize: "0.8rem" }}>
                                        Harward
                                    </h5>

                                    <h6
                                        className="card-subtitle mb-2 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Full Stack Developer
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
