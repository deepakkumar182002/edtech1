import "../App.css"; // Import your CSS file for styling
// src/components/About.js
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { LiaConnectdevelop } from "react-icons/lia";
import meetStudent from "../img/googleMt.png";
import { GrAchievement } from "react-icons/gr";
import { TiGlobe } from "react-icons/ti";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <NavLink to="/" className="text-muted">Home&gt;</NavLink>
        <NavLink to="/about" className="text-muted">About</NavLink>
        {/* <h1 className="my-3 text-center">About StarLink</h1> */}
        <div className="box d-flex align-items-center justify-content-center">
          <LiaConnectdevelop style={{ color: "#289bde", fontSize: "4rem" }} />
          <h2 className="text-center my-3">Welcome to Starlink IT Solutions, the Future of Connectivity</h2>
        </div>
        <p className="text-center text-muted">Welcome to Starlink IT Solutions, where our mission is to illuminate the path to success for aspiring tech professionals through comprehensive, cutting-edge computer science education. In a world where technology continually reshapes the way we live and work, Starlink IT Solutions stands as a beacon of knowledge and innovation, guiding students toward fulfilling careers in the tech industry.</p>
        <img className="img-fluid rounded mx-auto d-block" style={{ position: "relative", backgroundPosition: "center", backgroundSize: "cover" }} height={400} width={1350} src={meetStudent} alt="" />

        <div className="row my-3 d-flex flex-row" style={{ justifyContent: "space-evenly" }} >
          <div className="box my-3" style={{ width: "40rem" }}>
            <h5 className="card-title">Our Journey</h5>
            <h6 className="text-muted text-justify" style={{ fontWeight: "100" }}><i> <span style={{ color: "#289bde", fontWeight: "500" }}>Starlink IT Solutions</span> Education was founded in <span style={{ color: "#289bde", fontWeight: "500" }}>[2022] </span> with a simple, yet profound vision: to make high-quality computer science education accessible to everyone, everywhere. Recognizing the rapidly growing demand for skilled tech professionals, we set out to create a learning platform that not only teaches the most popular and essential computer science courses but does so in a way that is engaging, effective, and truly accessible to all.</i></h6>
          </div>

          <div className="box my-3" style={{ width: "40rem" }}>
            <h5 className="card-title">What We Offer</h5>
            <h6 className="text-muted text-justify" style={{ fontWeight: "100" }}><i>At <span style={{ color: "#289bde", fontWeight: "500" }}>Starlink IT Solutions</span>, we specialize in a wide range of computer science disciplines, from foundational courses in programming and software development to advanced topics in artificial intelligence, machine learning, data science, and cybersecurity. Our curriculum is designed by industry experts and academics to ensure it&apos;s current, comprehensive, and practical.</i></h6>
          </div>


        </div>

        {/* Placeholder for company achievements images */}
        <div className="row my-5 d-flex flex-row" style={{ justifyContent: "space-evenly" }} >
          <div className="d-flex flex-column">
            <GrAchievement className="mx-auto" style={{ fontSize: "10rem", color: "#289bde" }} />
            <h2 className="text-center">Our Achievements</h2>
          </div>
          <ul className="list-group list-group-flush" style={{ background: "#fff" }}>
            <li className="list-group-item"><b>Global Community: </b> Cultivated a vibrant community of over [Number] students from more than [Number] countries.</li>
            <li className="list-group-item"><b>Industry-Relevant Curriculum:</b> Continuously updated course offerings to include emerging technologies and industry trends.</li>
            <li className="list-group-item"><b>Success Stories:</b> Proudly witnessed thousands of our graduates go on to successful careers at leading tech companies worldwide.</li>
            {/* <li className="list-group-item"><b>Award-Winning Platform:</b> Recognized for our innovative learning platform, receiving [Award Name] in [Year].</li> */}
          </ul>
        </div>
        <br />
        {/* our Approach */}
        <div className="row my-3 d-flex flex-row" style={{ justifyContent: "space-evenly" }} >
          <ul className="list-group list-group-flush" style={{ background: "#fff" }}>
            <li className="list-group-item"><b>Personalized Learning:</b> Our adaptive learning platform tailors the educational experience to meet each student&apos;s unique needs and pace.</li>
            <li className="list-group-item"><b>Hands-On Experience:</b> We emphasize practical, real-world projects to ensure students can apply what they learn in actual tech roles.</li>
            <li className="list-group-item"><b>Mentorship & Support:</b> Our dedicated team of instructors and mentors provides personalized guidance and support, fostering a nurturing learning environment.</li>
            <li className="list-group-item"><b>Community Engagement:</b> We believe learning thrives in a community setting. Our platform encourages collaboration, networking, and peer support among students.</li>
          </ul>
          <div className="d-flex flex-column">
            <TiGlobe className="mx-auto" style={{ fontSize: "10rem", color: "#289bde" }} />

            <h2 className="">Our Approach</h2>
          </div>
        </div>
        <div className="container my-5">

          <h1 className="text-center"> Our Vision</h1>
          <p className="text-center">Starlink IT Solutions is more than just an educational institution; we are a movement towards a more informed, skilled, and innovative tech workforce. We envision a world where anyone with the passion to pursue a career in technology has the opportunity, tools, and support to achieve it.</p>
          <h1 className="text-center">Join Us</h1>
          <p className="text-center">Whether you&apos;re starting your journey in computer science or looking to advance your skills, Starlink IT Solutions is your partner in achieving your career aspirations. Join us, and be part of a community that&apos;s shaping the future of technology, one course at a time.</p>

           <p>Together, let&apos;s build the future.</p>
           <Link to="/contact" type="button" id="ApllyNowBtn" className="btn ">Apply Now</Link>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default About;


