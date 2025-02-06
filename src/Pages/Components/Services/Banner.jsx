import React from "react";
import { FaMusic, FaCalendarAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { TbBrand4Chan } from "react-icons/tb";
import { SiCoinmarketcap } from "react-icons/si";
import { LuHeartHandshake } from "react-icons/lu";

function Banner() {
  return (
    <div className="flex flex-col h-screen">
      {/* Banner Section */}
      <div className="flex-grow flex flex-col items-center justify-center px-5 py-10">
        <h1
          className="text-6xl  font-bold text-amber-400 mb-10 text-center"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          Our Services
        </h1>

        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <ServiceCard
            icon={<MdManageAccounts />}
            title="Management Service"
            color="text-blue-500"
          />
          <ServiceCard
            icon={<FaMusic />}
            title="Music Distribution"
            color="text-red-500"
          />
          <ServiceCard
            icon={<TbBrand4Chan />}
            title="Artist Branding"
            color="text-purple-500"
          />
          <ServiceCard
            icon={<SiCoinmarketcap />}
            title="Social Media Marketing"
            color="text-green-500"
          />
          <ServiceCard
            icon={<FaCalendarAlt />}
            title="Events Planning"
            color="text-orange-500"
          />
          <ServiceCard
            icon={<LuHeartHandshake />}
            title="Public Relations"
            color="text-yellow-500"
          />
        </div>
      </div>
    </div>
  );
}

/** Reusable Service Card Component */
const ServiceCard = ({ icon, title, color }) => {
  return (
    <div className="flex flex-col items-center  shadow shadow-[#393939] rounded-xl p-6 transition-transform transform hover:scale-105">
      <div className={`${color} text-5xl`}>{icon}</div>
      <p className="mt-3 text-lg font-semibold  text-center">{title}</p>
    </div>
  );
};

export default Banner;
