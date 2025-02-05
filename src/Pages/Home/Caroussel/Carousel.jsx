import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";

import image1 from "../../../assets/rec1.jpeg";
import image2 from "../../../assets/rec3.jpeg";
import image3 from "../../../assets/rec2.jpeg";
import image4 from "../../../assets/rec4.jpeg";

import card_1 from "./jassmine_card.jpeg";
import card_2 from "./malcolm_card.jpeg";
import { Link } from "react-router-dom";

const transition = {
  duration: 1.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const caseStudies = [
    {
      title: "Jassmine",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image1,
      link: "onerpm.link/singlesanthem",
    },
    {
      title: "Malcolm LL Smith",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image2,
      link: "https://onerpm.link/817382104762?",
    },
    {
      title: "Jassmine",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image3,
      link: "onerpm.link/singlesanthem",
    },
    {
      title: "Malcolm LL Smith",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image4,
      link: "https://onerpm.link/817382104762?",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
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
    <div
      {...handlers}
      className="flex items-center justify-center h-screen w-full overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          key={caseStudies[activeIndex].imageUrl}
          src={caseStudies[activeIndex].imageUrl}
          alt="Background"
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, scale: 1.1, x: 100, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, x: -100, filter: "blur(10px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute w-full h-full text-white uppercase flex flex-col justify-between p-10">
        <motion.p
          transition={transition}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-7xl self-end"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {caseStudies[activeIndex].title}
        </motion.p>

        {/* Show Card Image based on the Person */}
        <Link></Link>
        <motion.a
          href={
            caseStudies[activeIndex].title === "Jassmine"
              ? "https://onerpm.link/singlesanthem"
              : "https://onerpm.link/817382104762?"
          }
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -100 }} // Start from the left, fully hidden
          animate={{ opacity: 1, x: 0 }} // Move in smoothly
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          className="self-start w-40 h-auto rounded-lg shadow-lg"
        >
          <motion.img
            src={
              caseStudies[activeIndex].title === "Jassmine" ? card_1 : card_2
            }
            alt="Person Card"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:grayscale hover:duration-500 hover:transition-colors"
            whileHover={{ scale: 1.05 }} // Slight hover effect
            whileTap={{ scale: 0.95 }} // Small click effect
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Carousel;
