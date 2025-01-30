import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Typing from "react-typing-effect";
import { motion } from "motion/react";
import { RiMusicAiLine } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

import image1 from "../../../assets/rec1.jpeg";
import image2 from "../../../assets/rec3.jpeg";
import image3 from "../../../assets/rec2.jpeg";
import image4 from "../../../assets/rec4.jpeg";

const transition = {
  duration: 1.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [15, -10],
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
      title: "jasmine",
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
    {
      title: "Jasmine",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image3,
      link: "https://example.com/accessories",
    },
    {
      title: "Malcom",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image4,
      link: "https://example.com/accessories",
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
    setActiveIndex(
      (prevIndex) => (prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1)
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers} // Attach swipe handlers here
      className="flex items-center justify-center h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* left arrow button  */}
      {/* <div
        className="absolute left-0 z-10 p-3 cursor-pointer rounded-full m-2 backdrop-blur-2xl transition duration-300"
        onClick={prevSlide}
      >
        <FiArrowLeft size="30" />
      </div> */}
      <div className="w-full h-full overflow-hidden relative">
        <motion.img
          key={caseStudies[activeIndex].imageUrl}
          src={caseStudies[activeIndex].imageUrl}
          alt="Background"
          className="w-screen h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute w-full h-full text-black flex flex-col justify-between p-10">
        <motion.p
          transition={transition}
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="font-bold text-5xl self-end"
        >
          {caseStudies[activeIndex].title}
        </motion.p>
        <motion.p
          animate={{ x: [-1000, 0] }}
          transition={transition}
          className="ml-30 text-start text-sm w-40"
        >
          <Typing
            text={caseStudies[activeIndex].description}
            speed={10}
            eraseSpeed={1000000}
            eraseDelay={2000}
            typingDelay={100}
            cursor="|"
            className="h-48"
          />
        </motion.p>
        <motion.a
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          href={caseStudies[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block self-start mb-30 px-6 py-3 text-lg backdrop:blur-md rounded-md"
        >
          <RiMusicAiLine className="text-9xl" />
        </motion.a>
      </div>

      {/* right arrow button  */}
      {/* <div
        className="absolute right-0 z-10 p-3 cursor-pointer rounded-full m-2 backdrop-blur-2xl transition duration-300"
        onClick={nextSlide}
      >
        <FiArrowRight />
      </div> */}
    </div>
  );
};

export default Carousel;
