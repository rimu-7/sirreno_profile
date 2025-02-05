import React, { useState } from "react";
import { motion } from "framer-motion";
import FirstPart from "./About/FirstPart";
import SecondPart from "./About/SecondPart";
import AboutFooter from "./About/AboutFooter";
import Typing from "react-typing-effect";
import Footer from "../Shared/Footer/Footer";

const about = [
  {
    title: "NATIVE BREED MEDIA",
    description: `NATIVE BREED MEDIA is a diversified entertainment media company based
          in Liberia. It is also a brand agency with ventures integrating music,
          events, sports, PR, branding, and digital marketing. We are dedicated to
          promoting and improving the quality and value of the Liberian Culture.e`,
  },
];
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
  const [activeIndex] = useState(0); // Default index since you have one item

  return (
    <div className="">
      <div className="text-white px-3 min-h-[calc(100vh-200px)]">
        <div className=" py-10 text-white flex flex-col justify-center items-center text-center">
          <motion.h1
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            className="text-6xl text-orange-600"
          >
            {about[activeIndex].title}
          </motion.h1>
          <p className=" text-justify  px-3">
            {about[activeIndex].description}
          </p>
        </div>

        {/* First part */}
        <FirstPart />
        {/* Second part */}
        <SecondPart />
        {/* Footer */}
        {/* <AboutFooter /> */}
      </div>
      <Footer />
    </div>
  );
}

export default About;
