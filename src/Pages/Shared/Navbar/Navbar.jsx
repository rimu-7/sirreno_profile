import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Added state to track navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Added state to track last scroll position

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Added useEffect to handle scroll direction and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true); // Hide navbar on scroll down
      } else {
        setIsHidden(false); // Show navbar on scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll values
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, [lastScrollTop]);

  //motion

  const transition = {
    duration: 1.5,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div
      className={` text-white sticky bg-opacity-60 backdrop-blur-lg py-3  top-0 w-full transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`} // Added dynamic class for navbar hide/show effect
    >
      <div className="flex items-center justify- px-4 text-xl relative">
        {/*  logo */}
        <Logo />

        {/* lg nav  */}
        <div className="hidden sm:block text-center w-full ">
          <div className="flex items-center justify-center space-x-3">
            <div className="">
              <div className=" gap-4 mr-4"></div>

              {/* Dropdown Menu */}
              <motion.div
                animate={{ x: [-250, 0] }}
                transition={transition}
                className={`absolute  left-0 top-10 z-50 w-full  sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul className="flex mt-3 flex-col sm:flex-row gap-4 sm:gap-6  text-right sm:p-0">
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/men" className="animate-button">
                      Home
                    </Link>
                  </li>
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/women" className="animate-button">
                      About Us
                    </Link>
                  </li>
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/kids" className="animate-button">
                      Our Services
                    </Link>
                  </li>
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/electronics" className="animate-button">
                      Careers
                    </Link>
                  </li>
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/login" className="animate-button">
                      BLog
                    </Link>
                  </li>
                  <li className="hover:scale-110 hover:duration-300">
                    <Link to="/login" className="animate-button">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
            {/* Social Media Icons or Additional Buttons */}
            <div className="flex items-center space-x-5 ">
              <button
                className="focus:outline-none sm:hidden"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12" // X icon when open
                        : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav  */}
        <div
          className={`absolute sm:hidden  left-0 top-10 z-50 w-full  sm:static sm:w-auto sm:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="bg-[#212121] flex mt-2 mr-4 flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
            <li>
              <Link to="/men" className="animate-button">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/women" className="animate-button">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/kids" className="animate-button">
                KIDS
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="animate-button">
                ELECTRONICS
              </Link>
            </li>
            <li>
              <Link to="/login" className="animate-button">
                BUILDINGS
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between sm:hidden w-full">
          <button
            className="focus:outline-none sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
