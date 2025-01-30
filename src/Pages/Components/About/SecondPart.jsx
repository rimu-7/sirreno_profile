import React from "react";
import { RxMoon } from "react-icons/rx";
import { BsMusicNote } from "react-icons/bs";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function SecondPart() {
  return (
    <div className="py-10 bg-[#212121] my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        {/* <div className="text-white flex gap-2">
          <p className="bg-orange-100 text-orange-700 px-2 text-justify rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="bg-orange-100 text-orange-700 px-2 text-justify rounded">
            2000
          </p>
        </div> */}
        <h1 className="text-5xl my-5 lg:text-6xl text-orange-600 font-bold flex justify-center items-center gap-2">
          OUR VISION
        </h1>
        <p className="text-white flex text-justify">
          To inspire the World through imaginative storytelling, creating an
          ecosystem and changing the perception of Liberian brands and creatives
          through excellent delivery.
        </p>
        <div className="flex justify-center gap-x-6 mt-4">
          <BsMusicNote className="text-5xl lg:text-6xl p-3 rounded-full bg-gray-800 text-white transition-all duration-500 hover:text-orange-600 hover:scale-110 cursor-pointer" />

          <Link to="https://www.facebook.com/share/14pR5KvBmuU/?mibextid=wwXIfr">
            <FaFacebook className="text-5xl lg:text-6xl p-3 rounded-full bg-blue-600 text-white transition-all duration-500 hover:bg-blue-700 hover:scale-110" />
          </Link>

          <Link to="https://www.instagram.com/nativebreedmedia?igsh=MWZ2MGQ5Y2cxZW5nNQ==">
            <FaInstagram className="text-5xl lg:text-6xl p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white transition-all duration-500 hover:scale-110" />
          </Link>

          <Link to="https://www.tiktok.com/@nativebreedmedia">
            <FaTiktok className="text-5xl lg:text-6xl p-3 rounded-full bg-black text-white transition-all duration-500 hover:text-gray-400 hover:scale-110" />
          </Link>

          <Link to="https://twitter.com/nativebreedmedia">
            <FaTwitter className="text-5xl lg:text-6xl p-3 rounded-full bg-blue-500 text-white transition-all duration-500 hover:bg-blue-600 hover:scale-110" />
          </Link>

          <Link to="https://www.youtube.com/@nativebreedmedia">
            <FaYoutube className="text-5xl lg:text-6xl p-3 rounded-full bg-red-600 text-white transition-all duration-500 hover:bg-red-700 hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="grid grid-cols-3 gap-2">
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover object-center h-30 max-w-full rounded-lg md:h-30 hover:scale-105 hover:duration-500"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
