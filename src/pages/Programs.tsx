
import React from 'react';
import Navigation from '@/components/Navigation';
import Programs from '@/components/Programs';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Programs />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ProgramsPage;
