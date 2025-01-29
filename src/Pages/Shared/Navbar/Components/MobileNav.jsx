import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Fix: Use framer-motion, not motion/react

// Motion variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100, transition:{duration: 0.5} },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const transition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const MobileNav = ({ isOpen }) => {
  return (
    <motion.ul 
      className="flex flex-col gap-8 mt-10 ml-5 text-lg"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"} // ✅ Animate based on isOpen state
      variants={dropdownVariants}
      transition={transition}
    >
      {["Home", "About Us", "Our Services", "Careers", "Blog", "Contact Us"].map((item, index) => (
        <motion.li 
          key={index}
          className="hover:duration-300"
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

export default MobileNav;
