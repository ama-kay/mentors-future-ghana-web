
import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;
