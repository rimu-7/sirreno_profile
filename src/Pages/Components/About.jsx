import React from "react";
import { motion } from "motion/react";
import FirstPart from "./About/FirstPart";
import SecondPart from "./About/SecondPart";
import AboutFooter from "./About/AboutFooter";

function About() {
  return (
    // h-screen text-white flex justify-center items-center text-center
    <div className=" text-white">
      <div className="  text-white justify-center items-center text-center">
        <h1 className="text-6xl text-orange-700">Record Labels</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          nobis labore rem debitis autem necessitatibus eos cupiditate odit
          sapiente ut.
        </p>
      </div>

      {/* first part */}
      <FirstPart />
      {/* sencod part */}
      <SecondPart />
      <AboutFooter />
    </div>
  );
}

export default About;
