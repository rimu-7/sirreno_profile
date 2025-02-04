import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import image1 from "../../assets/rec1.jpeg";
import image2 from "../../assets/rec3.jpeg";
import Footer from "../Shared/Footer/Footer";

const Artisst = () => {
  const artist = [
    {
      name: "Jassmine",
      image: image1,
    },
    {
      name: "MALCOLM LL SMITH",
      image: image2,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    setActiveIndex(index);
  };

  const handleRelease = () => {
    setActiveIndex(null);
  };

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5002/data")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen text-white bg-[#212121]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {artist.map((item, index) => (
          <Link
            to="/artist"
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="group relative overflow-hidden rounded-lg  cursor-pointer"
              onTouchStart={() => handleTap(index)}
              onTouchEnd={handleRelease}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={handleRelease}
            >
              <div className=" h-120 sm:h-120 md:h-120">
                <img
                  src={item.image}
                  alt={item.artist_name}
                  className={`w-full h-full object-cover transition duration-300 ${
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
                  className={`font-bold text-4xl md:text-6xl lg:text-7xl text-center uppercase transition duration-300 opacity-0 group-hover:opacity-100 ${
                    activeIndex === index ? "opacity-100" : ""
                  }`}
                  style={{ fontFamily: "Abril Fatface, serif" }}
                >
                  {item.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Artisst;
