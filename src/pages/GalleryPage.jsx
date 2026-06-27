import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GallerySection from "@/components/GallerySection";
import { gallerySections } from "@/data/galleryData";
import Lightbox from "@/components/Lightbox";

import heroImage from "@/assets/gallery/nature/nature9.jpeg";

function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentCollection, setCurrentCollection] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleMediaClick(item, collection) {

    setSelectedMedia(item);

    setCurrentCollection(collection);

    setCurrentIndex(collection.findIndex(i => i.src === item.src));

  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">

        {/* HERO */}
        <section className="relative h-[85vh] overflow-hidden">

          <img
            src={heroImage}
            alt="Nubra Valley"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 h-full flex items-center">

            <div className="container mx-auto px-6">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Life at <br />
                ERR GAUXH SPACE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed"
              >
                Every photograph tells the story of children learning,
                creating, exploring and growing together in the heart of
                Ladakh's Nubra Valley.
              </motion.p>

            </div>

          </div>

        </section>

        {/* GALLERY */}

        <section className="container mx-auto px-6 py-14">

          {gallerySections.map((section) => (
            <GallerySection
              key={section.title}
              {...section}
              onMediaClick={handleMediaClick}
            />
          ))}

        </section>

        {/* LIGHTBOX */}

        <Lightbox
          media={selectedMedia}
          currentIndex={currentIndex}
          setCurrentIndex={(index) => {
            setCurrentIndex(index);
            setSelectedMedia(currentCollection[index]);
          }}
          collection={currentCollection}
          onClose={() => setSelectedMedia(null)}
        />

      </div>

      <Footer />
    </>
  );
}

export default GalleryPage;