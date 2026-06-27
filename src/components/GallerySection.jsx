import React from "react";
import { motion } from "framer-motion";

function GallerySection({ title, description, media, onMediaClick }) {
  if (!media || media.length === 0) return null;

  const hero = media[0];
  const side = media.slice(1, 3);
  const bottom = media.slice(3, 7);

  const renderMedia = (item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.35 }}
      onClick={() => onMediaClick(item, media)}
      className="relative overflow-hidden rounded-3xl cursor-pointer group h-full shadow-sm hover:shadow-2xl"
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <video
          src={item.src}
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Play Button */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition">

            ▶

          </div>

        </div>
      )}

      {/* Hover label */}
      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500">

        <p className="text-white font-medium tracking-wide">

          {title}

        </p>

      </div>
    </motion.div>
  );

  return (
    <section className="mb-40">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="mb-12"
      >

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">

          {title}

        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">

          {description}

        </p>

      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Hero */}

        <div className="lg:col-span-2 h-[620px]">

          {renderMedia(hero)}

        </div>

        {/* Side */}

        <div className="flex flex-col gap-6 h-[620px]">

          {side.map((item, index) => (

            <div
              key={index}
              className="flex-1"
            >

              {renderMedia(item, index)}

            </div>

          ))}

        </div>

      </div>

      {bottom.length > 0 && (

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

          {bottom.map((item, index) => (

            <div
              key={index}
              className="aspect-square"
            >

              {renderMedia(item, index)}

            </div>

          ))}

        </div>

      )}

      {/* View all */}

      {media.length > 7 && (

        <div className="mt-8 flex justify-end">

          <button
            onClick={() => onMediaClick(hero, media)}
            className="text-primary font-medium hover:underline text-lg"
          >

            View all {media.length} photos →

          </button>

        </div>

      )}

    </section>
  );
}

export default GallerySection;