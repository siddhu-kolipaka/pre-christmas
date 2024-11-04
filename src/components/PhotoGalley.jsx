import { motion } from "framer-motion";

const photos = [
  // Replace with your own image URLs
  "https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3",
  "https://via.placeholder.com/300/FF33A1/FFFFFF?text=Image+4",
  "https://via.placeholder.com/300/33FFD5/FFFFFF?text=Image+5",
  "https://via.placeholder.com/300/FFD733/FFFFFF?text=Image+6",
];

const PhotoGallery = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={photo}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold">View Image</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
