import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";

class Carousel extends React.Component {
  state = { activeIndex: 0, isHovered: false };

  caseStudies = [
    {
      title: "Lorem1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sequi accusamus recusandae impedit! Rerum iure architecto nesciunt natus officiis in, consectetur ab. Voluptatum earum dignissimos maiores amet minus deserunt porro doloribus perferendis, dolores velit ducimus necessitatibus non quam quos asperiores repellat voluptatibus culpa, vitae aut modi, sunt nisi. Suscipit, laborum.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com/dress",
    },
    {
      title: "Lorem2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sequi accusamus recusandae impedit! Rerum iure architecto nesciunt natus officiis in, consectetur ab. Voluptatum earum dignissimos maiores amet minus deserunt porro doloribus perferendis, dolores velit ducimus necessitatibus non quam quos asperiores repellat voluptatibus culpa, vitae aut modi, sunt nisi. Suscipit, laborum.",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com/shoe",
    },
    {
      title: "Lorem 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sequi accusamus recusandae impedit! Rerum iure architecto nesciunt natus officiis in, consectetur ab. Voluptatum earum dignissimos maiores amet minus deserunt porro doloribus perferendis, dolores velit ducimus necessitatibus non quam quos asperiores repellat voluptatibus culpa, vitae aut modi, sunt nisi. Suscipit, laborum.",
      imageUrl:
        "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="text-center w-[900px]">
              <h2 className="text-5xl font-bold text-white mb-8">{caseStudies[activeIndex].title}</h2>
              <p className="text-white text-justify text-2xl mb-8">{caseStudies[activeIndex].description}</p>
              <a
                href={caseStudies[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className=" px-6 py-3 text-lg font-bold text-white bg-green-400 rounded hover:bg-green-500"
              >
                Click Now
              </a>
            </div>
          </div> */}
        <div
          className="absolute right-0 z-10 p-3 cursor-pointer rounded-full m-2 backdrop-blur-2xl bg-white/30 hover:bg-white/40 transition duration-300"
          onClick={this.nextSlide}
        >
          <FiArrowRight className="" />
        </div>
      </div>
    );
  }
}

export default Carousel;
