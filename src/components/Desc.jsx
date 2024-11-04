"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Snowfall from "react-snowfall";

const loadFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Poppins:wght@300;400;500&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

export default function Component() {
  useEffect(() => {
    loadFonts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-screen bg-black overflow-hidden text-white p-4 sm:p-6 md:p-12">
      <Snowfall color="white" snowflakeCount={150} />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center font-serif text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"
          style={{ fontFamily: '"Cinzel", serif' }}
        >
          Pre-Christmas Winter Fun Event at IIEST!
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-900 bg-opacity-80 rounded-lg p-6 sm:p-8 md:p-10 max-w-2xl md:max-w-3xl shadow-xl space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center border border-gray-700"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <p className="font-semibold text-lg sm:text-2xl md:text-3xl text-green-400">
            Get ready to deck the halls early!
          </p>
          <p className="text-gray-300">
            The IIEST EU Fellowship, in collaboration with Euphony, the IIEST
            Music Club, is bringing the magic of winter to campus. Who says
            Christmas cheer has to wait until December?
          </p>
          <p className="text-gray-300">
            With winter break around the corner, we&apos;re bringing holiday
            cheer to campus! Join us for carols, a Santa Claus show, dance
            performances, and much more as we create magical memories.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center text-sm sm:text-base md:text-lg"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {[
            {
              icon: "🎉",
              text: "Who's invited? Everyone!",
              color: "from-gray-800 to-gray-900",
            },
            {
              icon: "📅",
              text: "What's on the agenda? Laughter, music, dancing, and the special IIEST spirit!",
              color: "from-gray-800 to-gray-900",
            },
            {
              icon: "🌟",
              text: "Join us for holiday cheer, new memories, and lasting friendships.",
              color: "from-gray-800 to-gray-900",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              className={`bg-gradient-to-br ${item.color} p-4 sm:p-6 md:p-7 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center justify-center h-full`}
            >
              <span className="text-4xl sm:text-5xl mb-2">{item.icon}</span>
              <span className="text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <a href="https://forms.gle/Y14H4NiCTMKdQPV89">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.15, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            style={{
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: "0.05em",
            }}
          >
            🎉 RSVP Now!
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}
