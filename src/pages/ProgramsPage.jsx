import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calculator, Swords, Music, Palette, Lightbulb, Leaf, TreePine } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PillarCard from '@/components/PillarCard';

function ProgramsPage() {
  const programs = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Learning to think clearly, solve problems, and see patterns in the world around us.',
      details: 'For us, mathematics is not about memorising formulas but learning how to think. Students explore concepts through games, puzzles, everyday situations, and real-life challenges. Whether measuring fields, budgeting community projects, or recognising patterns in nature, mathematics becomes a language for understanding the world and building confidence in independent thinking.',
      outcomes: [
        "Independent thinking",
        "Problem-solving skills",
        "Logical reasoning",
        "Confidence with numbers"
      ],
      image: null,
    },
    {
      icon: Swords,
      title: 'Martial Arts',
      description: 'Building discipline, resilience, and confidence through movement and practice.',
      details: 'Martial arts are an essential part of life at our space. Students train in Wushu and traditional wrestling while learning discipline, self-control, respect, and perseverance. Physical training becomes a way to strengthen both body and mind, encouraging teamwork, courage, and confidence that extends far beyond the training ground.',
      outcomes: [
        "Discipline",
        "Physical fitness",
        "Self-confidence",
        "Respect and perseverance"
      ],
      image: 'https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/096ea7088b6ba4bf0578578770d57dc6.jpg',
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Finding confidence and expression through rhythm, melody, and performance.',
      details: 'Music gives children another language through which to express themselves. Students learn guitar, ukulele, rhythm, and collaborative performance while developing patience, listening skills, and confidence. Music sessions become spaces of joy where creativity and emotional expression are valued as much as technical ability.',
      outcomes: [
        "Confidence in self-expression",
        "Listening and collaboration",
        "Creativity",
        "Performance skills"
      ],
      image: 'https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/bfe4bc2f093d6bf4e32293aa86c0e045.png',
      imageAlt: 'Young student playing guitar outdoors, focused and engaged in learning music with a wooden acoustic guitar',
    },
    {
      icon: Palette,
      title: 'Art',
      description: 'Creating, imagining, and expressing ideas through hands-on art.',
      details: 'Art encourages children to observe more carefully, imagine freely, and express themselves without fear of being wrong. Through drawing, painting, crafts, and creative projects using both traditional and recycled materials, students develop curiosity, patience, and confidence while discovering their own artistic voice.',
      outcomes: [
        'Creative confidence',
        'Observation and imagination',
        'Patience and attention to detail',
        'Freedom to express ideas visually',
      ],
      image: 'https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/e74d43314cf96a70edf9e66683f35f03.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Making & Innovation',
      description: 'Learning by building, repairing, experimenting, and solving real problems.',
      details: 'Children learn that ideas become meaningful when they are brought into the real world. Whether refurbishing discarded materials, designing useful objects, or experimenting with everyday resources, students develop practical problem-solving skills, creativity, and the confidence to learn through trial and error.',
      outcomes: [
        'Hands-on problem-solving',
        'Resourcefulness and innovation',
        'Confidence in building and repairing',
        'Learning through experimentation',
      ],
      image: 'https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/87099b5ebd7c2a4e9d0d3f3c2b345e5f.jpg',
      imageAlt: 'Large group of students and teachers gathered together in a community space, sitting on the floor engaged in collaborative creative activities with art supplies, drums, and materials spread around them',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Learning to live responsibly with nature and our community.',
      details: 'Living in the mountains teaches that every resource matters. Students learn simple habits of reuse, conservation, gardening, waste reduction, and mindful living while understanding the relationship between people, nature, and future generations. Sustainability is not taught as a separate subject but lived every day.',
      outcomes: [
        'Respect for nature and local resources',
        'Responsible everyday habits',
        'Understanding of sustainable living',
        'A sense of community responsibility',
      ],
      image: 'https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/4a10afce27199e7487fd8e343ef50f94.jpg',
      imageAlt: 'Students cooking and preparing food outdoors in the Ladakh mountains, learning about sustainable living and environmental practices',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      icon: TreePine,
      title: 'Nature-based Learning',
      description: 'Letting the mountains become our classroom.',
      details: 'Some of our best lessons happen outdoors. The mountains, rivers, fields, and changing seasons encourage observation, curiosity, resilience, and gratitude. Learning in nature helps children slow down, ask questions, and develop a deeper relationship with the environment they call home.',
      outcomes: [
        'Curiosity about the natural world',
        'Resilience through outdoor experiences',
        'Observation and environmental awareness',
        'A lifelong connection with nature',
      ],
      image: 'https://res.cloudinary.com/da33o7dby/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-26_at_18.44.30_fyobxs',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our programs - ERR GAUXH SPACE</title>
        <meta
          name="description"
          content="Explore our seven pillars of holistic education: Mathematics, Martial Arts, Music, Art, Creativity, Sustainability, and Nature-based Learning in Ladakh's Nubra Valley."
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
              <h1 className="mb-6">How we Learn</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every activity is a classroom. Mathematics teaches reasoning, martial arts teach discipline, music nurtures expression, and creativity helps children discover themselves. Together, they prepare children for life—not just examinations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PillarCard {...program} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Learning that lasts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Education does not happen in isolated subjects. A mathematics lesson may inspire an engineering project. A martial arts session may teach patience. A walk through the mountains may become an art assignment or a conversation about ecology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By allowing ideas to flow naturally across disciplines, children begin to see that learning is not something confined to classrooms—it is a way of understanding themselves, their community, and the world around them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our hope is not simply to prepare students for examinations, but to help them grow into curious, capable, compassionate, and resilient human beings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/da33o7dby/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-26_at_19.26.42_bw52ti"
                    alt="Students engaged in outdoor learning activities in the Nubra Valley landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProgramsPage;