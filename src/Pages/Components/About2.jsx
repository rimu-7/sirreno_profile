import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";
import FirstPart from "./About/FirstPart";
import SecondPart from "./About/SecondPart";
import AboutFooter from "./About/AboutFooter";



const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Define activeIndex

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((result) => {
        if (result.length > 0) {
          setData(result[0]); // Assuming you want the first entry
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!data) return <p className="text-white text-center">No data available</p>;

  const about = [
    {
      title: "NATIVE BREED MEDIA",
      description: `NATIVE BREED MEDIA is a diversified entertainment media company based
            in Liberia. It is also a brand agency with ventures integrating music,
            events, sports, PR, branding, and digital marketing. We are dedicated to
            promoting and improving the quality and value of the Liberian Culture.`,
    },
  ];

  return (
    <div className="py-10 bg-[#212121] my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
      <div className="text-white px-3 min-h-[calc(100vh-200px)]">
        {/* Animated Title */}
        <div className="py-10 text-white flex flex-col justify-center items-center text-center">
          <motion.h1
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            className="text-6xl text-orange-600"
          >
            {about[activeIndex].title}
          </motion.h1>
          <p className="text-justify px-3">
            <Typing
              text={about[activeIndex].description}
              speed={10}
              eraseSpeed={99999999999}
              eraseDelay={99999999999}
              typingDelay={100}
              cursor=" "
            />
          </p>
        </div>

        {/* Left Side - Vision Section */}
        <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
          <h1 className="text-5xl my-5 lg:text-6xl text-orange-600 font-bold flex justify-center items-center gap-2">
            OUR VISION
          </h1>
          <p className="text-white flex text-justify">
            {data.about_description_1}
          </p>
        </div>

        {/* Right Side - Image Gallery */}
        <div className="grid grid-cols-3 gap-2">
          {[
            data.about_image_1,
            data.about_image_2,
            data.carousel_image,
            data.blog_image,
            data.artist_image,
            data.event_image,
          ].map(
            (src, index) =>
              src && (
                <div key={index}>
                  <img
                    className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
                    src={src}
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              )
          )}
        </div>
      </div>

      {/* Footer Components */}
      <FirstPart />
      <SecondPart />
      <AboutFooter />
    </div>
  );
}

export default About;
