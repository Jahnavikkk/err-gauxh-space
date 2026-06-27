import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({
  media,
  currentIndex,
  setCurrentIndex,
  collection,
  onClose,
}) {
  if (!media) return null;

  const next = () => {
    const i = (currentIndex + 1) % collection.length;
    setCurrentIndex(i);
  };

  const previous = () => {
    const i = (currentIndex - 1 + collection.length) % collection.length;
    setCurrentIndex(i);
  };

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    }

    window.addEventListener("keydown", handleKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, collection]);

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
      >

        {/* CLOSE */}

        <button
          onClick={onClose}
          className="absolute top-8 right-10 text-white text-5xl hover:scale-110 transition"
        >
          ×
        </button>

        {/* PREVIOUS */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            previous();
          }}
          className="absolute left-8 text-white text-6xl hover:scale-125 transition"
        >
          ‹
        </button>

        {/* MEDIA */}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: .97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .25 }}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center"
        >

          {media.type === "image" ? (

            <img
              src={media.src}
              alt=""
              className="max-h-[82vh] max-w-[88vw] rounded-3xl shadow-2xl"
            />

          ) : (

            <video
              src={media.src}
              controls
              autoPlay
              className="max-h-[82vh] max-w-[88vw] rounded-3xl shadow-2xl"
            />

          )}

          <div className="mt-8 text-white/80 text-lg">

            {currentIndex + 1} / {collection.length}

          </div>

        </motion.div>

        {/* NEXT */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-8 text-white text-6xl hover:scale-125 transition"
        >
          ›
        </button>

      </motion.div>

    </AnimatePresence>
  );
}

export default Lightbox;