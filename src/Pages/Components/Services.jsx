import React from "react";
import Banner from "./Services/Banner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

function Services() {
  return (
    <div className=" text-white h-screen ">
      <Navbar/>
      <Banner />
      <Footer/>
    </div>
  );
}

export default Services;
