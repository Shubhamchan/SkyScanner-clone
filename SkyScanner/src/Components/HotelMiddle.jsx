import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HotelsMiddle.css';

function HotelsMiddle() {
  const location = useLocation();
  const pathname = location.pathname; 

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(new Date("2025-06-17"));
  const [checkOut, setCheckOut] = useState(new Date("2025-06-18"));
  const [guests, setGuests] = useState("2 adults, 1 room");

  const [filters, setFilters] = useState({
    freeCancellation: false,
    fourStars: false,
    threeStars: false,
  });

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };


  if (pathname === '/hotels') {
    return (
      <div className="search-container">
        <h3>Where would you like to stay?</h3>
        <div className="search-row">
          <input
            type="text"
            className="search-field"
            placeholder="Enter destination or hotel name"
            value={destination}
            onChange={handleDestinationChange}
          />
        <DatePicker
            selected={checkIn}
            onChange={(date) => {
              if (!date) return;
              setCheckIn(date);
              if (checkOut <= date) {
                const nextDay = new Date(date);
                nextDay.setDate(nextDay.getDate() + 1);
                setCheckOut(nextDay);
              }
            }}
            dateFormat="yyyy-MM-dd"
            className="search-field"
            placeholderText="Check-in"
          />
        <DatePicker
            selected={checkOut}
            onChange={(date) => {
              if (!date) return;
              if (date <= checkIn) {
                const nextDay = new Date(checkIn);
                nextDay.setDate(nextDay.getDate() + 1);
                setCheckOut(nextDay);
              } else {
                setCheckOut(date);
              }
            }}
            dateFormat="yyyy-MM-dd"
            className="search-field"
            placeholderText="Check-out"
            minDate={new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)}
          />
        <input
            type="text"
            className="search-field"
            value={guests}
            onChange={handleGuestsChange}
          />
        <button
            className="search-btn"
            type="button"
            onClick={()=>{}}
        >
            Search hotels →
        </button>
        </div>
        <div className="filters">
        <span>
            <strong>Popular filters:</strong>
        </span>
        <label>
            <input
              type="checkbox"
              name="freeCancellation"
              checked={filters.freeCancellation}
              onChange={handleCheckboxChange}
            />
            Free cancellation
        </label>
        <label>
            <input
              type="checkbox"
              name="fourStars"
              checked={filters.fourStars}
              onChange={handleCheckboxChange}
            />
            4 stars
        </label>
        <label>
            <input
              type="checkbox"
              name="threeStars"
              checked={filters.threeStars}
              onChange={handleCheckboxChange}
            />
            3 stars
        </label>
        </div>
    </div>
    );
  }

  return (
<div class="search-container-second">
  <form class="rental-search-form">
    <div class="field field-location">
      <label for="pickup-location" class="field-label-car">Pickup location</label>
      <input type="text" id="pickup-location" placeholder="City, airport or station" />
    </div>
    <div class="field field-date">
      <label for="pickup-date" class="field-label-car">Pickup date</label>
      <input type="date" id="pickup-date" />
    </div>
    <div class="field field-time">
      <label for="pickup-time" class="field-label-car">Time</label>
      <input type="time" id="pickup-time" value="10:00" />
    </div>
    <div class="field field-date">
      <label for="dropoff-date" class="field-label-car">Drop-off date</label>
      <input type="date" id="dropoff-date" />
    </div>
    <div class="field field-time">
      <label for="dropoff-time" class="field-label-car">Time</label>
      <input type="time" id="dropoff-time" value="10:00" />
    </div>
    <button type="submit" class="btn-search-car">Search</button>
  </form>

  <div class="options-car">
    <label class="option-label-car">
      <input type="checkbox" checked />
      Driver aged between 25 - 70
    </label>
    <label class="option-label-car">
      <input type="checkbox" />
      Return car to a different location
    </label>
  </div>
</div>
  );
}



export default HotelsMiddle;
