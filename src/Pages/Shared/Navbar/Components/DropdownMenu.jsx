import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const DropdownMenu = () => {
  return (
    <motion.ul 
      className="flex space-x-6 text-lg"
      initial="hidden"
      animate="visible"
      variants={dropdownVariants}
    >
      {["Home", "About Us", "Our Services", "Careers", "Blog", "Contact Us"].map((item, index) => (
        <motion.li 
          key={index}
          className="hover:scale-110 hover:duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "#ff7f50" }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="animate-button">
            {item}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default DropdownMenu;
