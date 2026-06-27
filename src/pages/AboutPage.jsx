import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We nurture empathy and kindness, teaching children to care for themselves, each other, and the natural world.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Learning happens together. We build strong bonds between students, families, and the wider community.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: "We set high standards while honoring each child's unique path, celebrating growth and effort over perfection.",
    },
    {
      icon: Compass,
      title: 'Cultural roots',
      description: 'We ground our teaching in local traditions, language, and wisdom while preparing children for a global future.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About us - ERR GAUXH SPACE</title>
        <meta
          name="description"
          content="Learn about our mission to provide holistic, experiential education in Ladakh's Nubra Valley, blending traditional wisdom with innovative learning approaches."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6">Our story</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In the high-altitude desert of Ladakh's Nubra Valley, we're reimagining what education can be when it's rooted in place, culture, and the rhythms of mountain life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Where it began</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In Ladakh's Nubra Valley, surrounded by sand dunes, snow-capped peaks, and the Shyok River, we found a community eager to reimagine education. For generations, children here have grown up learning from the land, from elders, and from the challenges of high-altitude living.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  But as modern education systems arrived, something was lost. Rote memorization replaced hands-on learning. Standardized curricula ignored local knowledge. Children excelled at exams but felt disconnected from their heritage and environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In 2023, a group of educators, artists, and community members came together with a simple question: What if education could honor both tradition and innovation? What if learning could happen through doing, creating, and connecting with the world around us?
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
                    src="https://images.unsplash.com/photo-1695505038491-56b8d77c61c3"
                    alt="Community gathering in Ladakh with children and educators sharing knowledge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 rounded-2xl shadow-lg"
              >
                <h3 className="mb-4">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide holistic, experiential education that develops the whole child — intellectually, physically, creatively, and spiritually — while honoring local culture and preparing students to be thoughtful stewards of their community and environment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-8 rounded-2xl shadow-lg"
              >
                <h3 className="mb-4">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A generation of confident, compassionate, and capable young people who are deeply connected to their heritage, skilled in diverse disciplines, and equipped to navigate an uncertain future with creativity and resilience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">What guides us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Four core values shape every decision we make and every lesson we teach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted p-8 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-8 text-center">Our educational philosophy</h2>
                
                <div className="space-y-6">
                  <div className="bg-accent-foreground/10 p-6 rounded-xl backdrop-blur-sm">
                    <h5 className="mb-3 font-semibold">Learning by doing</h5>
                    <p className="leading-relaxed opacity-90">
                      We believe children learn best through direct experience. Whether solving math problems with river stones, practicing martial arts in the sand dunes, or composing music inspired by mountain winds, our students engage all their senses.
                    </p>
                  </div>

                  <div className="bg-accent-foreground/10 p-6 rounded-xl backdrop-blur-sm">
                    <h5 className="mb-3 font-semibold">Integration, not isolation</h5>
                    <p className="leading-relaxed opacity-90">
                      Traditional subjects aren't taught in silos. A lesson on water conservation might involve mathematics (measuring flow rates), art (documenting local water sources), and sustainability (designing irrigation systems). Knowledge becomes meaningful when it connects.
                    </p>
                  </div>

                  <div className="bg-accent-foreground/10 p-6 rounded-xl backdrop-blur-sm">
                    <h5 className="mb-3 font-semibold">Place-based learning</h5>
                    <p className="leading-relaxed opacity-90">
                      The Nubra Valley is our classroom. Students study ecology in the dunes, learn geometry from traditional architecture, and understand climate science by observing glacial melt. This grounds abstract concepts in lived reality.
                    </p>
                  </div>

                  <div className="bg-accent-foreground/10 p-6 rounded-xl backdrop-blur-sm">
                    <h5 className="mb-3 font-semibold">Community as curriculum</h5>
                    <p className="leading-relaxed opacity-90">
                      Elders, artisans, farmers, and musicians are our co-teachers. Students learn traditional crafts, agricultural practices, and oral histories directly from community members, ensuring cultural knowledge passes to the next generation.
                    </p>
                  </div>
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

export default AboutPage;