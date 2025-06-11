
import React from 'react';
import Navigation from '@/components/Navigation';
import News from '@/components/News';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <News />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default NewsPage;
