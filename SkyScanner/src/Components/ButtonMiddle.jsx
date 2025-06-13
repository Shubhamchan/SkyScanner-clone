import React,{useState} from "react";
import './ButtonMiddle.css';
import { Route , useLocation} from "react-router-dom";
import flights  from '/src/assets/Flightsimg.jpg';
import hotels from  '/src/assets/hotelsimg.jpg';
import carhire from '/src/assets/CarhireImg.jpg';
import DatePicker from "react-datepicker"
import HotelsMiddle from "./HotelMiddle";
import defaultImage from "/src/assets/Image1.webp"
import "react-datepicker/dist/react-datepicker.css";





function ButtonMiddle () {
    const { pathname } = useLocation();
    const [tripType, setTripType] = useState("");
      const [activeSection, setActiveSection] = useState("");
    const handlerSubject = (section) => {
      setActiveSection(section);
    };
    const [readOnly, setReadOnly] = useState(true);
    const [error, setError] = useState(null);
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [departDate, setDepartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [travellers, setTravellers] = useState("1 Adult Economy");
    const [loading, setLoading] = useState(false);
    const [showDepartPicker, setShowDepartPicker] = useState(false);
    const [showReturnPicker, setShowReturnPicker] = useState(false);
    const [includeNearbyAirports, setIncludeNearbyAirports] = useState(false);
    const [directFlightsOnly, setDirectFlightsOnly] = useState(false);

    
    const handleClick = async () => {
    if (loading) return; // prevent duplicate clicks
    setLoading(true);
    await onSearch?.();
    setLoading(false);
    };
  

    const handleNearbyToggle = () => {
        setIncludeNearbyAirports(!includeNearbyAirports);
        setError(null);
    };

  const imgSrc =
  pathname.toLowerCase() === '/flights' ? flights
  : pathname.toLowerCase() === '/hotels' ? hotels
  : pathname.toLowerCase() === '/carhire' ? carhire
  : defaultImage;


  const text =
       pathname === '/Flights'  ? "The best flight deals from anywhere, to everywhere"
     : pathname === '/hotels'   ? "Find the right hotel today"
     : pathname === '/carhire'  ? "Find the best car rental deals"
     : "";


     
    return  (
     <div id="middle">
      <img className="pathimg" src={imgSrc} alt="img" />
      <div className="container">
        <h1>{text}</h1>

        {pathname === "/Flights" ? (
          <div className="nav-main-part">
            <div className="upper-part-nav">
              {["RoundTrip", "OneWay", "MultiCity"].map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="tripType"
                    value={option.toLowerCase()}
                    checked={tripType === option.toLowerCase()}
                    onChange={(e) => setTripType(e.target.value)}
                    onClick={(e) => e.currentTarget.focus()}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="Location-type">
              <div className="departure">
                <input
                  type="text"
                  aria-label="choose departure location"
                  placeholder="From"
                  value={fromLocation}
                  onChange={(e) =>
                    setFromLocation(e.target.value.toUpperCase())
                  }
                  className="labelled-input"
                />
              </div>
              <button
                type="button"
                className="swap-button"
                aria-label="swap from/to"
                onClick={() => {
                  setFromLocation(toLocation);
                  setToLocation(fromLocation);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="#041e42"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 23l4-4-4-4" />
                  <path d="M21 5H9" />
                  <path d="M15 19H3" />
                </svg>
              </button>
              <div className="destination">
                <input
                  type="text"
                  aria-label="choose destination location"
                  placeholder="To"
                  value={toLocation}
                  onChange={(e) =>
                    setToLocation(e.target.value.toUpperCase())
                  }
                  className="labelled-input"
                />
              </div>

              <div className="depart">
                <input
                  readOnly
                  aria-label="choose departure date"
                  placeholder="Depart"
                  value={departDate ? departDate.toLocaleDateString() : ""}
                  onClick={() => setShowDepartPicker(true)}
                  className="labelled-input"
                />
                {showDepartPicker && (
                  <div className="calendar-popup">
                    <DatePicker
                      selected={departDate}
                      onChange={(date) => {
                        setDepartDate(date);
                        setShowDepartPicker(false);
                      }}
                      inline
                    />
                  </div>
                )}
              </div>

              <div className="return">
                <input
                  readOnly
                  aria-label="choose return date"
                  placeholder="Return"
                  value={returnDate ? returnDate.toLocaleDateString() : ""}
                  onClick={() => setShowReturnPicker(true)}
                  className="labelled-input"
                />
                {showReturnPicker && (
                  <div className="calendar-popup">
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => {
                        setReturnDate(date);
                        setShowReturnPicker(false);
                      }}
                      inline
                    />
                  </div>
                )}
              </div>

              <div className="Cabin-class">
                <input
                  type="text"
                  aria-label="choose travellers and cabin class"
                  placeholder="1 Adult Economy"
                  value={travellers}
                  readOnly={readOnly}
                  onClick={() => setReadOnly(false)}
                  onChange={(e) =>
                    setTravellers(e.target.value)
                  }
                  className="labelled-input"
                />
              </div>

              <div className="search">
                <button onClick={handleClick} disabled={loading}>
                  {loading ? "Loading…" : "Search"}
                </button>
              </div>
            </div>

            <div className="last-main">
              <div className="first">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={includeNearbyAirports}
                    onChange={handleNearbyToggle}
                  />
                  <span>Add nearby airports</span>
                </label>
              </div>
              <div className="third">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={directFlightsOnly}
                    onChange={() =>
                      setDirectFlightsOnly(!directFlightsOnly)
                    }
                  />
                  <span>Direct flights</span>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <HotelsMiddle />
        )}
      </div>
    </div>
  );
}

export default ButtonMiddle;