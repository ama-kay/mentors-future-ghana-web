
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleVolunteer = () => {
    scrollToSection('get-involved');
  };

  const handleDonate = () => {
    // For now, scroll to get-involved section where donation info is
    scrollToSection('get-involved');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Mentors Foundation</span>
              <span className="text-xs text-muted-foreground">Ghana</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleVolunteer}>
              Volunteer
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleDonate}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('get-involved')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                Get Involved
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" onClick={handleVolunteer}>
                  Volunteer
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleDonate}>
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
