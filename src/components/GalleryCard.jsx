import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GalleryCard({ image, title, caption, story }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <AnimatePresence>
        {isHovered && story && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6"
          >
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{story}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isHovered && caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-sm font-medium">{caption}</p>
        </div>
      )}
    </motion.div>
  );
}

export default GalleryCard;