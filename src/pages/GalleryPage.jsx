import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryCard from '@/components/GalleryCard';

function GalleryPage() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1500715592529-9d2649ceaaa6',
      title: 'Outdoor mathematics lesson',
      caption: 'Learning geometry in the sand dunes',
      story: 'Students use natural materials to explore geometric patterns and spatial reasoning. The vast landscape becomes their canvas for understanding shapes, angles, and mathematical relationships.',
    },
    {
      image: 'https://images.unsplash.com/photo-1505148359496-35d8d1ec9645',
      title: 'Community gathering',
      caption: 'Celebrating cultural traditions',
      story: 'Monthly community gatherings bring together students, families, and elders. These events feature traditional music performances, art exhibitions, and shared meals that strengthen our bonds.',
    },
    {
      image: 'https://images.unsplash.com/photo-1692108782372-cafe6d1fa829',
      title: 'Mountain classroom',
      caption: 'Nature-based learning expedition',
      story: 'A group of students on a multi-day hiking expedition to study glacial formations and high-altitude ecosystems. These immersive experiences build resilience and deepen environmental understanding.',
    },
    {
      image: 'https://images.unsplash.com/photo-1598300606161-4019d0dfec28',
      title: 'Martial arts training',
      caption: 'Building discipline and strength',
      story: 'Morning martial arts sessions in the open air teach students focus, respect, and physical mastery. The practice blends traditional Ladakhi techniques with modern disciplines.',
    },
    {
      image: 'https://images.unsplash.com/photo-1542479371-1fc76f38e724',
      title: 'Art workshop',
      caption: 'Creating with natural pigments',
      story: 'Students prepare traditional pigments from local minerals and create artwork inspired by their surroundings. Art becomes a way to observe, document, and express their connection to place.',
    },
    {
      image: 'https://images.unsplash.com/photo-1675576095141-171c3b7f5272',
      title: 'Music ensemble',
      caption: 'Traditional instruments and new compositions',
      story: 'Our music program preserves traditional Ladakhi instruments and songs while encouraging students to compose new pieces. This performance showcases a blend of folk melodies and contemporary arrangements.',
    },
    {
      image: 'https://images.unsplash.com/photo-1532759199320-0b5f70bd2353',
      title: 'Garden project',
      caption: 'Sustainability in action',
      story: 'Students maintain a school garden using traditional and modern techniques. They learn about composting, water conservation, and growing food in challenging high-altitude conditions.',
    },
    {
      image: 'https://images.unsplash.com/photo-1641865065818-d9c8ef6ad9c7',
      title: 'Field research',
      caption: 'Documenting local ecology',
      story: 'Armed with notebooks and cameras, students conduct field research on local plant and animal species. Their observations contribute to community knowledge about environmental changes.',
    },
    {
      image: 'https://images.unsplash.com/photo-1686747169711-66fb0489a80c',
      title: 'Valley vista',
      caption: 'Our classroom extends to the horizon',
      story: 'The dramatic landscape of the Nubra Valley provides endless opportunities for learning. From geology to climate science, from art to mathematics, the mountains teach us daily.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery - Hunder Valley Education</title>
        <meta
          name="description"
          content="Explore photos and stories from our holistic education initiative in Hunder, Nubra Valley. See students engaged in learning across our seven pillars."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6">Moments from our journey</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                These images capture the spirit of learning, community, and connection that defines our work in the Nubra Valley. Hover over each photo to read the story behind it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="break-inside-avoid">
                  <GalleryCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Be part of the story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Every photo here represents countless hours of learning, laughter, and growth. Join us as a volunteer, supporter, or partner to help write the next chapter.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default GalleryPage;