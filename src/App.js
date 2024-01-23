import './App.css';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import Contents from './components/Contents';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log(process.env.REACT_APP_MY_API)
  return (
    <>
      {/* <div className="container"> */}
        {/* <Navigation />
        <Carousel />
        <Contents /> */}
        <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigation />}/> */}
          <Route index element={<Navigation />} />
          <Route path="/Carousels" element={<Carousel />} />
          <Route path="/contents" element={<Contents />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
        
      {/* </div> */}
    </>
  );
}

export default App;
