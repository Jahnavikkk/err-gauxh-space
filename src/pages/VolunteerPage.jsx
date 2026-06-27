import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VolunteerForm from '@/components/VolunteerForm';

function VolunteerPage() {
  const opportunities = [
    {
      icon: BookOpen,
      title: 'Teaching & mentoring',
      description: 'Share your expertise in mathematics, arts, music, sustainability, or any of our seven pillars. Guide students through projects and help develop curriculum.',
    },
    {
      icon: Sparkles,
      title: 'Specialized skills',
      description: 'Bring your unique talents — photography, carpentry, gardening, technology, traditional crafts — to enrich our programs and inspire students.',
    },
    {
      icon: Users,
      title: 'Community engagement',
      description: 'Help organize events, document our work, manage communications, or support administrative tasks that keep the initiative running smoothly.',
    },
    {
      icon: Heart,
      title: 'Cultural exchange',
      description: 'Share your own cultural background and learn from Ladakhi traditions. Volunteers become bridges between communities and perspectives.',
    },
  ];

  const benefits = [
    'Immersive experience in Ladakhi culture and high-altitude living',
    'Meaningful contribution to holistic education in a remote community',
    'Skills development in teaching, project management, and cross-cultural communication',
    'Accommodation and meals provided during your volunteer period',
    'Lifelong connections with students, families, and fellow volunteers',
    'Certificate of completion and reference letter for future opportunities',
  ];

  return (
    <>
      <Helmet>
        <title>Volunteer with us - Hunder Valley Education</title>
        <meta
          name="description"
          content="Join our team as a volunteer in Hunder, Nubra Valley. Share your skills, learn from Ladakhi culture, and contribute to holistic education in the Himalayas."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">Volunteer with us</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Join our community of educators, artists, and changemakers who are reimagining education in the heart of the Himalayas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you can commit to two weeks or six months, your skills and passion can make a lasting impact on children's lives in Hunder village.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="src/assets/gallery/community/community6.jpeg"
                    alt="Volunteers and students engaged in outdoor learning activities in the Nubra Valley"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">How you can contribute</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We welcome volunteers with diverse backgrounds and skills. Here are some ways you can get involved.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted p-8 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <opportunity.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2">{opportunity.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="mb-8 text-center">What you'll gain</h2>
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="mb-4">Apply to volunteer</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within a few days to discuss next steps.
                </p>
              </div>

              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                <VolunteerForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-center">Before you apply</h3>
                <div className="bg-card p-8 rounded-2xl">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Physical requirements:</strong> Hunder sits at 3,200 meters elevation. You should be in good health and able to adapt to high-altitude conditions. We recommend arriving a few days early to acclimatize.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Minimum commitment:</strong> We ask for at least one week to ensure continuity for students. Longer commitments (1-3 months) are especially valuable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Cultural sensitivity:</strong> Volunteers should be respectful of local customs, open to learning, and comfortable living simply in a remote community.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Language:</strong> English is helpful but not required. We'll provide basic Ladakhi language orientation, and many community members speak Hindi.
                  </p>
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

export default VolunteerPage;