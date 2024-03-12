import React from "react";
// import ExploreCourses from "./components/ExploreCourses";
import Navigation from "./components/Navigation";
import Home from "./components/Home2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cloudcmp from "./components/Cloudcmp";
import Softwaredev from "./components/Softwaredev";
import "../src/App.css";
import Digitalmarketing from "./components/Digitalmarketing";
import Cybersecurity from "./components/Cybersecurity";
import Datascience from "./components/Datascience";
import UIUX from "./components/UIUX";
import Contactform from "./components/Contactform";
import Iot from "./components/Iot";
import Graphicsdesign from "./components/Graphicsdesign";
import Drone from "./components/Drone";
import Ai from "./components/Ai";
import Operatingsys from "./components/Operatingsys";
import DevOps from "./components/Devops";
import About from "./components/About";
import Success from "./components/Success";

function App() {
  console.log(process.env.REACT_APP_MY_API);
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <br />
        <br />
        <br />
        {/* <Contents /> */}
        {/* <ExploreCourses /> */}
        <Routes>
          ;
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/" element={<Home />} />;
          <Route path="/contact" element={<Contactform />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />

          {/* <Route path="/explorecourses" element={<ExploreCourses />} /> */}
          <Route path="/Softwaredev" element={<Softwaredev />} />;
          <Route path="/Cloudcomputing" element={<Cloudcmp />} />;
          <Route path="/Digitalmarketing" element={<Digitalmarketing />} />;
          <Route path="/Cybersecurity" element={<Cybersecurity />} />;
          <Route path="/Datascience" element={<Datascience />} />;
          <Route path="/UIUX" element={<UIUX />} />;
          <Route path="/iot" element={<Iot />} />;
          <Route path="/graphicsdesign" element={<Graphicsdesign />} />;
          <Route path="/drone" element={<Drone />} />;
          <Route path="/ai" element={<Ai />} />;
          <Route path="/operatingsys" element={<Operatingsys />} />;
          <Route path="/devops" element={<DevOps />} />;
          {/* <Route path="/explorecourses" element={<Courses />} /> */}
          {/* <Route path="/courses/:name" element={<Courses />} />
          <Route path="/courses/:name2" element={<Courses />} /> */}

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
