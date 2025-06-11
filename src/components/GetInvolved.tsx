
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Handshake, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial contribution helps us expand our programs and reach more communities in need.",
      action: "Make a Donation",
      highlight: true
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in your local community.",
      action: "Join as Volunteer",
      highlight: false
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Collaborate with us as a corporate partner or organization to amplify our collective impact.",
      action: "Explore Partnerships",
      highlight: false
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can join us in our mission to transform communities across Ghana. 
            Every contribution, big or small, makes a meaningful difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className={`text-center border-none shadow-lg ${way.highlight ? 'ring-2 ring-primary' : ''}`}>
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
                >
                  {way.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Make a Difference Today</h3>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Your donation directly supports our programs and helps us reach more communities. 
              Every contribution creates ripples of positive change that last for generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {['$25', '$50', '$100', '$250'].map((amount) => (
                <Button key={amount} variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {amount}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
                Custom Amount
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
