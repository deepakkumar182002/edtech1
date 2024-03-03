import React from "react";
import {
    FaLinkedin,
    FaInstagram,
    FaSquareXTwitter,
    FaSquareFacebook
} from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
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
