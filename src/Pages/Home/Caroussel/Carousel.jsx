import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
import image4 from "../../../assets/4.jpg";

//motion
const transition = {
  duration: 1.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};


//image_fix


class Carousel extends React.Component {
  state = { activeIndex: 0, isHovered: false };

  caseStudies = [
    {
      title: "Lorem1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, non? Incidunt at rem eos nemo sint totam repellendus esse aliquid repudiandae magni voluptatibus animi, similique quis perferendis quas harum placeat.",
      imageUrl: image1,
      link: "https://example.com/dress",
    },
    {
      title: "Lorem2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, non? Incidunt at rem eos nemo sint totam repellendus esse aliquid repudiandae magni voluptatibus animi, similique quis perferendis quas harum placeat.",
      imageUrl: image2,
      link: "https://example.com/shoe",
    },
    {
      title: "Lorem 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, non? Incidunt at rem eos nemo sint totam repellendus esse aliquid repudiandae magni voluptatibus animi, similique quis perferendis quas harum placeat.",
      imageUrl: image3,
      link: "https://example.com/accessories",
    },
    {
      title: "Lorem 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, non? Incidunt at rem eos nemo sint totam repellendus esse aliquid repudiandae magni voluptatibus animi, similique quis perferendis quas harum placeat.",
      imageUrl: image4,
      link: "https://example.com/accessories",
    },
  ];

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startAutoSlide = () => {
    this.interval = setInterval(() => {
      if (!this.state.isHovered) {
        this.nextSlide();
      }
    }, 5000);
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % this.caseStudies.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      activeIndex:
        prevState.activeIndex === 0
          ? this.caseStudies.length - 1
          : prevState.activeIndex - 1,
    }));
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  

  render() {
    const { activeIndex } = this.state;
    const caseStudies = this.caseStudies;
    

    return (
      <div
        className="flex items-center justify-center h-screen"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div
          className="absolute left-0  z-10 p-3 cursor-pointer rounded-full m-2 backdrop-blur-2xl bg-white/30 hover:bg-white/40 transition duration-300"
          onClick={this.prevSlide}
        >
          <FiArrowLeft size="30" className="" />
        </div>
        <div className="w-full h-full overflow-hidden relative">
          <motion.img
            key={caseStudies[activeIndex].imageUrl} // Ensures animation triggers on image change
            src={caseStudies[activeIndex].imageUrl}
            alt="Background"
            className="w-screen h-full object-cover"
            initial={{ opacity: 0, scale: 1.2 }} // Start slightly zoomed in and transparent
            animate={{ opacity: 1, scale: 1 }} // Fade in and zoom out to normal
            exit={{ opacity: 0, scale: 0.9 }} // Shrinks slightly when exiting
            transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
          />
        </div>
        {/* <div className="w-full h-full overflow-hidden relative">
          <img
            src={caseStudies[activeIndex].imageUrl}
            className="w-screen h-full object-cover"
            alt="Background"
          />
          
        </div> */}
        <div className="absolute w-full h-full flex flex-col justify-between p-10">
          <motion.p
            animate={{ x: -100 }}
            transition={transition}
            className=" font-bold text-5xl  self-end"
          >
            {caseStudies[activeIndex].title}
          </motion.p>
          <motion.p
            animate={{ x: [-100, 0] }}
            transition={transition}
            className=" mb-20 text-justify text-2xl"
          >
            {caseStudies[activeIndex].description}
          </motion.p>
          <motion.a
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            href={caseStudies[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mb-30 px-6 py-3 text-lg backdrop:blur-md rounded-md"
          >
            Sir Reno Rocks
          </motion.a>
        </div>

        <div
          className="absolute right-0 z-10 p-3 cursor-pointer rounded-full m-2 backdrop-blur-2xl  transition duration-300"
          onClick={this.nextSlide}
        >
          <FiArrowRight className="" />
        </div>
      </div>
    );
  }
}

export default Carousel;
