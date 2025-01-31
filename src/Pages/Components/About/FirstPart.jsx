import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Typing from "react-typing-effect";

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

const firstpart = [
  {
    title: "",
    description: `Native Breed Media was founded In September 2021. Our team has the knowledge, experience,
          and creativity to make your brand come to life in Liberia and beyond.
          Native Breed Media is home to few talented young Liberians that are
          already doing well in and outside Liberia. The likes of J Slught,
          Malcolm LL Smith, Jake Mille, Kilas and Jasmine. `,
  },
];

function FirstPart() {
  const [activeIndex] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count < 10) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Adjust the speed of counting here (500ms = 0.5 seconds per increment)
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [count]);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    if (count2 < 15) {
      const interval = setInterval(() => {
        setCount2((prevCount2) => prevCount2 + 1);
      }, 100); // Adjust the speed of counting here (500ms = 0.5 seconds per increment)
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [count2]);
  return (
    <div className=" bg-[#212121] my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
      {" "}
      {/* Left Side - Image Gallery */}
      <div className="w-full lg:w-[50%] min-h-[140px] overflow-x-scroll rounded-lg lg:overflow-visible">
        {" "}
        <div className="grid grid-cols-3 gap-4">
          <motion.div
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"
          >
            <img
              className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        {" "}
        <div className="text-white flex gap-2">
          <p className="text-3xl text-orange-600 font-bold uppercase text-justify ">
            {/* We are a thinking company that creates, executes ideas and builds
            strategies and structures for our clients. */}
            We think, create, strategize, and build for our clients
          </p>
        </div>
        <h1 className="text-5xl my-5 lg:text-6xl text-[#7b7a7a] font-bold flex justify-center items-center gap-2">
          
            {firstpart[activeIndex].title}
            
        </h1>
        <p className="text-white flex text-justify">
          <Typing
            text={firstpart[activeIndex].description}
            speed={10}
            eraseSpeed={10000000000000}
            eraseDelay={20000000000000}
            typingDelay={100}
            cursor=" "
            cursorClassName="hidden"
          />
        </p>
        {/* <div className="flex space-x-4 mt-2">
          <div className="flex flex-col justify-center items-center text-center">
            <motion.p
              key={count}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl lg:text-8xl p-2 rounded text-orange-700"
            >
              +{count}
            </motion.p>
            <p>Artistes</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <motion.p
              key={count}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl lg:text-8xl p-2 rounded text-orange-700"
            >
              +{count2}
            </motion.p>
            <p>Albums</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FirstPart;
