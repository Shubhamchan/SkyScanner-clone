import React from "react";
import "./Flights.css";
import ButtonMiddle from "./ButtonMiddle";

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
    imageUrl: 'https://images.unsplash.com/photo-1570432907536-2329fb3fa7ef',
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

export default function Flights() {
  return (
    <div>
      <ButtonMiddle />
      <main className="page-container">
        <nav className="breadcrumb">
          <a href="#">Home</a> <span>›</span>{" "}
          <span className="current">Flights</span>
        </nav>

        <div className="features">
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M19.616 3.047a6 6 0 0 0-2.536 1.547l-8.188 8.373a3.4 3.4 0 0 0-.403.498l-1.287 1.186a.9.9 0 0 1-.594.24l-2.58.05a.91.91 0 0 0-.976.616.943.943 0 0 0 .473 1.155l2.56 1.012a.9.9 0 0 1 .492.468l1.038 2.27a.905.905 0 0 0 1.16.474.934.934 0 0 0 .575-.987l-.114-2.36a.92.92 0 0 1 .282-.709l1.173-1.12a3.4 3.4 0 0 0 .54-.448l1.27-1.298.609.621 2.886 6.062a.452.452 0 0 0 .732.123l.504-.516a1.88 1.88 0 0 0 .487-1.728l-1.582-7.085a1.84 1.84 0 0 1 .478-1.685l2.887-2.952a6.15 6.15 0 0 0 1.41-2.28l.022-.059a1.112 1.112 0 0 0-1.318-1.469z"></path><path d="M12.03 8.22a.458.458 0 0 0-.257-.765L5.517 6.068a1.79 1.79 0 0 0-1.69.498l-.52.53a.46.46 0 0 0 .12.73L9.073 10.9c.358.18.56-.104.833-.399z"></path></svg>
            )}
            title="Explore the best flight deals from anywhere to everywhere then book with no fees"
          />
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M20 8.5H4a1 1 0 0 0-1 1v8.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V9.5a1 1 0 0 0-1-1m-12.75 9a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 7.25 13M12 17.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17.5m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 13m4.75 0A1.25 1.25 0 1 1 18 11.75 1.25 1.25 0 0 1 16.75 13M21 6.25a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 6.25 3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25"></path></svg>
            )}
            title="Compare flight deals from over 1,000 providers choose the cheapest, fastest or lowest-emission tickets"
          />
          <Feature
            Icon={() => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M21 6.908A3.91 3.91 0 0 0 17.092 3H12.62a3 3 0 0 0-2.12.878l-6.623 6.624a2.997 2.997 0 0 0 0 4.238l5.382 5.382a2.997 2.997 0 0 0 4.238 0l6.624-6.624A3 3 0 0 0 21 11.38V6.91zM16.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path></svg>
            )}
            title="Find the cheapest month – or even day – to fly set up Price Alerts to book when the price is right"
          />
        </div>

        <header className="section-header">
          <h1>Flight deals from India</h1>
          <p>
            Here are the last-minute flight deals with the lowest prices. Act
            fast – they all depart within the next three months.
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
}
