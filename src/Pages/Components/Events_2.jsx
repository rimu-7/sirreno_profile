import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Shared/Footer/Footer";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/data")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const validEvents = response.data.filter(
            (event) => event.event_date && !isNaN(new Date(event.event_date))
          );
          const sortedEvents = validEvents.sort(
            (a, b) => new Date(b.event_date) - new Date(a.event_date)
          );
          setEvents(sortedEvents);
        }
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center p-6 text-white">
        {events.length > 0 ? (
          events.map((event, index) => {
            const eventDate = new Date(event.event_date);
            const eventYear = !isNaN(eventDate)
              ? eventDate.getFullYear()
              : "Unknown";
            return (
              <div key={index} className="w-full max-w-2xl mb-8 text-center ">
                <h1
                  className="text-6xl font-bold mb-4"
                  style={{ fontFamily: "Abril Fatface, serif" }}
                >
                  {eventYear}
                </h1>
                {event.event_image && (
                  <img
                    src={event.event_image}
                    alt={`Event in ${eventYear}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No events available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
