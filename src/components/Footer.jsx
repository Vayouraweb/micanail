import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { businessInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl text-white">Mica Nail Beauty</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Premium nail care and artistry in Clarence, NY. Where beauty meets artistry.
            </p>
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@mica.nailbeauty</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{businessInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="tel:7164074105" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:info@micanailbeauty.com" className="text-sm hover:text-rose-400 transition-colors duration-200">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span>Mon - Sat:</span>
                <span className="text-gray-400">9:30 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Sunday:</span>
                <span className="text-gray-400">Closed</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 text-rose-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Walk-ins Welcome!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mica Nail Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;