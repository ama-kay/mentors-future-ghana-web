
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
    // For now, just log the action
    alert(`This will link to our ${platform} page when connected.`);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Mentors Foundation</span>
                <span className="text-xs text-gray-400">Ghana</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering communities across Ghana through education, healthcare, 
              and sustainable development programs. Together, we're building a brighter future.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="outline" 
                className="p-2 border-gray-600 text-gray-300 hover:text-white hover:bg-primary"
                onClick={() => handleSocialClick('Facebook')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="p-2 border-gray-600 text-gray-300 hover:text-white hover:bg-primary"
                onClick={() => handleSocialClick('Twitter')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="p-2 border-gray-600 text-gray-300 hover:text-white hover:bg-primary"
                onClick={() => handleSocialClick('Instagram')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="p-2 border-gray-600 text-gray-300 hover:text-white hover:bg-primary"
                onClick={() => handleSocialClick('LinkedIn')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  News & Updates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">+233 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">info@mentorsfoundationghana.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mentors Foundation Ghana. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => alert('Privacy Policy page coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of Service page coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => alert('Annual Reports page coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Annual Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
