import React from "react";
import { motion } from "framer-motion";

function GallerySection({ title, description, media, onMediaClick }) {
  if (!media || media.length === 0) return null;

  const hero = media[0];
  const side = media.slice(1, 3);
  const bottom = media.slice(3, 7);

  const renderMedia = (item, index, className = "") => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        onClick={() => onMediaClick(item, media)}
        className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <video
            src={item.src}
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300" />

        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 shadow-xl">
              ▶
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="mb-32">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
      >
        <h2 className="text-4xl font-bold mb-3">{title}</h2>

        <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5">

        <div className="lg:col-span-2 h-[520px]">
          {renderMedia(hero)}
        </div>

        <div className="flex flex-col gap-5 h-[520px]">
          {side.map((item, index) => (
            <div
              key={index}
              className="flex-1"
            >
              {renderMedia(item)}
            </div>
          ))}
        </div>

      </div>

      {bottom.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {bottom.map((item, index) => (
            <div
              key={index}
              className="aspect-square"
            >
              {renderMedia(item)}
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default GallerySection;