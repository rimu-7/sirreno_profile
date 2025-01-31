import React, { useState } from "react";
import { motion } from "framer-motion";
import FirstPart from "./About/FirstPart";
import SecondPart from "./About/SecondPart";
import AboutFooter from "./About/AboutFooter";
import Typing from "react-typing-effect";

const about = [
  {
    title: "NATIVE BREED MEDIA",
    description: `NATIVE BREED MEDIA is a diversified entertainment media company based
          in Liberia. It is also a brand agency with ventures integrating music,
          events, sports, PR, branding, and digital marketing. We are dedicated to
          promoting and improving the quality and value of the Liberian Culture.e`,
  },
];

function About() {
  const [activeIndex] = useState(0); // Default index since you have one item

  return (
    <div className="text-white px-3 min-h-[calc(100vh-200px)]">
      <div className=" py-10 text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl text-orange-600">
          <Typing
            text={about[activeIndex].title}
            speed={50}
            eraseSpeed={50}
            eraseDelay={10000}
            typingDelay={100}
            cursor=" "
            cursorClassName="hidden"
          />
        </h1>
        <p className=" text-justify w-[80%] px-3">
          <Typing
            text={about[activeIndex].description}
            speed={10}
            eraseSpeed={10000000000000}
            eraseDelay={20000000000000}
            typingDelay={100}
            cursor=" "
            
          />
        </p>
      </div>

      {/* First part */}
      <FirstPart />
      {/* Second part */}
      <SecondPart />
      {/* Footer */}
      <AboutFooter />
    </div>
  );
}

export default About;
