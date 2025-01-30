import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"; // Ensure the path is correct

function Logo() {
  return (
    <div className=" font-bold ">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className=" hover:scale-105 hover:duration-500 w-15 h-15 rounded"
        />{" "}
        {/* Use the logo as an image */}
      </Link>
    </div>
  );
}

export default Logo;
