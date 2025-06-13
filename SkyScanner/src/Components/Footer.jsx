import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a  href="#">Hotels directory</a></li>
              <li><a href="">Flights</a></li>
              <li><a href="#">Hotels Deals</a></li>
              <li><a href="#">Car rental</a></li>
              <li><a href="#">Travel insurance</a></li>
              <li><a href="#">App</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Partners</h3>
            <ul>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Advertise with us</a></li>
              <li><a href="#">Travel Insight</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Travel APIs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Why Skyscanner?</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Our people</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Brand story</a></li>
              <li><a href="#">Company Details</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie policy</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy settings</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Compare and book cheap flights from anywhere, to everywhere</p>
          <p>© Skyscanner Ltd 2002 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
