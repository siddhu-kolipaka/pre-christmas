import Slider from "react-slick";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  const carouselVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const imageHover = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  const gridImageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative  bg-gradient-to-b from-black to-black flex flex-col items-center justify-center p-10">
      <Snowfall color="#ffffff" snowflakeCount={100} />

      <motion.div
        className="w-[75vw] mb-6 shadow-lg"
        variants={carouselVariant}
        initial="hidden"
        animate="visible"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <motion.div key={index} className="">
              <motion.img
                src={image.src}
                alt={image.alt}
                className="object-cover sm:w-[75vw] sm:h-[50vh] rounded-lg shadow-lg"
                whileHover="hover"
                variants={imageHover}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        className="grid grid-cols-2  md:grid-cols-5 gap-6  "
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out"
            variants={gridImageVariant}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
