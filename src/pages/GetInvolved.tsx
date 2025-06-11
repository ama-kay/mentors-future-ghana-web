
import React from 'react';
import Navigation from '@/components/Navigation';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GetInvolved />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default GetInvolvedPage;
