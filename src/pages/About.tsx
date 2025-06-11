
import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            animationDuration: '8s'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Our <span className="text-primary">Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Learn about our journey, mission, and the people behind the positive change in Ghana.
          </p>
        </div>
      </section>

      <About />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;
