
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Integrity Foundation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Integrity Foundation is dedicated to showcasing stories of success, inspiration, 
              and positive change from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/stories" className="footer-link">Success Stories</Link></li>
              <li><Link to="/impact" className="footer-link">Our Impact</Link></li>
              <li><Link to="/press" className="footer-link">Press</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="footer-link">Donate</Link></li>
              <li><Link to="/volunteer" className="footer-link">Volunteer</Link></li>
              <li><Link to="/partnerships" className="footer-link">Partnerships</Link></li>
              <li><Link to="/events" className="footer-link">Events</Link></li>
              <li><Link to="/newsletter" className="footer-link">Newsletter</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:contact@integrityfoundation.org" className="footer-link">
                  contact@integrityfoundation.org
                </a>
              </li>
              <li className="text-gray-600 text-sm mt-4">
                Integrity Foundation<br />
                123 Integrity Street<br />
                San Francisco, CA 94111
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Integrity Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="footer-link">Terms of Use</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
              <Link to="/sitemap" className="footer-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
