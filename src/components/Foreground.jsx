import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

const Foreground = () => {
  return (
    <>
      <div className="absolute w-screen h-screen text-white flex flex-col justify-around items-center p-8 bg-gradient-to-b from-black/100 via-black/50 to-black/100">
        <Snowfall color="white" snowflakeCount={100} />

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 150,
            damping: 25,
          }}
        >
          <motion.div
            className="w-fit font-caps text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            IIEST FELLOWSHIP PRESENTS
          </motion.div>
          <motion.div
            className="w-fit font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Pre-Christmas
          </motion.div>
          <motion.div
            className="w-fit font-caps text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            2024
          </motion.div>
          <motion.div
            className="w-fit font-caps text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 sm:py-4"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            ALL ARE CORDIALLY INVITED
          </motion.div>
        </motion.div>

        {/* Date and Time Animation */}
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 25,
          }}
        >
          <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <motion.div
              className="w-fit font-caps flex flex-col justify-center items-center border-r-2 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <div className="p-2 text-5xl sm:text-6xl font-serif">11</div>
              <div>NOVEMBER</div>
            </motion.div>
            <motion.div
              className="w-fit font-caps flex flex-col justify-center items-center border-l-2 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <div className="p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-caps">
                SATURDAY
              </div>
              <div className="w-fit font-caps text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                AT <span className="font-serif">4:30</span> PM
              </div>
            </motion.div>
          </div>

          <motion.div
            className="font-serif font-medium bg-white text-black text-lg sm:text-xl py-4 px-6 my-4 rounded-full opacity-50"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            CAROLS - DANCE - DRAMA
          </motion.div>
          <motion.div
            className="font-caps p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            INSTITUTE HALL, IIEST
          </motion.div>

          {/* Register Button Animation */}
          <motion.a href="https://forms.gle/Y14H4NiCTMKdQPV89">
            <motion.button
              className="text-black text-lg sm:text-xl font-semibold bg-white rounded-xl px-6 py-3 font-caps opacity-50"
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Register Now
            </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Foreground;
