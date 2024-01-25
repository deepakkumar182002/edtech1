import React from 'react'
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  console.log(process.env.REACT_APP_MY_API);
  return (
    <div>
      <BrowserRouter>;
        <Navigation />;
        
        <Routes>;
          <Route index element={<Carousel />} />;
          <Route path="/Carousels" element={<Carousel />} />;
          <Route path="/contents" element={<Contents />} />;
        </Routes>;
      </BrowserRouter>;
    </div>
  );
}

export default App;
