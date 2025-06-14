
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Founder</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rev. Bernard Ofori-Attah, Founder & CEO of Mentors Foundation Ghana and sister organizations is a multi- award
             winning Philanthropist and One of few vibrant and dedicated young Ministers of God impacting lives practically with
              the word of God in Ghana and Africa.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">His Story</h3>
            <p className="text-muted-foreground mb-4">
                      His organization has many Health Professionals such as Doctors, Nurses, Pharmacists, Midwives etc. including Social Work Professionals and Researchers. The organization’s 2025 Project is being partnered by Ghana Prisons Service, University of Ghana, 
                      Bel Aqua Mineral Water Company, Big Bite Restaurant etc.
          As part of his vision for 2025 is to partner with any African Country on Mental Health Awareness, Health Screenings, Youth Entrepreneurship Skill Job Trainings and Conferences. Currently, five(5)NGOs from five African countries have sent proposals for partnership.
          In the last 3 years, he’s served as Official Brand Ambassador of African Law Students Association-ALSA.

            </p>
            <p className="text-muted-foreground mb-6">
              Through our comprehensive programs in education, healthcare, economic empowerment, and 
              environmental sustainability, we work hand-in-hand with local communities to address 
              their most pressing challenges and build brighter futures.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Community members working together"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
