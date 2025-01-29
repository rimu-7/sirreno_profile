import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

// Correct route mapping
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Our Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" }
];

const DropdownMenu = () => {
  return (
    <motion.ul 
      className="flex space-x-6 text-lg"
      initial="hidden"
      animate="visible"
      variants={dropdownVariants}
      transition={transition}
    >
      {menuItems.map((item, index) => (
        <motion.li 
          key={index}
          className="hover:scale-110 hover:duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "#ff7f50" }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={item.path} className="animate-button">
            {item.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default DropdownMenu;
