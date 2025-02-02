import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import image1 from "../../assets/rec1.jpeg";
import image2 from "../../assets/rec3.jpeg";

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
      .get("http://localhost:5000/get-api")
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
              <img
                src={item.image}
                alt={item.artist_name}
                className={`w-full h-120 sm:h-120 md:h-96 object-cover transition duration-300"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artisst;
