import React, { useState } from "react";
import { Link } from "react-router-dom";
import { artists } from "../../assets/artistData";
import Footer from "../Shared/Footer/Footer";

const Artist_2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    setActiveIndex(index);
  };

  const handleRelease = () => {
    setActiveIndex(null);
  };

  return (
    <div className="">
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          {artists.map((artist, index) => (
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onTouchStart={() => handleTap(index)}
                onTouchEnd={handleRelease}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={handleRelease}
              >
                <div className="h-96 sm:h-96 md:h-96">
                  <img
                    src={artist.images[3]}
                    alt={artist.name}
                    className={`w-full h-full object-cover transition duration-300 rounded-lg shadow-lg ${
                      activeIndex === index ? "blur-md" : "group-hover:blur-md"
                    }`}
                  />
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition duration-300 bg-opacity-0 group-hover:bg-opacity-50 ${
                    activeIndex === index ? "bg-opacity-50" : ""
                  }`}
                >
                  <p
                    className={`font-bold text-4xl md:text-6xl text-amber-400 lg:text-6xl text-center uppercase transition duration-300 opacity-0 group-hover:opacity-100 ${
                      activeIndex === index ? "opacity-100" : ""
                    }`}
                    style={{ fontFamily: "Abril Fatface, serif" }}
                  >
                    {artist.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artist_2;