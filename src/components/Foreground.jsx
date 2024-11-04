import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

const Foreground = () => {
  return (
    <>
      <div className="absolute w-screen h-screen bg-black opacity-80"></div>
      <div className="absolute w-screen h-screen text-white flex flex-col justify-around items-center p-8 bg-gradient-to-b from-black/100 via-black/0 to-black/100">
        <Snowfall color="white" snowflakeCount={100} />

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-fit font-caps text-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            IIEST FELLOWSHIP PRESENTS
          </motion.div>
          <motion.div
            className="w-fit font-cursive text-6xl"
            whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Pre-Christmas
          </motion.div>
          <motion.div
            className="w-fit font-caps text-5xl"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            2024
          </motion.div>
          <motion.div
            className="w-fit font-caps text-lg py-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ALL ARE CORDIALLY INVITED
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex text-xl ">
            <motion.div
              className="w-fit font-caps flex flex-col justify-center items-center border-r-2 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-2 text-5xl font-serif">9</div>
              <div>NOVEMBER</div>
            </motion.div>
            <motion.div
              className="w-fit font-caps flex flex-col justify-center items-center border-l-2 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-2 w-fit font-caps">SATURDAY</div>
              <div className="w-fit font-caps">
                AT <span className="font-serif">4:30</span> PM
              </div>
            </motion.div>
          </div>
          <motion.div
            className="font-serif font-medium bg-white text-black text-xl py-4 px-6 m-4 rounded-full opacity-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            CAROLS - DANCE - DRAMA
          </motion.div>
          <motion.div
            className="font-caps p-4 text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            INSTITUTE HALL, IIEST
          </motion.div>

          <motion.a href="http://google.com">
            <motion.button
              className="text-black text-xl font-semibold bg-white rounded-xl px-4 py-2 font-caps opacity-50"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
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
