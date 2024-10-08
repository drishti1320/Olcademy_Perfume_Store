import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PerfumeDetails from "./components/PerfumeDetails";
import data from "./perfumes.json";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => {
    setPerfumes(data);
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home perfumes={perfumes}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/perfume/:id" element={<PerfumeDetails perfumes={perfumes}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;