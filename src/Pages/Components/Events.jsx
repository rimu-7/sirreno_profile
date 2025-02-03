import { useEffect, useState } from "react";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        // Extract only unique and non-empty event_images
        const uniqueImages = Array.from(
          new Set(
            data
              .map((item) => item.event_images)
              .filter((img) => img && img.trim() !== "")
          )
        );

        setEvents(uniqueImages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Event Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="Event" className="w-full h-48 object-cover" />
            </div>
          ))
        ) : (
          <p>No event images available</p>
        )}
      </div>
    </div>
  );
};

export default Event;
