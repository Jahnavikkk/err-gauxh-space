import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GallerySection from "@/components/GallerySection";
import { gallerySections } from "@/data/galleryData";

function GalleryPage() {

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentCollection, setCurrentCollection] = useState([]);

  function handleMediaClick(item, collection) {
    setSelectedMedia(item);
    setCurrentCollection(collection);
  }
  return (
    <>
      <Header />
  
      <div className="min-h-screen bg-background">
  
        <section className="py-24 border-b">
  
          <div className="container mx-auto px-6">
  
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="text-6xl font-bold mb-6"
            >
              Gallery
            </motion.h1>
  
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15, duration: .6 }}
              className="max-w-3xl text-xl text-muted-foreground leading-relaxed"
            >
              A glimpse into everyday life at ERR GAUXH SPACE —
              where learning happens through movement, creativity,
              nature and community.
            </motion.p>
  
          </div>
  
        </section>
  
        <div className="container mx-auto px-6 py-20">
  
          {gallerySections.map(section => (
            <GallerySection
              key={section.title}
              {...section}
              onMediaClick={handleMediaClick}
            />
          ))}
  
        </div>
  
        {selectedMedia && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
  
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-8 right-8 text-white text-5xl hover:text-gray-300"
            >
              ×
            </button>
  
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                className="max-w-[90vw] max-h-[85vh] rounded-xl"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[85vh] rounded-xl"
              />
            )}
  
          </div>
        )}
  
      </div>
  
      <Footer />
    </>
  );
}

export default GalleryPage;