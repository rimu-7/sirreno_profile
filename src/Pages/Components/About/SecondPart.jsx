import React from "react";
import { RxMoon } from "react-icons/rx";
import { BsMusicNote } from "react-icons/bs";


function SecondPart() {
  return (
    <div className="bg-[#212121] my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
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
        <h1 className="text-5xl my-5 lg:text-6xl text-[#7b7a7a] font-bold flex justify-center items-center gap-2">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-white flex text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, atque!
        </p>
        <div className="flex space-x-4 mt-2">
          <BsMusicNote className="text-6xl lg:text-8xl p-2 rounded hover:text-[#7b7a7a] hover:duration-500 hover:transition-colors"/>
          <RxMoon className="text-6xl lg:text-8xl p-2 rounded hover:text-[#7b7a7a] hover:duration-500 hover:transition-colors"/>
        </div>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="w-full lg:w-[50%] min-h-[140px] overflow-x-scroll rounded-lg mt-5 lg:overflow-visible">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <img
              className="object-cover object-center h-40 max-w-full rounded-lg md:h-60 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover object-center h-40 max-w-full rounded-lg md:h-60 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover object-center h-40 max-w-full rounded-lg md:h-60 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover object-center h-40 max-w-full rounded-lg md:h-60 hover:scale-105 hover:duration-500"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPart;