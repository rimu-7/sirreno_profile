import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

import image1 from "../../../assets/rec1.jpeg";
import image2 from "../../../assets/rec3.jpeg";
import image3 from "../../../assets/rec2.jpeg";
import image4 from "../../../assets/rec4.jpeg";

import card_1 from "./jassmine_card.jpeg";
import card_2 from "./malcolm_card.jpeg";

const transition = {
  duration: 2,
  delay: 1,
  ease: [0, 0.71, 0.2, 1.01],
};

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

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const caseStudies = [
    {
      title: "Jassmine",
      imageUrl: image1,
      card: card_1,
      link: "https://onerpm.link/singlesanthem",
    },
    {
      title: "Malcolm LL Smith",
      imageUrl: image2,
      card: card_2,
      link: "https://onerpm.link/817382104762?",
    },
    {
      title: "Jassmine",
      imageUrl: image3,
      card: card_1,
      link: "https://onerpm.link/singlesanthem",
    },
    {
      title: "Malcolm LL Smith",
      imageUrl: image4,
      card: card_2,
      link: "https://onerpm.link/817382104762?",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
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
        <AnimatePresence mode="wait">
          {/* Background Image (Carousel) */}
          <motion.img
            key={caseStudies[activeIndex].imageUrl} // Same key for sync
            src={caseStudies[activeIndex].imageUrl}
            alt="Background"
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0, scale: 1.1, x: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, x: -100, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // Same duration for sync
          />
        </AnimatePresence>
      </div>
      <div className="absolute w-full h-full text-white uppercase flex flex-col justify-between p-10">
        <AnimatePresence mode="wait">
          <motion.p
            initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // Same duration for sync
            className="font-bold text-7xl self-end "
            style={{ fontFamily: "Abril Fatface, serif" }}
            key={caseStudies[activeIndex].card} // Same key for sync
            src={caseStudies[activeIndex].card}
          >
            {caseStudies[activeIndex].title}
          </motion.p>
        </AnimatePresence>
        {/* Card Image */}
        <motion.a
          href={caseStudies[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start w-40 h-auto rounded-lg shadow-lg"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={caseStudies[activeIndex].card} // Same key for sync
              src={caseStudies[activeIndex].card}
              alt="Person Card"
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:grayscale hover:duration-500 hover:transition-colors"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Same duration for sync
            />
          </AnimatePresence>
        </motion.a>
      </div>
    </div>
  );
};

export default Carousel;
