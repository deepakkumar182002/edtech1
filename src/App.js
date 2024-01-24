import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import Contents from './components/Contents';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  console.log(process.env.REACT_APP_MY_API)
  return (
    <>
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route index element={<Carousel />} />
          <Route path="/Carousels" element={<Carousel />} />
          <Route path="/contents" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
