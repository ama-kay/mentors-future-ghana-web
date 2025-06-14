import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Handshake, ArrowRight } from 'lucide-react';
import PaymentModal from './PaymentModal';

const GetInvolved: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [volunteerInfo, setVolunteerInfo] = useState({ name: '', email: '', message: '' });
  const [partnerInfo, setPartnerInfo] = useState({ organization: '', contactName: '', email: '', message: '' });
  const [isVolunteerFormVisible, setIsVolunteerFormVisible] = useState(false);
  const [isPartnerFormVisible, setIsPartnerFormVisible] = useState(false);

  const handleDonate = () => {
    if (selectedAmount) {
      setIsPaymentModalOpen(true);
    } else {
      alert('Please select a donation amount first.');
    }
  };

  const handleCustomAmount = () => {
    alert("Custom amount functionality not implemented yet.");
  };

  const handleVolunteerToggle = () => {
    setIsVolunteerFormVisible(!isVolunteerFormVisible);
    if (isPartnerFormVisible) setIsPartnerFormVisible(false);
  };

  const handlePartnershipToggle = () => {
    setIsPartnerFormVisible(!isPartnerFormVisible);
    if (isVolunteerFormVisible) setIsVolunteerFormVisible(false);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer Info:', volunteerInfo);
    alert('Thank you for volunteering! We will be in touch.');
    setVolunteerInfo({ name: '', email: '', message: '' });
    setIsVolunteerFormVisible(false);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership Info:', partnerInfo);
    alert('Thank you for your interest in partnering with us! We will be in touch.');
    setPartnerInfo({ organization: '', contactName: '', email: '', message: '' });
    setIsPartnerFormVisible(false);
  };

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial contribution helps us expand our programs and reach more communities in need.",
      action: "Make a Donation",
      highlight: true,
      onClick: handleDonate
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in your local community.",
      action: "Join as Volunteer",
      highlight: true,
      onClick: handleVolunteerToggle
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Collaborate with us as a corporate partner or organization to amplify our collective impact.",
      action: "Partner With Us",
      highlight: true,
      onClick: handlePartnershipToggle
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can join us in our mission to transform communities across Ghana. 
            Every contribution, big or small, makes a meaningful difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className={`text-center border-none shadow-lg hover:shadow-xl transition-shadow ${way.highlight ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  way.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  <way.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{way.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{way.description}</p>
                <Button 
                  className={way.highlight ? 'bg-primary hover:bg-primary/90 w-full' : 'w-full'} 
                  variant={way.highlight ? 'default' : 'outline'}
                  onClick={way.onClick}
                >
                  {way.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 animate-scale-in">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">Make a Difference Today</h3>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Your donation directly supports our programs and helps us reach more communities. 
              Every contribution creates ripples of positive change that last for generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {['$25', '$50', '$100', '$250'].map((amount, index) => (
                <Button 
                  key={amount} 
                  variant={selectedAmount === amount ? "default" : "outline"} 
                  className={`border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 animate-fade-in text-blue-950 ${
                    selectedAmount === amount ? 'bg-primary-foreground text-primary scale-105' : ''
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onClick={() => setSelectedAmount(amount)}
                >
                  {amount}
                </Button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 transition-all duration-300 hover:scale-105"
                onClick={handleCustomAmount}
              >
                Custom Amount
              </Button>
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 transition-all duration-300 hover:scale-105"
                onClick={handleDonate}
              >
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Volunteer Form */}
        {isVolunteerFormVisible && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Volunteer Form</h3>
            <form onSubmit={handleVolunteerSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="volunteer-name">Name</label>
                <input
                  type="text"
                  id="volunteer-name"
                  value={volunteerInfo.name}
                  onChange={(e) => setVolunteerInfo({ ...volunteerInfo, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="volunteer-email">Email</label>
                <input
                  type="email"
                  id="volunteer-email"
                  value={volunteerInfo.email}
                  onChange={(e) => setVolunteerInfo({ ...volunteerInfo, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="volunteer-message">Message</label>
                <textarea
                  id="volunteer-message"
                  value={volunteerInfo.message}
                  onChange={(e) => setVolunteerInfo({ ...volunteerInfo, message: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="bg-primary text-white w-full">
                Submit
              </Button>
            </form>
          </div>
        )}

        {/* Partnership Form */}
        {isPartnerFormVisible && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Partnership Form</h3>
            <form onSubmit={handlePartnerSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  value={partnerInfo.organization}
                  onChange={(e) => setPartnerInfo({ ...partnerInfo, organization: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="contact-name">Contact Name</label>
                <input
                  type="text"
                  id="contact-name"
                  value={partnerInfo.contactName}
                  onChange={(e) => setPartnerInfo({ ...partnerInfo, contactName: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="partner-email">Email</label>
                <input
                  type="email"
                  id="partner-email"
                  value={partnerInfo.email}
                  onChange={(e) => setPartnerInfo({ ...partnerInfo, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="partner-message">Message</label>
                <textarea
                  id="partner-message"
                  value={partnerInfo.message}
                  onChange={(e) => setPartnerInfo({ ...partnerInfo, message: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="bg-primary text-white w-full">
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={selectedAmount || '$0'}
      />
    </section>
  );
};

export default GetInvolved;