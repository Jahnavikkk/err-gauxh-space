import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Swords, Music, Palette, Lightbulb, Leaf, TreePine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
function HomePage() {
  const pillars = [{
    icon: Calculator,
    title: 'Mathematics',
    color: 'text-blue-600'
  }, {
    icon: Swords,
    title: 'Martial Arts',
    color: 'text-red-600'
  }, {
    icon: Music,
    title: 'Music',
    color: 'text-purple-600'
  }, {
    icon: Palette,
    title: 'Art',
    color: 'text-pink-600'
  }, {
    icon: Lightbulb,
    title: 'Creativity',
    color: 'text-yellow-600'
  }, {
    icon: Leaf,
    title: 'Sustainability',
    color: 'text-green-600'
  }, {
    icon: TreePine,
    title: 'Nature Learning',
    color: 'text-emerald-600'
  }];
  return <>
      <Helmet>
        <title>ERR GAUXH SPACE - Holistic learning in Ladakh's Nubra Valley</title>
        <meta name="description" content="Nurturing holistic education in Ladakh's Nubra Valley through seven pillars: Mathematics, Martial Arts, Music, Art, Creativity, Sustainability, and Nature-based Learning." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src="https://horizons-cdn.hostinger.com/edb444ed-5d48-4c0b-bbe3-f8271fc9d1c9/whatsapp-image-2026-06-26-at-15.55.43-yfKg6.jpeg" alt="Majestic Ladakh mountain landscape with snow-capped peaks" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-white mb-6 max-w-4xl mx-auto">
                Nurturing minds in the heart of the Himalayas
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                We blend traditional wisdom with experiential learning across seven pillars, empowering children in Ladakh's Nubra Valley to thrive in harmony with their mountain heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200">
                  <Link to="/programs">
                    Explore programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm active:scale-[0.98] transition-all duration-200">
                  <Link to="/volunteer">Volunteer with us</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Seven Pillars Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="mb-4">Seven pillars of learning</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our holistic approach integrates diverse disciplines to develop well-rounded, confident, and compassionate learners.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {pillars.map((pillar, index) => <motion.div key={pillar.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{pillar.title}</span>
                </motion.div>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="text-center mt-12">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-200">
                <Link to="/programs">
                  Discover all programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="mb-6">Education rooted in place and purpose</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the remote beauty of Ladakh's Nubra Valley, we're building an educational model that honors local culture while preparing children for a changing world.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through hands-on learning in mathematics, martial arts, music, art, creativity, sustainability, and nature-based education, we cultivate critical thinking, resilience, and a deep connection to the land.
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200">
                  <Link to="/about">Learn our story</Link>
                </Button>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://res.cloudinary.com/da33o7dby/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-26_at_19.41.43_obnfhr" alt="Community gathering in Ladakh with children and educators" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-sm font-medium">
                    This is a space for those who believe learning should stay raw, human, and rooted in real experiences rather than robotic methods.
                  </p>
                  <p className="text-xs mt-2 opacity-90">— Our guiding philosophy</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="mb-6">Join our community</h2>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 opacity-90">
                Whether you're an artist, educator, photographer, or someone who believes learning happens through people and experiences, we'd love to welcome you to Hunder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 active:scale-[0.98] transition-all duration-200">
                  <Link to="/volunteer">Become a volunteer</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 hover:bg-accent-foreground/10 active:scale-[0.98] transition-all duration-200">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default HomePage;