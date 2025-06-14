import React, { useState } from 'react';
import { Heart, Users, Handshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import PaymentModal from './PaymentModal';

const GetInvolved = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  const [volunteerData, setVolunteerData] = useState({ name: '', email: '', message: '' });
  const [partnerData, setPartnerData] = useState({ org: '', contact: '', email: '', message: '' });

  const handleDonateClick = () => {
    if (selectedAmount) {
      setIsPaymentModalOpen(true);
    } else {
      alert('Please select an amount.');
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer:', volunteerData);
    alert('Thank you for volunteering!');
    setVolunteerData({ name: '', email: '', message: '' });
    setShowVolunteerForm(false);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner:', partnerData);
    alert('Thank you for your interest in partnering with us!');
    setPartnerData({ org: '', contact: '', email: '', message: '' });
    setShowPartnerForm(false);
  };

  return (
    <section className="py-16 bg-gray-100" id="get-involved">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Donate */}
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full mx-auto">
                <Heart />
              </div>
              <CardTitle className="text-center mt-2">Donate</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Support our mission with a financial contribution.</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[25, 50, 100, 250].map(amount => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? 'default' : 'outline'}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <Button onClick={handleDonateClick}>
                Donate Now <Heart className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Volunteer */}
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-gray-200 text-primary flex items-center justify-center rounded-full mx-auto">
                <Users />
              </div>
              <CardTitle className="text-center mt-2">Volunteer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Join us in making a difference.</p>
              <Button
                onClick={() => {
                  setShowVolunteerForm(true);
                  setShowPartnerForm(false);
                }}
              >
                Join as Volunteer <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Partner */}
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-gray-200 text-primary flex items-center justify-center rounded-full mx-auto">
                <Handshake />
              </div>
              <CardTitle className="text-center mt-2">Partner with Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Collaborate for greater impact.</p>
              <Button
                onClick={() => {
                  setShowPartnerForm(true);
                  setShowVolunteerForm(false);
                }}
              >
                Partner with Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Form */}
        {showVolunteerForm && (
          <div className="bg-white p-6 rounded shadow mb-10">
            <h3 className="text-xl font-semibold mb-4">Volunteer Form</h3>
            <form onSubmit={handleVolunteerSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={volunteerData.name}
                onChange={e => setVolunteerData({ ...volunteerData, name: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={volunteerData.email}
                onChange={e => setVolunteerData({ ...volunteerData, email: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <textarea
                placeholder="Message"
                value={volunteerData.message}
                onChange={e => setVolunteerData({ ...volunteerData, message: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                rows={4}
                required
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        )}

        {/* Partner Form */}
        {showPartnerForm && (
          <div className="bg-white p-6 rounded shadow mb-10">
            <h3 className="text-xl font-semibold mb-4">Partnership Form</h3>
            <form onSubmit={handlePartnerSubmit}>
              <input
                type="text"
                placeholder="Organization Name"
                value={partnerData.org}
                onChange={e => setPartnerData({ ...partnerData, org: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Contact Person"
                value={partnerData.contact}
                onChange={e => setPartnerData({ ...partnerData, contact: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={partnerData.email}
                onChange={e => setPartnerData({ ...partnerData, email: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <textarea
                placeholder="Message"
                value={partnerData.message}
                onChange={e => setPartnerData({ ...partnerData, message: e.target.value })}
                className="w-full p-2 mb-3 border rounded"
                rows={4}
                required
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        )}

        {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          amount={selectedAmount ? `$${selectedAmount}` : '$0'}
        />
      </div>
    </section>
  );
};

export default GetInvolved;
