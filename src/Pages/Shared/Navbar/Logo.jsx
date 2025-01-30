import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'; // Ensure the path is correct

function Logo() {
  return (
    <div className=" font-bold">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-20 rounded" /> {/* Use the logo as an image */}
      </Link>
    </div>
  );
}

export default Logo;