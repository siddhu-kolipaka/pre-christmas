import { motion } from "framer-motion";

const ClickToPlayAudio = ({ handleClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Heading Animation */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
          type: "spring",
          stiffness: 70,
        }}
        className="mb-8 text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Pre-Christmas at IIEST
      </motion.h1>

      {/* Click Me Button with Complex Animations */}
      <motion.button
        onClick={handleClick}
        whileHover={{
          scale: 1.15,
          boxShadow: "0px 0px 15px 5px rgba(255, 100, 200, 0.5)",
          rotate: [0, 5, -5, 0],
        }}
        whileTap={{ scale: 0.9, rotate: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="px-12 py-4 text-2xl sm:text-3xl font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-red-500 shadow-lg hover:shadow-2xl text-white focus:outline-none focus:ring-4 focus:ring-pink-300"
        style={{
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        Click Here
      </motion.button>

      {/* Ambient Glow Effect */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-red-500 opacity-30 blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing Circle Background Animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <div className="w-96 h-96 bg-gradient-to-b from-indigo-600 to-purple-900 rounded-full blur-3xl opacity-20" />
      </motion.div>
    </motion.div>
  );
};

export default ClickToPlayAudio;
