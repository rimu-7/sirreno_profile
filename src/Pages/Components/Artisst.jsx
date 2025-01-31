import React, { useState } from "react";
import image1 from "../../assets/rec1.jpeg";
import image2 from "../../assets/rec3.jpeg";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "JASSMINE",
    description: "Lorem ipsum dolor sit amet...",
    imageUrl: image1,
    link: "https://example.com/dress",
  },
  {
    title: "MALCOLM LL SMITHh",
    description: "Lorem ipsum dolor sit amet...",
    imageUrl: image2,
    link: "https://example.com/shoe",
  },
];

const Artisst = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    setActiveIndex(index);
  };

  const handleRelease = () => {
    setActiveIndex(null);
  };

  return (
<div className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-white">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {caseStudies.map((item, index) => (
          <Link to="/" key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <div
              className="group relative overflow-hidden rounded-lg  cursor-pointer"
              onTouchStart={() => handleTap(index)}
              onTouchEnd={handleRelease}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={handleRelease}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className={`w-full h-120 sm:h-120 md:h-96 object-cover transition duration-300 ${
                  activeIndex === index ? "blur-md" : "group-hover:blur-md"
                }`}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center transition duration-300 bg-opacity-0 group-hover:bg-opacity-50 ${
                  activeIndex === index ? "bg-opacity-50" : ""
                }`}
              >
                <p
                  className={`font-bold text-4xl md:text-6xl lg:text-7xl text-center uppercase transition duration-300 opacity-0 group-hover:opacity-100 ${
                    activeIndex === index ? "opacity-100" : ""
                  }`}
                  style={{ fontFamily: "Abril Fatface, serif" }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artisst;
