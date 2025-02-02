import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Components/Navbar";
import Footer from "../Shared/Footer/Footer";
const currentDate = {
  
}

function ErrorPage() {
  return (
    <div className=" bg-[#212121] ">
      <Navbar />
      <div className=" ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl text-red-500 tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-200 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-200 dark:text-gray-400">
              Sorry, we can&apos;t find that page.
            </p>
            <Link
              to="/"
              className="inline-flex  bg-orange-600 text-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
