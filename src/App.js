import React from "react";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Cloudcmp from "./components/Cloudcmp";
// import Carousel from "./components/Carousel";
// import Page404 from "./components/Page404";
// import Mousover from "./components/Mousover";
// import Allcourses from "./components/Allcourses";
// import Courses from "./components/Courses";
import "../src/App.css";

function App() {
  console.log(process.env.REACT_APP_MY_API);
  return (
    <div>
      <BrowserRouter>
        <Navigation />;
        {/* <Contents /> */}
        <Routes>
          ;
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/" element={<Contents />} />;
          <Route path="/Cloudcmp" element={<Cloudcmp />} />;
          {/* <Route path="/" element={<Allcourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:name" element={<Courses />} />
          <Route path="/courses/:name2" element={<Courses />} /> */}
          
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
