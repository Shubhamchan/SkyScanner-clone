import React from "react";
import "./CarHire.css";
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

export default function CarHire() {
  return (
    <div>

      <ButtonMiddle />
      <main className="page-container">
        <nav className="breadcrumb">
          <a href="#">Home</a> <span>›</span>{" "}
          <span className="current">CarHire</span>
        </nav>

        <div className="features">
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M24 13.11v1c0 1 0 2.5-1 2.5h-.501a.56.56 0 0 1-.534-.5 2.89 2.89 0 0 0-2.97-2.5 2.87 2.87 0 0 0-2.97 2.5c-.036.274-.256.39-.532.39H8.72a.77.77 0 0 1-.807-.618 2.896 2.896 0 0 0-2.93-2.272 2.873 2.873 0 0 0-2.962 2.457.624.624 0 0 1-.584.541h-.03a1 1 0 0 1-.09-.002C.332 16.61.073 14.981.005 14.124a1.7 1.7 0 0 1 .225-.966l1.658-2.997A1.3 1.3 0 0 1 3 9.501h11c1 0 .88-.79.194-1.289a6.8 6.8 0 0 0-1.596-.924 8.7 8.7 0 0 0-3.061-.504 14.7 14.7 0 0 0-3.226.386c-1.39.31-3.24.884-4.401 1.284a.547.547 0 0 1-.69-.377l-.003-.012a.626.626 0 0 1 .334-.78 31.5 31.5 0 0 1 4.52-1.407A15.2 15.2 0 0 1 9.49 5.5a10 10 0 0 1 3.5.543 16.8 16.8 0 0 1 4.05 2.904 1.13 1.13 0 0 0 .668.287 12.7 12.7 0 0 1 4.79 1.376 2.75 2.75 0 0 1 1.5 2.5z"></path><path d="M6.986 16.5a2 2 0 0 1-2 2h-.002a2 2 0 1 1 2.002-2.002zm14.01 0a2 2 0 0 1-2 2 2 2 0 1 1 2.002-2.002v.002z"></path></svg>
            )}
            title="Explore the best car deals from anywhere to everywhere then book with no fees"
          />
          <Feature
            Icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M20 8.5H4a1 1 0 0 0-1 1v8.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V9.5a1 1 0 0 0-1-1m-12.75 9a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 7.25 13M12 17.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17.5m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 13m4.75 0A1.25 1.25 0 1 1 18 11.75 1.25 1.25 0 0 1 16.75 13M21 6.25a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 6.25 3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25"></path></svg>
            )}
            title="Compare deals from trusted car hire providers in one place"
          />
          <Feature
            Icon={() => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="3rem" height="3rem"><path d="M21 6.908A3.91 3.91 0 0 0 17.092 3H12.62a3 3 0 0 0-2.12.878l-6.623 6.624a2.997 2.997 0 0 0 0 4.238l5.382 5.382a2.997 2.997 0 0 0 4.238 0l6.624-6.624A3 3 0 0 0 21 11.38V6.91zM16.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path></svg>
            )}
            title="Rent a car with a flexible booking policy or free cancellationt"
          />
        </div>

        <header className="section-header">
          <h1>CarHire in your Home Country</h1>
          <p>
            Here are the Car-hire deals with the lowest prices. Act
            fast – they all increase within the next three months.
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

