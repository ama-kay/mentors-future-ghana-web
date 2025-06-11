
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
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
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#programs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <a href="#get-involved" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Get Involved
            </a>
            <a href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              News
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Volunteer
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
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
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary">
                Home
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary">
                About Us
              </a>
              <a href="#programs" className="text-sm font-medium text-foreground hover:text-primary">
                Programs
              </a>
              <a href="#get-involved" className="text-sm font-medium text-foreground hover:text-primary">
                Get Involved
              </a>
              <a href="#news" className="text-sm font-medium text-foreground hover:text-primary">
                News
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Volunteer
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
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
