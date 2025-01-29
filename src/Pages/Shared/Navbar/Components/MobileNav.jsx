import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "block h-48" : "hidden h-0"
      }`} // Expands height to push content down
    >
      <ul className="bg-[#212121] duration-500 transform-3d flex flex-col gap-4 text-center p-4">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default MobileNav;
