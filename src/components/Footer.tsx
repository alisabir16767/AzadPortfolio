import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'H-1B Visas',
    'L-1 Visas',
    'O-1 Visas',
    'TN Visas',
    'E-2 Visas',
    'PERM Labor Certification'
  ];

  const resources = [
    'Immigration Blog',
    'Visa Requirements',
    'Processing Times',
    'Fee Schedule',
    'FAQ',
    'Case Status Check'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">
              VisaExpert Pro
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in immigration law. Specializing in employment-based 
              visas with over 10 years of experience and a 95% success rate.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span>+91 7464082141</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span>alisabir167167.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3" />
                <span>Khairatiya, Gopalganj, Bihar , India (841438)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center">
                    {resource}
                    <ExternalLink size={12} className="ml-1" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">Professional Memberships & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>American Immigration Lawyers Association (AILA)</span>
              <span>State Bar Association</span>
              <span>Certified Business Immigration Law</span>
              <span>USCIS Authorized Representative</span>
            </div>
          </div>
        </div>
        

        {/* Social & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 VisaExpert Pro. All rights reserved.
            </p>
            <div className="text-xs text-gray-500 space-x-4">
              <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gray-400">Terms of Service</span>
              <span className="cursor-pointer hover:text-gray-400">Legal Disclaimer</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Disclaimer:</strong> The information on this website is for general information purposes only. 
            Nothing on this site should be taken as legal advice for any individual case or situation. 
            This information is not intended to create, and receipt or viewing does not constitute, 
            an attorney-client relationship.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;