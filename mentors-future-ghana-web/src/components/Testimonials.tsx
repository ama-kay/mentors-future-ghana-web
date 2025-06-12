
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Thanks to Mentors Foundation Ghana, I was able to complete my education and am now a teacher helping other children in my community. They gave me hope when I had none.",
      name: "Akosua Mensah",
      role: "Scholarship Recipient & Teacher",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The healthcare outreach program brought essential medical services to our remote village. Many lives were saved, and we learned valuable health practices that we continue to use.",
      name: "Chief Emmanuel Asante",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Volunteering with Mentors Foundation Ghana has been the most rewarding experience of my life. Seeing the direct impact of our work on communities is truly inspiring.",
      name: "Sarah Johnson",
      role: "International Volunteer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the people whose lives have been transformed by our programs and the 
            volunteers who make our mission possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
