// src/components/International.jsx
import React from 'react'
import './international.css'
import { Route,useLocation } from 'react-router-dom';
import uk  from '/src/assets/uk.png';
import Nz from '/src/assets/nz.png';
import SG from '/src/assets/sg.png';
import AU from '/src/assets/au.png';
import IN from '/src/assets/in.png';
import MY from '/src/assets/my.png';
import ID from '/src/assets/id.png';
import PH from '/src/assets/ph.png';
import US from '/src/assets/us.png';  


function International() {
  const location = useLocation();
  const pathname = location.pathname;

  const text =
    pathname === "/carhire"
      ? "Car Hire"
      : pathname === "/hotels"
      ? "Hotels"
      : pathname === "/Flights"
      ? "Flights"
      : "Default Text";

   if(pathname === '/Flights'){
    return (
    <section className="international">
      <h2>International Sites</h2>
      <ul className="sites-grid">
        <li>
          <img src={uk} alt="UK flag" />
          <a href="#">Cheap flights</a>
        </li>
        <li>
          <img src={IN} alt="India flag" />
          <a href="#">India – Flight tickets</a>
        </li>
        <li>
          <img src={SG} alt="Singapore flag" />
          <a href="#">Singapore – flights</a>
        </li>
        <li>
          <img src={US} alt="USA flag" />
          <a href="#">USA – flights</a>
        </li>
        <li>
          <img src={AU} alt="Australia flag" />
          <a href="#">Australia – Cheap flights</a>
        </li>
        <li>
          <img src={ID} alt="Indonesia flag" />
          <a href="#">Indonesia – Tiket Pesawat</a>
        </li>
        <li>
          <img src={Nz} alt="New Zealand flag" />
          <a href="#">New Zealand – Cheap flights</a>
        </li>
        <li>
          <img src={PH} alt="Philippines flag" />
          <a href="#">Philippines – flights</a>
        </li>
        <li>
          <img src={MY} alt="Malaysia flag" />
          <a href="#">Malaysia – flights</a>
        </li>
      </ul>
    </section>
  );
}
return (
    <section className="international">
      <h2>International Sites</h2>
      <ul className="sites-grid">
        <li>
          <img src={uk} alt="UK flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={IN} alt="India flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={SG} alt="Singapore flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={US} alt="USA flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={AU} alt="Australia flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={ID} alt="Indonesia flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={Nz} alt="New Zealand flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={PH} alt="Philippines flag" />
          <a href="#">{text}</a>
        </li>
        <li>
          <img src={MY} alt="Malaysia flag" />
          <a href="#">{text}</a>
        </li>
      </ul>
    </section>
    );
}

export default International
