import React,{useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../App.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


function Navbar () {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");
    const currentPath = location.pathname; // e.g. "/flights"
    const activeTab = currentPath.startsWith('/') ? currentPath.slice(1) : '';
    const handlerSubject = (section) => {
        setActiveSection(section);
        navigate(`/${section}`);
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


    return(
      <div>
       <section id="upper-section">
        <div className="inner-content">
          <header id="top-part">
            <div className="container-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 910 149"
                className="logo"
                width="100%"
                height="auto"
                >
                <path
                  d="M100.1 127c2.1 0 4.1-.5 6-1.6l21.9-12.6c4.4-2.5 9.5-3.6 14.6-3 26.6 3.1 45.2 8.1 50.7 9.7 1.1.3 2.4-.1 3.1-1 .9-1.1 2-2.9 2.9-5.5.8-2.5.9-4.6.8-6.1-.1-1.2-.9-2.3-2.1-2.6-8.6-2.5-46.7-12.8-97.9-12.8s-89.3 10.3-97.9 12.8c-1.2.3-2 1.4-2.1 2.6-.1 1.4 0 3.5.8 6.1.8 2.6 2 4.4 2.9 5.5.7.9 2 1.3 3.1 1 5.5-1.6 24.2-6.6 50.7-9.7 5.1-.6 10.2.5 14.6 3l21.9 12.6c1.9 1.1 4 1.6 6 1.6zM63.6 56.1c1.2 2.1 3.1 3.5 5.3 4.1 2.2.6 4.5.3 6.6-.9 2.1-1.2 3.5-3.1 4.1-5.3.6-2.2.3-4.5-.9-6.6L59 13.3c-.6-1.1-1.9-1.5-3.1-1.4-1.6.1-3.8.9-6.4 2.4-2.6 1.5-4.4 3-5.3 4.3-.7 1-.9 2.3-.3 3.4l19.7 34.1zm-18 24.4c2.1 1.2 4.5 1.4 6.6.9 2.2-.6 4.1-2 5.3-4.1 1.2-2.1 1.4-4.5.9-6.6-.5-2.1-2-4.1-4.1-5.3L20.2 45.7c-1.1-.6-2.4-.4-3.4.3-1.3.9-2.8 2.7-4.3 5.3-1.5 2.6-2.3 4.8-2.4 6.4-.1 1.3.4 2.5 1.4 3.1l34.1 19.7zM108.8 44c0 2.4-1 4.6-2.5 6.2-1.6 1.6-3.7 2.5-6.2 2.5-2.4 0-4.6-1-6.2-2.5-1.6-1.6-2.5-3.7-2.5-6.2V4.7c0-1.3.8-2.3 2-2.8 1.4-.7 3.7-1.1 6.7-1.1s5.3.4 6.7 1.1c1.1.6 2 1.5 2 2.8V44zm27.8 12.1c-1.2 2.1-3.1 3.5-5.3 4.1-2.2.6-4.5.3-6.6-.9-2.1-1.2-3.5-3.1-4.1-5.3-.6-2.2-.3-4.5.9-6.6l19.7-34.1c.6-1.1 1.9-1.5 3.1-1.4 1.6.1 3.8.9 6.4 2.4 2.6 1.5 4.4 3 5.3 4.3.7 1 .9 2.3.3 3.4l-19.7 34.1zm18 24.4c-2.1 1.2-4.5 1.4-6.6.9-2.2-.6-4.1-2-5.3-4.1-1.2-2.1-1.4-4.5-.9-6.6.6-2.2 2-4.1 4.1-5.3L180 45.7c1.1-.6 2.4-.4 3.4.3 1.3.9 2.8 2.7 4.3 5.3 1.5 2.6 2.3 4.8 2.4 6.4.1 1.3-.4 2.5-1.4 3.1l-34.1 19.7zm217.5-27.1h16.4c.6 0 1.1.4 1.4.9l16.3 41.8L422 54.3c.2-.6.8-.9 1.4-.9h16.1c1.1 0 1.8 1.1 1.3 2l-40 91.8c-.2.5-.8.9-1.3.9h-14.2c-1 0-1.8-1.1-1.3-2l13.7-32.1-26.8-58.6c-.6-.9.1-2 1.2-2zm242.1 9.3v-7.8c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v62.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5V109c-3.1 4.8-9.9 11.1-21 11.1-21.2 0-32.2-16.2-32.2-34.3 0-23.6 16.4-33.7 31.7-33.7 10.1-.1 17.1 4.7 21.5 10.6zm-35.7 23.2c0 11.2 6.9 19.8 18 19.8s18.2-7.5 18.2-19-6.9-20.3-18.7-20.3c-11.1 0-17.5 8.6-17.5 19.5zm66.3 31.3V54.9c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v8.5c3.4-5.9 9.8-11.3 20.7-11.3 11.2 0 23.7 5.5 23.7 30.8v34.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5v-34c0-6.1-1.5-16.6-12.3-16.6s-14.6 9.5-14.6 18.3v32.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.9-.1-1.5-.7-1.5-1.5zm74.3 0V54.9c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v8.5c3.4-5.9 9.8-11.3 20.7-11.3 11.2 0 23.7 5.5 23.7 30.8v34.3c0 .8-.7 1.5-1.5 1.5H765c-.8 0-1.5-.7-1.5-1.5v-34c0-6.1-1.5-16.6-12.3-16.6s-14.6 9.5-14.6 18.3v32.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8-.1-1.5-.7-1.5-1.5zm152.3-63.8h14.1c.8 0 1.5.7 1.5 1.5v12.9c2.8-12.8 13.8-17.2 21.8-15.3.7.1 1.1.7 1.1 1.4v14.2c0 .9-.8 1.6-1.8 1.4-14.8-2.9-20.8 5.1-20.8 16.3v31.4c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5V54.9c.1-.8.8-1.5 1.6-1.5zM276 67.6c-4.5-1.5-6.9-2.4-10.5-3.6-3.7-1.3-10-4.9-10-10.7 0-5.8 4-9.5 12.1-9.5 7.4 0 11.5 3.6 14.2 9.4.4.8 1.3 1.1 2.1.7l11.9-6.9c.6-.4.9-1.2.6-1.9-3.6-7.9-12-17.4-28.6-17.4-18.5 0-30.1 11-30.1 25.5 0 14.4 9.5 21.9 22.4 26.3 4.7 1.6 6.6 2.3 10.6 3.6 7.6 2.6 11.1 6 11.1 10.7 0 4.7-3 10.3-14.8 10.3-10.8 0-14.6-5.7-16.8-11.1-.3-.8-1.3-1.2-2.1-.7l-12.5 7.2c-.6.4-.9 1.1-.6 1.8 4.8 11.8 17.9 18.8 32.6 18.8 17.3 0 31.9-8.8 31.9-26.6s-19-24.4-23.5-25.9zm95.5 34c-.4-.7-1.4-1-2.1-.5-5.6 4.1-12.2 4.2-17.2-3.5-4.2-6.5-9.3-14.5-9.3-14.5l22-27.3c.8-1 .1-2.4-1.1-2.4h-17.2c-.5 0-.9.2-1.2.6l-19 26.1V27.6c0-.8-.7-1.5-1.5-1.5h-14.5c-.8 0-1.5.7-1.5 1.5v89.6c0 .8.7 1.5 1.5 1.5H325c.8 0 1.5-.7 1.5-1.5V88.1s9.7 15.3 13.4 21c5 7.8 12 11 19.6 11 7.2 0 11.8-1.9 17.3-7.3.5-.5.6-1.2.3-1.8l-5.6-9.4zM475.6 81c-4.6-1.7-6.2-2.3-9.7-3.6-3.5-1.3-6.6-3.2-6.6-6s2.6-5.9 7.9-5.9c4.6 0 7.4 1.8 9 5 .4.8 1.3 1 2 .6l10.2-5.9c.7-.4.9-1.3.5-2-2.8-4.9-8.3-11.1-21.6-11.1-16.3 0-24.7 9.4-24.7 19.8s8.5 15.3 16.3 18.4c8.8 3.6 9.4 3.8 10.5 4.2 2.7 1.1 6 2.8 6 5.9 0 3.1-3.6 5.9-9.1 5.9-5.1 0-10.9-2.1-13.3-8-.3-.8-1.3-1.2-2.1-.7l-10.3 5.9c-.6.4-.9 1.1-.6 1.8 3 7.8 11.9 14.7 26.3 14.7 15.6 0 26-8.3 26-20s-8-15.8-16.7-19zm58.6-13.4c6.5 0 11.3 2 15.8 5.2.7.5 1.7.3 2.1-.4l6-10.4c.4-.7.2-1.5-.5-1.9-6.2-4.2-13.9-8.1-24.3-8.1-10.3 0-19.8 2.8-26.6 9.7-6.8 6.8-9.9 14.9-9.9 24.5 0 11.6 4.8 19 10 24.2 5.2 5.2 14.6 9.6 26.6 9.6 10.8 0 18.8-4.5 24.3-8.1.6-.4.8-1.3.4-1.9l-5.9-10.3c-.4-.7-1.4-1-2.1-.5-3.9 2.8-9.5 5.2-15.8 5.2-7.1 0-20-4-20-18.4 0-14.4 12.8-18.4 19.9-18.4zm294.2 38c-5.8 0-11.3-1.4-15.3-4.6-4-3.2-5.9-6.5-5.9-10.4H859c.8 0 1.5-.7 1.5-1.5-.3-15.4-5.3-22.6-10.1-27.5-5-5-13.5-9.6-24.7-9.6s-19.8 4.1-25.7 9.9c-5.8 5.8-10.2 13.2-10.2 24.4s4.5 18.6 10 24.1 14.5 9.6 27.4 9.6c12.2 0 22.5-4.3 29.9-12.8.6-.7.4-1.8-.4-2.2l-10.3-6c-.5-.3-1.2-.3-1.7.2-5.1 4.8-11.6 6.4-16.3 6.4zM825.6 66c8.3 0 15.9 5 17.1 14h-34.9c2.3-9.7 9.5-14 17.8-14z"
                />
              </svg>
            </div>
        <div className="container-right">
            <button
                className="Global"
                type="button"
                aria-label="Saved flights, hotels and cars"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="1.5rem"
                height="1.5rem"
                className="GlobalHeader_icon__NGVjO"
                role="button"
                >
                <path d="M10.23 4.072a4.77 4.77 0 0 0-6.62.577 5.51 5.51 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.86 1.86 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.52 5.52 0 0 0-1.389-5.408 4.77 4.77 0 0 0-6.62-.577l-1.126.95a1 1 0 0 1-1.29 0z"/>
                </svg>
            </button>
            <button
                aria-label="Log in or sign up"
                className="GlobalHeader"
                type="button"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="1.5rem"
                height="1.5rem"
                data-testid="LoggedOutIcon"
                className="LoginButton"
                >
            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M6.21 15.975A7.04 7.04 0 0 0 12 19a7.04 7.04 0 0 0 5.79-3.024c.427-.613.174-1.435-.5-1.762A12.06 12.06 0 0 0 12 13c-1.898 0-3.693.436-5.29 1.213-.673.327-.927 1.15-.5 1.762M10.994 5C10.17 5 9.5 5.618 9.5 6.381v2.31C9.5 9.965 10.62 11 12 11s2.5-1.035 2.5-2.31V6.382C14.5 5.618 13.83 5 13.005 5h-2.01z" />
            </svg>
            </button>

            <button
                className="GlobalHeader_buttonDark"
                aria-label="Open menu"
                type="button"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="1.5rem"
                height="1.5rem"
                className="GlobalHeader_icon"
            >
            <path d="M21 7H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1m1 5c0 .6-.333 1-.833 1H2.833c-.5 0-.833-.4-.833-1s.333-1 .833-1h18.334c.5 0 .833.4.833 1m-1.111 5c.667 0 1.111.4 1.111 1s-.444 1-1.111 1H3.11C2.444 19 2 18.6 2 18s.444-1 1.111-1H20.89z" />
            </svg>
            </button>
            </div>
        </header>


        <div className="Navbar">
            <div className="flights">
                <button   className={activeTab === 'Flights' ? 'active' : ''}
                onClick={() => handlerSubject("Flights")}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="1rem"
                height="1rem"
                className="BpkIcon_bpk-icon--rtl-support__MzcwM"
                >
                <path d="m1.802 6.623 6.279 3.676a1.11 1.11 0 0 0 1.317-.205L12.75 6.75c.32-.326-.336-.632-.782-.716l-8.274-1.69a1.11 1.11 0 0 0-1 .317L1.664 5.71a.58.58 0 0 0 .138.913"></path>
                <path d="M6.125 15.085a1.11 1.11 0 0 0 .973-.321l11.77-11.995a4.3 4.3 0 0 1 2.13-1.197l.201-.043a1.05 1.05 0 0 1 1.273 1.296l-.043.206a4.4 4.4 0 0 1-1.175 2.17L17.45 9.078a1.16 1.16 0 0 0-.31 1.016l1.742 9.732a1.16 1.16 0 0 1-.3 1.069l-1.008 1.026a.557.557 0 0 1-.896-.14l-3.664-7.13a.557.557 0 0 0-.896-.14l-2.59 2.64a1.16 1.16 0 0 0-.297 1.085l.662 2.746a1.475 1.475 0 0 1-.86 1.399h-.001a1.1 1.1 0 0 1-1.529-.547L6.29 18.822a1.73 1.73 0 0 0-.791-.807l-3.212-.951a1.163 1.163 0 0 1-.542-1.537 1.43 1.43 0 0 1 1.375-.93z"></path>
                </svg>
                Flights
            </button>
            </div>
        <div className="hotels">
            <button   className={activeTab === 'hotels' ? 'active' : ''}
            onClick={() => handlerSubject("hotels")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  width="1rem"
                  height="1rem"
                >
                <path d="M3.684 5.067A1.23 1.23 0 0 0 3 6.227V9.43a1.1 1.1 0 0 0 1.125 1.07H5.25A.75.75 0 0 0 6 9.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 0 .75.75h1.123a1.1 1.1 0 0 0 1.125-1.073l-.001-1.07H21v-2.13a1.23 1.23 0 0 0-.684-1.16l-1.991-.812a16.57 16.57 0 0 0-12.65 0zM4.5 12a3 3 0 0 0-3 3v5.25a.75.75 0 0 0 .75.75h.286a.75.75 0 0 0 .671-.415L4.5 18h15l1.293 2.585a.75.75 0 0 0 .67.415h.287a.75.75 0 0 0 .75-.75V15a3 3 0 0 0-3-3z"></path>
                </svg>
                Hotels
            </button>
            </div>
            <div className="car-hire">
              <button  className={activeTab === 'carhire' ? 'active' : ''}
              onClick={() => handlerSubject("carhire")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  width="1rem"
                  height="1rem"
                  className="BpkIcon_bpk-icon--rtl-support__MzcwM"
                >
                  <path d="M24 13.47v1.08c0 1.08 0 2.7-1 2.7h-1.25a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742h-4.5a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742H1.5v-.006l-.063.005h-.03a1 1 0 0 1-.09-.003C.33 17.25.072 15.49.004 14.564a2 2 0 0 1 .225-1.044l1.658-3.058a1.29 1.29 0 0 1 1.112-.713h11c1 0 .88-1.034.194-1.57a6.6 6.6 0 0 0-1.596-.999 8 8 0 0 0-3.061-.545 13.7 13.7 0 0 0-3.226.417A44 44 0 0 0 1.909 8.44a.54.54 0 0 1-.69-.408l-.003-.012a.7.7 0 0 1 .334-.845A30 30 0 0 1 6.07 5.66a14 14 0 0 1 3.322-.409h.1a9.3 9.3 0 0 1 3.498.587 17 17 0 0 1 4.05 3.136 1.08 1.08 0 0 0 .668.31 11.95 11.95 0 0 1 4.79 1.486 3.01 3.01 0 0 1 1.5 2.7z"></path>
                  <path d="M7.5 17.25a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5m12 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5"></path>
                </svg>
                Car hire
              </button>
            </div>
          </div>
          <div className="text-continaer">
            <h1>Millions of cheap flights. One simple search.</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="1rem"
                height="1rem"
                data-testid="stops"
            >
            <path d="M11.25 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m-3.588-.866a1.5 1.5 0 0 1-.358 2.09C5.597 9.933 4.5 11.89 4.5 14.092V19.5a1.5 1.5 0 1 1-3 0v-5.41c0-3.227 1.614-6.076 4.071-7.814a1.5 1.5 0 0 1 2.091.358m7.176 0a1.5 1.5 0 0 1 2.09-.359C19.387 8.014 21 10.864 21 14.091v1.788l.44-.44a1.5 1.5 0 0 1 2.12 2.122l-3 3a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.122l.44.44V14.09c0-2.201-1.097-4.159-2.804-5.366a1.5 1.5 0 0 1-.358-2.091z"></path>
            </svg>
            <span className="route">Create a multi-city route</span>
            </p>
        </div>
        <div className="Location-type">
            <div className="departure">
                <input
                type="text"
                aria-label="choose departure location"
                placeholder="From"
                value={fromLocation}
                onChange={e => setFromLocation(e.target.value.toUpperCase())}
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
            onChange={e => setToLocation(e.target.value.toUpperCase())}
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
        onChange={date => {
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
      onChange={(e) => setTravellers(e.target.value.toUpperCase())}
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
                <input type="checkbox" 
                checked={includeNearbyAirports}
                onChange={handleNearbyToggle}
                />
                <span>Add nearby airports</span>
            </label>
        </div>
    <div className="third">
            <label className="checkbox-label">
                <input type="checkbox"
                checked={directFlightsOnly}
                onChange={() => setDirectFlightsOnly(!directFlightsOnly)}
                />
                <span>Direct flights</span>
            </label>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
};

export default Navbar;