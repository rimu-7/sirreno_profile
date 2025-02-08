import React from "react";
import Footer from "../Shared/Footer/Footer";
import image1 from "../../assets/events-1.jpeg";
import image2 from "../../assets/events-2023.jpeg";

const events_data = [
  {
    id: 1,
    year: 2022,
    picture: image1,
  },
  {
    id: 2,
    year: 2023,
    picture: image2,
  },
];

const Events = () => {
  // Sort events in descending order based on year
  const sortedEvents = [...events_data].sort((a, b) => b.year - a.year);

  return (
    <div className="">
      <div className="min-h-screen   flex flex-col items-center p-6">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <div key={event.id} className="w-full max-w-2xl mb-8 text-center">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "Abril Fatface, serif" }}
              >
                {event.year}
              </h1>
              {event.picture && (
                <img
                  src={event.picture}
                  alt={`Event in ${event.year}`}
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No events available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
