// ArtistDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { artists } from "../../assets/artistData";
import Footer from "../Shared/Footer/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

// Floating animation for social media icons
const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const ArtistDetails = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  if (!artist)
    return <h2 className="text-center text-red-500">Artist not found</h2>;

  return (
    <div className="">
      <div className="p-5 text-center">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {artist.name}
        </h1>
        <p className="mb-2 text-lg">{artist.description}</p>
        {/* <p className="mb-2"><strong>Hobbies:</strong> {artist.hobby.join(", ")}</p>
      <p className="mb-2"><strong>Interests:</strong> {artist.interests.join(", ")}</p> */}

        <div className="flex justify-center mb-5">
          {artist.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              {social.platform === "Facebook" && (
                <motion.div
                  className=""
                  variants={iconVariants(2.6)}
                  initial="initial"
                  animate="animate"
                >
                  <FaFacebook className="text-4xl sm:text-5xl p-3 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110" />
                </motion.div>
              )}
              {social.platform === "Instagram" && (
                <motion.div
                  className=""
                  variants={iconVariants(2.3)}
                  initial="initial"
                  animate="animate"
                >
                  <FaInstagram className="text-4xl sm:text-5xl p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110" />
                </motion.div>
              )}
              {social.platform === "X" && (
                <motion.div
                  className=""
                  variants={iconVariants(2.9)}
                  initial="initial"
                  animate="animate"
                >
                  <FaTwitter className="text-4xl sm:text-5xl p-3 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-110" />
                </motion.div>
              )}
              {social.platform === "TikTok" && (
                <motion.div
                  className=""
                  variants={iconVariants(2)}
                  initial="initial"
                  animate="animate"
                >
                  <FaTiktok className="text-4xl sm:text-5xl p-3 rounded-full bg-black hover:text-gray-400 hover:scale-110" />
                </motion.div>
              )}
              {social.platform === "YouTube" && (
                <motion.div
                  className=""
                  variants={iconVariants(2.7)}
                  initial="initial"
                  animate="animate"
                >
                  <FaYoutube className="text-4xl sm:text-5xl p-3 rounded-full bg-red-600 hover:bg-red-700 hover:scale-110" />
                </motion.div>
              )}
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 mt-5">
          {artist.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${artist.name} ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistDetails;
