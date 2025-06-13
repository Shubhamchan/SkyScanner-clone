import React, {useState} from "react";
import renderWithHighlights from "./Render";
import '../App.css';
import uk  from '/src/assets/uk.png';
import Nz from '/src/assets/nz.png';
import SG from '/src/assets/sg.png';
import AU from '/src/assets/au.png';
import IN from '/src/assets/in.png';
import MY from '/src/assets/my.png';
import ID from '/src/assets/id.png';
import PH from '/src/assets/ph.png';
import US from '/src/assets/us.png';  


 const faqsLeft = [
  "How does Skyscanner work?",
  "How can I find the cheapest flight using Skyscanner?",
  "Where should I book a flight to right now?",
  "Do I book my flight with Skyscanner?",
  "What happens after I have booked my flight?",
];
const faqsLeftAnswer = [
  "We're a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.",
  `Finding flights is easy here - over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Here are a few simple tips on how to get the most out of your flight search.
   \${Save money and time}. Whether it's the fastest flight or the smartest stay, you can pick your preferred flight provider or hotel based on real traveller ratings, and book instantly.
   \${Search Everywhere. Go anywhere}. Fancy a trip but don't mind where? Or perhaps you want to discover somewhere new. Search 'Everywhere' for the best budget airfare anywhere on any given day.
   \${Find the cheapest time to fly}. If you have a destination in mind and want to find the cheapest flight, choose \${!Cheapest month} when you search. Then find flights on the cheapest day.`,
   "If you're looking for inspiration for your next trip, \${!search Everywhere} to find a cheap flight ticket anywhere.",
   "We’re a search engine, so after you've found the best flight ticket you'll book directly with the airline or travel provider on their site. This will give you the opportunity to add any loyalty information you would like and select your preferred flight options, such as seating.",
   "Your flight booking confirmation email and all the other info you'll need will come from the airline or provider you booked with. If you have any follow-up questions about your booking, or want to change or cancel your flight, you’d need to get in touch with them.",
];

const faqsRight = [
  "Does Skyscanner do hotels too?",
  "What about car hire?",
  "What’s a Price Alert?",
  "Can I book a flexible flight ticket?",
  "Can I book flights that emit less CO₂?",
];

const faqsRightAnswer = [
      "Yes! You can use the same magic that powers our flight search to find your perfect stay anywhere.",
      "You can also use Skyscanner to search for and compare cheap car hire in seconds, then pick up your wheels from the airport as soon as you touch down.",
      "If you set up a Price Alert, we'll watch the price of plane tickets for you, and let you know via email or push notification via the app if they rise or fall.",
      "We understand how important it is to have flexible holiday plans. Sometimes, you can pay an extra fee for an amendable airline ticket, so look out for this option as you book. You can also look for hotels and car hire options with free cancellation, so you can book now and amend or even cancel later if you need to.",
      "Yes - since we began showing carbon emission info on flights where it's available, over 100 million travellers have found a plane ticket with lower emissions for their route.",
];


const AdventureLinks = {
   Country: [
   [ [ "Return tickets to Maldives", "Cheap flights to Singapore", "Return flights to Italy"],    
    [ "Cheap tickets to United Arab Emirates", "Flights to India", "Return tickets to Sri Lanka" ],                
    [ "Cheap return tickets to Thailand", "Return flights to Kazakhstan", "Return plane tickets to Canada" ] ],
      [
      ["Cheap return flights to United Kingdom", "Cheap return tickets to United States", "Cheap car hire in Malaysia"],
      ["Flights to Nepal", "Cheap return tickets to Malaysia", "Best car hire in Australia"],
      ["Flights to Vietnam", "Plane tickets to Indonesia", "Cheap car hire in India"]
    ],
    [
      ["Cheap car hire in Sri Lanka","Car hire in Thailand","Cheap car hire in Japan"],
      ["Cheap car hire in Bhutan","Cheap car hire in Vietnam","Best car hire in Indonesia"],
      ["Cheap car hire in United Arab Emirates","Cheap car hire in Maldives","Singapore car hire"]
    ],
    [
      ["Cheap car hire in Kazakhstan"," "," "],
      ["Italy car hire"," "," "],
      ["United States car hire"," "," "]
    ]
  ],
  Airport: [
    [[ "Best car hire at Port blair Airport", "Kochi Airport car hire", "Indira Gandhi International Airport car hire" ],    
    [ "Goa Dabolim Airport car hire", "Nagpur Airport car hire", "Mumbai Airport car hire" ],                
    [ "Bagdogra Airport car hire", "Best car hire at Ahmedabad Airport", "Chandigarh Airport car hire" ] 
    ],
    [
      ["Bangkok Suvarnabhumi Airport car hire","Cheap car hire at Bhubaneswar Airport","Cheap car hire at Bali (Denpasar) Airport"],
      ["Best car hire at Srinagar Airport","Thiruvananthapuram Airport car hire","Lucknow Airport car hire"],
      ["Indore Airport car hire","Cheap car hire at Kolkata Airport","Pune Airport car hire"]
    ],
    [ ["Cheap car hire at Chennai Airport","Cheap car hire at Hyderabad Airport","Bengaluru Airport car hire"],
      ["Patna Airport car hire","Phuket Airport car hire","Ranchi Airport car hire"],
      ["Best car hire at Guwahati Airport","Cheap car hire at Dubai Airport","Amritsar Airport car hire"]
    ],
    [
      ["Cheap car hire at Varanasi Airport","Cheap return tickets to Indore","Plane tickets to Mumbai"],
      ["Jammu Airport car hire","Cheap return flights to Kochi","Flights to Guwahati"],
      ["Jaipur Airport car hire","Return flights to Bagdogra","Cheap flights to Pune"]
    ],
    [
      ["Plane tickets to Bangkok Suvarnabhumi","Plane tickets to Chennai","Cheap return tickets to Thiruvananthapuram"],
      ["Flights to Bengaluru","Cheap return flights to Zayed International","Cheap return tickets to Srinagar"],
      ["Tickets to Hyderabad","Cheap return tickets to Goa Dabolim","Flights to Ahmedabad"]
    ],
    [
      ["Return plane tickets to Chandigarh","Return tickets to Phuket","Cheap tickets to Varanasi"],
      ["Cheap return flights to Jaipur","Return plane tickets to Indira Gandhi International","Return flights to Dubai"],
      ["Flights to Shillong","Cheap return flights to Prayagraj","Flights to Bali(Denpasar)" ]
    ],
    [
      ["Cheap return flights to Lucknow","Return tickets to Port blair"," "],
      ["Cheap return flights to Patna","Cheap tickets to Kolkata"," "],
      ["Cheap flights to Bhubaneswar","Return plane tickets to Ho Chi Minh City"," "]
    ]
  ],
  City: [
    [
      [ "Singapore car hire", "Best car hire in Toronto", "Paris car hire" ],    
      [ "Cheap car hire in Sandakan", "Tbilisi car hire", "Car hire in Muscat" ],                
      [ "Car hire in New Delhi", "Car hire in Bangkok", "Car hire in Denpasar" ]  
    ],
    [   
      ["Kuala Lumpur car hire","Seoul car hire","Best car hire in Malé"],
      ["Cheap car hire in Ho Chi Minh City","Bengaluru car hire","Car hire in Istanbul"],
      ["Best car hire in Melbourne","Cheap car hire in Mumbai","Cheap car hire in Hanoi"]
    ],
     [   
      [ "Singapore car hire", "Best car hire in Toronto", "Paris car hire" ],    
      [ "Cheap car hire in Sandakan", "Tbilisi car hire", "Car hire in Muscat" ],                
      [ "Car hire in New Delhi", "Car hire in Bangkok", "Car hire in Denpasar" ]  
    ],
     [   
      ["Kuala Lumpur car hire","Seoul car hire","Best car hire in Malé"],
      ["Cheap car hire in Ho Chi Minh City","Bengaluru car hire","Car hire in Istanbul"],
      ["Best car hire in Melbourne","Cheap car hire in Mumbai","Cheap car hire in Hanoi"]
    ],
    [
      [ "Singapore car hire", "Best car hire in Toronto", "Paris car hire" ],    
      [ "Cheap car hire in Sandakan", "Tbilisi car hire", "Car hire in Muscat" ],                
      [ "Car hire in New Delhi", "Car hire in Bangkok", "Car hire in Denpasar" ]  
    ]
  ],
  Region: [
   [
    [ "Return tickets to Delhi", "Plane tickets to Bangkok", "Return tickets to New York" ],    
    [ "Cheap return tickets to Tokyo", "Flights to Andalusia", "Return flights to Lombardy" ],                
    [ "Cheap return tickets to Catalonia", "Cheap return flights to England", "Cheap tickets to Dubai" ]
  ],
  [
    ["Return tickets to Balearic Islands","Cheap return flights to Lazio","Cheap car hire in Goa"],
    ["Plane tickets to Istanbul Province","Cheap return flights to Community of Madrid","Cheap car hire in Dubai"],
    ["Cheap return flights to Canary Islands","Cheap tickets to Île-de-France","Cheap car hire in Tamil Nadu"]
  ],
   [
    [ "Return tickets to Delhi", "Plane tickets to Bangkok", "Return tickets to New York" ],    
    [ "Cheap return tickets to Tokyo", "Flights to Andalusia", "Return flights to Lombardy" ],                
    [ "Cheap return tickets to Catalonia", "Cheap return flights to England", "Cheap tickets to Dubai" ]
  ],
   [
    ["Return tickets to Balearic Islands"," "," "],
    ["Plane tickets to Istanbul Province"," "," "],
    ["Cheap return flights to Canary Islands"," "," "]
  ],
],
};

const countries = [
  { code: "GB", name: "Cheap flights", flag: uk }, 
  { code: "NZ", name: "New Zealand - Cheap flights", flag: Nz },
  { code: "SG", name: "Singapore - flights", flag: SG },
  { code: "AU", name: "Australia - Cheap flights", flag: AU },
  { code: "IN", name: "India - Flight tickets", flag: IN },
  { code: "MY", name: "Malaysia - flights", flag: MY },
  { code: "ID", name: "Indonesia - Tiket Pesawat", flag: ID },
  { code: "PH", name: "Philippines - flights", flag: PH },
  { code: "US", name: "USA - flights", flag: US },
];

function Middle () {
  const categories = Object.keys(AdventureLinks);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const currentLinks = AdventureLinks[activeCategory][carouselIndex] || [];
  const flatLinks    = currentLinks.flat();
  const handlePrev= () =>
    setCarouselIndex(i=>i === 0 ? AdventureLinks[activeCategory].length-1 : i-1
    );
  const handleNext = () => setCarouselIndex(i => (i+1)%AdventureLinks[activeCategory].length);
  const columns = [
  countries.slice(0, 3),
  countries.slice(3, 6),
  countries.slice(6, 9),
];
  return (
    <div>
        <section id="middle-part">
        <div className="inner-wrapper">
          <button>
            <img src=".SkyScanner/src/assets/hotels_white_2.svg" alt="Hotels" />
            Hotels
          </button>
          <button>
            <img src=".SkyScanner/src/assets/carhire_white_2.svg" alt="Car Hire" />
            Car Hire
          </button>
          <button>
            <img src=".SkyScanner/src/assets/Explore-40px.svg" alt="Explore Everywhere" />
            Explore Everywhere
          </button>
        </div>
        <div className="image-part">
          <div className="content-overlay">
            <h1>Summer Starts now</h1>
            <p>All the tools and tips to get that summer feeling sooner.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="faq-explore-container">
          <h2 className="page-heading">Booking flights with Skyscanner</h2>
          <div className="faq-grid">
            <div className="faq-column">
              {faqsLeft.map((question,idx) =>(
                <details key={idx} className="faq-item">
                  <summary>{question}</summary>
                  <div className="faq-answer">
                    <p>
                     {renderWithHighlights(faqsLeftAnswer[idx])}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="faq-column">
              {faqsRight.map((question,idx) => (
                <details key={idx} className="faq-item">
                  <summary>{question}</summary>
                  <div className="faq-answer">
                    <p>
                      {renderWithHighlights(faqsRightAnswer[idx])}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="international-sites">
            <details className="faq-item single">
              <summary>Our international sites</summary>
              <div className="faq-answer">
                 <div className="country-container">
                      {columns.map((col, i) => (
                            <ul key={i} className="country-column">
                              {col.map((country, idx) => (
                                <li key={idx}>
                                  <img
                                 src={country.flag}
                                 alt={`${country.code} flag`}
                                 width="20"
                                 height="16"
                                 className="flag"
                                />
                            <span className="text">({country.code}) {country.name}</span>
                            </li>
                            ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </details>
        </div>

        <div className="adventure-section">
            <h3>Start planning your adventure</h3>
                <div className="category-buttons">
                   {categories.map(cat => (
                    <button
                        key={cat}
                        className={cat === activeCategory ? "cat-btn active" : "cat-btn"}
                        onClick={() => {
                        setActiveCategory(cat);
                        setCarouselIndex(0);
                        }}
                        >
                    {cat}
                </button>
            ))}
        </div>

        <div className="carousel-container">
            <button className="arrow prev-arrow" onClick={handlePrev}>
                ‹
            </button>
            <div className="links-grid">
                {flatLinks.map((text, idx) => (
                <div key={idx} className="link-item">
                    <a href="#">{text}</a>
                </div>
                ))}
            </div>
            <button className="arrow next-arrow" onClick={handleNext}>›</button>
        </div>

        <div className="carousel-dots">
            {AdventureLinks[activeCategory].map((_, dotIdx) => (
                <span
                key={dotIdx}
                className={dotIdx === carouselIndex ? "dot active-dot" : "dot"}
                onClick={() => setCarouselIndex(dotIdx)}
                />
                ))}
            </div>
        </div>
    </div>
    </section>
</div>
)
};

export default Middle;

