import React, { useState } from "react";

import image1 from "../../assets/rec1.jpeg";
import image2 from "../../assets/rec3.jpeg";

const caseStudies = [
  {
    title: "Jasmine",
    description: "Lorem ipsum dolor sit amet...",
    imageUrl: image1,
    link: "https://example.com/dress",
  },
  {
    title: "Malcom",
    description: "Lorem ipsum dolor sit amet...",
    imageUrl: image2,
    link: "https://example.com/shoe",
  },
];

const Artisst = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    setActiveIndex(index); // Show text and blur image on tap
  };

  const handleRelease = () => {
    setActiveIndex(null); // Hide text and remove blur on release
  };

  return (
    <div className="h-screen text-white flex justify-center items-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg"
              onTouchStart={() => handleTap(index)} // Trigger on tap
              onTouchEnd={handleRelease} // Trigger on touch release
              onMouseEnter={() => setActiveIndex(index)} // For desktop hover effect
              onMouseLeave={handleRelease} // For desktop hover out
            >
              {/* Image with blur effect on tap */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className={`w-96 h-96 object-cover transition duration-300 ${
                  activeIndex === index ? "blur-md" : "group-hover:blur-md"
                }`}
              />
              {/* Overlay for text */}
              <div
                className={`absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 group-hover:scale-110 backdrop-blur-none group-hover:backdrop-blur-md transition duration-300 flex items-center justify-center ${
                  activeIndex === index ? "bg-opacity-50 scale-110 backdrop-blur-md" : ""
                }`}
              >
                <p
                  className={`font-bold text-7xl sm:text-left md:opacity-0 md:group-hover:opacity-100 transition duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ fontFamily: "Abril Fatface, serif" }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Artisst;
