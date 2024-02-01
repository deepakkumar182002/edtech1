import React from "react";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cloudcmp from "./components/Cloudcmp";
import "../src/App.css";
import ExploreCourses from "./components/ExploreCourses";

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
          <Route path="/Cloudcmp" element={<Cloudcmp />} />;
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
