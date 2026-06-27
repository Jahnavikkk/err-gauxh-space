import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSelectChange = value => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
    if (errors.inquiryType) {
      setErrors(prev => ({
        ...prev,
        inquiryType: ''
      }));
    }
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully. We will respond within 2-3 business days.');
      setFormData({
        name: '',
        email: '',
        inquiryType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <>
      <Helmet>
        <title>Contact us - Hunder Valley Education</title>
        <meta name="description" content="Get in touch with Hunder Valley Education Initiative. We're here to answer questions about our programs, volunteering, partnerships, and more." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Get in touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our programs, volunteering, or partnerships? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
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
            }} className="space-y-8">
                <div>
                  <h3 className="mb-6">Contact information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground block mb-1">Location</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Hunder Village<br />
                          Nubra Valley<br />
                          Ladakh 194401, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground block mb-1">Email</span>
                        <a href="mailto:hello@hundervalley.edu" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                          ringyal69@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground block mb-1">Phone</span>
                        <a href="tel:+91 96504 94565" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                          +91 96504 94565
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <span className="text-sm font-semibold text-foreground block mb-2">Response time</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond to inquiries within 2-3 business days. During peak volunteer season (May-September), responses may take slightly longer.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
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
            }} className="lg:col-span-2">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                  <h3 className="mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="text-foreground placeholder:text-muted-foreground" />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email address *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="text-foreground placeholder:text-muted-foreground" />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">What is this about? *</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger id="inquiryType" className="text-foreground">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volunteering">Volunteering opportunities</SelectItem>
                          <SelectItem value="programs">Program information</SelectItem>
                          <SelectItem value="partnership">Partnership or collaboration</SelectItem>
                          <SelectItem value="donation">Donations and support</SelectItem>
                          <SelectItem value="media">Media inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && <p className="text-sm text-destructive">{errors.inquiryType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry (minimum 20 characters)" rows={6} className="text-foreground placeholder:text-muted-foreground resize-none" />
                      {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200">
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
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
                Whether you're interested in volunteering, partnering with us, or simply learning more about our work, we welcome you to be part of this journey.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default ContactPage;