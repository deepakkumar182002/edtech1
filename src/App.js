import React from "react";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cloudcmp from "./components/Cloudcmp";
import Softwaredev from "./components/Softwaredev";
import "../src/App.css";
import ExploreCourses from "./components/ExploreCourses";
import Digitalmarketing from "./components/Digitalmarketing";

function App() {
  
  console.log(process.env.REACT_APP_MY_API);
  return (
    <div>
      <BrowserRouter>
        <Navigation />;
        {/* <Contents /> */}
        {/* <ExploreCourses /> */}
        <Routes>
          ;
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/" element={<Contents />} />;
          <Route path="/Softwaredev" element={<Softwaredev />} />;
          <Route path="/Cloudcomputing" element={<Cloudcmp />} />;
          <Route path="/Digitalmarketing" element={<Digitalmarketing />} />;
          <Route path="/explorecourses"element={<ExploreCourses />} />
          {/* <Route path="/explorecourses" element={<Courses />} /> */}
          {/* <Route path="/courses/:name" element={<Courses />} />
          <Route path="/courses/:name2" element={<Courses />} /> */}

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
