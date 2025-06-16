import React from "react";
import "./Hotels.css";
import ButtonMiddle from "./ButtonMiddle";
import { useLocation,useNavigate} from "react-router-dom";

function Feature({ Icon, title, desc }) {
  return (
    <div className="feature">
      <Icon className="feature-icon" />
      <div>
        <p className="feature-title">{title}</p>
      </div>
    </div>
  );
}


function DealCard({ deal }) {
  return (
    <div className="deal-card">
      <div
        className="deal-image"
        style={{ backgroundImage: `url(${deal.imageUrl})` }}
      />
      <div className="deal-content">
        <h2>{deal.city}</h2>
        <p className="country">{deal.country}</p>
        <ul className="routes-list">
          {deal.routes.map((r, idx) => (
            <li key={idx} className="route-item">
              <span className="date">{r.date}</span>
              <span className="type">Direct</span>
            </li>
          ))}
        </ul>
        <a href="#" className="price-link">
          from {deal.price}
        </a>
      </div>
    </div>
  );
}

const deals = [
  {
    id: 1,
    city: 'Jorhat',
    country: 'India',
    imageUrl: '/src/assets/Taj.jpg',
    routes: [
      { date: 'Sat, Jul 5', route: 'IXT → JRH', airline: 'Alliance Air' },
      { date: 'Sat, Jul 12', route: 'JRH → IXT', airline: 'Alliance Air' },
    ],
    price: '₹ 877',
  },
  {
    id: 2,
    city: 'Dhaka',
    country: 'Bangladesh',
    imageUrl: 'https://images.unsplash.com/photo-1590490360188-e3b59b4ff3ad',
    routes: [
      { date: 'Fri, Jul 11', route: 'CCU → DAC', airline: 'US-Bangla Airlines' },
      { date: 'Fri, Jul 18', route: 'DAC → CCU', airline: 'US-Bangla Airlines' },
    ],
    price: '₹ 9,111',
  },
  {
    id: 3,
    city: 'Muscat',
    country: 'Oman',
    imageUrl: 'https://images.unsplash.com/photo-1621323152561-b3e6c0d29f54',
    routes: [
      { date: 'Tue, Jun 24', route: 'BOM → MCT', airline: 'SalamAir' },
      { date: 'Wed, Jul 2', route: 'MCT → BOM', airline: 'SalamAir' },
    ],
    price: '₹ 10,229',
  },
   {
    id: 4,
    city: 'Muscat',
    country: 'Oman',
    imageUrl: 'https://images.unsplash.com/photo-1621323152561-b3e6c0d29f54',
    routes: [
      { date: 'Tue, Jun 24', route: 'BOM → MCT', airline: 'SalamAir' },
      { date: 'Wed, Jul 2', route: 'MCT → BOM', airline: 'SalamAir' },
    ],
    price: '₹ 10,229',
  },
   {
    id: 5,
    city: 'Muscat',
    country: 'Oman',
    imageUrl: 'https://images.unsplash.com/photo-1621323152561-b3e6c0d29f54',
    routes: [
      { date: 'Tue, Jun 24', route: 'BOM → MCT', airline: 'SalamAir' },
      { date: 'Wed, Jul 2', route: 'MCT → BOM', airline: 'SalamAir' },
    ],
    price: '₹ 10,229',
  },
   {
    id: 6,
    city: 'Muscat',
    country: 'Oman',
    imageUrl: 'https://images.unsplash.com/photo-1621323152561-b3e6c0d29f54',
    routes: [
      { date: 'Tue, Jun 24', route: 'BOM → MCT', airline: 'SalamAir' },
      { date: 'Wed, Jul 2', route: 'MCT → BOM', airline: 'SalamAir' },
    ],
    price: '₹ 10,229',
  },
];

export default function Hotels() {
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
  return (
    <div>
      <ButtonMiddle />
      <main className="page-container">
        <nav className="breadcrumb">
          <a href="#">Home</a> <span>›</span>{" "}
          <span className="current">{text}</span>
        </nav>

        <div className="features">
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l4.531 4.53a1 1 0 0 1-1.414 1.415l-4.531-4.531A8.5 8.5 0 0 1 2 10.5"></path></svg>
            )}
            title="Explore the best Hotels deals from anywhere to everywhere then book with no fees"
          />
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M20 8.5H4a1 1 0 0 0-1 1v8.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V9.5a1 1 0 0 0-1-1m-12.75 9a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 7.25 13M12 17.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17.5m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 13m4.75 0A1.25 1.25 0 1 1 18 11.75 1.25 1.25 0 0 1 16.75 13M21 6.25a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 6.25 3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25"></path></svg>
            )}
            title="Compare hotel deals across hundreds of providers, all in one place"
          />
          <Feature
            Icon={() => (
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M21.9 12.005h-.1a1 1 0 0 1-1-1l-.003-2.375h.003V6.394a1.3 1.3 0 0 0-.669-1.218l-1.947-.853a15.17 15.17 0 0 0-12.368 0l-1.947.853a1.31 1.31 0 0 0-.669 1.22v4.61a1 1 0 0 1-1 1h-.1A1.113 1.113 0 0 0 1 13.13v7.055a.82.82 0 0 0 1.626.136l.574-2.69h17.6l.575 2.69A.819.819 0 0 0 23 20.184V13.13a1.113 1.113 0 0 0-1.1-1.125m-15.9-2v-3a1 1 0 0 1 2 0v.84a5 5 0 0 1 7.157-.61 1 1 0 1 1-1.314 1.507 3 3 0 0 0-4.205.263H10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m12 4a1 1 0 1 1-2 0v-.175a5 5 0 0 1-7.434.925 1 1 0 0 1 1.324-1.5 3 3 0 0 0 4.814-1.25H14a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z"></path></svg>
            )}
            title="Look out for hotels with free cancellation or excellent ratings"
          />
        </div>

        <header className="section-header">
          <h1>Hotels in your home Country</h1>
          <p>
            Here are the Hotels deals with the lowest prices. Act
            fast – they all will increase within the next three months.
          </p>
        </header>

        <div className="deals-grid">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </main>
    </div>
  );
};

