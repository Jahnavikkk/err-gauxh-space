import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
function Footer() {
  return <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">ERR GAUXH SPACE</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Nurturing holistic education in the heart of Ladakh's Nubra Valley. We blend traditional wisdom with experiential learning across seven pillars, empowering children to thrive in harmony with their mountain heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-foreground mb-4 block">Quick links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-primary transition-colors duration-200">
                  Our programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-primary transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-sm hover:text-primary transition-colors duration-200">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-semibold text-foreground mb-4 block">Get in touch</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Hunder Village, Nubra Valley, Ladakh 194401</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hello@errgauxh.space" className="hover:text-primary transition-colors duration-200">
                  ringyal69@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/err_gauxh_space?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 ERR GAUXH SPACE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;