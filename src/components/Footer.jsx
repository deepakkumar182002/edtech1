import React from "react";
import {
    FaLinkedin,
    FaInstagram,
    FaSquareXTwitter,
    FaSquareFacebook
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <footer style={{ background: "#289bde", color: "#FFF" }}>

                <div className="row d-flex m-2">

                    <div className="footer-title-name-box" style={{ background: "", padding: "20px", position: "relative", width: "auto" }}>
                    <h1 className="text ">Starlink IT Solutions</h1>
                        <p className="footer-text"><FaLocationDot className="mx-3" />31A/206, Shiv Nagar, Rajpur Chungi</p>
                        <p className="footer-text mx-5">Agra, Uttar Pradesh, India-(282001)</p>
                        <p className="footer-text"><FaPhoneAlt className="mx-3"/>+91-8979491747 </p>
                    </div>

                    <div className="Footer-All-Links d-flex flex-row p-3 mx-3" style={{ position: "relative" }}>
                        <li className="p-2 bd-highlight" style={{ display: "grid", placeItems: "center" }}>
                            <Link to='/' style={{ color: "#fff" }}>Home</Link>
                            <Link to='/About' style={{ color: "#fff" }}>About</Link>
                            <Link to='/Success' style={{ color: "#fff" }}>Success</Link>
                            <Link to='/Contact' style={{ color: "#fff" }}>Contact</Link>
                        </li>
                        <li className="p-2 bd-highlight mx-3" style={{ display: "grid", placeItems: "center" }}>
                            <a href='#Popular-courses' style={{ color: "#fff" }}>All Courses</a>
                            <Link to='/Service' style={{ color: "#fff" }}>Services</Link>
                            <a href="#Successfull-Students" style={{ color: "#fff" }}>Students</a>
                            <Link to='/Help' style={{ color: "#fff" }}>Help</Link>
                        </li>
                    </div>
                </div>
                <div className="social-midea mx-5" style={{ position: "relative" }}>
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
