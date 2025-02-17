import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Components/Navbar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Footer from "../Pages/Shared/Footer/Footer";
import JivoChat from "../Pages/Home/Home/jivochat/JivoChat"; 

const Main = () => {
  return (
    <div className="bg-[#212121] text-white w-full min-h-screen flex flex-col">
      {/* <Navbar /> */}

      {/* Centered Content with max-width for 4K screens */}
      <div className="w-full max-w-[1800px] mx-auto ">
        <Outlet />
      </div>
      <JivoChat/>

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
