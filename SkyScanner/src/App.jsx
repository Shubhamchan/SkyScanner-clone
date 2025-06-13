import React from "react"; 
import { Routes, Route,useLocation } from 'react-router-dom';   
import "./App.css";
import Middle from "./Components/Middle";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Flights from './Components/Flights';
import Hotels from './Components/Hotels';
import CarHire from './Components/CarHire';
import Nav from  './Components/Nav';
import International from "./Components/International";



function App() {

  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div id="root"> 
     {isHome ? <Navbar/> : <Nav/>}

      <main>
        <Routes>
          <Route path="/" element={<Middle />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/carhire" element={<CarHire/>} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
      {isHome ? <Footer />  : (
        <>
          <Footer />
          <International />
        </>
      )
    }
    </div>
  );
}

export default App;
