
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Trokosi Research Kick Off Meeting with Rutgers University Team",
      excerpt: "",
      date: "July,2025",
      category: "Education",
      // image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: " Inter-Organizational Outing & Get together",
      excerpt: "",
      date: "July 1st 2025",
      category: "Fun",
      image: "/images/mentorsgh10.jpg"

    },
    {
      title: " Proposed MTN Foundation Sponsored Skill Job Training",
      excerpt: "",
      date: "August 2025-December 2027",
      category: "Education",
      // image: "/images/mentorsgh10.jpg"

    },
    {
      title: " Trokosi Research Data Collection/Focus Group Discussion stage.",
      excerpt: "",
      date: "September 2025",
      category: "Education",
      // image: "/images/mentorsgh10.jpg"

    },
    {
      title: " University of Ghana Campus Mental Health Awareness",
      excerpt: "",
      date: "July-August 2025",
      category: "Education / Health",
      // image: "/images/mentorsgh10.jpg"

    },
    {
      title: " Tamale Central Prison Health Screening & Skill Job Training outreach",
      excerpt: "",
      date: "Aug/September 2025",
      category: "Health",
      // image: "/images/mentorsgh10.jpg"

    },{
      title: " Germany Mental Health conference",
      excerpt: "",
      date: "October 2025",
      category: "Education",
      // image: "/images/mentorsgh10.jpg"

    },{
      title: " End of Year Dinner and Awards Night at Peduase Valley Resort Hotel. Aburi-Eastern Region-Ghana",
      excerpt: "",
      date: "December 2025",
      category: "Fun",
      // image: "/images/mentorsgh10.jpg"

    }
  ];
     

  return (
    <section id="news" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest initiatives, success stories, and community impact across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Button size="lg" variant="outline">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default News;
